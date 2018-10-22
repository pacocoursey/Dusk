import React from 'react';
import Layout from '../components/Layout';
import IconGrid from '../components/IconGrid';

const icons = [
  {
    src: 'https://via.placeholder.com/100x100',
    name: 'Safari',
  },
  {
    src: 'https://via.placeholder.com/100x100',
    name: 'Atom',
  },
  {
    src: 'https://via.placeholder.com/100x100',
    name: 'Hyper',
  },
  {
    src: 'https://via.placeholder.com/100x100',
    name: 'Finder',
  },

];

const Index = () => (
  <Layout>
    <IconGrid icons={icons} />
  </Layout>
);

export default Index;
