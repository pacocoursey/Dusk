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

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialItems: icons,
      items: icons,
    };
  }

  filterList(e) {
    const { initialItems } = this.state;
    let list = initialItems;
    list = list.filter(item => item.name.toLowerCase().search(
      e.target.value.toLowerCase(),
    ) !== -1);

    this.setState({
      items: list,
    });
  }

  render() {
    const { items } = this.state;

    return (
      <Layout>
        <Search onChange={e => this.filterList(e)} />
        <IconGrid icons={items} />
      </Layout>
    );
  }
}

export default Index;
