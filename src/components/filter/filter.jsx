import { useDispatch, useSelector } from "react-redux";
import { getFilters } from "../../redux/selectors";
import { setFilter } from "../../redux/contactsSlice";


export const Filter = () => {

  const filter = useSelector(getFilters)
  const dispatch = useDispatch();

const handleFilterChange = e =>{
  dispatch(setFilter(e.target.value));
};

  return (
    <>
      <h3 className="title">Find contacts by name</h3>
      <input
        className="input input-search"
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};
