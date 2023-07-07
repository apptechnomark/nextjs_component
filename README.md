'use client'

import React, { useState } from 'react';

import { Timepicker, Timepicker24 } from 'timepicker';
import 'timepicker/dist/index.css';

const page = () => {
  const [selected, setSelected] = useState('');
  console.log('🚀 ~ file: page.tsx:10 ~ page ~ selected:', selected)

  return (
    <div className='container mx-auto'>
      <Timepicker onChange={(value: string) => setSelected(value)} />
      <Timepicker24 onChange={(value: string) => setSelected(value)} />
    </div>
  )
}

export default page