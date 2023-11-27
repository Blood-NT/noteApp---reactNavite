import { firebase } from "../config/firebase";

const uploadFile = async (fileUrl, fileName) => {
  const res = await fetch(fileUrl);
  const blob = await res.blob();
  // fileName = `avatar-app-chat/${fileName}`;
  let ref = firebase.storage().ref();
  await ref.child(fileName).put(blob);
  const url = await ref.child(fileName).getDownloadURL();
  return url;
};



// upload send image
export const uploadImage = async (fileUrl) => {
  if (!fileUrl) return;
  let fileName = `${Date.now()}.jpg`;
  try {
    fileName = `image/thuytrang/${fileName}`;
    const url = await uploadFile(fileUrl, fileName);
    return url;
  } catch (error) {
    console.log(error);
  }
};
