import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  max-width: 990px;
  padding: 20px;
  margin-bottom: 30px;

  border-radius: 3px;
  border: 1px solid #efefef;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${props => (props.active ? 'display: flex' : 'display: none')}
`;

const Input = styled.div`
  width: 25%;
  min-width: 200px;
  border-radius: 3px;
  margin: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 4px;
`;

const Name = styled.div`
  margin: 0 10px;

  color: #868e96;

  font-size: 12px;
  text-transform: uppercase;
`;

const TextInput = styled.input`
  flex: 1;

  min-width: 0;
  padding: 15px;

  border: 0;
  border-radius: 0 3px 3px 0;
  border-left: 1px solid #dee2e6;

  font-size: 16px;
  background-color: #fff;

  outline: none;
  transition: border 200ms;

`;

const Button = styled.button`
  padding: 15px;
  margin: 10px;

  color: #343a40;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  border-radius: 3px;
  border: 1px solid #dee2e6;

  cursor: pointer;
  outline: none;
  background-color: transparent;
  transition: background-color 200ms;

  :hover {
    background-color: #f8f9fa;
  }

  :active {
    background-color: #f1f3f5;
  }
`;

const Reset = styled.button`
  padding: 15px;

  color: #868e96;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;

  border: 0;
  border-radius: 3px;

  cursor: pointer;
  outline: none;
  background-color: transparent;
  transition: background-color 200ms;

  :hover {
    background-color: #f8f9fa;
  }

  :active {
    background-color: #f1f3f5;
  }
`;

class Colors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bg: '',
      fg: '',
      fg2: '',
    };
  }

  render() {
    const { active, applyColors, resetColors } = this.props;

    return (
      <Box active={active}>
        <Input>
          <Name>Background</Name>
          <TextInput
            type="text"
            defaultValue="#1e1e1e"
            maxLength={7}
            onChange={e => this.setState({ bg: e.target.value })}
          />
        </Input>

        <Input>
          <Name>Foreground</Name>
          <TextInput
            type="text"
            defaultValue="#fff"
            maxLength={7}
            onChange={e => this.setState({ fg: e.target.value })}
          />
        </Input>

        <Input>
          <Name>Secondary</Name>
          <TextInput
            type="text"
            defaultValue="#efefef"
            maxLength={7}
            onChange={e => this.setState({ fg2: e.target.value })}
          />
        </Input>

        <Reset onClick={() => resetColors()}>
          Reset
        </Reset>

        <Button onClick={() => applyColors(this.state)}>
          Apply
        </Button>
      </Box>
    );
  }
}

export default Colors;
