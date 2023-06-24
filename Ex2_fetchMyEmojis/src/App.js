// import emojis from './resources/emojis.json';
import './App.css';
import { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { debounce } from 'lodash';

export const App = () => {
  const [searchText, setSearchText] = useState('');

  const getEmoji = async (text) => {
    const key = 'd83d6625130d0dcf38ac73e8be14879d9f2f08ed';
    const url = `https://emoji-api.com/emojis?search=${text}&access_key=${key}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  };

  return (
    <div className="AppWrapper">
      <div className="RowWrapper">
        <Input
          fluid
          icon="search"
          placeholder="Search..."
          // onChange={async (e, data) => {
          //   await debounce(() => {});
          // }}
          onChange={async (e) => setSearchText(e.target.value)}
        />
      </div>
      {debounce(
        getEmoji.map((emoji) => {
          if (emoji.name.includes(searchText))
            return <EmojiInfo emoji={emoji} key={emoji.name} />;
        }),
        1000,
      )}
      ;
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
