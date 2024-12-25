import { IoSearchOutline } from "react-icons/io5";

import styles from "./Search.module.css";
function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Enter title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={searchHandler}>
        <IoSearchOutline />
      </button>
    </div>
  );
}

export default SearchBox;
