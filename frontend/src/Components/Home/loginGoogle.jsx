import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout,useGoogleLogin  } from 'react-google-login';
import { gapi } from 'gapi-script';
import jwt_decode from 'jwt-decode';
import { loginUserGoogle } from '../../redux/apiRequest';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function LoginGoogle() {
    const [ profile, setProfile ] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const CLIENT_ID = '178860969893-m726q8go7k6nl1epovjjth10u53ro2cg.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyBj-HSJ0OnfhPRlRXJ0UDMkNUXeT_tzPZc';
    const SCOPES = 'profile email https://www.googleapis.com/auth/calendar.readonly';
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    const handleCallbackRes=(res)=>{
        var userObj = jwt_decode(res.credential);
        console.log(userObj);
        loginUserGoogle(dispatch,navigate,userObj)
    }
    // useEffect(() => {
    //     const initClient = () => {
    //         gapi.auth2.init({
    //             client_id: CLIENT_ID,
    //             scope: SCOPES,
    //             ux_mode: 'redirect',
    //             redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port?':'+window.location.port:''}/dashboard`,
    //           }).then(()=>{
    //             gapi.client.init({
    //                 clientId: CLIENT_ID,
    //                 scope: ''
    //           }).then(() => {
    //             console.log("client inited");
    //           }).catch((err) => {
    //             console.error("error initing client", err);
    //           }).catch((err) => {
    //             console.error("error auth2 client", err);
    //           });
          
    //         });
    //      };
    //      gapi.load('client:auth2', initClient);
    //  });
    // useEffect(() => {
    //     const initClient = () => {
    //         gapi.auth2.init({
    //             client_id: CLIENT_ID,
    //             scope: ''
    //         });
    //     };
    //     gapi.load('client:auth2', initClient);
    // });
    //  const onSuccess = (res) => {
    //     console.log("client inited",res);
    //     setProfile(res.profileObj);
    // };

    // const onFailure = (err) => {
    //     console.log('failed', err);
    // };

    // const logOut = () => {
    //     setProfile(null);
    // };
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: CLIENT_ID,
            callback: handleCallbackRes
        });
        google.accounts.id.renderButton(document.getElementById("signInDiv"),{them:"outline",size:"large"})
},[]);
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <div id="signInDiv"></div>
        </div>
    );
}
export default LoginGoogle;