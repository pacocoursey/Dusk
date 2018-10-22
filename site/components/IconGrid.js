import React from 'react';

const IconGrid = ({ icons }) => (
  <div className="grid">

    {icons.map(icon => (
      <div>
        <div className="icon">
          <img src={icon.src} alt={`${icon.name} Icon`} />
        </div>
        <p>{icon.name}</p>
      </div>
    ))}

    <style jsx>
      {`
        .grid {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
          padding: 0 20px;
          max-width: 1100px;
        }

        .grid > div {
          width: 200px;
          height: 200px;
          min-width: 200px;
          border-radius: 3px;
          background-color: #f9f9f9;
          margin: 5px 5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: background-color 200ms;
        }

        .grid > div:hover {
          background-color: #efefef;
          transition: background-color 200ms;
        }

        .grid > div > .icon > img {
          height: 50px;
          width: auto;
        }
      `}
    </style>
  </div>
);

export default IconGrid;
