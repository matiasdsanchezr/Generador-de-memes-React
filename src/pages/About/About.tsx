import React from 'react';
import { Title, Flex, List, Space } from '@mantine/core';

const About = (): JSX.Element => {
  return (
    <Flex w="100%" mih="100%" p="1rem" align="center" justify="center" direction="column">
      <Title order={2} size="h1" align="center">
        Tecnologias utilizadas
      </Title>
      <Space h="2rem" />
      <List size="lg">
        <List.Item>React + Vue</List.Item>
        <List.Item>Typescript</List.Item>
        <List.Item>NPM - Node Package Manager</List.Item>
        <List.Item>Tanstack React Query</List.Item>
        <List.Item>Mantine</List.Item>
        <List.Item>HTML2Canvas</List.Item>
      </List>
    </Flex>
  );
};

export default About;
