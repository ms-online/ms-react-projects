import React,{ useState,useEffect } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project'
function App() {
  //初始化状态
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  //请求数据
  const fetchTours = async () =>{
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  //useEffect
  useEffect(() => {
    fetchTours();
  }, [])
  console.log(tours)
  //判断加载
  if (loading) {
    return (
      <main>
        <Loading tours={tours}/>
      </main>
    )
  }
  return (
    <div className="App">
      <Tours/>
    </div>
  );
}

export default App;
