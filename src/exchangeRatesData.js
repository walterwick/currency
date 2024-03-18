let exchangeRatesData = {
    data: {},
};
const url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_wV4tyGpV9qmAwUGlJoakGj3ZCs7SSdcmrxkH58bv`;

const fetchExchangeRates = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch exchange rates");
        }
        const data = await response.json();
        exchangeRatesData = { data: data.data };
        console.log(exchangeRatesData);
    } catch (error) {
        console.error(error);
    }
};
export { exchangeRatesData, fetchExchangeRates };
