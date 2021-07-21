import React from 'react';

export const TodoManagement = ({ addTodo }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = React.useCallback(async (e) => {
    e.preventDefault();

    if (!inputValue) {
      return;
    }
    setSubmitting(true);
    await addTodo(inputValue);
    setInputValue('');
    setSubmitting(false);
  }, [inputValue, submitting])

  const handleChange = React.useCallback((e) => {
    setInputValue(e.target.value);
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} onChange={handleChange} />
      <button type="submit">
        Add Todo
      </button>
      {submitting && <div>Loading</div>}
    </form>
  );
}
