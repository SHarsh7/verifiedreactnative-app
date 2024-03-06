import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormComponent from 'webpack2';

export default function App() {
  const handleSubmit = (formData) => {
    console.log('Submitted Data:', formData);
    // Add your submission logic here
  };
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <FormComponent onSubmit={handleSubmit}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
