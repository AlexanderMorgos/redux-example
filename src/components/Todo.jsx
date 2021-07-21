import React from 'react';

export const Todo = ({ text, ...otherProps }) => {
  return <li {...otherProps}>{text}</li>;
}