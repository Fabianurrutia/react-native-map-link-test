import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import {colorsPopup, icons} from '../../constants';

const PopupItem = ({
  item,
  style: {
    itemContainer: styleItemContainer,
    image: styleImage,
    itemText: styleItemText,
  },
  onAppPressed,
  titles,
}: {
  item: string;
  style: {
    itemContainer?: ViewStyle;
    image?: ImageStyle;
    itemText?: TextStyle;
  };
  onAppPressed: (app: string) => void;
  titles: Record<string, string>;
}) => {
  return (
    <TouchableOpacity
      key={item}
      style={[styles.itemContainer, styleItemContainer]}
      onPress={() => onAppPressed(item)}>
      <View>
        <Image style={[styles.image, styleImage]} source={icons[item]} />
      </View>
      <Text style={[styles.itemText, styleItemText]}>{titles[item]}</Text>
    </TouchableOpacity>
  );
};

export default PopupItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colorsPopup.black,
    marginLeft: 15,
  },
});
