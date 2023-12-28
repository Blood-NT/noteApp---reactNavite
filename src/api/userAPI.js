import axios from "axios";
import { format } from 'date-fns';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ca } from "date-fns/locale";
const userAPI = "http://192.168.2.11:8083/user";



const login = async (id, password) => {
  const body = {
    id: id,
    password: password,
  }
  console.log("check login");
  const res = await axios.post(`${userAPI}/login`, body);
  console.log("check loginnnn",res.data);
    return res.data;
}

const loginByToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    const res = await axios.post(`${userAPI}/user/login-token`, {
      refreshToken: refreshToken,
    });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const Register = async(userName, password,email)=>{
  console.log("start register");
  const data = {
    id:userName,
    password:password,
    email:email
  }
  try
  {
    const res = await axios.post (`${userAPI}/register`,data)
    console.log("register",res.data);
    return res.data;
  }
  catch(error){
    console.log("cheat ",`${error}`);
}
}

// viết hàm xóa user
  
export {
  login,
  loginByToken,
  Register
};
