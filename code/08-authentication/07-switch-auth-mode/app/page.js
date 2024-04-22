import AuthForm from '@/components/auth-form';

export default async function Home({ searchParams }) {
  const formMode = searchParams.mode || 'login';
  return <AuthForm mode={formMode} />;
}
