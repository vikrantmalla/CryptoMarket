import axios from "axios";

// Coins
export const getCryptosData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`https://api.coincap.io/v2/assets`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

// Single Coins
export const getSingleCoinData = async (id) => {
  try {
    const { data } = await axios.get(`https://api.coincap.io/v2/assets/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

// Single Coins Chart
export const getSingleCoinHistoricalChart = async (id, days = "M1") => {
  try {
    const { data } = await axios.get(
      `https://api.coincap.io/v2/assets/${id}/history?interval=${days}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Exchange
export const getExchangesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`https://api.coincap.io/v2/exchanges`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
