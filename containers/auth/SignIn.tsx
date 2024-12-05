"use client";
import React, { useId, useState, useTransition } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaLockOpen } from "react-icons/fa6";
import { BsShieldCheck, BsShieldExclamation } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { Alert } from "@mantine/core";
import SocialBtn from "@/components/ui/socialButton/SocialBtn";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";
import { 
  Container, 
  Divider, 
  Footer, 
  Form, 
  FormControl, 
  Socials, 
  Title, 
  Wrapper,
  ErrorMessage,
} from "./signin.styles";

export type ISignInProps = {};

const SignIn: React.FC<ISignInProps> = () => {
  const [formResponse, setFormResponse] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);
  const id = useId();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const result = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        if (result?.error) {
          setFormResponse({
            message: result.error,
            type: "error",
          });
          toast.error(result.error);
        } else {
          setFormResponse({
            message: "Signed in successfully!",
            type: "success",
          });
          toast.success("Signed in successfully!");
          router.push("/");
          router.refresh();
        }
      } catch (error) {
        toast.error("An error occurred during sign in");
        setFormResponse({
          message: "An error occurred during sign in",
          type: "error",
        });
      }
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Socials>
          <SocialBtn
            icon={<FcGoogle />}
            text="Login with Google (Coming Soon)"
            onPress={() => {}}
            disabled
          />
          <SocialBtn
            icon={<RiFacebookCircleFill className="facebook" />}
            text="Login with Facebook (Coming Soon)"
            onPress={() => {}}
            disabled
          />
        </Socials>
        <Divider />
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <Input
              id={`email-${id}`}
              type="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
               placeHolder="example@jhon.com"
            />
          </FormControl>
          <FormControl>
            <Input
              id={`password-${id}`}
              type="password"
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              placeHolder="Enter your password"
              showPasswordMeter
            />
            <Link href="/account-recovery">Forgot password?</Link>
          </FormControl>
          {/* {formResponse && (
            <Alert
              variant="light"
              color={formResponse.type === "error" ? "red" : "teal"}
              withCloseButton
              onClose={() => setFormResponse(null)}
              // icon={
              //   formResponse.type === "error" ? (
              //     <BsShieldExclamation />
              //   ) : (
              //     <BsShieldCheck />
              //   )
              // }
            >
              {formResponse.message}
            </Alert>
          )} */}

          {formResponse && (
            <ErrorMessage $type={formResponse?.type}>
              {formResponse?.message || "Please try again"}
            </ErrorMessage>
          )}
          <Button
            text={isPending ? "Signing In..." : "Sign In"}
            type="submit"
            fullWidth
            disabled={isPending}
            loading={isPending}
            color="var(--green-bg)"
        
          />
        </Form>
        <Footer>
          <p>
            Don't have an account?
            <Link href="/sign-up">Sign up</Link>
          </p>
          <Link href="/account-recovery">Forgot Password?</Link>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
