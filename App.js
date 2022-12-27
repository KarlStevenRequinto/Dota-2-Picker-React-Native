import { StyleSheet, View } from 'react-native';

import LandingPage from './src/main-screen/landing';
export default function App() {
  return (
    <View style={styles.container}>
      <LandingPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
