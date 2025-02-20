// SampleScreen.jsx
import React from 'react';
import { View, Text, Button } from 'react-native';

const SampleScreen = () => {
  return (
    <View>
      <Text>Hello from Remote Component!</Text>
      <Button title="Click me" onPress={() => alert('Button clicked!')} />
    </View>
  );
};

export default SampleScreen;
