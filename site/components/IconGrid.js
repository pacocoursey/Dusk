import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 20px;
  width: 100%;
  max-width: 1100px;
`;

const Icon = styled.div`
  width: 200px;
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
      <Icon>
        <div className="icon">
          <img src={icon.src} alt={`${icon.name} Icon`} />
        </div>
        <p>{icon.name}</p>
      </Icon>
    ))}
  </Grid>
);

export default IconGrid;
