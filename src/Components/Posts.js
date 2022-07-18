import React from "react";
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table>
      <tr>
        <b>Title</b>
      </tr>
      {posts.map((post) => (
        <tr>
          <td key={post.id}>
            <li>
              <b> Shipper:</b> &emsp; {post.title}
            </li>
            <li>
              <b> Reciver:</b> &emsp;{post.title}
            </li>
            <li>
              <b> Delivery Time:</b> &emsp;{post.title}
            </li>
            <li>
              <b>Status:</b> &emsp;{post.title}
            </li>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Posts;
