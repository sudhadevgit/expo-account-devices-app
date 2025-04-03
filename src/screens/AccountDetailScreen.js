import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ACCOUNT_WITH_DEVICES } from '../api/queries';
import DeviceList from '../components/DeviceList';

export default function AccountDetailScreen({ route, navigation }) {
  const { accountId } = route.params;
  const { loading, error, data, refetch } = useQuery(GET_ACCOUNT_WITH_DEVICES, {
    variables: { getAccountId: accountId },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const onDeviceCreated = () => {
    refetch();
  };

  const account = data?.getAccount;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{account.name}</Text>
      <Text style={styles.textfield}>{account.email}</Text>
      
      <Button
        title="Add New Device"
        onPress={() => navigation.navigate('CreateDevice', { accountId, onDeviceCreated })}
      />
      
      <Text style={styles.subtitle}>Devices:</Text>
      <DeviceList devices={account.devices} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textfield: {
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});