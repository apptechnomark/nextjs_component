import React, { useState, useEffect } from "react";
import Typography from "../Typography/Typography";
import { Text } from "../Textfield/Text";

interface InputMaskProps {
  type: string;
  setPrefix?: string;
  className?: string;
  setDelimiter?: string[];
  splitLengths?: number[];
  US?: boolean;
  label?: string;
}

const InputMask: React.FC<InputMaskProps> = ({
  type,
  setPrefix,
  className,
  setDelimiter,
  splitLengths,
  US,
  label,
}) => {
  var array: string[] | undefined;
  array = setPrefix ? setPrefix.split("") : [];

  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [hasErrorMessage, setHasErrorMessage] = useState<boolean>(false);
  const [hasNoError, setHasNoError] = useState(false);

  useEffect(() => { }, [value]);

  const getDefaultLabel = (type: string) => {
    switch (type) {
      case "numeral":
        return "Numeral";
      case "date":
        return "Date";
      case "time":
        return "Time";
      case "credit":
        return "Credit Card";
      case "phone":
        return "Phone Number";
      case "delimiter":
        return "Delimiter";
      case "prefix":
        return "Prefix";
      default:
        return "Label";
    }
  };

  const getDefaultPlaceholder = (type: string) => {
    switch (type) {
      case "numeral":
        return "1,00,00,000";
      case "date":
        return US ? "DD/MM/YYYY" : "MM/DD/YYYY";
      case "time":
        return "15:58:25";
      case "credit":
        return "xxxx xxxx xxxx 1234";
      case "phone":
        return "9874 563 214";
      case "delimiter":
        return "Delimiter:'.'";
      case "prefix":
        return setPrefix || "+123";
    }
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value || "";

    //prefix inputmask
    if (type === "prefix") {
      const prefixValue = setPrefix || "+123";
      const splitLength = splitLengths || [3, 3, 3, 4];

      if (inputValue === prefixValue) {
        setValue(prefixValue);
      } else if (inputValue.startsWith(prefixValue)) {
        const numericValue = inputValue
          .substring(prefixValue.length)
          .replace(/\D/g, "");

        let formattedValue = prefixValue;
        let currentIndex = 0;

        for (const length of splitLength) {
          const chunk = numericValue.substring(
            currentIndex,
            currentIndex + length
          );
          if (chunk) {
            formattedValue += " " + chunk;
          }
          currentIndex += length;
        }
        setValue(formattedValue);
      } else {
        setValue(prefixValue);
      }
    }
    //numeral inputmask
    else if (type === "numeral") {
      let numericValue = inputValue.replace(/[^0-9]/g, "");

      if (numericValue === "") {
        setValue("");
      } else {
        let reversed = numericValue.split("").reverse().join("");
        let result = reversed.match(/.{1,3}/g).join(",");
        let finalResult = result.split("").reverse().join("");

        setValue(finalResult);
      }
    }
    //date inputmask
    else if (type === "date") {
      let inputValue = event.target.value || "";
      inputValue = inputValue.replace(/[^0-9]/g, "");

      let formattedValue = "";
      if (inputValue.length >= 1) {
        formattedValue = inputValue.slice(0, 2);
      }
      if (inputValue.length >= 3) {
        formattedValue += "/" + inputValue.slice(2, 4);
      }
      if (inputValue.length >= 5) {
        formattedValue += "/" + inputValue.slice(4, 8);
      }
      setValue(formattedValue);
    }

    //time inputmask
    else  if (type === "time") {
      let newValue = event.target.value || "";
      let updatedValue = newValue.slice(0, 8);
      newValue = newValue.replace(/[^0-9]/g, "");
      let hasError = false;

      if (newValue.length > 6) {
        hasError = true;
        setErrorMessage("Time can't be 00:00:00");
      } else if (updatedValue === "00:00:00") {
        hasError = true;
        setErrorMessage("Time can't be 00:00:00");
      } else {
        setErrorMessage("");
      }

      let formattedValue = "";
      if (newValue.length >= 1) {
        const hours = parseInt(newValue.slice(0, 2));
        if (hours >= 0 && hours <= 23) {
          formattedValue = newValue.slice(0, 2);
        } else {
          formattedValue = "23";
        }
      }

      if (newValue.length >= 3) {
        const minutes = parseInt(newValue.slice(2, 4));
        if (minutes >= 0 && minutes <= 59) {
          formattedValue += ":" + newValue.slice(2, 4);
        } else {
          formattedValue += ":59";
        }
      }

      if (newValue.length >= 5) {
        const seconds = parseInt(newValue.slice(4, 6));
        if (seconds >= 0 && seconds <= 59) {
          formattedValue += ":" + newValue.slice(4, 6);
        } else {
          formattedValue += ":59";
        }
      }
      setHasErrorMessage(hasError);
      setValue(formattedValue);
    }

    //credit card inputmask
    else if (type === "credit") {
      let inputValue = event.target.value || "";
      inputValue = inputValue.replace(/\s/g, "");
      inputValue = inputValue.replace(/[^\d]/g, "");
      inputValue = inputValue.slice(0, 16);

      let formattedValue = "";
      for (let i = 0; i < inputValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedValue += " ";
        }
        formattedValue += inputValue[i];
      }
      setValue(formattedValue);
    }
    //phone number inputmask
    else if (type === "phone") {
      let inputValue = event.target.value || "";
      inputValue = inputValue.replace(/\s/g, "");
      inputValue = inputValue.replace(/[^\d]/g, "");
      inputValue = inputValue.slice(0, 10);

      let formattedValue = "";
      for (let i = 0; i < inputValue.length; i++) {
        if (i === 4 || i === 7) {
          formattedValue += " ";
        }
        formattedValue += inputValue[i];
      }
      setValue(formattedValue);
    }
    //delimiter inputmask
    else if (type === "delimiter") {
      let inputValue = event.target.value || "";
      if (!inputValue) {
        setValue("");
        return;
      }
      inputValue = inputValue.replace(
        new RegExp((setDelimiter || ["·", "·"]).join("|"), "g"),
        ""
      );
      let formattedValue = "";
      let delimiterIndex = 0;
      let currentLength = 0;
      for (let i = 0; i < inputValue.length; i++) {
        formattedValue += inputValue[i];
        currentLength++;
        if (
          delimiterIndex < (setDelimiter || ["·", "·"]).length &&
          currentLength === (splitLengths || [3, 3, 3])[delimiterIndex]
        ) {
          formattedValue += (setDelimiter || ["·", "·"])[delimiterIndex];
          delimiterIndex++;
          currentLength = 0;
        }
      }
      setValue(formattedValue);
    }
  };

  const defaultLabel = getDefaultLabel(type);
  const defaultPlaceholder = getDefaultPlaceholder(type);

  const handleBlur = () => {
    if (hasErrorMessage) {
      setHasErrorMessage(true);
      setErrorMessage("Time can't be 00:00:00");
    }
  };

  return (
    <>
      <Typography type="label" className="block text-slatyGrey">
        {label || defaultLabel}
      </Typography>
      <Text
        onChange={changeHandler}
        value={value}
        onBlur={handleBlur}
        placeholder={defaultPlaceholder}
        validate
        errorMessage={errorMessage}
        getValue={(e: any) => setValue(e)}
        getError={(e: any) => setHasNoError(e)}
        hasError={hasErrorMessage}
      />
    </>
  );
};

export default InputMask;
