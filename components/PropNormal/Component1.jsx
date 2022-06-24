import React, { Component, createContext, useState } from 'react';
import Component2 from './Component2';

export default function Component1() {
  const [theme, setThema] = useState(false);
  return (
    <div>
      <Component2 theme={theme} />
    </div>
  );
}
