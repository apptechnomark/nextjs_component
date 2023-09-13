'use client'

import React, { useState } from 'react';

import { CountryCode } from 'next-ts-lib';
import "next-ts-lib/dist/index.css"

const page = () => {
  const [phone, setPhone] = useState<string>("");
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [phoneHasError, setPhoneHasError] = useState<boolean>(false);
  
  return (
    <div className='flex w-full p-10'>
      <CountryCode
        validate
        required
        label='label'
        getValue={(e: any) => setPhone(e)}
        getError={(err: any) => setPhoneHasError(err)}
        hasError={phoneError} />
    </div>
  )
}

export default page