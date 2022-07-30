import React from 'react'
import millify from 'millify';

const CoinStats = ({ cryptoDetails }) => {
    const stats1 = [
        {
            title: 'Rank',
            value: `${cryptoDetails?.data?.rank}`
        },
        {
            title: 'Market Cap',
            value: `${millify(cryptoDetails?.data?.marketCapUsd)}`
        },
        {
            title: 'Change Price(24hrs)',
            value: `${parseFloat(cryptoDetails?.data?.changePercent24Hr).toFixed(2)}`
        },
    ];

    const stats2 = [
        {
            title: 'Supply',
            value: `${millify(cryptoDetails?.data?.supply)}`
        },
        {
            title: 'Volume',
            value: `${millify(cryptoDetails?.data?.volumeUsd24Hr)}`
        },
    ];
    return (
        <div className='coin-infos'>
            <div>
                {
                    stats1.map((items, index) => {
                        return (
                            <div className="coinStats" key={index}>
                                <h3>{items.title}</h3>
                                <p>{items.value}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {
                    stats2.map((items, index) => {
                        return (
                            <div className="coinStats" key={index}>
                                <h3>{items.title}</h3>
                                <p>{items.value}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CoinStats