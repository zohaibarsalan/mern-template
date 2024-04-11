import React from 'react';
import { Button, Flex, Text } from '@radix-ui/themes';
import Counter from './Components/Counter.jsx';

const App = () => {
  return (
    <>
      <Flex direction="column" gap="0">
        <Text>App</Text>
      </Flex>
      <Button variant="soft" color="black">
        Lets Go
      </Button>
      <Counter />
    </>
  );
};

export default App;
