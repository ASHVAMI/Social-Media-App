export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  followers: string[];
  following: string[];
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  image?: string;
  likes: string[];
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  postId: string;
  content: string;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string;
}