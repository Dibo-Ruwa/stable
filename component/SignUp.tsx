"use client";
import useAuth from "@/hooks/useAuth";
import AuthForm, { AuthField } from "./AuthForm";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import NotificationModal from "./NotificationModal";

interface SignUpPageProps {
  isModal?: boolean;
}

const signUpFields: AuthField[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },
];

const SignUp: React.FC<SignUpPageProps> = ({ isModal = false }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    signup,
    loading,
    showModal,
    modalMessage,
    modalErrorType,
    closeModal,
  } = useAuth();
  
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (session && session.user) {
      isModal = false;
      router.push("/dashboard");
    }
  }, [session, router, isModal]);

  // const handleSignIn = async (formData: { [key: string]: string }) => {
  //   console.log("Sign Up", formData);
  //   await signup(formData);
  //   // router.back();
  // };
 

 const handleSignUp = async (formData: { [key: string]: string }) => {
    console.log("Sign Up", formData);
    await signup(formData);
    // router.back();
  };
  const handleInputChange = (name: string, value: string) => {
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }));
  };

  const isFormValid = () => {
    const values = Object.values(formData);
    const hasEmptyFields = values.some((value) => value.trim() === "");
    const passwordsMatch = formData.password === formData.confirmPassword;
    return !hasEmptyFields && passwordsMatch;
  };

  return (
    <div className="">
      <Modal open={isModal} onClose={() => router.back()}>
        <AuthForm
          title="Sign Up"
          fields={signUpFields}
          onSubmit={handleSignUp}
          onInputChange={handleInputChange}
          submitButtonText="Sign Up"
          loading={loading}
          isFormValid={isFormValid()}
        />
      </Modal>
      {showModal && (
        <NotificationModal
          message={modalMessage}
          errorType={modalErrorType}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default SignUp;
