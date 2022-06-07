import Link from 'next/link';
import React from 'react';
import { getPosts } from '../../lib/posts';
import { GetStaticProps } from 'next';

interface Props {
  posts: [];
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

const PostListPage: React.FC<Props> = ({ posts }: Props) => {
  return (
    <div>
      {posts &&
        posts.map((post: any) => {
          return (
            <div key={post.id}>
              {post.title}
              <Link href={`/posts/${post.id}`}>
                <a>Xem thêm</a>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

export default PostListPage;
