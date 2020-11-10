import React, { useState } from 'react';
import Categories from './components/Categories'
import Menu from './components/Menu'
import items from './data'
function App() {

  const [menuItems, setMenuItems] = useState(items);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>美食美客——菜单</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
