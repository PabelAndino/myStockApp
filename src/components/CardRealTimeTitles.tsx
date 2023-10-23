import React from 'react';
import {Text, View} from 'react-native';

const CardRealTimeTitles = ({symbol, formattedDate, p, v}) => {
  return (
    <>
      <Text className="text-cyan-100  text-2xl font-light mt-2">{symbol}</Text>
      <Text className="text-cyan-500 font-bold mt-2">{'formattedDate'}</Text>

      <Text className="text-cyan-100 font-bold mt-4">
        Last price:{' '}
        <Text className={`${p > 0 ? 'text-cyan-10' : 'text-red-500'}`}>
          {p}
        </Text>
      </Text>
      <Text className="text-cyan-100 font-bold mt-2">
        Volume{' '}
        <Text className={`${v > 0 ? 'text-cyan-10' : 'text-red-500'}`}>
          {v}
        </Text>
      </Text>
    </>
  );
};

export default CardRealTimeTitles;
