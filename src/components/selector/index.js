import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { styles } from './style';
import { Color } from '../../color/Color';






export const Selector = ({ setFunc, data, placeholder }) => {
 
  return (
    <SelectDropdown 
      data={data}
      onSelect={(selectedItem, index) => setFunc(selectedItem)}
      buttonTextAfterSelection={(selectedItem, index) => selectedItem}
      rowTextForSelection={(item, index) => item}
      buttonStyle={styles.input}
      defaultButtonText={placeholder}
      buttonTextStyle={{
        fontSize: 14,
        color: Color.gray,
        marginLeft: wp(-30)
      }}
      dropdownStyle={{
        borderRadius: 8
      }}
    />
  );
};
