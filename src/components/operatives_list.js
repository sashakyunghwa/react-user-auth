import React from 'react';
import auth from '../hoc/auth';

const OpList = props => (
    <div>
        <h1 className="text-center">Secret Operatives List</h1>
        <ol>
            <li>Jim</li>
            <li>Sally</li>
            <li>Harry</li>
            <li>George</li>
            <li>Pho</li>
        </ol>
    </div>
)

export default auth(OpList);
