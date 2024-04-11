/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

import DataContext from "./DataContext";

const DataContextProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentBookId, setCurrentBookId] = useState(null);
    const [book, setBook] = useState({});

    const [filter, setFilter] = useState({author: null, category: null});

    useEffect(() => {

        let bookData = axios
                        .get('https://d1krvzwx5oquy1.cloudfront.net/books.json')
                            .then(response => {
                                // setBooks(response.data);

                                let allBooks = response.data;

                                const authorData = allBooks.flatMap(book => book.volumeInfo.authors || []);
                                const uniqAuthors = Array.from(new Set(authorData));

                                setAuthors(uniqAuthors);

                                const categoryData = allBooks.flatMap(book => book.volumeInfo.categories || []);
                                const uniqCategories = Array.from(new Set(categoryData));

                                setCategories(uniqCategories);

                                let filteredBooks = allBooks;
                                if(filter.author != null) {
                                    filteredBooks = allBooks.filter((book) =>
                                        book.volumeInfo.authors?.includes(filter.author)
                                    );    
                                }
                                if(filter.category != null) {
                                    filteredBooks = filteredBooks.filter((book) => 
                                        book.volumeInfo.categories?.includes(filter.category)
                                    );
                                }

                                setBooks(filteredBooks)

                                // if(filter.author != null) {
                                //     setBooks((prev) => prev.filter((book) => book.volumeInfo.authors?.includes(filter.author) ));
                                // }

                            })
                            .catch(err => console.log("Error fetching data : ", err));

        console.log("object");
    }, [filter]);

    // useEffect(() => {
    //     if (filter.author !== null) {
    //         const filteredBooks = books.filter(book => book.volumeInfo.authors?.includes(filter.author));
    //         setBooks(filteredBooks);
    //     }
    // }, [filter.author]);

    return (
        <DataContext.Provider value={{books, setBooks, book, setBook, currentBookId, setCurrentBookId, authors, setFilter, categories, setCategories}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;