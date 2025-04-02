import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useMutation } from '@apollo/client';
import { CREATE_DEVICE } from '../api/queries';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function CreateDeviceScreen() {
  const route = useRoute();
  const { accountId, onDeviceCreated  } = route.params;
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [createDevice, { loading, error }] = useMutation(CREATE_DEVICE);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const { data } = await createDevice({
        variables: {
          input: {
            name,
            type,
            accountId,
            status: 'ACTIVE',
          },
        },
      });
      console.log("Created device is", data);
      if (onDeviceCreated) {
        onDeviceCreated(); // Call the function to refresh data on the parent screen
      }
      navigation.goBack();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Device Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Device Type"
        value={type}
        onChangeText={setType}
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        loading={loading}
        disabled={loading}
        style={styles.button}
      >
        Create Device
      </Button>
      {error && <Text style={styles.error}>Error: {error.message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  error: {
    color: 'red',
    marginTop: 16,
  },
});