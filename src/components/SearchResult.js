import React from 'react';
import HandFootRules from './HandFootRules';
import HandFootScores from './HandFootScores';
import GinRummyRules from './GinRummyRules';

const SearchResult = (props) => {
  const {setCategory, selectedCategory} = props;

  return (
      <React.Fragment>
        <div className="search-buttons">
          {(
              <button
                  className={`${
                      selectedCategory === 'hand-foot-rules' ? 'btn active' : 'btn'
                  }`}
                  onClick={() => setCategory('hand-foot-rules')}
              >
                ✋ & 🦶 Rules
              </button>
          )}
          {(
              <button
                  className={`${
                      selectedCategory === 'hand-foot-scores' ? 'btn active' : 'btn'
                  }`}
                  onClick={() => setCategory('hand-foot-scores')}
              >
                ✋ & 🦶 Scoring
              </button>
          )}
          {(
              <button
                  className={`${
                      selectedCategory === 'gin-rummy-rules' ? 'btn active' : 'btn'
                  }`}
                  onClick={() => setCategory('gin-rummy-rules')}
              >
                🍸🥃 Rules
              </button>
          )}
        </div>
        <div className={`${selectedCategory === 'hand-foot-rules' ? '' : 'hide'}`}>
          <HandFootRules/>
        </div>
        <div className={`${selectedCategory === 'hand-foot-scores' ? '' : 'hide'}`}>
          <HandFootScores/>
        </div>
        <div className={`${selectedCategory === 'gin-rummy-rules' ? '' : 'hide'}`}>
          <GinRummyRules/>
        </div>
      </React.Fragment>
  );
};

export default SearchResult;