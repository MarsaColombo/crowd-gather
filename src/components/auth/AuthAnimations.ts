// src/components/auth/useAuthAnimations.ts
import { useEffect } from "react";

interface AuthAnimationProps {
  headerId?: string;
  formId?: string;
}

const useAuthAnimations = ({
  headerId = "auth-text",
  formId = "auth-form",
}: AuthAnimationProps = {}) => {
  useEffect(() => {
    // Apply animation classes after component mounts
    const headerElement = document.getElementById(headerId);
    const formElement = document.getElementById(formId);

    if (headerElement) headerElement.classList.add("animation-fade-in");
    if (formElement) {
      setTimeout(() => {
        formElement.classList.add("animation-slide-up");
      }, 300);
    }
  }, [headerId, formId]);
};

export default useAuthAnimations;
