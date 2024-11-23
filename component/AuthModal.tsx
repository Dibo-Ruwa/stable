// AuthModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { SignUpModal } from "./signUp-modal/SignUpModal";
import { SignInModal } from "./signIn-modal/SignInModal";

type AuthModalProps = {
  type: "signup" | "signin";
  closeModal: () => void;
  switchModal: (type: "signup" | "signin") => void;
};

const Backdrop = styled(motion.div as any)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div as any)`
  background: #fff;
  padding: 1.5rem 2.5rem;
  border-radius: 30px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px 0px rgba(40, 40, 40, 0.1);
`;

export const AuthModal: React.FC<AuthModalProps> = ({
  type,
  closeModal,
  switchModal,
}) => {
  return (
    <AnimatePresence>
      <Backdrop
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      >
        <ModalContent
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          onClick={(e: any) => e.stopPropagation()}
        >
          {type === "signup" ? (
            <>
              <SignUpModal
                type="signup"
                AuthCloseModal={closeModal}
                switchModal={switchModal}
              />
            </>
          ) : (
            <>
              <SignInModal
                type="signin"
                AuthCloseModal={closeModal}
                switchModal={switchModal}
              />
            </>
          )}
        </ModalContent>
      </Backdrop>
    </AnimatePresence>
  );
};
