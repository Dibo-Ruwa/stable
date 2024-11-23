"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  FailureContainer,
  SuccessContainer,
} from "./verifyMail.styles";
import Loader from "@/component/ui/loader/Loader";
import { useRouter } from "next/navigation";
import {
  BsFillEnvelopeCheckFill,
  BsFillEnvelopeExclamationFill,
} from "react-icons/bs";
import { useSession } from "next-auth/react";

const SuccessComponent: React.FC = () => {
  return (
    <SuccessContainer>
      <div className="icon">
        <BsFillEnvelopeCheckFill />
      </div>
      <h2>Verification Successful</h2>
      <p>
        Your email has been verified successfully!!!. <br /> you will be
        redirected to the Sign In page shortly
      </p>
    </SuccessContainer>
  );
};

const FailureComponent: React.FC = () => {
  return (
    <FailureContainer>
      <div className="icon">
        <BsFillEnvelopeExclamationFill />{" "}
      </div>
      <h2>Verification Failed</h2>
      <p>There was an issue verifying your email. Please try again.</p>
    </FailureContainer>
  );
};

const VerifyMail = ({ token }: { token: string }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState<
    "success" | "failure" | null
  >(null);

  useEffect(() => {
    if (typeof token === "string") {
      // Make the API call to verify the token
      axios
        .get(`/api/auth/verifyMail/${token}`)
        .then((response) => {
          const success = response.data.success;
          setLoading(false);
          setVerificationStatus(success ? "success" : "failure");

          setTimeout(() => {
            if (session && session.user) {
              router.push("/dashboard");
            } else {
              router.push("/signin");
              
            }

          
          }, 2000);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Verification API error:", error);
          setVerificationStatus("failure");
        });
    } else {
      setLoading(false);
      setVerificationStatus("failure");
    }
  }, [token]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      {verificationStatus === "success" ? (
        <SuccessComponent />
      ) : (
        <FailureComponent />
      )}
    </Container>
  );
};

export default VerifyMail;
