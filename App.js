import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HeroContainer from "./src/components/hero-container";
import HeroListHeader from "./src/components/hero-list-header";
import DraftedContainer from "./src/components/drafted-container";
import CenterLogo from "./src/components/center-logo";
import SelectedPane from "./src/components/selected-pane";
import LandingPage from "./src/main-screen/landing";
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
