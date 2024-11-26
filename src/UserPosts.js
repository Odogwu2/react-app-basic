import React from 'react'

const UserPosts = (props) => {
    return (
      <div>
        <h1>User Posts</h1>
        <ul>
          {props.posts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
      </div>
    );
  };
  

export default UserPosts
