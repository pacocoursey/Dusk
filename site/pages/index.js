import React from 'react';
import Layout from '../components/Layout';
import Search from '../components/Search';
import IconGrid from '../components/IconGrid';
import icons from '../components/Icons';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialItems: icons,
      items: icons,
      query: '',
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
      query: e.target.value.toLowerCase(),
    });
  }

  render() {
    const { items, query } = this.state;

    return (
      <Layout>
        <Search onChange={e => this.filterList(e)} />
        <IconGrid icons={items} query={query} />
      </Layout>
    );
  }
}

export default Index;
