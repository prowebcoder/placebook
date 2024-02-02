import React from "react";
import Input from "../../common/UIComponents/Input";
import Button from "../../common/UIComponents/Button";
import { useFormHook } from "../../common/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../common/UIComponents/Validator";
import Card from "../component/Card";
import "./Auth.css";
function Auth() {
  const [formState, inputHandler] = useFormHook(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.isValid);
    console.log(formState.inputs);
  };
  return (
    <Card className="auth">
      <form onSubmit={authSubmitHandler}>
        <Input
          id="email"
          element="input"
          type="text"
          label="Your Email"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter the Email"
        ></Input>
        <Input
          id="password"
          element="input"
          type="password"
          label="Your password"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter the Password"
        ></Input>

        <Button type="submit" disabled={!formState.isValid}>
          Login
        </Button>
      </form>
    </Card>
  );
}

export default Auth;
