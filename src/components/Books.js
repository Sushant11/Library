import React from 'react';
import bookcover from '../img/bookcoversample.jpg';

export class Books extends React.Component {
    render() {
        return (
            <div className='container books'>
                <div className="row">
                    <div className="col-12 col-lg-6 book">
                        <div className="card">
                            <div className='row'>
                                <div className="col-12 col-lg-6">
                                    <img className="card-img-top" src={bookcover} alt="Book" />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="card-body">
                                        <h5 className="card-title">Title</h5>
                                        <p className="card-text">Details</p>
                                        <a href="#" className="btn">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 book">
                        <div className="card">
                            <div className='row'>
                                <div className="col-12 col-lg-6">
                                    <img className="card-img-top" src={bookcover} alt="Boo" />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="card-body">
                                        <h5 className="card-title">Title</h5>
                                        <p className="card-text">Details</p>
                                        <a href="#" className="btn">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 book">
                        <div className="card">
                            <div className='row'>
                                <div className="col-12 col-lg-6">
                                    <img className="card-img-top" src={bookcover} alt="Book"/>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="card-body">
                                        <h5 className="card-title">Title</h5>
                                        <p className="card-text">Details</p>
                                        <a href="#" className="btn">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}