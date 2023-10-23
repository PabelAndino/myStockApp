import {SafeAreaView, Text, View} from 'react-native';
import HeaderSearch from '../components/HeaderSearch';
import StockCard from '../components/StockCard';
import useGlobalStore from '../store';

const HomeScreen = () => {
  const {selectedStock} = useGlobalStore();
  const stock = selectedStock[0];
  return (
    <SafeAreaView className="flex-1 bg-gray-900 flex-col items-center">
      <HeaderSearch />
      <StockCard stock={stock} />
    </SafeAreaView>
  );
};

export default HomeScreen;
