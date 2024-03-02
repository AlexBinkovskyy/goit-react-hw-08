import { useDispatch } from 'react-redux';
import CSS from './SearchBar.module.css';
import { contactFilter } from '../../redux/filterSlice';

export function SearchBar() {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={CSS.searchInput}
        type="text"
        onChange={event =>
          dispatch(contactFilter(event.target.value.toLowerCase()))
        }
      />
    </div>
  );
}
