import dynamic from 'next/dynamic';

const DynamicLoginForm = dynamic(() => import('@/src/components/Login/Login'), {
  ssr: false,
});

const LoginPage = () => {
  return <DynamicLoginForm />;
};

export default LoginPage;
