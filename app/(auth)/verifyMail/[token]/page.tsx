import VerifyMail from "@/containers/verifyMail/VerifyMail";

interface PageProps {
  params: {
    token: string;
  };
}

async function Page({ params }: PageProps) {
  const token = params.token;
  
  return (
    <div>
      <VerifyMail token={token} />
    </div>
  );
}

export default Page;
