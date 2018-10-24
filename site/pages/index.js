import React from 'react';
import { ActivityMonitor, FaceTime } from 'dusk-react';
import Layout from '../components/Layout';
import Search from '../components/Search';
import IconGrid from '../components/IconGrid';

const icons = [
  {
    svg: <ActivityMonitor size={100} />,
    name: 'Activity Monitor',
  },
  {
    svg: <FaceTime size={100} />,
    name: 'FaceTime',
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
