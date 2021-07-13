import React from 'react';
import AlbumsList from './AlbumsList';
import ArtistsList from './ArtistsList';
import PlayList from './PlayList';

const SearchResult = (props) => {
  const {setCategory, selectedCategory} = props;

  return (
      <React.Fragment>
        <div className="search-buttons">
          {(
              <button
                  className={`${
                      selectedCategory === 'albums' ? 'btn active' : 'btn'
                  }`}
                  onClick={() => setCategory('albums')}
              >
                ✋ & 🦶 Rules
              </button>
          )}
          {(
              <button
                  className={`${
                      selectedCategory === 'artists' ? 'btn active' : 'btn'
                  }`}
                  onClick={() => setCategory('artists')}
              >
                ✋ & 🦶 Scoring
              </button>
          )}
          {(
              <button
                  className={`${
                      selectedCategory === 'playlist' ? 'btn active' : 'btn'
                  }`}
                  onClick={() => setCategory('playlist')}
              >
                🍸🥃 Rules
              </button>
          )}
        </div>
        <div className={`${selectedCategory === 'albums' ? '' : 'hide'}`}>
          <AlbumsList/>
        </div>
        <div className={`${selectedCategory === 'artists' ? '' : 'hide'}`}>
          <ArtistsList/>
        </div>
        <div className={`${selectedCategory === 'playlist' ? '' : 'hide'}`}>
          <PlayList/>
        </div>
      </React.Fragment>
  );
};

export default SearchResult;