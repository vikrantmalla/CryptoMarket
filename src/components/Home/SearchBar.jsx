import React from 'react'

const SearchBar = ({ query, searchCoin }) => {
    return (
        <input
            type="text"
            placeholder="Search For a Crypto Currency.."
            className='my-4'
            value={query}
            onChange={(e) => searchCoin(e.target.value)}
        />
    )
}

export default SearchBar