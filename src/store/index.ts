import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface GlobalStorage {
  selectedStock: Stock[];
  realStock: StockRealTimeData[];
  setSelectedStock: (stock: Stock[]) => void;
  setRealStocks: (stock: StockRealTimeData[]) => void;
}

const useGlobalStore = create<GlobalStorage>()(
  persist(
    (set, get) => ({
      selectedStock: [],
      realStock: [],
      setSelectedStock: stock => {
        const updateSelectedStock = [stock];
        set({
          selectedStock: updateSelectedStock,
        });
      },
      setRealStocks: stock => {
        const updateSelectedStock = [stock];
        set({
          realStock: updateSelectedStock,
        });
      },
    }),
    {
      name: 'stock-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useGlobalStore;
