import React from 'react';
import { getPostById, getPostId } from '../../lib/posts';
import { GetStaticPaths, GetStaticProps } from 'next';

interface Props {
  post: any;
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

const PostDetailPage: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPostId();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const post = await getPostById(params.postId);
  return {
    props: {
      post,
    },
  };
};

export default PostDetailPage;
