import React from "react";

export default function Layout(props) {
  const { children } = props;

  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFIEND</h1>
        <p>For Coffee Insatiates</p>
      </div>
      <button>
        <p>Sign up free</p>
        <i className="fa-solid fa-mug-hot"></i>
      </button>
    </header>
  );

  const footer = (
    <footer>
      <p>
        <span className="text-gradient">Caffiend</span> was made by{" "}
        <a href="http://www.babashoy.com" target="_blank">
          Babashoy
        </a>{" "}
        <br />
        using the{" "}
        <a href="http://www.fantacss.smoljames.com" target="_blank">
          FantaCSS
        </a>{" "}
        design library.
      </p>
    </footer>
  );
  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
