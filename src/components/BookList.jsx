/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import DataContext from "../context/DataContext";

import './BookList.css';

/* eslint-disable react/prop-types */
const BookList = () => {

    const {books, setBooks} = useContext(DataContext);

  return (
    <div className="book-list">

        {books.map((book) => {
            return (<div key={book.id}>
                <Link to={`/book/${book.id}`} className="book flex gap-12 flex-column items-center justify-center" >
                    <img src={book?.volumeInfo?.imageLinks?.thumbnail} height="250" alt={book?.volumeInfo?.title} />
                    <h4 className="text-center text-dark">{ book?.volumeInfo?.title }</h4>
                    {/* <p> { book?.volumeInfo?.averageRating } </p> */}
                </Link>
            </div>)
        })}

    </div>
  )
}

export default BookList