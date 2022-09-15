import BookCard from "./BookCard"
import Search from "./Search"



function AllBooks({books, searchBooks}){
  const bookDisplay = books.map((book) => {
    return <BookCard key={book.id} book={book} />
  })

  return (
    <div className="home-img">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Search searchBooks={searchBooks}/>
    <div  style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
      {bookDisplay}
      </div>
    </div>
  )

}

export default AllBooks;
