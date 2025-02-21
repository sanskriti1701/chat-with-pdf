import React from 'react'
import PlaceholderDocument from './PlaceholderDocument'

function Documents() {
    return (
        <div className='flex flex-wrap p-5 bg-gray-100 justify-center lg:justify-start rounded-sm gap-5 mx-w-7xl mx-auto'>
            {/* map through the documents */}
            <PlaceholderDocument />
            {/* placeholder document */}
        </div>
    )
}

export default Documents