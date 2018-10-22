import React from 'react';

const Header = () => (
  <header>
    <div>
      <a href="https://github.com/pacocoursey/dusk">
        <div>Docs</div>
      </a>

      <a href="https://github.com/pacocoursey/dusk#cli" target="_blank" rel="noopener noreferrer">
        <div>CLI</div>
      </a>
    </div>

    <div>
      <div className="logo">Dusk</div>
    </div>

    <div>
      <a href="https://github.com/pacocoursey/dusk">
        <div>GitHub</div>
      </a>
    </div>

    <style jsx>
      {`
        header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 75px;
          border-bottom: 1px solid #eee;
          padding: 0 50px;
          margin-bottom: 10px;
          box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
        }

        header > div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin: 0 -15px;
        }

        header > div > a {
          text-decoration: none;
          padding: 0 15px;
          color: #757575;
          cursor: pointer;
          transition: color 200ms;
        }

        header > div > a:hover {
          color: #000;
          transition: color 200ms;
        }

        .logo {
          color: #000;
          font-size: 24px;
          font-weight: 800;
        }
      `}
    </style>
  </header>
);

export default Header;
