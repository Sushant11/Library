import React from 'react'
// import Buttons from './Buttons';

function Results(props) {
    return (
        <div className='card-columns container' >
            {props.bookData.map(book => {
                return (
                    <div key={book.id} className=' card books-results'>
                        {book.volumeInfo.imageLinks ? <a href={book.volumeInfo.infoLink} target='_blank' rel="noopener noreferrer"><img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.title} className='book-cover' data-toggle="tooltip" title="Info"/></a> : null}
                        <div className='card-body'>
                            {book.volumeInfo.title}
                            {book.volumeInfo.subtitle ? <h6>- {book.volumeInfo.subtitle}</h6> : null}
                            <h6>{book.volumeInfo.authors}</h6>
                            <hr />
                            <div className='row'>
                                <div className='col-sm-12 col-lg-4'><button type="button" className="btn book-button" id='read' name='read' onClick={props.handleClick} id={book.id}><i className="fas fa-check btn-icon"></i> READ</button></div>
                                <div className='col-sm-12 col-lg-4'><button type="button" className="btn book-button" id='reading' name='reading' onClick={props.handleClick} id={book.id}><i className="fas fa-glasses btn-icon"></i>READING</button></div>
                                <div className='col-sm-12 col-lg-4'><button type="button" className="btn book-button" id='wish' name='wish' onClick={props.handleClick} id={book.id}><i className="fas fa-plus btn-icon" ></i> Later</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Results