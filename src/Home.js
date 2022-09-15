
import BookCard from "./BookCard";
import {useState} from 'react';

function Home({books}) {

    const [displayBook, setDisplayBook] = useState(null)

    function handleClick(){
    const randomBook = books[Math.floor(Math.random() * books.length)];
    const displayRandomBook = <BookCard key={randomBook.id} book={randomBook}/>
    setDisplayBook(displayRandomBook)
    }

    return (
        <div className="home-img">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {displayBook}
        <button onClick={handleClick}> Get a book recommendation! </button>
        </div>
    )
}

export default Home