import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderSearch from '../components/HeaderSearch';
import StockCard from '../components/StockCard';
import useGlobalStore from '../store';
import RealTimeCardData from '../components/RealTimeCardData';
import {useState} from 'react';

const WatchListScreen = () => {
  const initValues = [
    {
      s: 'BINANCE:BTCUSDT',
      p: 7296.89,
      t: 1575526691134,
      v: 0.011467,
    },
  ];

  const {setRealStocks, realStock} = useGlobalStore();
  const [stocks, setStocks] = useState(initValues);
  const socket = new WebSocket(
    'wss://ws.finnhub.io?token=ckqlfahr01quf3km4iigckqlfahr01quf3km4ij0',
  );

  // Connection opened -> Subscribe
  socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({type: 'subscribe', symbol: 'AAPL'}));
    socket.send(JSON.stringify({type: 'subscribe', symbol: 'BINANCE:BTCUSDT'}));
    socket.send(JSON.stringify({type: 'subscribe', symbol: 'IC MARKETS:1'}));
  });

  // Listen for messages

  const closeConnection = () => {
    socket.send(JSON.stringify({type: 'unsubscribe', symbol: 'AAPL'}));
    socket.send(
      JSON.stringify({type: 'unsubscribe', symbol: 'BINANCE:BTCUSDT'}),
    );
    socket.send(JSON.stringify({type: 'unsubscribe', symbol: 'IC MARKETS:1'}));
  };
  return (
    <SafeAreaView className="flex-1 bg-gray-900 flex-col items-center">
      <TouchableOpacity className="bg-blue-200 mt-2 p-2 rounded-xl" onPress={closeConnection}>
        <Text>Stop Fetching</Text>
      </TouchableOpacity>
      <ScrollView >
        {socket.addEventListener('message', function (event) {
          const response = JSON.parse(event.data);
          setStocks(response?.data);
        })}
        {stocks?.map(({s, p, v, t}, i) => (
          <RealTimeCardData key={i} t={t} p={p} v={v} s={s} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WatchListScreen;
