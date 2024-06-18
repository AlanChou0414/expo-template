import { SafeAreaView, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function App() {
  return (
    <SafeAreaView>
      <View style={tw`p-1`}>
        <Text>123</Text>
      </View>
    </SafeAreaView>
  );
}
