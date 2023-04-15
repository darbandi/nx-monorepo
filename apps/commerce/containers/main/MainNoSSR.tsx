import { Box, Typography } from '@mui/material';
import { UIButton } from '@react-monorepo/ui-core';
import { useAppStore } from 'apps/commerce/store';
import type { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export const Main: NextPage = () => {
  const { data: session, status } = useSession();
  const { count, inc } = useAppStore((store) => store);
  const handleSignOut = () => {
    localStorage.clear();
    signOut({ redirect: false });
  };
  return (
    <Box className='container'>
      <Typography component='h3' variant='h3'>
        Test No SSR
      </Typography>
      <UIButton>
        <Link href='/home'>Home</Link>
      </UIButton>
      {' | '}
      {status === 'authenticated' ? (
        <UIButton onClick={handleSignOut}>logout</UIButton>
      ) : (
        <Link href='/auth/login'>login</Link>
      )}
      <pre>{JSON.stringify(session ? session : {}, null, 2)}</pre>
      <UIButton variant='contained' onClick={() => inc()}>
        counter: {count}
      </UIButton>
    </Box>
  );
};

export default Main;
