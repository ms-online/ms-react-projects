import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

// 请求api接口所有数据
export const fetchData = async (country) => {
    let changeableUrl = url;
    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const {data:{confirmed, recovered,deaths, lastUpdate}} = await axios.get(changeableUrl);

        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
    } catch (error) {
        console.log(error)
    }
}

// 请求api接口每日数据
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => (
            {
                confirmed: dailyData.confirmed,
                recovered: dailyData.recovered,
                deaths: dailyData.deaths,
                date:dailyData.reportDate,
            }
        ))
        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}

// 请求api接口的国家数据
export const fetchCountries = async () => {
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map(country => country.name);
    } catch (error) {
        console.log(error)
    }
}