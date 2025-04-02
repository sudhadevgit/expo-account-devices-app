import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ACCOUNTS } from '../api/queries';
import AccountList from '../components/AccountList';

export default function AccountsScreen({ navigation }) {
  const { loading, error, data, refetch } = useQuery(GET_ACCOUNTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const onAccountCreated = () => {
    refetch();
  };

  return (
    <View style={styles.container}>
      <Button
        title="Create New Account"
        onPress={() => navigation.navigate('CreateAccount', {onAccountCreated})}
      />
      <AccountList 
        accounts={data.getAccounts} 
        onAccountPress={(accountId) => 
          navigation.navigate('AccountDetail', { accountId })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});