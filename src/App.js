import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import {useState, useEffect} from 'react'
import AllBooks from './AllBooks';
import Home from './Home';
import NewBookForm from './NewBookForm';
import NavBar from './NavBar';


function App() {

  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState(null)

  useEffect(() => {
      fetch("http://localhost:3000/books")
      .then(res => res.json())
      .then(bookData => 
        setBooks(bookData))
  }
    ,[])

    function addNewBook (newBook) {
      fetch("http://localhost:3000/books",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook)
      })

      setBooks([...books,newBook])

    }


    function searchBooks(e) {
      const element = books.filter((item) => {
        return item.title.toLowerCase().includes(e.target.value.toLowerCase())

      })

      setFilteredBooks([...element])

    }

  
  
  return (
    <div >
   <NavBar />
   <Switch> 
   <Route exact path="/allbooks">
      <AllBooks searchBooks={searchBooks} books = {filteredBooks === null ? books: filteredBooks}/>
    </Route>
    <Route exact path="/newbook">
      <NewBookForm addNewBook={addNewBook}/>
    </Route>
    <Route exact path="/">
      <Home books={books}/>
    </Route>
   </Switch>
    </div>
  );
}

export default App;