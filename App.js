import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-blue-500`}>Howdy 🤠</Text>
    </View>
  );
}
