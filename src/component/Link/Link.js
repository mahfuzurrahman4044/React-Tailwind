import React, { useEffect, useState } from 'react';

const Link = ({file}) => {
    
    return (
        <li className='mr-10'>
            <a href="">{file.name}</a>
        </li>
    );
};

export default Link;