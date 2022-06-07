import React from 'react';
import { getRandomJoke } from '../../lib/joke';
import { InferGetServerSidePropsType } from 'next';

type joke = {
  icon_url?: string;
  id?: string;
  url?: string;
  value?: string;
};

const RandomJoke = ({ joke }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div>{joke.value}</div>;
};

export const getServerSideProps = async () => {
  const joke = await getRandomJoke();
  return {
    props: {
      joke,
    },
  };
};

export default RandomJoke;
