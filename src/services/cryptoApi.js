import axios from "axios";

// Coins
const API_KEY = import.meta.env.VITE_COINCAP_API_KEY;
console.log(API_KEY);

export const getCryptosData = async () => {
  try {
    const response = await axios.get('https://api.coincap.io/v3/assets', {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error;
  }
};

// Single Coins
export const getSingleCoinData = async (id) => {
  try {
    const { data } = await axios.get(`https://api.coincap.io/v3/assets/${id}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

// Single Coins Chart
export const getSingleCoinHistoricalChart = async (id, days = "M1") => {
  try {
    const { data } = await axios.get(
      `https://api.coincap.io/v3/assets/${id}/history?interval=${days}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
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
    } = await axios.get(`https://api.coincap.io/v3/exchanges`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
