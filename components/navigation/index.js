import { Navigation } from 'react-native-navigation';
import { registerScreens } from './register';
registerScreens();

export function registerApp() {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: "One",
        screen: "Login"
      }
    ],
    passProps: {}
  });

};
