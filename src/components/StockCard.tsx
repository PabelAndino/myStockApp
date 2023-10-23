import {View, Text} from 'react-native';

const StockCard = ({stock}: {stock: Stock}) => {
;
  return (
    <View className="flex-col  rounded-2xl border border-sky-500 p-5 mt-5 w-[80vw] ">
      <Text className="text-cyan-100  text-3xl mt-2">{stock?.description}</Text>
      <Text className="text-cyan-500 font-bold mt-2">
        {stock?.displaySymbol}
      </Text>
      <Text className="text-orange-300  mt-2">{stock?.type}</Text>
      <Text className="text-cyan-100 font-bold mt-2">
        Change{' '}
        <Text
          className={`${stock?.change > 0 ? 'text-cyan-10' : 'text-red-500'}`}>
          {stock?.change}
        </Text>
      </Text>
      <Text className="text-cyan-100 font-bold mt-2">
        Percent change{' '}
        <Text
          className={`${
            stock?.percentChange > 0 ? 'text-cyan-10' : 'text-red-500'
          }`}>
          {stock?.percentChange}
        </Text>
      </Text>
      <Text className="text-green-300 text-xl  mt-2">
        Current Price {stock?.currentPrice}
      </Text>
    </View>
  );
};

export default StockCard;
