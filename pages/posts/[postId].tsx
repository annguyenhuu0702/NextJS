import React from 'react';
import { getPostById, getPostId } from '../../lib/posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface Props {
  post: any;
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

const PostDetailPage: React.FC<Props> = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPostId(5);
  console.log(paths);
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const post = await getPostById(params.postId);
  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};

export default PostDetailPage;
