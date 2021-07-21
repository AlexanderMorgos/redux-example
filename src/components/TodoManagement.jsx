import React from 'react';

export const TodoManagement = ({ addTodo }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();

    if (!inputValue) {
      return;
    }

    addTodo(inputValue);
    setInputValue('');
  }, [inputValue])

  const handleChange = React.useCallback((e) => {
    setInputValue(e.target.value);
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} onChange={handleChange} />
      <button type="submit">
        Add Todo
      </button>
    </form>
  );
}
