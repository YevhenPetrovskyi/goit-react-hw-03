import { useId } from 'react';

function SearchBox({ contactName, setContactName }) {
  const contactFilterId = useId();

  const onChangeInputHandler = (event) => {
    setContactName(event.target.value);
  };

  return (
    <div>
      <label htmlFor={contactFilterId}>Find contacts by name</label>
      <input
        value={contactName}
        onChange={onChangeInputHandler}
        type="text"
        name="contactFilter"
        id={contactFilterId}
      />
    </div>
  );
}

export default SearchBox;
