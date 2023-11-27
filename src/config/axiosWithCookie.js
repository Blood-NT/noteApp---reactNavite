import axios from 'axios';

// Tạo một phiên Axios mới với hỗ trợ cookie
const axiosWithCookie = axios.create({
  withCredentials: true, // Cho phép gửi và nhận cookie
});

export default axiosWithCookie;
