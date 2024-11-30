"use client";
import React from "react";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AuthButton } from "../shared/Button";

import styles from "./signInModal.module.css";

import useAuth from "@/hooks/useAuth";
import AuthForm, { AuthField } from "../AuthForm";
import Modal from "../Modal";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import NotificationModal from "../NotificationModal";
import Link from "next/link";

type AuthModalProps = {
  type: "signin";
  AuthCloseModal: () => void;
  switchModal: (type: "signup" | "signin") => void;
  isModal?: boolean;
};

const signInFields: AuthField[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your Email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

export const SignInModal: React.FC<AuthModalProps> = ({
  type,
  AuthCloseModal,
  switchModal,
  isModal = false,
}) => {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    signin,
    loading,
    showModal,
    modalMessage,
    modalErrorType,
    closeModal,
  } = useAuth();
  const handleSignIn = async (formData: { [key: string]: string }) => {
    console.log('clicked')
    await signin(formData);
    // router.back();
  };

  useEffect(() => {
    if (session && session.user) {
      isModal = false;
      router.push("/dashboard");
    }
  }, [session, router, isModal]);

  return (
    <div className={styles.SignUp_container}>
      <h2 className={styles.SignUp_Title}>Sign In</h2>
        <div className={styles.AuthButtons}>
          <AuthButton
            className={styles.Auth_Button}
            AuthIcon={styles.Auth_Icon}
            buttonTextClass={styles.buttonText}
            icon={FcGoogle}
            text="Continue with Google"
          />
          <AuthButton
            className={styles.Auth_Button}
            buttonTextClass={styles.buttonText}
            AuthIcon={styles.Auth_Icon}
            FacebookColorClass={styles.Facebook_Color}
            icon={FaFacebook}
            text="Continue with Facebook"
          />
        </div>
        <div className={styles.choice_container}>
          <div className={styles.choice_line}></div>
          <p className={styles.choice_Text}>Or login with</p>
          <div className={styles.choice_line}></div>
        </div>
        <div className="">
          <Modal open={isModal} onClose={() => router.back()}>
            <AuthForm
              fields={signInFields}
              onSubmit={handleSignIn}
              submitButtonText="Continue"
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
        <div className={styles.Auth_Question}>
          <small className={styles.AuthFormSmall}>
            Don&#39;t have an account?
            <span
              className={styles.AuthFormSmall_Sign_InSwitch}
              onClick={() => switchModal && switchModal("signup")}
            >
              Sign up
            </span>
          </small>
          <small className={styles.AuthFormSmall}>
            <Link href="/forgot-password">Forgot Password?</Link>
          </small>
        </div>
    </div>
  );
};
