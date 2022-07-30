import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleCoinData } from '../services/cryptoApi';
import CoinChart from '../components/CoinDetails/CoinChart';
import CoinStats from '../components/CoinDetails/CoinStats';
import { GlobalContext } from "../context/GlobalState";
import BackButton from '../components/BackButton';
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
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
            <div className='coin-cointainer'>
                <h1>{id}<span>({cryptoDetails?.data?.symbol})</span></h1>
                <button className='iconBtn' onClick={() => status ? removeCoinToWatchList(cryptoDetails?.data?.id) : addCoinToWatchList(cryptoDetails)}>
                    {status ? < AiFillStar /> : < AiOutlineStar />}
                </button>
            </div>
            <CoinStats cryptoDetails={cryptoDetails} />
            <CoinChart id={id} />
        </main>

    )
}

export default CoinDetails