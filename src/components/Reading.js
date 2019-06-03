import React from 'react';
import '../App.css';
import { Books } from './Books';

export const Reading = () => {
    return (
        <div>
            <div className='compheading'>
                <h1>Reading</h1>
            </div>
            <Books/>
        </div>
    );
}