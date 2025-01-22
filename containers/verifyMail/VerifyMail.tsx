"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface VerifyMailProps {
  token: string;
}

const VerifyMail = ({ token }: VerifyMailProps) => {
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`/api/auth/verifyMail/${token}`);
        if (response.status === 200) {
          toast.success("Email verified successfully!");
          setTimeout(() => {
            router.push("/sign-in");
          }, 2000);
        }
      } catch (error: any) {
        setError(error.response?.data?.message || "Verification failed");
        toast.error("Verification failed");
      } finally {
        setIsVerifying(false);
      }
    };

    verifyEmail();
  }, [token, router]);

  return (
    <Container>
      <Card>
        {isVerifying ? (
          <Message>Verifying your email...</Message>
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <SuccessMessage>
            Email verified successfully! Redirecting to sign in...
          </SuccessMessage>
        )}
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Message = styled.p`
  color: #666;
  font-size: 18px;
  margin: 0;
`;

const SuccessMessage = styled(Message)`
  color: #2ecc71;
`;

const ErrorMessage = styled(Message)`
  color: #e74c3c;
`;

export default VerifyMail;
