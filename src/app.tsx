import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar animated style="auto" />
      <SafeAreaView>
        <View>
          <Text>123</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
