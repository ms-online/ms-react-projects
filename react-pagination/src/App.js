import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Posts } from './components/Posts'
import { Pagination } from './components/Pagination'

function App() {
  // 博客总数
  const [posts, setPosts] = useState([]);
  //加载提示
  const [loading, setLoading] = useState(false);
  //当前页码
  const [currentPage, setCurrentPage] = useState(1);
  //每一页显示的博客数
  const [postsPerPage] = useState(10);

  //请求数据
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://jsonplaceholder.typicode.com/posts')
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, [])
  
//获取当前页面显示的post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // 切换页面
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">我的博客</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
