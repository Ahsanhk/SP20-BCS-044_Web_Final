import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/card';

function App() {
  const [post, setPost] = useState();

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get('https://dummyjson.com/posts');
      console.log(res.data.posts);
      setPost(res.data.posts);
      const data = await res.data;
      console.log(data);
      return data;
    }
    fetchPosts();
  },[]);
  
  return (
    <div className="App">
         
          {post.map((r) => (
                <Card
                  title={r.title}
                  body={r.body}
                  tags={r.tags}
                />
            ))};
    </div>
  );
}

export default App;
