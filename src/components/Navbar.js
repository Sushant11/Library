import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from './Home';
import { Read } from './Read';
import { Reading } from './Reading';
import { Wish } from './Wish';
import { Err } from "./Error";


export class Navigation extends React.Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" data-toggle="tooltip" title="Home"><i className="fas fa-book-reader" ></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Read" className="nav-link" data-toggle="tooltip" title="Read"><i className="fas fa-book"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Reading" className="nav-link" data-toggle="tooltip" title="Reading"><i className="fas fa-book-open"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Wishlist" className="nav-link" data-toggle="tooltip" title="WishList"><i className="fas fa-book-medical"></i></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/read" component={Read} />
                    <Route path="/reading" component={Reading} />
                    <Route path="/wishlist" component={Wish} />
                    <Route component={Err} />
                </Switch>
            </Router>
        );
    }
}
