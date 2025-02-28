"use client";

import React, { useEffect, useId, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaLockOpen } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"; // Import useSession
import { toast } from "sonner";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";
import SocialBtn from "@/components/ui/socialButton/SocialBtn";
import {
  Container,
  FormWrapper,
  Title,
  Socials,
  Divider,
  Form,
  FormControl,
  Footer,
  ErrorMessage,
} from "./signup.styles";
import useForm from "@/hooks/useForm";
import useAuth from "@/hooks/useAuth";
import useReferral from '@/hooks/useReferral';

export type ISignupProps = {
  isModal?: boolean;
};

export type SignupFormState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  referralCode?: string; 
};

const SignUp: React.FC<ISignupProps> = ({ isModal }) => {
  const { data: session } = useSession(); // Access session data
  const router = useRouter();

  const [formResponse, setFormResponse] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const id = useId();
  const { signup, loading, error, modalMessage, modalErrorType, showModal } = useAuth();

  const initialState: SignupFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    referralCode: "",  // Add this
  };

  const [referralError, setReferralError] = useState<string>("");

  // Redirect logged-in users to the home page
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  const handleSubmit = async (formData: SignupFormState) => {
    try {
      setReferralError(""); // Clear previous errors
      
      if (formData.referralCode) {
        const { verifyReferralCode } = useReferral();
        try {
          await verifyReferralCode(formData.referralCode);
        } catch (error: any) {
          setReferralError(error.message);
          return;
        }
      }

      const response = await signup(formData);
      resetForm();
      setFormResponse({
        message: "Account created successfully! Please check your email for verification.",
        type: "success"
      });
      toast.success("Account created successfully!");
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || error.message;
      setFormResponse({
        message: errorMessage,
        type: "error"
      });
      toast.error(errorMessage);
    }
  };

  const { formData, errors, handleChange, resetForm } = useForm(initialState, (formData) => {
    handleSubmit(formData).catch((error) => {
      console.error("Error during form submission:", error);
    });
  });

  const isValid = ["firstName", "lastName", "email", "password"].every(
    (field) => formData[field as keyof Omit<SignupFormState, 'referralCode'>].trim() !== ""
  );

  return (
    <Container $isModal={isModal}>
      <FormWrapper $isModal={isModal}>
        <Title>Sign Up</Title>
        {/* <Socials>
          <SocialBtn
            icon={<FcGoogle />}
            text="Sign Up with Google"
            onPress={() => alert("Google sign up coming soon")}
            disabled
          />
          <SocialBtn
            icon={<RiFacebookCircleFill className="facebook" />}
            text="Sign Up with Facebook"
            onPress={() => alert("Facebook sign up coming soon")}
            disabled
          />
        </Socials> */}
        {/* <Divider /> */}
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(formData);
          }}
        >
          <FormControl>
            <Input
              id={`firstName-${id}`}
              icon={<FaLockOpen />}
              placeHolder="John"
              label="First Name"
              name="firstName"
              type="text"
              fullWidth
              value={formData.firstName}
              onChange={(e) => handleChange(e, "firstName")}
              error={errors.firstName}
            />
            <Input
              id={`lastName-${id}`}
              icon={<FaLockOpen />}
              placeHolder="Doe"
              label="Last Name"
              name="lastName"
              type="text"
              fullWidth
              value={formData.lastName}
              onChange={(e) => handleChange(e, "lastName")}
              error={errors.lastName}
            />
            <Input
              id={`email-${id}`}
              icon={<FaLockOpen />}
              placeHolder="example@email.com"
              label="Email"
              name="email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={(e) => handleChange(e, "email")}
              error={errors.email}
            />
            <Input
              id={`password-${id}`}
              icon={<FaLockOpen />}
              placeHolder="*****"
              label="Password"
              name="password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={(e) => handleChange(e, "password")}
              error={errors.password}
            />
            <Input
              id={`referralCode-${id}`}
              icon={<FaLockOpen />}
              placeHolder="Enter referral code (optional)"
              label="Referral Code"
              name="referralCode"
              type="text"
              fullWidth
              value={formData.referralCode}
              onChange={(e) => {
                handleChange(e, "referralCode");
                setReferralError(""); // Clear error when user types
              }}
              error={referralError || errors.referralCode}
            />
          </FormControl>

          {(showModal || formResponse) && (
            <ErrorMessage $type={formResponse?.type} style={{marginTop: "10px"}}>
              {modalMessage || formResponse?.message}
            </ErrorMessage>
          )}

          <Button
            text={loading ? "Creating Account..." : "Create Account"}
            type="submit"
            fullWidth
            disabled={!isValid || loading}
            loading={loading}
          />
        </Form>

        <Footer >
          <p>
            Already have an account? <Link href="/sign-in">Sign In</Link>
          </p>
        </Footer>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
