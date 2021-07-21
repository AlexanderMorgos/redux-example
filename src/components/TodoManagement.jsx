import React from 'react';

export const TodoManagement = ({ onSubmit }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = React.useCallback(async (e) => {
    e.preventDefault();

    if (!inputValue) {
      return;
    }

    await onSubmit(inputValue);
    setInputValue('');
  }, [inputValue, onSubmit]);

  const handleChange = React.useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} onChange={handleChange} />
      <button type="submit">
        Add Todo
      </button>
    </form>
  );
}
