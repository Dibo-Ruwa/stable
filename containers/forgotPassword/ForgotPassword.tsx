"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import NotificationModal from "@/component/NotificationModal";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";
import Loader from "@/app/loading";
import useAuth from "@/hooks/useAuth";
import useForm from "@/hooks/useForm";
import { 
  Container, 
  Wrapper, 
  Title, 
  Form, 
  FormControl, 
  Footer, 
  ErrorMessage 
} from "./style";

const ForgotPassword = () => {
  const router = useRouter();
  const [formResponse, setFormResponse] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const {
    forgotPassword,
    loading, // Extract the loading state from useAuth
    showModal,
    modalErrorType,
    modalMessage,
    closeModal,
  } = useAuth();

  const onSubmit = async (formData: { [key: string]: string }) => {
    try {
      await forgotPassword(formData);
      setFormResponse({
        message: "A reset password link has been sent to your email!",
        type: "success",
      });
      toast.success("Check your email for the reset link.");
    } catch (error) {
      setFormResponse({
        message: "An error occurred. Please try again later.",
        type: "error",
      });
      toast.error("An error occurred. Please try again.");
    }
  };

  const { formData, handleChange, handleSubmit } = useForm(
    {
      email: "",
    },
    onSubmit
  );

  return (
    <Container>
      <Wrapper>
        <Title>Forgot Password</Title>
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e, e.target.name)}
              placeHolder="Enter your registered email"
            />
          </FormControl>

          {formResponse && (
            <ErrorMessage $type={formResponse.type}>
              {formResponse.message}
            </ErrorMessage>
          )}

          <Button
            text={loading ? "Submitting..." : "Submit"} // Update button text while loading
            type="submit"
            fullWidth
            color="var(--green-bg)"
            disabled={!formData.email || loading} // Disable button while loading
          />
        </Form>
        <Footer>
          <p>
            Remembered your password?{" "}
            <a onClick={() => router.push("/sign-in")}>Sign In</a>
          </p>
        </Footer>
      </Wrapper>

      {showModal && (
        <NotificationModal
          message={modalMessage}
          errorType={modalErrorType}
          onClose={closeModal}
        />
      )}
    </Container>
  );
};

export default ForgotPassword;
