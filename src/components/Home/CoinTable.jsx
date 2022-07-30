import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import SearchBar from './SearchBar';
import Coin from './Coin';
import '../../styles/CoinTable.css'

function CoinTable() {
    const { data, isLoading, query, searchCoin, page } = useContext(GlobalContext);

    const navigate = useNavigate();

    const handleSearch = () => {
        return data.filter(
            (data) =>
                data.name.toLowerCase().includes(query) ||
                data.symbol.toLowerCase().includes(query)
        );
    };

    const goRouteId = (id) => {
        navigate(`coin/${id}`);
    }



    if (isLoading) {
        return (
            <>
                <h1>...Loading</h1>
            </>
        )
    }
    return (
        <>

            <SearchBar searchCoin={searchCoin} query={query} />
            <Coin handleSearch={handleSearch} page={page} goRouteId={goRouteId} />

        </>

    );
}

export default CoinTable;