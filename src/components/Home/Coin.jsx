import React from 'react'
import millify from 'millify';
const Coin = ({ handleSearch, page, goRouteId }) => {
    return (
        <div className="wrappers">
            <table className='coins'>
                <thead>
                    <tr>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>24hrs change</th>
                        <th>Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Here data is slice in 20 */}
                    {handleSearch().length > 0 ? handleSearch().slice((page - 1) * 20, (page - 1) * 20 + 20).map(({ id, symbol, name, priceUsd, changePercent24Hr, marketCapUsd }) => {
                        let price = millify(priceUsd);
                        let changePercent = parseFloat(changePercent24Hr).toFixed(2);
                        let profit = changePercent >= 0;
                        let market = millify(marketCapUsd);
                        return (
                            <tr key={id} onClick={() => goRouteId(id)}>
                                <td>{name}<br />{symbol}</td>
                                <td>${price}</td>
                                <td style={{ color: profit > 0 ? "rgb(14, 203, 129)" : "red", }}>
                                    {profit && '+'}{changePercent}
                                </td>
                                <td>${market}</td>
                            </tr>
                        )
                    }) : <tr>
                        <td>No results found</td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Coin