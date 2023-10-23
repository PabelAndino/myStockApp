interface Stock {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
  currentPrice: number;
  change: number;
  percentChange: number;
}

interface StockRealTimeData {
  s: string;
  p: number;
  t: number;
  v: number;
}
