import React, { useState } from 'react';
import { Image, Send } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface CreatePostProps {
  onSubmit: (content: string, image?: File) => void;
}

export default function CreatePost({ onSubmit }: CreatePostProps) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const { user } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content, image || undefined);
      setContent('');
      setImage(null);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={user?.avatar || 'https://via.placeholder.com/40'}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex-1">
          <h3 className="font-semibold">{user?.username}</h3>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          rows={3}
        />

        <div className="flex items-center justify-between">
          <label className="cursor-pointer flex items-center text-gray-500 hover:text-blue-500">
            <Image className="w-5 h-5 mr-2" />
            <span>Add Image</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
            disabled={!content.trim()}
          >
            <Send className="w-4 h-4 mr-2" />
            Post
          </button>
        </div>

        {image && (
          <div className="mt-3">
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="max-h-48 rounded-lg"
            />
          </div>
        )}
      </form>
    </div>
  );
}