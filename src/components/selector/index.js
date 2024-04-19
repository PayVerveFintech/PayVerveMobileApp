import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { View, Text } from 'react-native';
import {Ionicons, } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { styles } from './style';
import { Color } from '../../color/Color';






export const Selector = ({ setFunc, data, placeholder }) => {
 
  return (
    <SelectDropdown
        data={data}
        onSelect={(selectedItem, index) => {
         setFunc(selectedItem);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.input}>
              <Text>
                {
                  selectedItem? (selectedItem) : (placeholder)
                }

              </Text>
              <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} size={20} />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
              <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.inputss}
  />
  );
};



