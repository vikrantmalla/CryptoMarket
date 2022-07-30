import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";
import millify from 'millify';
import Navbar from '../components/Nav';
import { AiFillStar } from "react-icons/ai";
import "../styles/WatchList.css";


const CoinWatchList = () => {
    const { watchList, removeCoinToWatchList } = useContext(GlobalContext);

    return (
        <>
            <Navbar />
            <main>
                <h1 className='title'>Favorite Coins</h1>
                {watchList.length > 0 ? (
                    <table className='watchlistTable'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Coin</th>
                                <th>Price</th>
                                <th>24hrs change</th>
                                <th>Market Cap</th>
                            </tr>
                        </thead>
                        <tbody>
                            {watchList?.map((coin, index) => {
                                let price = millify(coin?.data?.priceUsd);
                                let changePercent = parseFloat(coin?.data?.changePercent24Hr).toFixed(2);
                                let profit = changePercent >= 0;
                                let market = millify(coin?.data?.marketCapUsd);
                                return (
                                    <tr key={index}>
                                        <td><button className='iconBtnn' onClick={() => removeCoinToWatchList(coin?.data?.id)}><AiFillStar /></button></td>
                                        <td>{coin?.data?.name}<br />{coin?.data?.symbol}</td>
                                        <td>${price}</td>
                                        <td style={{ color: profit > 0 ? "rgb(14, 203, 129)" : "red", }}>
                                            {profit && '+'}{changePercent}
                                        </td>
                                        <td>${market}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                ) : (
                    <div className='message'><h1>Watchlist is Empty pls add favourite coins</h1></div>
                )}
            </main>
        </>
    )
}

export default CoinWatchList