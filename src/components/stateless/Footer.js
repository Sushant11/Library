import React from 'react'

function Footer() {
    const handleDelete = () => {
        let confirm = window.confirm("Delete Library?")
        if(confirm === true){
            localStorage.clear()
            alert('Library Deleted');
            document.location.reload()
        }   
    }
    return (
        <footer>
            <blockquote className="blockquote text-center">
                <p className="mb-0">"A reader lives a thousand lives before he dies."</p>
                <footer className="blockquote-footer">George R.R. Martin</footer>
            </blockquote>
            <div className='del'>
                <div data-toggle="tooltip" title="Delete Data" onClick={handleDelete}><i className="far fa-trash-alt" style={{ color: '#b51a1a', fontSize: 20 }}></i></div>
            </div>
            <div className='info'>
                <div data-toggle="tooltip" title="Info"><i className="fas fa-info-circle" style={{ color: '#34495E', fontSize: 20 }}></i></div>
            </div>
        </footer>
    )
}

export default Footer