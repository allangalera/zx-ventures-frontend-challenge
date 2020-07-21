import { FunctionComponent } from 'react';
import useSWR from 'swr';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

const fetcher = url => fetch(url).then(res => res.json());

import LDefault from '@layouts/LDefault';
import MetaSeo from '@components/MetaSeo';
import Container from '@components/Container';
import Spacer from '@components/Spacer';
import ProductGallery from '@components/ProductGallery';

const Home: FunctionComponent<any> = (): JSX.Element => {
  const { data, error } = useSWR('/api/products', fetcher);
  console.log(data);
  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>
  const seo = {
    title: 'Allan Galera - ZX Ventures Challenge',
    description: 'Allan Galera Challange to apply to ZX Ventures job :)',
  };

  return (
    <LDefault>
      <MetaSeo {...seo} />
      <Container>
        <Spacer />
        {data && <ProductGallery products={data.items.slice(0, 10)} />}
        <Spacer />
      </Container>
    </LDefault>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps = async context => {};

// export const getStaticPaths: GetStaticPaths = async () => {};

// export const getServerSideProps: GetServerSideProps = async context => {};
