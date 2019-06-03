import React from 'react';
import '../App.css';
import { Books } from './Books';

export const Wish = () => {
    return (
        <div>
            <div class='compheading'>
                <h1>WishList</h1>
            </div>
            <Books/>
        </div>
    );
}