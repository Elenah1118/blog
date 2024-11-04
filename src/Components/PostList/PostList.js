// //!!!CODIGO SIMPLIFICADO  
import React from 'react'; 
import './PostList.css'; 
const PostList = () => ( 
  <section id="posts"> 
    {[...Array(6)].map((_, index) => ( 
      <div className="post" key={index}> 
        <div className="post-image"> 
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/MAQUILLAJE.jpg" alt={`Post ${index + 1}`} /> 
        </div> 
        <div className="post-content"> 
          <h2>Post Title {index + 1}</h2> 
          <p>Discover the latest beauty secrets and expert tips to elevate your style.</p> 
          <a href="#leer-mas" className="read-more">Read More</a> 
        </div> 
      </div> 
    ))} 
  </section> 
); 
export default PostList; 
