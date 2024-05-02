import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/src/store/authStore';
import Head from "next/head";
import DashboardPage from './dashboard';
import LoginPage from './auth/login';
 
export default function Home() {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user === null) {
      router.push('/auth/login');
    }
  }, [user, router]);

  return (
    <>
      <Head>
        <title>Teamlogger User</title>
        <meta name="description" content="Teamlogger User" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {user === null ? <LoginPage /> : <DashboardPage />}
      </main>
    </>
  );
}
