export const SampleScreen = () => {
  return (
    <View>
      <Text>Hello from Remote Component!</Text>
      <Button title="Click me" onPress={() => alert('Button clicked!')} />
    </View>
  );
};
