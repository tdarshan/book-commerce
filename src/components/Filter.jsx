/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import DataContext from "../context/DataContext";

import "./Filter.css";

const Filter = () => {

  const { authors, setFilter, categories } = useContext(DataContext);

  const updateCategory = (e) => {
    
    if(e.target.value == "all") {
      setFilter((prev) => {
        return { ...prev, category: null}
      });
    }
    else {
      setFilter((prev) => {
        return { ...prev, category: e.target.value}
      });
    }
  } 

  const updateAuthor = (e) => {
    if(e.target.value == "all") {
      setFilter((prev) => {
        return {...prev, author: null}
      })
    }
    else {
      setFilter((prev) => {
        return {...prev, author: e.target.value}
      })
    }
  }

  return (
    <div className="filter-container">

<div className="category-filter filter-group">
        <div>
          <input 
            type="radio" 
            id="category" 
            name="category" 
            value="all" 
            onChange={(e) => updateCategory(e)}  
          />
          <label htmlFor="category">
            All Categories
          </label>
        </div>
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <input 
                type="radio" 
                name="category" 
                id={category} 
                value={category} 
                onChange={(e) => updateCategory(e)} 
              />
              <label htmlFor={ category }>
                { category }
              </label>
              
            </div>
          );
        })}
      </div>

      <div className="authors-filter filter-group">
        <div>
          <input 
            type="radio" 
            id="author" 
            name="author" 
            value="all" 
            onChange={(e) => updateAuthor(e)} 
          />
          <label htmlFor="author">
            All Authors
          </label>
        </div>
        {authors.map((author, index) => {
          return (
            <div key={index}>
              <input type="radio" id={author} name="author" value={author} onChange={(e) => updateAuthor(e)} />
              <label htmlFor={author}>
                {author}
              </label>
            </div>
          );
        })}
      </div>

      
    </div>
  )
}

export default Filter