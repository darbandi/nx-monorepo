import dynamic from 'next/dynamic';
const MainNoSSR = dynamic(() => import('../containers/main/MainNoSSR'), {
  ssr: false,
});
const MainSSR = dynamic(() => import('../containers/main/MainSSR'), {
  ssr: true,
});

export function Index() {
  return (
    <>
      <MainSSR />
      <MainNoSSR />
    </>
  );
}

export default Index;
