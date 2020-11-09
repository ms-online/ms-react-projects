import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'

export const Chart = ({data:{confirmed, recovered,deaths, lastUpdate}, country}) => {
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

    //创建国家疫情数据的柱状图
    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['确诊人数', '累计治愈', '死亡人数'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)',
                        ],
                        data:[confirmed.value, recovered.value, deaths.value]
                }]
                }}
                option={{
                    legend:{display:false},
                    title:{diplay:true, text:`${country}的新冠肺炎实时数据`},
                }}
            
            />
        ) :null
    )

    return (
        <div className={styles.container}>
            {country ? barChart:lineChart}
        </div>
    )
}
