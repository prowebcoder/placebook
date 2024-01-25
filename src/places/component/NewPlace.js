import React, { useCallback, useReducer } from "react";
import Input from "../../common/UIComponents/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../common/UIComponents/Validator";
import Button from "../../common/UIComponents/Button";
import "./NewPlace.css";
const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};
function NewPlace() {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

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
