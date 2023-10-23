const apiKey = 'ckqlfahr01quf3km4iigckqlfahr01quf3km4ij0';
const basePath = 'https://finnhub.io/api/v1';
export const ShowAllStocks = async () => {
  const url = `${basePath}/stock/symbol?exchange=US&token=${apiKey}`;
  const response = await fetch(url).then(data => data.json());
  return response.slice(0, 10);
};

export const Search = async ({param}: {param: string}) => {
  const url = `${basePath}/search?q=${param}&token=${apiKey}`;
  const response = await fetch(url).then(data => data.json());
  return response;
};

export const GetQuote = async ({param}: {param: string}) => {
  const url = `${basePath}/quote?symbol=${param}&token=${apiKey}`;
  const response = await fetch(url).then(data => data.json());
  return response;
};

export const RealTimeData = () => {
  const socket = new WebSocket(
    'wss://ws.finnhub.io?token=ckqlfahr01quf3km4iigckqlfahr01quf3km4ij0',
  );
  socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({type: 'subscribe', symbol: 'AAPL'}));
    socket.send(JSON.stringify({type: 'subscribe', symbol: 'BINANCE:BTCUSDT'}));
    socket.send(JSON.stringify({type: 'subscribe', symbol: 'IC MARKETS:1'}));
  });
};
