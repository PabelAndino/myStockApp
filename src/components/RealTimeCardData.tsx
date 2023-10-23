import {Text, View} from 'react-native';
import React from 'react';
import CardRealTimeTitles from './CardRealTimeTitles';
import useGlobalStore from '../store';

const RealTimeCardData = ({p, v, s, t}) => {
  const {realStock} = useGlobalStore();

  let timestamp = t;
  const date = new Date(timestamp);
  const symbols = ['APPL', 'BINANCE:BTCUSDT', 'IC MARKETS:'];
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  const formattedDate = date.toLocaleDateString('es-ES', options);

  return (
    <View className="flex-col  rounded-2xl border border-sky-500 p-5 mt-5  ">
      <Text className="text-cyan-100  text-2xl font-light mt-2">{s}</Text>
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
    </View>
  );
};

export default RealTimeCardData;
