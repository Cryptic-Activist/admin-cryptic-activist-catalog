import { FC, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";

// import {
//   Button,
//   Form,
//   InputsContainer,
//   Submit,
//   Input,
//   Required,
// } from "@styles/components/Modals/ModalTemplate";

// import useWarnings from "@hooks/useWarnings";

// import Warnings from "@/components/Warnings/Warnings";
import ModalTemplate from "@/layout/Modals/ModalTemplate";

import { useAdmin, useNavigationBar } from "@/hooks";
import { Input, Submit } from "@/components/Form";

import { ToggleModalParams } from "@/stores/navigationBar/types";
import { Modal } from "./types";

import template from "@/layout/Modals/ModalTemplate/styles.module.scss";

const LoginForm: FC = () => {
  const { admin, loginAdmin } = useAdmin();
  const { handleToggleModal } = useNavigationBar();

  // const { add, reset } = useWarnings();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  // useEffect(() => {
  //   reset();
  // }, []);

  // useEffect(() => {
  //   if (admin.errors.length > 0) {
  //     add(admin.errors[0]);
  //   } else {
  //     reset();
  //   }
  // }, [admin.errors]);

  const checkValidForm = useCallback((): boolean => {
    if (Object.entries(errors).length > 0) {
      // add(errors[0]);
      return false;
    }
    // reset();
    return true;
  }, [errors]);

  const onSubmit = useCallback(
    (data: any): void => {
      console.log({ data });
      clearErrors();
      if (checkValidForm()) {
        loginAdmin(data);
      }
    },
    [clearErrors]
  );

  const handleLoginButtons = (modal: Modal) => {
    handleToggleModal({ modal });
  };

  return (
    <ModalTemplate heading="| Login" type="loginForm" allowClose>
      <form onSubmit={handleSubmit(onSubmit)} className={template.form}>
        <Input
          id="username"
          name="username"
          register={register}
          label="Username"
          required
        />
        <Input
          id="password"
          name="password"
          register={register}
          label="Password"
          required
        />

        <Submit type="submit">Login</Submit>

        {/* <div>
          <Warnings modal={false} />
          <Button
            type="button"
            onClick={() => handleLoginButtons("resetPassword")}
          >
            Reset Password
          </Button>
          <Button
            id="loginRegisterAccount"
            type="button"
            onClick={() => handleLoginButtons("register")}
          >
            Don't have an account yet?
          </Button>
        </div> */}
      </form>
    </ModalTemplate>
  );
};

export default LoginForm;
