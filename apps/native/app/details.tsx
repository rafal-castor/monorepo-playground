import { View, Text } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { ExampleForm } from "./components/ExampleFrom";

export default function Details() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />
      <Text
        onPress={() => {
          router.setParams({ name: "Updated" });
        }}
      >
        <ExampleForm />
      </Text>
    </View>
  );
}
