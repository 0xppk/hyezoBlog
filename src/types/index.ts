import { Prisma, PrismaClient } from "@prisma/client";
import { Session } from "next-auth";

export interface GraphqlContext {
  session: Session | null;
  prisma: PrismaClient;
}

/**
 * * 유저
 */
export interface CreateUsernameData {
  createUsername: {
    success: boolean;
    error: string;
  };
}
export interface CreateUsernameInput {
  username: string;
}
export interface CreateUsernameResponse {
  success?: boolean;
  error?: string;
}

export interface SearchUsersData {
  searchUsers: Array<SearchedUser>;
}
export interface SearchUsersInput {
  username: string;
}
export interface SearchedUser {
  id: string;
  username: string;
}

/**
 * * 코멘트
 */
export interface LoadCommentsData {
  loadComments: LoadComment[];
}
export interface LoadCommentsInput {
  postId: string;
}
export interface LoadComment {
  id: string;
  nickname: string;
  message: string;
  postId: string;
  profileImage: string;
  createdAt: string;
  updatedAt: string;
  parentId: string | null;
  secret: boolean;
}

export interface CreateCommentData {
  success?: boolean;
  error?: string;
}
export interface CreateCommentInput {
  message: string;
  postId: string;
}
export interface CreateCommentResponse {
  success?: boolean;
  error?: string;
}

export interface DeleteCommentData {
  success?: boolean;
  error?: string;
}
export interface DeleteCommentInput {
  commentId: string;
  nickname: string;
}
export interface DeleteCommentResponse {
  success?: boolean;
  error?: string;
}

export interface UpdateCommentData {
  success?: boolean;
  error?: string;
}
export interface UpdateCommentInput {
  commentId: string;
  message: string;
}
export interface UpdateCommentResponse {
  success?: boolean;
  error?: string;
}