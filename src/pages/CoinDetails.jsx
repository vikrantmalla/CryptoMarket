import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleCoinData } from '../services/cryptoApi';
import CoinChart from '../components/CoinDetails/CoinChart';
import CoinStats from '../components/CoinDetails/CoinStats';
import BackButton from '../components/BackButton';
import CoinHeading from '../components/CoinDetails/CoinHeading';
import "../styles/CoinChart.css";


const CoinDetails = () => {

    const { id } = useParams();

    const [cryptoDetails, setCryptoDetails] = useState([]);

    useEffect(() => {
        getSingleCoinData(id).then((data) => {
            setCryptoDetails(data)
        })
    }, [id]);

    return (

        <main>
            <BackButton />
            <CoinHeading cryptoDetails={cryptoDetails} id={id} />
            <CoinStats cryptoDetails={cryptoDetails} />
            <CoinChart id={id} />
        </main>

    )
}

export default CoinDetails