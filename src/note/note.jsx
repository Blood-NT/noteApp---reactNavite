

import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, Button, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, View } from "react-native";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";

import * as ImagePicker from 'expo-image-picker';
import { uploadImage } from "../ultis/uploadFile";
import { useNavigation, useRoute } from "@react-navigation/native";
import { set } from "date-fns";
import { getDataNote, updateNote } from "../api/noteAPI";
import RightMenu from "../components/rightMenu";
import { userContext } from '../context/userContext';
import {notifiContext} from '../context/notifiContext';
const NoteDataScreen = () => {
const {user, setUser} = useContext(userContext);
  // nhaanj route params
  const route = useRoute();
  const navigation = useNavigation();
const {setNotifi} = useContext(notifiContext);
  const { nid, title, color } = route.params;
  const [checkColor, setCheckColor] = useState(color || "white");


  const [text, setText] = useState("kk");
  const richText = React.useRef();


  useEffect(() => {
    const fecthData = async () => {
      const res = await getDataNote(nid);
      console.log("getdatanote", res.data.data);
      setText(res.data.data.content);
    }
    fecthData();
  }, [])


  const handleSave = async() => {

    console.log("saveee", contentHtml);
    const res = await updateNote(nid,user.uid,contentHtml)
    console.log("res",res);
    if(res.statusCode === 200){
      setNotifi(["Đã lưu"]);
      console.log("Đã lưu");
    }
    else{
      setNotifi(["Lưu thất bại"]);
    }
    // setCheckColor("pink");

    // navigation.goBack();
  }
  const handelReload = () => {
    const fecthData = async () => {
      const res = await getDataNote(nid);
      console.log("getdatanote", res.data.data);
      setText(res.data.data.content);
    }
    fecthData();
  }
  const pickpicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (result.assets) {
      console.log("check resus", result.assets[0].uri);
      const urlImage = await uploadImage(result.assets[0].uri);
      console.log("urlImage", urlImage);
      richText.current?.insertImage(urlImage);
    }
  }
  const [contentHtml, setContentHtml] = useState("");
  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} style={styles.button} />
        <Button title="reload" onPress={handelReload} style={styles.button} />
        <Button title="Go Back" onPress={() => navigation.goBack()} style={styles.button} />
      </View>

      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardAvoidingView}>
          <Text style={styles.title}>{title}</Text>
          <RichEditor
            editorStyle={{ backgroundColor: checkColor }}
            initialHeight={700}
            initialContentHTML={text}

            ref={richText}
            onChange={descriptionText => {
              console.log("descriptionText:", descriptionText);
              setContentHtml(descriptionText);
            }}
          />
        </KeyboardAvoidingView>
      </ScrollView>

      <RichToolbar
        style={styles.richToolbar}
        editor={richText}
        actions={[
          actions.undo,
          actions.redo,
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.insertImage,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.keyboard,
        ]}
        iconTint="pink"
        onPressAddImage={pickpicture}
        initialContentHTML={text}
      />


    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  container: {
    flex: 1,
    marginTop: 30,
  },
  scrollView: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },
  richEditor: {
    flex: 1,
  },
  richToolbar: {
    backgroundColor: "blue",
    height: 50,
  },
  button: {
    margin: 10,
  },
});

export default NoteDataScreen;