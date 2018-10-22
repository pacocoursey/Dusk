import React from 'react';
import Layout from '../components/Layout';
import Search from '../components/Search';
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
  {
    src: 'https://via.placeholder.com/100x100',
    name: 'Books',
  },
  {
    src: 'https://via.placeholder.com/100x100',
    name: 'Calculator',
  },
  {
    src: 'https://via.placeholder.com/100x100',
    name: 'Calendar',
  },
  {
    src: 'https://via.placeholder.com/100x100',
    name: 'Camera',
  },
];

const Index = () => (
  <Layout>
    <Search />
    <IconGrid icons={icons} />
  </Layout>
);

export default Index;
