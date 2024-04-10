/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios";


import './BookDetails.css';
import DataContext from "../context/DataContext";

const BookDetails = () => {

    let {books, setBooks, book, setBook, currentBookId, setCurrentBookId} = useContext(DataContext);
    const { bookId } = useParams();

    useEffect(() => {

        setCurrentBookId(bookId);

        let thisBook = books.filter((b) => b.id == bookId );
        setBook(...thisBook);

    });




    return (
        <>
            <Link to={'/'} className="detail-back-button">
                <i className="fa-solid fa-arrow-left-long"></i>
            </Link>
            <div className="book-info" > 
                <div className="image-title">
                    <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="" loading="lazy" decoding="async" />
                    <h3> {book?.volumeInfo?.title} </h3>
                    <h5> {book?.volumeInfo?.subtitle} </h5>
                </div>
                <div className="info">

                    <div className="categories">
                        {book?.volumeInfo?.categories.map((category, index) => {
                            return (
                                <span key={index}> {category} </span>
                            );
                        })}
                    </div>

                    <p className="description">
                        {book?.volumeInfo?.description}
                    </p>

                    <div className="authors items-center flex-wrap">
                        <p>Authors : </p>
                        
                        <div className="flex gap-12 flex-wrap">
                            {book?.volumeInfo?.authors.map((author, index) => {
                                return (
                                    <span key={index}> {author} </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookDetails