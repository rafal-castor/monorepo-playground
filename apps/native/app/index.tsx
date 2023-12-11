import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";
import { sum } from "sdk";

export default function Native() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      <Text style={styles.paragraph}>Sum of 5 and 2 is {sum(5, 2)}</Text>

      <Button
        onPress={() => {
          navigate("home");
        }}
        title="Go to home"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 10,
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
