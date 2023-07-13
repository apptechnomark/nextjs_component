## How to use
-------------------------------------------------------------------------------------------------------------------

'use client'

import { useState } from "react";
import { TextField } from "textfield";
import 'textfield/dist/index.css'

export default function Home() {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInValue(e.target.value);
  };

  const [inValue, setInValue] = useState("");

  return (
    <>
      <TextField
        // type="email"
        label="Username"
        id="username"
        name="username"
        value={inValue} 
        onChange={handleInputChange} 
        validate
        supportingText="enter string only"
        getValue={() => console.log("hello")
        }
      />
    </>
  );
}
