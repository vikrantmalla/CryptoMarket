import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';

const Pagination = () => {
    const { page, nbPages, getNextPage, getPrevPage } = useContext(GlobalContext)
    return (
        <>
            <div className='pagination-buttons'>
                <button onClick={() => { getPrevPage() }}>
                    PREV
                </button>
                <p> {page} of {nbPages} </p>
                <button onClick={() => { getNextPage() }}>
                    NEXT
                </button>
            </div>
        </>

    )
}

export default Pagination