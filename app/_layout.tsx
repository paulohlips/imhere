import { StatusBar } from 'react-native';
import { Home } from './screens/home'
export default function RootLayout() {

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#414141'}
        translucent
      />
      <Home />
    </>
  );
}
