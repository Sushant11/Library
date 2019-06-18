import React from 'react';
// import '.../App.css'


class Read extends React.Component {
    render() {
        const readData = JSON.parse(localStorage.getItem('read'))
        if (readData !== null) {
            return (
                <div>
                    <div className='compheading'>
                        <h3>Read</h3>
                    </div>
                    <div className='card-columns container' >
                        {readData.map(book => {
                            return (
                                <div key={book.id} className=' card books-results'>
                                    {book.volumeInfo.imageLinks ? <a href={book.volumeInfo.infoLink} target='_blank' rel="noopener noreferrer"><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} className='book-cover' /></a> : null}
                                    <div className='card-body'>
                                        {book.volumeInfo.title}
                                        {book.volumeInfo.subtitle ? <h6>- {book.volumeInfo.subtitle}</h6> : null}
                                        <h6>{book.volumeInfo.authors}</h6>
                                        <hr />
                                        <div className='row'>
                                            <div className='col-sm-12 col-lg-12'>
                                                <a href={book.volumeInfo.infoLink} target='_blank'>
                                                    <button type="button" className="btn book-button" style={{width: '40%'}}><i className="fas fa-info btn-icon"></i> Info</button>
                                                </a></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
        else if(readData === [] || readData === null) {
            return (
                <div>
                    <div className='compheading'>
                        <h3>Read</h3>
                    </div>
                    <div style={{ textAlign: 'center', color: '#b51a1a' }}>No Books</div>
                </div>
            )
        }

    }

}

export default Read