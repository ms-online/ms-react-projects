import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data'
function App() {
  //初始化state值
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people]);

  //自动播放
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000);
    return ()=> clearInterval(slider)
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>评价信息
        </h2>
      </div>
      {/* 详情 */}
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person
          //动态添加class属性
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
              position ='lastSlide';
          };

          //样式
          return (
            <article  className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title }</p>
              <p className="title">{quote}</p>
              <FaQuoteRight className="icon"/>
            </article>
          )
        })}
        <button className="prev"  onClick={()=> setIndex(index - 1)}>
          <FiChevronLeft/>
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight/>
        </button>
      </div>
    </section>
  );
}

export default App;
