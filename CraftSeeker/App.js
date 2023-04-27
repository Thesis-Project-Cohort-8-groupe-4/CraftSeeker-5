import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DashBoard from './components/workers/DashBoard/DashBoard';

export default function App() {
  const dummy = ["a", "b", "d", "c", "e", "a", "ez", "aze"];
  const [data, setData] = useState(dummy);

  return (
    <View style={styles.container}>
      <Text>life is shit</Text>
      <StatusBar style="auto" />
      <ScrollView>
      <DashBoard></DashBoard>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 33,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
