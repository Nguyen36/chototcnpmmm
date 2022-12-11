import { axiosClient as axiosF } from "../api";
import axios from "axios";
import {
  loginFalse,
  loginStart,
  loginSuccess,
  registerFalse,
  registerStart,
  registerSuccess,
  logOutStart,
  logOutSuccess,
  logOutFailed,
} from "./authSlice";
import {
  deleteUserFalse,
  deleteUserStart,
  deleteUserSuccess,
  editUserFalse,
  editUserStart,
  editUserSuccess,
  getUsersFalse,
  getUsersStart,
  getUsersSuccess,
} from "./userSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axiosF.post("/login", user);
    localStorage.setItem("userInfo", JSON.stringify(res.data));
    const data = res.data;
    if (data.verify) {
      dispatch(loginSuccess(res.data));
      const role = res.data.role;
      if (role === "3") {
        navigate("/");
      } else if (role === "2") {
        navigate("/");
      } else if (role === "1") {
        navigate("/admin");
      }
    } else {
      navigate("/confirm-email");
    }
  } catch (err) {
    dispatch(loginFalse());
  }
};
export const loginUserGoogle = async (dispatch, navigate, infoGoogle) => {
  dispatch(loginStart());
  try {
    const res = await axiosF.post("/login/auth", infoGoogle);
    console.log(res);
    localStorage.setItem("userInfo", JSON.stringify(res.data));
    dispatch(loginSuccess(res.data));
    const role = res.data.role;
    if (role === "3") {
      navigate("/");
    } else if (role === "2") {
      navigate("/");
    } else if (role === "1") {
      navigate("/admin");
    }
  } catch (err) {
    dispatch(loginFalse());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await axiosF.post("/login/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(registerFalse());
  }
};

export const editUser = async (user, dispatch, navigate, id, accessToken) => {
  dispatch(editUserStart());
  try {
    const res = await axiosF.put(`/user/edit/${id}`, user, {
      headers: { token: `Bearer ${accessToken}` },
    });
    console.log(res);
    dispatch(editUserSuccess(res.data));
    //navigate('/login')
  } catch (err) {
    dispatch(editUserFalse(err.response.data));
  }
};

export const getAllUsers = async (accessToken, dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axiosF.get("/user/all", {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFalse());
  }
};

export const get1 = async (accessToken, dispatch, id) => {
  dispatch(getUsersStart());
  console.log("OK");
  try {
    const res = await axiosF.get(`/user/get/${id}`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    console.log(res);
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    console.error(err);
    dispatch(getUsersFalse());
  }
};

export const deleteUser = async (accessToken, dispatch, id) => {
  dispatch(deleteUserStart());
  try {
    const res = await axiosF.delete("/user/delete/" + id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(deleteUserSuccess(res.data));
  } catch (err) {
    dispatch(deleteUserFalse(err.response.data));
  }
};

export const logOut = (dispatch, id, navigate, accessToken) => {
  dispatch(logOutStart());
  try {
    localStorage.removeItem("userInfo");

    //   await axiosF.post("/login/logout", id, {
    //     headers: { token: `Bearer ${accessToken}` },
    //   });
    dispatch(logOutSuccess());
    navigate("../../");

  } catch (err) {
    console.log(err);
    dispatch(logOutFailed());
  }
};

export const getUser = async (id, dispatch, navigate, accessToken) => {
  try {
    const res = await axiosF.get(`/user/get/${id}`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    //    localStorage.setItem('userInfo',JSON.stringify(res.data))
    const data = res.data;
    console.log(id, accessToken);
    dispatch(loginSuccess(data));
  } catch (err) {
    //    dispatch(loginFalse())
  }
};

// export const getLengthUser = async() =>{

//     try{

//        const  res= await axiosF.get("/user/getLength")
//          return res.data

//     }catch(err){
//       return err
//     }
//  }
