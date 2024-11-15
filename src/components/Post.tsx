import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Post as PostType } from '../types';
import { useAuth } from '../context/AuthContext';

interface PostProps {
  post: PostType;
  onLike: (postId: string) => void;
  onComment: (postId: string, content: string) => void;
}

export default function Post({ post, onLike, onComment }: PostProps) {
  const { user } = useAuth();
  const [comment, setComment] = React.useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onComment(post.id, comment);
      setComment('');
    }
  };

  const isLiked = user ? post.likes.includes(user.id) : false;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={post.image || 'https://via.placeholder.com/40'}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold">{post.userId}</h3>
          <p className="text-gray-500 text-sm">
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </p>
        </div>
      </div>

      <p className="mb-4">{post.content}</p>

      {post.image && (
        <img
          src={post.image}
          alt="Post content"
          className="rounded-lg mb-4 w-full"
        />
      )}

      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => onLike(post.id)}
          className={`flex items-center ${
            isLiked ? 'text-red-500' : 'text-gray-500'
          } hover:text-red-500`}
        >
          <Heart className="w-5 h-5 mr-1" />
          <span>{post.likes.length}</span>
        </button>
        <button className="flex items-center text-gray-500">
          <MessageCircle className="w-5 h-5 mr-1" />
          <span>{post.comments.length}</span>
        </button>
        <button className="flex items-center text-gray-500">
          <Share2 className="w-5 h-5 mr-1" />
        </button>
      </div>

      <form onSubmit={handleSubmitComment}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>

      <div className="mt-4 space-y-2">
        {post.comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-2">
            <img
              src="https://via.placeholder.com/32"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 bg-gray-100 rounded-lg p-2">
              <p className="font-semibold text-sm">{comment.userId}</p>
              <p className="text-sm">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}