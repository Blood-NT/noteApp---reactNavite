// HeaderButton.js
import React from 'react';
import { View ,Text} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const RightMenu = ({ onPress }) => {
  return (
    <HeaderButtons>
      <Item title="Options" iconName="ios-options" onPress={onPress} />
      <View>
        <Text>RightMenu</Text>
      </View>
    </HeaderButtons>
  );
};
export default RightMenu;

