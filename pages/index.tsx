import React from 'react';
import Button from '@components/Button';
import MetaSeo from '@components/MetaSeo';

const Home: React.FunctionComponent<any> = (): JSX.Element => {
  const seo = {
    title: 'Allan Galera - ZX Ventures Challenge',
    description: 'Allan Galera Challange to apply to ZX Ventures job :)',
  };
  const handleClick = () => {
    console.log('Home');
  };
  return (
    <div>
      <MetaSeo {...seo} />
      <Button text="my button" handleClick={handleClick} />
    </div>
  );
};

export default Home;
