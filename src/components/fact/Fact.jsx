import React from 'react';

const Fact = ({number,description}) => {
    return (
        <div  className='bg-[#232323] rounded-xl mb-8 md:mb-3 p-8 border border-[#ff651c]'>
            <h3 className='text-[#ff651c] text-5xl	font-bold	'>{number} <span className='text-3xl	font-bold'>+</span></h3>
            <p className='text-[#888]'>{description}</p>
        </div>
    );
};

export default Fact;