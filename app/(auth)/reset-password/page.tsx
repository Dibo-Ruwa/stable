import { Metadata } from 'next';
import ResetPassword from "@/containers/resetPassword/ResetPassword";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata: Metadata = {
  title: 'Reset Password',
};

export default async function Page({ searchParams }: Props) {
  const token = await Promise.resolve(searchParams.token);

  if (!token || Array.isArray(token)) {
    return <div>Error: Invalid token!</div>;
  }

  return (
    <div>
      <ResetPassword token={token} />
    </div>
  );
}