import React , { useState }from 'react';
import Values from 'values.js'

function App() {
   
  //初始化保存的state
  const [color, setColor] = useState('');
  const [list, setList] = useState(new Values('#f15025').all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)
      console.log(color,list)
    } catch (error) {
      setError(true)
      console.log(error);
    }
    
    
  }
  

  return (
    <>
      <section className="container">
        <h3>颜色生成器</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="#f15025" onChange={(e) => setColor(e.target.value)} className={ `${error ? 'error' : null}`}/>
          <button className="btn" type="submit" >提交</button>
        </form>
      </section>
      <section>
          颜色列表
      </section>
    </>
  );
}

export default App;
