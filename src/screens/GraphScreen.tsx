import {SafeAreaView, Text, View} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import {useState} from 'react';

const GraphScreen = () => {
  const dPoint = () => {
    return (
      <View
        style={{
          width: 14,
          height: 14,
          backgroundColor: 'white',
          borderWidth: 3,
          borderRadius: 7,
          borderColor: '#07BAD1',
        }}
      />
    );
  };
  const latestData = [
    {
      value: 100,
      labelComponent: () => <Text>22 Nov</Text>,
      customDataPoint: dPoint,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 210,
      customDataPoint: dPoint,
    },
    {
      value: 250,
      hideDataPoint: true,
    },
    {
      value: 320,
      labelComponent: () =><Text>24 Nov</Text>,
      customDataPoint: dPoint,
    },
    {
      value: 310,
      hideDataPoint: true,
    },
    {
      value: 270,
      customDataPoint: dPoint,
    },
    {
      value: 240,
      hideDataPoint: true,
    },
    {
      value: 130,
      labelComponent: () =><Text>26 Nov</Text>,
      customDataPoint: dPoint,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
    {
      value: 210,
      hideDataPoint: true,
    },
    {
      value: 270,
      labelComponent: () =><Text>28 Nov</Text>,
      customDataPoint: dPoint,
    },
    {
      value: 240,
      hideDataPoint: true,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
    {
      value: 210,
      labelComponent: () =><Text>28 Nov</Text>,
      customDataPoint: dPoint,
    },
    {
      value: 20,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
  ];
  const [currentData, setCurrentData] = useState(latestData);

  return (
    <SafeAreaView className="flex-1 bg-gray-50 flex-col items-center">
      <View>
        <View
          style={{
            marginVertical: 50,
            paddingVertical: 50,
            backgroundColor: '#545454',
          }}>
          <LineChart
            isAnimated
            thickness={3}
            color="#07BAD1"
            maxValue={600}
            noOfSections={3}
            animateOnDataChange
            animationDuration={1000}
            onDataChangeAnimationDuration={300}
            areaChart
            yAxisTextStyle={{color: 'lightgray'}}
            data={currentData}
            hideDataPoints
            startFillColor={'rgb(84,219,234)'}
            endFillColor={'rgb(84,219,234)'}
            startOpacity={0.4}
            endOpacity={0.1}
            spacing={22}
            backgroundColor="#414141"
            rulesColor="gray"
            rulesType="solid"
            initialSpacing={10}
            yAxisColor="lightgray"
            xAxisColor="lightgray"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GraphScreen;
