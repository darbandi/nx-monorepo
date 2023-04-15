import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { UiCoreProvider } from '@react-monorepo/ui-core';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps & { Component: { auth: boolean } }) {
  return (
    <>
      <Head>
        <title>Welcome to commerce!</title>
      </Head>
      <main className='app'>
        <SessionProvider session={session}>
          <UiCoreProvider lang='fa' themeMode='dark'>
            {Component.auth ? (
              <Auth>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )}
          </UiCoreProvider>
        </SessionProvider>
      </main>
    </>
  );
}

export default CustomApp;

function Auth({ children }: { children: ReactElement }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/auth/login');
    },
  });

  if (status === 'loading') {
    return <div>Page Loading...</div>;
  }

  return children;
}
