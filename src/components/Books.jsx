import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";
import Side from "./Side";
import SearchBox from "./SearchBox";

import { useState } from "react";

import styles from "./Books.module.css";

function Books() {
  const [liked, setLiked] = useState([]);
  const [books, setBooks] = useState(bookData);
  const [search, setSearch] = useState([]);
  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => {
        return [...liked, book];
      });
    }
  };
  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };
  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handleLikedList={handleLikedList}
            />
          ))}
        </div>
        <div>
          {!!liked.length && (
            <div className={styles.favorite}>
              <h4>favorite</h4>
              {liked.map((book) => (
                <Side key={book.id} data={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Books;
