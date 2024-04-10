/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import DataContext from "../context/DataContext";

import "./Filter.css";

const Filter = () => {

  const { authors, setFilter, categories } = useContext(DataContext);

  const [showFilter,  setShowFilter] = useState(false);

  const updateCategory = (e) => {

    if (e.target.value == "all") {
      setFilter((prev) => {
        return { ...prev, category: null }
      });
    }
    else {
      setFilter((prev) => {
        return { ...prev, category: e.target.value }
      });
    }
  }

  const updateAuthor = (e) => {
    if (e.target.value == "all") {
      setFilter((prev) => {
        return { ...prev, author: null }
      })
    }
    else {
      setFilter((prev) => {
        return { ...prev, author: e.target.value }
      })
    }
  }

  return (
    <>
      <div className="filter-toggle">
        <button onClick={() => setShowFilter((prev) => !prev)}> 
          {showFilter ?  
            <i className="fa-solid fa-circle-xmark"></i> : 
            <i className="fa-solid fa-bars"></i>
          } 
        </button>
      </div>
      <div className={`filter-container ${showFilter ? 'show' : ''}`}>

        <h4>Categories</h4>
        <div className="category-filter filter-group">
          <div className="field-wrapper items-start">
            <input
              type="radio"
              id="category"
              name="category"
              value="all"
              onChange={(e) => updateCategory(e)}
            />
            <label htmlFor="category" className="text-dark">
              All Categories
            </label>
          </div>
          {categories.map((category, index) => {
            return (
              <div key={index} className="field-wrapper items-start">
                <input
                  type="radio"
                  name="category"
                  id={category}
                  value={category}
                  onChange={(e) => updateCategory(e)}
                />
                <label htmlFor={category} className="text-dark">
                  {category}
                </label>

              </div>
            );
          })}
        </div>

        <h4>Authors</h4>
        <div className="authors-filter filter-group">
          <div className="field-wrapper items-start">
            <input
              type="radio"
              id="author"
              name="author"
              value="all"
              onChange={(e) => updateAuthor(e)}
            />
            <label htmlFor="author" className="text-dark">
              All Authors
            </label>
          </div>
          {authors.map((author, index) => {
            return (
              <div key={index} className="field-wrapper items-start">
                <input type="radio" id={author} name="author" value={author} onChange={(e) => updateAuthor(e)} />
                <label htmlFor={author} className="text-dark">
                  {author}
                </label>
              </div>
            );
          })}
        </div>


      </div>
    </>
  )
}

export default Filter