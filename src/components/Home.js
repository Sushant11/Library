import React from 'react';

export const Home = ()=> {
        return (
            <div>
                <div className="mainhead">Read Up</div>
                <div className="container mainform" >
                    <div >
                        <form>
                            <div className="row">
                                <div className="col-8">
                                    <div className="form-group">
                                    <label >Book Name</label>
                                        <input type="text" className="form-control" id="bookname" placeholder="Enter Book Name" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                    <label>Status</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>Read</option>
                                            <option>Reading</option>
                                            <option>Wishlist</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn">ADD</button>
                        </form>
                    </div>
                </div>
                <footer>
                <blockquote className="blockquote text-center">
                    <p className="mb-0">"A reader lives a thousand lives before he dies."</p>
                    <footer className="blockquote-footer">George R.R. Martin</footer>
                </blockquote>
                </footer>
               
            </div>
        );
    }