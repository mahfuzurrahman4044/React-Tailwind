import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({feature}) => {
    return (
        <div className='flex items-center justify-center'>
            <CheckCircleIcon className='h-4 w-4 text-green'/>
            <span>{feature}</span>
        </div>
    );
};

export default Features;