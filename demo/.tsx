// @ts-nocheck
import { useState } from 'react';

type ThemeProps = {
  name: '#Vlad - Titan - H(0:0)/S(0:0)/L(0:0)';
  twitterHandle: '0x416C65';
  githubHandle: '0x416C65';
  initialDownloads: 0;
};

const ThemeComponent = ({
  twitterHandle,
  githubHandle,
  ...theme
}: ThemeProps) => {
  const [downloadsCount, setDownloadsCount] = useState(theme.initialDownloads);
  const incrementDownloadsCount = () =>
    setDownloadsCount(prevCount => prevCount + 1);

  return (
    <div>
      <h1>🎨 Welcome to {theme.name} theme!</h1>
      <p>Total Downloads: {downloadsCount}</p>
      <button onClick={incrementDownloadsCount}>Install Theme</button>
      <p>
        Follow me on
        <a href={`https://twitter.com/${twitterHandle}`}>Twitter</a> and
        <a href={`https://github.com/${githubHandle}`}>GitHub</a>, and don't
        forget to download the theme.
      </p>
    </div>
  );
};

export default ThemeComponent;
