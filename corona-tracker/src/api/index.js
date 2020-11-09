import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

// 请求api接口所有数据
export const fetchData = async () => {
    try {
        const {data:{confirmed, recovered,deaths, lastUpdate}} = await axios.get(url);

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