import React from 'react';
import { getRandomJoke } from '../../lib/joke';
import { InferGetServerSidePropsType } from 'next';
import { GetServerSideProps } from 'next';

type Props = {
  joke?: any;
  icon_url?: string;
  id?: string;
  url?: string;
  value?: string;
};

const RandomJoke: React.FC<Props> = ({ joke }) => {
  return <div>{joke.value}</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const joke = await getRandomJoke();
  // joke = false;
  // if (!joke)
  //   return {
  //     notFound: true,
  //   };
  // return {
  //   redirect: {
  //     destination: '/posts',
  //     permanent: false,
  //   },
  // };
  return {
    props: {
      joke,
    },
  };
};

export default RandomJoke;
