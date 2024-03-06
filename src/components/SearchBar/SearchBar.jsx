import { useDispatch } from 'react-redux';
import CSS from './SearchBar.module.css';
import { contactFilter } from '../../redux/contacts/filterSlice';

export function SearchBar() {
  const dispatch = useDispatch();
  const handleInput = event => {
    dispatch(contactFilter(event.target.value.toLowerCase().trim()));
  };

  return (
    <div>
      <p>Find contacts by name or phone number...</p>
      <input className={CSS.searchInput} type="text" onChange={handleInput} />
    </div>
  );
}
