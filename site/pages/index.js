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
      isColorsActive: false,
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
      initialItems: icons,
      items: icons,
    });
  }

  toggleColors() {
    this.setState(prevState => ({
      isColorsActive: !prevState.isColorsActive,
    }));
  }

  resetColors() {
    const icons = Icons({});
    this.setState({
      initialItems: icons,
      items: icons,
    });
  }

  render() {
    const { items, query, isColorsActive } = this.state;

    return (
      <Layout>
        <Search
          onChange={e => this.filterList(e)}
          handleClick={() => this.toggleColors()}
          active={isColorsActive}
        />

        <Colors
          applyColors={o => this.updateColors(o)}
          resetColors={() => this.resetColors()}
          active={isColorsActive}
        />

        <IconGrid icons={items} query={query} />
      </Layout>
    );
  }
}

export default Index;
