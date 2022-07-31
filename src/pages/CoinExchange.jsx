import React, { useState, useEffect } from 'react'
import millify from 'millify';
import { getExchangesData } from '../services/cryptoApi';
import Nav from '../components/Nav';
import "../styles/CoinExchange.css";

const CoinExchange = () => {

    const [exchangeDetails, setExchangeDetails] = useState([]);

    useEffect(() => {
        getExchangesData().then((data) => {
            setExchangeDetails(data)
        })
    }, []);

    return (
        <>
            <Nav />
            <main>
                <div className='wrappers'>
                    <table className='exchangeTable'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Volume %</th>
                                <th>tradingPairs</th>
                                <th>Volume Usd</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                exchangeDetails?.slice(0, 20).map(({ exchangeId, name, percentTotalVolume, tradingPairs, volumeUsd }) => {
                                    return (
                                        <tr key={exchangeId}>
                                            <td>{name}</td>
                                            <td>{parseFloat(percentTotalVolume).toFixed(2)}%</td>
                                            <td>{tradingPairs}</td>
                                            <td>${millify(volumeUsd)}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </main>
        </>

    )
}

export default CoinExchange