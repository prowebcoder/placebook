import React from "react";
import { useParams } from "react-router-dom";
import { DUMMY_PLACES } from "./Places";
import Input from "../../common/UIComponents/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../common/UIComponents/Validator";
import Button from "../../common/UIComponents/Button";
import { useFormHook } from "../../common/form-hook";
import { useCustomHook } from "../../custom-hook";
const UpdatePlace = () => {
  const urlParams = useParams();
  const placetoUpdate = DUMMY_PLACES.find((p) => p.id === urlParams.placeID);
  console.log(useCustomHook());
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
    },
    false
  );

  function formPlaceUpdateSubmitHandler(event) {
    event.preventDefault();
    console.log(formState.inputs);
  }
  return (
    <form onSubmit={formPlaceUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="title"
        onInput={inputHandler}
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter the title"
        placeholder={placetoUpdate.title}
      ></Input>
      <Input
        id="description"
        element="textarea"
        validators={[VALIDATOR_REQUIRE()]}
        type="text"
        label="Description"
        onInput={inputHandler}
        errorText="Please enter the title"
        placeholder={placetoUpdate.description}
      ></Input>
      <Button type="submit">Update Place</Button>
    </form>
  );
};

export default UpdatePlace;
