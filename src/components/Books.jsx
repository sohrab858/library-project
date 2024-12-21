import {books} from "../constants/mockData"
import BookCard from "./BookCard"
import { useState } from "react"


function Books() {
    const [liked , setLiked] = useState([])

    const handleLikedList = (book , status) => {
console.log(book)
console.log(status)
    }
  return (
    <div>
     <div>{books.map((book)=>(
        <BookCard key={book.id} data={book} handleLikedList={handleLikedList}/>
        ))}</div>
        <div></div>
    </div>
  )
}

export default Books
