import VerifyMail from "@/containers/verifyMail/VerifyMail";

const page = ({ params }: { params: { token: string } }) => {
  return (
    <div>
      <VerifyMail token={params.token} />
    </div>
  );
};

export default page;
