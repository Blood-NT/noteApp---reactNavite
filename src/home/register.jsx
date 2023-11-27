import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { Register } from '../api/userAPI';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('');
  const handleRegister = async () => {
    console.log("click register");
    // kiểm tra các ô input
    if (!username) {
      setUsername('');
      return;
    }
    //usename không được chứa ký tự đặc biệt
  

    if (!password) {
      console.log("password");
      setPassword('');
      return;
    }
    if (!email) {
      console.log("email");
      setEmail('');
      return;
    }
    // mật khẩu chỉ được số hoặc chữ cái và mật khẩu tối thiểu là 6 ký tự, tối đa 30 ký tự
    if (password.length < 6 || password.length > 30) {
      setPassword('');
      console.log("password length");
      return;
    }
    // mật khẩu chỉ được số hoặc chữ cái
  
    // email phải có @ và .
    if (!email.includes('@') || !email.includes('.')) {
      console.log("email2");
      setEmail('');
      return;
    }



    // neeus maatj khaaur vaf nhaapj laij khoong trungf nhau thif thongg baoos
    if (password != rePassword) {
      console.log("password3");
      setRePassword('');
      // thông báo 2 mật khẩu phải trùng nhau
      return;
    }
    console.log("SentData");
    const res = await Register(username, password, email);
    console.log("click register done", res);
    // Xử lý đăng nhập ở đây (kiểm tra tên người dùng và mật khẩu, gọi API, vv.)
    // Nếu đăng nhập thành công, lưu trạng thái đăng nhập
    await SecureStore.setItemAsync('isLoggedIn', 'true');
    // Chuyển đến trang Home
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập lại mật khẩu"
        value={rePassword}
        onChangeText={setRePassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Đăng ký</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.forgotPasswordButtonText}>Quay lại đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  registerButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  forgotPasswordButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});