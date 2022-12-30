import Head from 'next/head'
import { useEffect } from 'react'
import Appbar from '../components/system/Appbar'
import Background from '../components/system/Background'
import Content from '../components/system/Content'
import Controls from '../components/system/Controls'
import { auth } from '../firebase'
import { UserHelper } from '../models/user/user'
import { useAppDispatch } from '../redux/hooks'
import UserActionHerlper from '../redux/user/action'

export default function Home() {
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (authState) => {
      dispatch(UserActionHerlper.setIsLoading(true));
      await dispatch(UserActionHerlper.setUser(UserHelper.convertFirebaseAuthToUser(authState)));
      dispatch(UserActionHerlper.setIsLoading(false));
    });
  }, [dispatch]);
  
  return (
    <>
      <Head>
        <title>Time Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={'flex flex-col w-[80%] xl:w-[60%] m-auto flex-1 overflow-auto box-border'}>
        <Background />
        <Appbar />
        <Content />
        <Controls />
      </div>
    </>
  )
}
