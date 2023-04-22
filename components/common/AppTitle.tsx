import { Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from '../../hooks';
import LATF_logo from '../../public/LATF_logo.png';

const AppTitle = () => {
  const t = useTranslations();

  return (
    <>
      <Image
        src={LATF_logo}
        height={150}
        alt="LATF Logo"
        style={{ alignSelf: 'center' }}
      />
      <Heading
        textAlign="center"
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="widest"
      >
        {t.appTitle}
      </Heading>
    </>
  );
};

export default AppTitle;
