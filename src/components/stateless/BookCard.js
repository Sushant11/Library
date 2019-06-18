import React from 'react'
import Button from './Buttons'

const BookCard = (props)=>{
    return(
          <div className='card-columns container' >
            {props.bookData.map(book => {
                return (
                    <div key={book.id} className=' card books-results'>
                        {book.volumeInfo.imageLinks ? <a href={book.volumeInfo.infoLink} target='_blank'><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} className='book-cover' /></a> : null}
                        <div className='card-body'>
                            {book.volumeInfo.title}
                            {book.volumeInfo.subtitle ? <h6>- {book.volumeInfo.subtitle}</h6> : null}
                            <h6>{book.volumeInfo.authors}</h6>
                            <hr />
                            <Button bookId={book.id}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default BookCard