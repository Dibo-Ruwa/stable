"use client";
import useAuth from "@/hooks/useAuth";
import AuthForm, { AuthField } from "./AuthForm";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import NotificationModal from "./NotificationModal";

interface SignInPageProps {
  isModal?: boolean;
}

const signInFields: AuthField[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: 'Enter your Email'
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password"
  },
];

const SignIn: React.FC<SignInPageProps> = ({ isModal = false }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { signin, loading,  showModal,
    modalMessage,
    modalErrorType,
    closeModal, } = useAuth();
  const handleSignIn = async (formData: { [key: string]: string }) => {
    await signin(formData);
    // router.back();
  };

   useEffect(() => {
    if (session && session.user) {
      isModal = false
      router.push("/dashboard");
    }
  }, [session, router, isModal]);


  return (
    <div className="">
      <Modal open={isModal} onClose={() => router.back()}>
        <AuthForm
          title='Sign In'
          fields={signInFields}
          onSubmit={handleSignIn}
          submitButtonText="Sign In"
          loading={loading}
         
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

export default SignIn;
