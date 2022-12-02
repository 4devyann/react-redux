import React from 'react'
import PostAuthor from '../PostAuthor';
import PostTimeAgo from '../PostTimeAgo';
import PostReactionButtons from '../PostReactionButtons';
import { Link } from 'react-router-dom';
import { Article } from './style';

const PostsExcerpt = ({ post }) => {
  return (
    <Article>
      <h2>{post.title}</h2>
      <p className='post-content'>{post.body.substring(0,75)}...</p>
      <p className='post-info'>
        <Link className='link-to' to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId}/>
        <PostTimeAgo timestamp={post.date} />
      </p>
      <PostReactionButtons post={post} />
    </Article>
  )
}

export default PostsExcerpt;