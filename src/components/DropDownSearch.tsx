import React, {Dispatch, SetStateAction, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SearchIcon} from 'native-base';
import {GetQuote, Search} from '../queries/Queries';
import useGlobalStore from '../store';

const DropDownSearch = () => {
  const itemList = [
    {
      currency: 'USD',
      description: 'AMPER SA',
      displaySymbol: 'APMRF',
      figi: 'BBG000BXR8K5',
      isin: null,
      mic: 'OOTC',
      shareClassFIGI: 'BBG001S5XKT3',
      symbol: 'APMRF',
      symbol2: '',
      type: 'Common Stock',
    },
    {
      currency: 'USD',
      description: 'EXCEED CO LTD',
      displaySymbol: 'EDSFF',
      figi: 'BBG000TWNM94',
      isin: null,
      mic: 'OOTC',
      shareClassFIGI: 'BBG001T0N704',
      symbol: 'EDSFF',
      symbol2: '',
      type: 'Common Stock',
    },
    {
      currency: 'USD',
      description: 'SOBR SAFE INC',
      displaySymbol: 'SOBR',
      figi: 'BBG000P42ZM9',
      isin: null,
      mic: 'XNAS',
      shareClassFIGI: 'BBG001SQWNQ5',
      symbol: 'SOBR',
      symbol2: '',
      type: 'Common Stock',
    },
    {
      currency: 'USD',
      description: 'FORESIGHT AUTONOMOUS-SP ADR',
      displaySymbol: 'FRSX',
      figi: 'BBG00GXL7WB1',
      isin: null,
      mic: 'XNAS',
      shareClassFIGI: 'BBG00GXL7X10',
      symbol: 'FRSX',
      symbol2: '',
      type: 'ADR',
    },
    {
      currency: 'USD',
      description: 'THANACHART CAPITAL-UNSP ADR',
      displaySymbol: 'THNUY',
      figi: 'BBG003P0CFB6',
      isin: null,
      mic: 'OOTC',
      shareClassFIGI: 'BBG003P0CG24',
      symbol: 'THNUY',
      symbol2: '',
      type: 'ADR',
    },
    {
      currency: 'USD',
      description: 'OCEANIC WIND ENERGY INC',
      displaySymbol: 'NKWFF',
      figi: 'BBG000G0LRV4',
      isin: null,
      mic: 'OOTC',
      shareClassFIGI: 'BBG001S5Y5F0',
      symbol: 'NKWFF',
      symbol2: '',
      type: 'Common Stock',
    },
    {
      currency: 'USD',
      description: 'INNOVATION PHARMACEUTICALS I',
      displaySymbol: 'IPIX',
      figi: 'BBG000BF2Q94',
      isin: null,
      mic: 'OOTC',
      shareClassFIGI: 'BBG001S8STW0',
      symbol: 'IPIX',
      symbol2: '',
      type: 'Common Stock',
    },
    {
      currency: 'USD',
      description: 'KOPPERS HOLDINGS INC',
      displaySymbol: 'KOP',
      figi: 'BBG000QDQR59',
      isin: null,
      mic: 'XNYS',
      shareClassFIGI: 'BBG001SMPFZ9',
      symbol: 'KOP',
      symbol2: '',
      type: 'Common Stock',
    },
  ];

  const {setSelectedStock, selectedStock} = useGlobalStore();
  const description = 'Search a stock';
  const [content, setContent] = useState(itemList);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const searchRef = useRef();

  const onSearch = async (text: string) => {
    if (text !== '') {
      let stockResponse = await Search({param: text});
      setContent(stockResponse.result);
    } else {
      setContent(itemList);
    }
  };

  const setStock = async (stock: Stock) => {
    let pricesResponse = await GetQuote({param: stock.symbol});
    const {c, d, dp} = pricesResponse;
    const stockResponse = {
      ...stock,
      currentPrice: c,
      change: d,
      percentChange: dp,
    };
    setSelectedStock(stockResponse);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsClicked(!isClicked)}>
        <View className="flex-row justify-between items-center border border-cyan-100 ml-3 rounded-xl mt-[12] w-[52vw]">
          <Text className="text-cyan-100 p-2">
            {selectedStock.length
              ? selectedStock[0].description
              : `${description}`}
          </Text>
          <SearchIcon size={25} style={{right: 12, color: '#b6dce1'}} />
        </View>
      </TouchableWithoutFeedback>
      {isClicked ? (
        <View className="bg-gray-800 p-4 mt-2 rounded-2xl w-[70vw] h-[30vh] shadow-sm shadow-opacity-100 shadow-cyan-600 shadow-elevation-5">
          <View className="bg-gray-700 rounded-2xl mb-4 p-2  ">
            <TextInput
              autoCapitalize="none"
              ref={searchRef}
              placeholder="Search a Stock"
              placeholderTextColor="#a1c2c7"
              className={'text-base text-left ml-1 text-cyan-100'}
              onChangeText={txt => onSearch(txt)}
            />
          </View>

          <View className={'absolute top-5 right-5 '}>
            <TouchableOpacity>
              <SearchIcon className="w-[25] h-[25] rounded-full" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={content}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  className={'pb-4 mx-2 pt-4 border-b border-[#efebfe]'}
                  onPress={() => {
                    setStock(item);
                    onSearch('');
                    setIsClicked(!isClicked);
                    searchRef.current.clear();
                  }}>
                  <Text className={'text-left text-cyan-100'}>
                    {item.description}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </>
  );
};

export default DropDownSearch;
