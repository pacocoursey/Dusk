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
  height: 200px;
  border-radius: 3px;
  background-color: #f9f9f9;
  margin: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
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
        <div className="icon">
          <img src={icon.src} alt={`${icon.name} Icon`} />
        </div>
        <p>{icon.name}</p>
      </Icon>
    ))}
  </Grid>
);

export default IconGrid;
