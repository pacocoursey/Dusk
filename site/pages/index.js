import React from 'react';
import Icons from '../components/Icons';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Colors from '../components/Colors';
import IconGrid from '../components/IconGrid';

class Index extends React.Component {
  constructor(props) {
    super(props);

    const icons = Icons({});

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

  updateColors(o) {
    const icons = Icons(o);
    this.setState({
      items: icons,
    });
  }

  render() {
    const { items, query } = this.state;

    return (
      <Layout>
        <Search onChange={e => this.filterList(e)} />
        <Colors handleClick={o => this.updateColors(o)} />
        <IconGrid icons={items} query={query} />
      </Layout>
    );
  }
}

export default Index;
