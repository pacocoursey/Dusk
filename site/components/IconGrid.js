import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
`;

const Icon = styled.div`
  flex: 1;
  min-width: 200px;
  max-width: 49%;
  height: 200px;
  border-radius: 5px;
  background-color: #f9f9f9;

  padding: 20px 0;
  margin: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: background-color 200ms;

  :hover {
    background-color: #efefef;
  }
`;

const IconGrid = ({ icons }) => (
  <Grid>

    {icons.map(icon => (
      <Icon key={icon.name}>
        <div>
          {icon.svg}
        </div>
        <p>{icon.name}</p>
      </Icon>
    ))}
  </Grid>
);

export default IconGrid;
