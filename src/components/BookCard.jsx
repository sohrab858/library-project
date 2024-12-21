import { useState } from "react";
import { AiFillHeart } from "react-icons/ai"

import styles from "./BookCard.module.css";
function BookCard({data : {title,author,image,language,pages},handleLikedList} ) {

const [like,setLike] = useState(false);

const likeHandler = () =>{
  handleLikedList(data , like)
setLike((like)=>!like); 
}

  return (
    <div className={styles.card}>
    <img src={image} alt={title} />
    <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
      <div>
        <span>Language: {language}</span>
        <span>Pages: {pages}</span>
        </div>
      </div>
      <button onClick={likeHandler}><AiFillHeart color={like ? "red" : "white"} fontSize="1.8rem"/></button>
    </div>
  )
}

export default BookCard
