import { Box, Divider, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

export const Main: NextPage = () => {
  return (
    <Box className='container'>
      <Head>
        <meta name='description' content='This is an SSR component rendering' />
      </Head>
      <Typography variant='h3'>This is an SSR component rendering</Typography>
      <Divider />
    </Box>
  );
};

export default Main;
