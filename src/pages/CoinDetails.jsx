import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleCoinData } from '../services/cryptoApi';
import CoinChart from '../components/CoinDetails/CoinChart';
import CoinStats from '../components/CoinDetails/CoinStats';
import { GlobalContext } from "../context/GlobalState";
import BackButton from '../components/BackButton';
import CoinHeading from '../components/CoinDetails/CoinHeading';
import "../styles/CoinChart.css";


const CoinDetails = () => {

    const { id } = useParams();

    const { addCoinToWatchList, removeCoinToWatchList, watchList } = useContext(GlobalContext);

    const [cryptoDetails, setCryptoDetails] = useState([]);

    // Check whether click on remove or add button
    let status = watchList.find((m) => {
        return (
            m?.data?.id == cryptoDetails?.data?.id
        )
    })

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