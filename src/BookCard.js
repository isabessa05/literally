import {useState} from 'react'

function BookCard ({book}) {

    const [favorite, setFavorite] = useState(book.favorite)


  function handleClick(){
    setFavorite((favorite) => !favorite)

    fetch(`http://localhost:3000/books/${book.id}`,{
      method:"PATCH",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({favorite: !favorite})
    })
}

console.log(favorite)





    return (
<div style={{  display: 'grid', justifyContent: 'space-between', alignItems: 'center' }}>
  <div className="mobile-layout">
    <div className="notification-header">
    </div>
    <div className="actions">
    {favorite? (
        <button onClick={handleClick}className="primary">♥</button>
      ) : (
        <button onClick={handleClick}>♡</button>
      )}
    </div>  
    <div className="book-cover">
        <img className="book-top" src={book.image} alt="book-top" />
      <img className="book-side" src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" /> 
    </div>
    <div className="preface">
      <div className="content">
        <div className="header">
          <div className="title">{book.title}</div>
          <div className="icon">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <div className="author">by {book.author}</div>
        <div className="body">
          <p>
            "{book.quote}"
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default BookCard;
