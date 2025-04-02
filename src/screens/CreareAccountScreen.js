import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useMutation } from '@apollo/client';
import { CREATE_ACCOUNT } from '../api/queries';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function CreateAccountScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const route = useRoute();
  const { onAccountCreated  } = route.params;
  const [createAccount, { loading, error }] = useMutation(CREATE_ACCOUNT);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const { data } = await createAccount({
        variables: {
            name,
            email,
        },
      });
      if (onAccountCreated) {
        onAccountCreated();
      }
      navigation.goBack();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        loading={loading}
        disabled={loading}
        style={styles.button}
      >
        Create Account
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