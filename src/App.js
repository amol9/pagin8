import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Posts from './components/Posts'
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(function (res) {
    setPosts(res.data)
    //console.log(res.data.map(p => p.body))
    setLoading(false)
  })

  let getPagePosts = () => {
    //console.log(page)
    let start = (page - 1) * postsPerPage
    return posts.slice(start, start + postsPerPage)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        Pagin8
      </header>
      <Posts posts={getPagePosts()}/>
      <Pagination setPage={setPage} postsPerPage={postsPerPage} postsCount={posts.length} curPage={page} />
    </div>
  );
}

export default App;
