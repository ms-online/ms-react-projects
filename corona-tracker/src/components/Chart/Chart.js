import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'

export const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchMyAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchMyAPI();
  }, []);
    // console.log(dailyData)
    // 设置折线图图表
    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed.total),
                        label: '确诊人数',
                        borderColor: '#3333ff',
                        fill: true
                    },
                    {
                        data: dailyData.map((data) => data.recovered.total),
                        label: '治愈人数',
                        borderColor: 'rgba(0, 255, 0 ,0.5)',
                        fill: true
                    },
                    {
                        data: dailyData.map((data) => data.deaths.total),
                        label: '死亡人数',
                        borderColor: 'rgba(255, 0, 0 ,0.5)',
                        fill: true
                    },
                    ]
                }}
            
            />
        ) :null
    )

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}
