export default (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_COINS":
      return {
        ...state,
        isLoading: false,
        data: action.payload.coins,
      };
    case "SEARCH_QUERY":
      let pageNum = (state.nbPages = 1);
      if (state.query.length === 1) {
        state.nbPages = 5;
      }
      return {
        ...state,
        query: action.payload,
        page: pageNum,
      };
    case "NEXT_PAGE":
      let pageNumInc = state.page + 1;
      if (pageNumInc > state.nbPages) {
        pageNumInc = 1;
      }
      return {
        ...state,
        page: pageNumInc,
      };
    case "PREV_PAGE":
      let pageNumDec = state.page - 1;
      if (pageNumDec <= 1) {
        pageNumDec = 1;
      }
      return {
        ...state,
        page: pageNumDec,
      };
    case "ADD_TO_WATCHLIST":
      const newCoinList = [...state.watchList, action.payload];
      window.localStorage.setItem("watchList", JSON.stringify(newCoinList));
      return {
        ...state,
        watchList: newCoinList,
      };
    case "REMOVE_TO_WATCHLIST":
      const originalCoinList = state.watchList;
      const filtredCoinList = originalCoinList.filter(
        (f) => f?.data?.id !== action.payload
      );
      return {
        ...state,
        watchList: filtredCoinList,
      };
    default:
      return state;
  }
};
