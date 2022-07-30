import React from 'react'
import Nav from '../components/Nav';
import CoinTable from '../components/Home/CoinTable';
import Pagination from '../components/Home/Pagination';

const HomePage = () => {
    return (
        <>
            <Nav />
            <main>
                <CoinTable />
                <Pagination />
            </main>
        </>
    )
}

export default HomePage