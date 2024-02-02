import React from "react";
import Input from "../../common/UIComponents/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../common/UIComponents/Validator";
import Button from "../../common/UIComponents/Button";
import "./NewPlace.css";
import { useFormHook } from "../../common/form-hook";

function NewPlace() {
  const [formState, inputHandler] = useFormHook(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form Data", formState.inputs);
  };
  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        element="input"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        id="title"
        type="text"
        label="title"
        placeholder="title"
        errorText="Please enter a valid title"
      />

      <Input
        rows={20}
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        placeholder="address"
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />

      <Input
        element="textarea"
        id="description"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        placeholder="Description"
        errorText="Please enter a valid description (at least 5 characters)."
      />

      <Button type="submit">Add Place</Button>
    </form>
  );
}

export default NewPlace;
