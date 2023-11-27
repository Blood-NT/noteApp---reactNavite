import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const {width} = Dimensions.get('screen');

const srcImg = require('../../assets/adaptive-icon.png');
const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={srcImg} style={{height: 140}}>
        <Image source={srcImg} style={styles.userImg} />


      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: "#FFFFFF",
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});
