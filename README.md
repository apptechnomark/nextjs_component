'use client'

import React, { useState } from 'react';

import { Timepicker, Timepicker24Hr } from 'timepicker';
import 'timepicker/dist/index.css';

const page = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className='container'>
      <Timepicker value={selected} getValue={(value: string) => setSelected(value)} />
      <Timepicker24Hr value={selected} getValue={(value: string) => setSelected(value)} />
    </div>
  )
}

export default page