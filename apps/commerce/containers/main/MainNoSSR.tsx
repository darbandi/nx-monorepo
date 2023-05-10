import { Box, Typography } from '@mui/material';
import { UIButton } from '@react-monorepo/ui-core';
import { useAppStore } from 'apps/commerce/store';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';

export const Main: NextPage = () => {
  const { data: session } = useSession();
  const { count, inc } = useAppStore((store) => store);
  const { t } = useTranslation('common');

  return (
    <Box className='container'>
      <Typography component='h3' variant='h3'>
        {t('title')}
      </Typography>
      <pre>{JSON.stringify(session ? session : {}, null, 2)}</pre>
      <UIButton variant='contained' onClick={() => inc()}>
        counter: {count}
      </UIButton>
    </Box>
  );
};

export default Main;
