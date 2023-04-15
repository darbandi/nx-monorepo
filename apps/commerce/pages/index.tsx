import { UIButton } from '@react-monorepo/ui-core'
import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useAppStore } from '../store'

export const Index: NextPage = () => {
  const { data: session, status } = useSession()
  const { count, inc } = useAppStore((store) => store)
  // const { count, inc } = store || {}

  const handleSignOut = () => {
    localStorage.clear()
    signOut({ redirect: false })
  }
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <UIButton variant="contained" onClick={() => inc()}>
            Tesssst {count}
          </UIButton>
        </div>
        <pre>{JSON.stringify(session ? session : {}, null, 2)}</pre>
      </div>
      <Link href="/home">home</Link>
      {' | '}
      {status === 'authenticated' ? (
        <UIButton onClick={handleSignOut}>logout</UIButton>
      ) : (
        <Link href="/auth/login">login</Link>
      )}

      <UIButton onClick={() => signIn()}>signin google</UIButton>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {

//   return {
//     props: {
//     },
//   }
// }

export default Index
