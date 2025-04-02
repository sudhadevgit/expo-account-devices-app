import React from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function AccountList({ accounts, onAccountPress }) {
  console.log("Accounts are ",accounts)
  return (
    <FlatList
      data={accounts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onAccountPress(item.id)}>
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
});