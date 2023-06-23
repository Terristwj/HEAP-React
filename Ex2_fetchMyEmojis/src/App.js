import emojis from './resources/emojis.json';
import './App.css';
import { useState } from 'react';
import { Input } from 'semantic-ui-react';

export const App = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="AppWrapper">
      <div className="RowWrapper">
        <Input
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {emojis.map((emoji) => {
        if (emoji.name.includes(searchText))
          return <EmojiInfo emoji={emoji} key={emoji.name} />;
      })}
    </div>
  );
};

const EmojiInfo = ({ emoji }) => (
  <div className="RowWrapper">
    <div className="CharNameWrapper">
      <div className="EmojiInfo extraMarginRight">{emoji.character}</div>
      <div className="EmojiInfo">{emoji.name}</div>
    </div>
    <div className="EmojiInfo">{emoji.code}</div>
  </div>
);
