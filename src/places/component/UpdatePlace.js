import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DUMMY_PLACES } from "./Places";
import Input from "../../common/UIComponents/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../common/UIComponents/Validator";
import Button from "../../common/UIComponents/Button";
import { useFormHook } from "../../common/form-hook";
import Card from "../../user/component/Card";
import "../../user/pages/Auth.css";
const UpdatePlace = () => {
  const urlParams = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [formState, inputHandler, setFormData] = useFormHook(
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
  const placetoUpdate = DUMMY_PLACES.find((p) => p.id === urlParams.placeID);
  useEffect(() => {
    if (placetoUpdate) {
      setFormData({
        title: {
          value: placetoUpdate.title,
          isValid: false,
        },
        description: {
          value: placetoUpdate.description,
          isValid: false,
        },
      });
    }
    setIsLoading(false);
  }, [setFormData, placetoUpdate]);

  function formPlaceUpdateSubmitHandler(event) {
    event.preventDefault();
    console.log(formState.inputs);
  }

  if (isLoading) {
    return <h1>Page Is loading....</h1>;
  }
  return (
    <Card className="auth">
      <form onSubmit={formPlaceUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="title"
          onInput={inputHandler}
          value={formState.inputs.title.value}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter the title"
          initialValue={formState.inputs.title.value}
        ></Input>
        <Input
          id="description"
          element="textarea"
          validators={[VALIDATOR_REQUIRE()]}
          type="text"
          label="Description"
          onInput={inputHandler}
          errorText="Please enter the title"
          value={formState.inputs.description.value}
          initialValue={formState.inputs.description.value}
        ></Input>
        <Button type="submit">Update Place</Button>
      </form>
    </Card>
  );
};

export default UpdatePlace;
