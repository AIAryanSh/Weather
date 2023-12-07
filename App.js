import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { ActivityIndicator } from 'react-native'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItems from './.expo/src/components/ErrorItems'

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//const Tab = createBottomTabNavigator()

const app = () => {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list && !loading ) {
    return (
      <NavigationContainer >
        <Tabs weather={weather} />
      </NavigationContainer >
    )
  }

  return (
      <View style={Styles.conatiner} >
        {error ? (
          <ErrorItems />
          ):(
            <ActivityIndicator
            size={'Large'}
            color={'Blue'} /> )  }
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})
export default app
