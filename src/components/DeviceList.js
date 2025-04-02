import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

export default function DeviceList({ devices }) {
  console.log("Devices are", devices)
  return (
    <FlatList
      data={devices}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>Type: {item.type}</Text>
          <Text>Status: {item.status}</Text>
        </View>
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