import { useSession } from 'next-auth/react';
import Link from 'next/link';

export function Home() {
  const { data: session } = useSession();
  return (
    <div className='wrapper'>
      <Link href='/'>index</Link>
      <div className='container'>name: {session.user.name}</div>
    </div>
  );
}

export default Home;
