import React from "react";

function NewBookForm({ addNewBook }) {
  
  function handleSubmit(e){
    e.preventDefault();
    const newBook ={
      title:e.target.title.value,
      author:e.target.author.value,
      image:e.target.cover.value,
      favorite: false,
      quote: e.target.quote.value,
      genre: e.target.genre.value

    }

    addNewBook(newBook)
  }


  return (

    <div className="contact-us">
      <form onSubmit={handleSubmit}>
        <br></br>
        <input type="text" id="title" placeholder="Title"/>
        <input type="text" id="author" placeholder="Author"/>
        <input type="text" id="cover" placeholder="Cover"/>
        <input type="text" id="quote" placeholder="Your favorite quote is..."/>
        <input type="text" id="genre" placeholder="Genre"/>
        <button typle="submit"> Send </button>
      </form>
    </div>

  )
}

export default NewBookForm
