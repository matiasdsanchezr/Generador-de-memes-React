import React from 'react';

import { Title, Space, Flex } from '@mantine/core';

import MemeGenerator from './MemeGenerator';

const Home = (): JSX.Element => {
  return (
    <Flex w="100%" mih="100%" p="1rem" align="center" justify="center" direction="column">
      <Space h="md" />
      <Title order={2} size="h1" align="center">
        Crea tu propio meme
      </Title>
      <MemeGenerator />
    </Flex>
  );
};

export default Home;
