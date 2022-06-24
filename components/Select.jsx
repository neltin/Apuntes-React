import React from 'react';

export default function Select({ options, defaultOption, onSelect }) {
  return (
    <select
      onChange={(e) => {
        if (onSelect) return onSelect(e);
      }}
    >
      {options.map((item, key) => (
        <option value={item.value} key={key}>
          {item.text}
        </option>
      ))}
    </select>
  );
}
