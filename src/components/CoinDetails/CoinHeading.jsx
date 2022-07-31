import React, { useContext } from 'react'
import { GlobalContext } from "../../context/GlobalState";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const CoinHeading = ({ cryptoDetails, id }) => {

    const { addCoinToWatchList, removeCoinToWatchList, watchList } = useContext(GlobalContext);

    // Check whether click on remove or add button
    let status = watchList.find((m) => {
        return (
            m?.data?.id == cryptoDetails?.data?.id
        )
    })

    let changePercent = parseFloat(cryptoDetails?.data?.changePercent24Hr).toFixed(2);
    let profit = changePercent >= 0;

    return (
        <div className='coin-cointainer'>
            <div className='coin-info'>
                <h1>{id}<span>({cryptoDetails?.data?.symbol})</span></h1>
                <button className='iconBtn' onClick={() => status ? removeCoinToWatchList(cryptoDetails?.data?.id) : addCoinToWatchList(cryptoDetails)}>
                    {status ? < AiFillStar /> : < AiOutlineStar />}
                </button>
            </div>
            <div className='coin-highlight'>
                <button className='rank'>Rank #{cryptoDetails?.data?.rank}</button>
                <button style={{ background: profit > 0 ? "rgb(14, 203, 129)" : "red", color: "#fff" }}>{profit && '+'}{changePercent}</button>
                <a href={cryptoDetails?.data?.explorer} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                    <button className='mInfo'>More info</button>
                </a>
            </div>
        </div>
    )
}

export default CoinHeading