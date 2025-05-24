import React from 'react';
// import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faUser } from '@fortawesome/free-solid-svg-icons';

function NavBar()
{
    return (
        <>
        <div className=' flex flex-row justify-between h-[8vh] pt-8 py-2 px-4 border-b border-gray-500'>
            <div className=' flex flex-row gap-x-8'>
            <FontAwesomeIcon icon={faCode} className=' font-medium text-3xl text-white ' />
            <p className=' text-white text-2xl font-medium'>InfraTrack</p>
            </div>

            <div>
                <div className=' bg-slate-500 rounded-full text-xl px-3 py-2'>
                    <FontAwesomeIcon icon={faUser} className=' font-medium text-3xl text-gray-300 ' />
                </div>
            </div>
        </div>
        
        </>
    )
}

export default NavBar;