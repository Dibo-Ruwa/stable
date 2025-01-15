"use client";

import NotificationModal from "@/component/NotificationModal";
import Input from "@/component/ui/input/Input";
import useAuth from "@/hooks/useAuth";
import useForm from "@/hooks/useForm";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@/components/ui/button/Button";
import toast from "react-hot-toast";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
`;

const Form = styled.form`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  text-align: center;

  h3 {
    font-size: 24px;
    margin-bottom: 8px;
    color: var(--primary);
  }

  p {
    font-size: 16px;
    color: #757575;
  }
`;

// const Button = styled.button`
//   padding: 12px;
//   border: none;
//   border-radius: 6px;
//   background-color: var(--primary);
//   color: white;
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: var(--primary-dark);
//   }

//   &:disabled {
//     background-color: #cccccc;
//     cursor: not-allowed;
//   }
// `;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
`;

interface ResetPasswordProps {
  token: string;
}

const ResetPassword = ({ token }: ResetPasswordProps) => {
  const { resetPassword, showModal, modalErrorType, modalMessage, closeModal } =
    useAuth();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const { formData, handleChange, errors, setFormData } = useForm(
    {
      password: "",
      confirmPassword: "",
    },
    () => {}
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/auth/reset-password?token=${token}`);
        const data = await response.json();
        if (data?.email) {
          setFormData((prev) => ({ ...prev, email: data.email }));
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [token, setFormData]);

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== formData.password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (confirmPassword !== formData.password) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }
    setIsLoading(true);
    try {
      await resetPassword({
        email: formData.email,
        password: formData.password,
      });
      toast.success("Password reset successfully");
      router.push("/sign-in");
    } catch (error) {
      toast.error("Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Header>
          <h3>Reset Your Password</h3>
          <p>Please enter and confirm your new password.</p>
        </Header>

        <Input
          label="New Password"
          name="password"
          type="password"
          id="new-password"
          value={formData.password}
          onChange={(e) => handleChange(e, e.target.name)}
          error={errors.password}
          showPasswordToggle
        />

        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          error={confirmPasswordError}
          showPasswordToggle
        />

        {/* <Button type="submit" disabled={isLoading || !!confirmPasswordError}>
          {isLoading ? "Reseting..." : "Reset Password"}
        </Button> */}

        <Button
            text={isLoading ? "Reseting..." : "Reset Password"} 
            type="submit"
            fullWidth
            color="var(--green-bg)"
            disabled={isLoading || !!confirmPasswordError}
          />
      </Form>

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

export default ResetPassword;
