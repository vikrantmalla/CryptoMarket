import React, { useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import { getCryptosData } from '../services/cryptoApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    isLoading: true,
    page: 1,
    nbPages: 5,
    data: [],
    query: "",
    watchList: window.localStorage.getItem('watchList') ? JSON.parse(window.localStorage.getItem('watchList')) : [],
}



// Context creation
export const GlobalContext = React.createContext();

const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Fetch all coins
    useEffect(() => {
        getCryptosData().then((data) => {
            dispatch({
                type: "GET_COINS",
                payload: {
                    coins: data,
                },
            });
        })
    }, []);

    // Refresh when watchlist localstorage state 
    useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(state.watchList));
    }, [state]);

    // Actions
    // Next page Action
    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE"
        })
    }
    // Previous page Action
    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE"
        })
    }

    // Search input Action
    const searchCoin = (searchquery) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchquery
        })
    }

    // Add coins in watchlist Action
    const addCoinToWatchList = (coin) => {
        toast.success(`${coin?.data?.id} is Add in Whistlist`, { theme: "dark" })
        dispatch({
            type: "ADD_TO_WATCHLIST",
            payload: coin
        })
    }

    // Remove coins in watchlist Action
    const removeCoinToWatchList = (id) => {
        toast.error(`${id} is Removed from Whishlist`, { theme: "dark" })
        dispatch({
            type: "REMOVE_TO_WATCHLIST",
            payload: id
        })
    }

    return (
        // Provider creation
        <>
            <GlobalContext.Provider value={{ ...state, searchCoin, getNextPage, getPrevPage, addCoinToWatchList, removeCoinToWatchList }}>
                {props.children}
            </GlobalContext.Provider>
        </>
    )

};

export default GlobalProvider

