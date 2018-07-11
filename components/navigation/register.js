import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { store } from '../redux';
import { currentUser } from '../redux/actions';

@connect(null, {currentUser})
class Login extends Component {
  render() {
    console.log('reach', this.props)

    return (
      <Text onPress={() => this.props.currentUser('hello')}>
        Login Page
      </Text>
    );
  }
}

const registerComponent = (name, Component) => (
  Navigation.registerComponent(
    name,
    () => Component,
    store,
    Provider
  )
);


export function registerScreens() {
  registerComponent('Login', Login);
};
