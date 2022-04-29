import React from 'react';

const Service = ({icon,title,description}) => {
    return (
        <div  className='bg-[#232323] rounded-xl mb-8 py-10 text-center md:mb-3'>
            <i className={`fas ${icon} fa-3x text-white mb-4`}></i>
            <h4 className='text-[#ff651c] mb-4'>{title}</h4>
            <p className='text-[#888]'>{description}</p>
        </div>
    );
};

export default Service;