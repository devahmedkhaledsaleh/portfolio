import React from 'react';

function Resume({title,details,description}) {
    return (
        <div className='mb-2.5	p-2.5 bg-[#232323] rounded-xl border-l-2	border-[#ff651c]'>
            <h5 className='mb-3 text-[#ff651c]'>{title}</h5>
            <p className='text-white mb-3'>{details}</p>
            <p className='text-[#888] mb-3'>{description}</p>
        </div>
    );
}

export default Resume;