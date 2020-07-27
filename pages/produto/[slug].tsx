import { FunctionComponent } from 'react';
import useSWR from 'swr';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import axios from 'axios';
import productsMock from '../../products.json';

import LDefault from '@layouts/LDefault';
import MetaSeo from '@components/MetaSeo';
import Container from '@components/Container';
import Spacer from '@components/Spacer';
import { Product } from '@store/cart/types';

type Props = {
  product: Product;
};

const ProductPage: FunctionComponent<Props> = ({ product }): JSX.Element => {
  const seo = {
    title: 'Allan Galera - ZX Ventures Challenge',
    description: 'Allan Galera Challange to apply to ZX Ventures job :)',
  };
  return (
    <LDefault>
      <MetaSeo {...seo} />
      <Container>
        <Spacer />
        Under Construction :(
        <h1>{product.name}</h1>
        <Spacer />
      </Container>
    </LDefault>
  );
};

export default ProductPage;

export const getStaticProps: GetStaticProps = async context => {
  const product = productsMock.items.find(product => {
    return product.slug === context.params?.slug;
  });

  return {
    props: {
      product: product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = productsMock.items.map(product => {
    return {
      params: {
        slug: product.slug,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

// export const getServerSideProps: GetServerSideProps = async context => {};
