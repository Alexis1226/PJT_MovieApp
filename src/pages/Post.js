import React from 'react';

function Post({ match }) {
  return (
    <div id="post">
      <h2>ID is ={match.params.id}</h2>
    </div>
  );
}

export default Post;
