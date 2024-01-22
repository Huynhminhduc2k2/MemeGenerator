import react from 'react';

export default function Header() {
  return (
    <header className="header">
      <img
        className="header--logo"
        src="./images/TrollFace.png"
        alt="nav logo"
      />
      <h1 className="header--title">Meme Generator</h1>
      <h4>React Course - Project 3</h4>
    </header>
  );
}
