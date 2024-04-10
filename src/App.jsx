/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Filter from './components/Filter';

import DataContext from './context/DataContext';

import { useContext, useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  let {books, setBooks} = useContext(DataContext);

  return (
    <>
        <BrowserRouter>

          <Routes>

            <Route
              path='/'
              element={
                <div className='listing-container'>
                  <Filter />
                  <BookList />
                </div>
              }
            />

            <Route
              path='/book/:bookId'
              element={<BookDetails />}
            />

            <Route />

          </Routes>

        </BrowserRouter>
    </>

  )
}

export default App
