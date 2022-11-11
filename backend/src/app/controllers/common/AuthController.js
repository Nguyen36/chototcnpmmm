const User = require('../../models/User');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken')
let refreshTokens = [];
class AuthController {

     //  [POSt] /login/register
     async register  (req, res, next){
        const formData= req.body 
        
        const salt = await bcrypt.genSalt(10);
        formData.password = await bcrypt.hash(formData.password, salt);

        const user = new User(formData)

        user.save()
            .then(() => res.status(200).json(user))
            .catch(error => {
                res.status(500).json(error)
                console.log(error)
            })
        
    }
  
    
   //  [POSt] /login
   async login  (req, res){

    const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(404).json("Incorrect username");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(404).json("Incorrect password");
      }
      if (user && validPassword) {
        //Generate access token
        const accessToken = jwt.sign({
                                id: user.id,
                                role: user.role,
                                slug: user.slug,
                              },
                            'access_key',
                            {expiresIn: "1d"}
                            );
        //Generate refresh token
        const refreshToken = jwt.sign({
                              id: user.id,
                              role: user.role,
                              slug: user.slug,
                              },
                              'refresh_key',
                              {expiresIn: "365d"},
                              );
         refreshTokens.push(refreshToken);
        res.cookie('refreshtoken', refreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
      }
   
   
      
 
   
    }
   

    async requestRefreshToken(req, res) {
      //Take refresh token from user
      
      const refreshToken = req.cookies.refreshtoken;
      //Send error if token is not valid
      if (!refreshToken) return res.status(401).json("You're not authenticated");
      if (!refreshTokens.includes(refreshToken)) {
        return res.status(403).json("Refresh token is not valid");
      }
      jwt.verify(refreshToken, 'refresh_key', (err, user) => {
        if (err) {
          console.log(err);
        }
        refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
        //create new access token, refresh token and send to user
        const newAccessToken =jwt.sign({
                                  id: user.id,
                                  role: user.role,
                                  slug: user.slug,
                                },
                              'access_key',
                              {expiresIn: "600s"}
                              )
        const newRefreshToken = jwt.sign({
                                    id: user.id,
                                    role: user.role,
                                    slug: user.slug,
                                 },
                                  'refresh_key',
                                 {expiresIn: "365d"},
                                 )
        refreshTokens.push(newRefreshToken);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure:false,
          path: "/",
          sameSite: "strict", 
        });
        res.status(200).json({
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        });
      });
    }
    
      //LOG OUT
    async logOut (req, res)  {
        //Clear cookies when user logs out
        refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
        res.clearCookie("refreshToken");
        res.status(200).json("Logged out successfully!");
      }


}

module.exports = new  AuthController();