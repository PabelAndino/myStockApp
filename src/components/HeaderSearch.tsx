import React from 'react';
import { TextInput, View} from 'react-native';
import DropDownSearch from './DropDownSearch';

const HeaderSearch = () => {
  return (
    <View className="flex-col z-10  items-center rounded-2xl border border-sky-500 p-5 mt-5 w-[80vw] h-[20vh]">
      <TextInput
        placeholderTextColor="#A4C0D2"
        className="text-gray-50 border border-cyan-50 border-opacity-20 p-2  ml-3 rounded-xl w-[52vw] "
        placeholder="Put a price"
      />
      <DropDownSearch />
    </View>
  );
};

export default HeaderSearch;
