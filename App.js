import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client';
import client from './src/api/client';
import AccountsScreen from './src/screens/AccountsScreen';
import AccountDetailScreen from './src/screens/AccountDetailScreen';
import CreateAccountScreen from './src/screens/CreareAccountScreen';
import CreateDeviceScreen from './src/screens/CreateDeviceScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Accounts">
          <Stack.Screen name="Accounts" component={AccountsScreen} />
          <Stack.Screen name="AccountDetail" component={AccountDetailScreen} />
          <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
          <Stack.Screen name="CreateDevice" component={CreateDeviceScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
