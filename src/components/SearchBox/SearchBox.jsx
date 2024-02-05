import { useId } from 'react';
import styles from './SearchBox.module.css';

function SearchBox({ contactName, setContactName }) {
  const contactFilterId = useId();

  const onChangeInputHandler = (event) => {
    setContactName(event.target.value);
  };

  return (
    <div className={styles.searchBox}>
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
