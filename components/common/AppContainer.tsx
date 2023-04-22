import { Center, Container } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import AppHeader from './AppHeader';
import LATF_logo from '../../public/LATF_logo.png';

interface Props {
  children: ReactNode;
  isQuizPage?: boolean;
}

const AppContainer = (props: Props) => {
  const { children, isQuizPage = false } = props;

  return (
    <Container centerContent>
      <AppHeader isQuizPage={isQuizPage} />
      <Center minH="100vh" maxW="md" minW="xs" p="4" flexDirection={'column'}>
        {children}
      </Center>
    </Container>
  );
};

export default AppContainer;
