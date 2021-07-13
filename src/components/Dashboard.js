import React, {useState} from 'react';
import SearchResult from './SearchResult';
import Header from './Header';

const Dashboard = (props) => {
  const [selectedCategory, setSelectedCategory] = useState('hand-foot-rules');


  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
      <React.Fragment>
        <div>
          <Header/>
          <SearchResult
              setCategory={setCategory}
              selectedCategory={selectedCategory}
          />
        </div>
      </React.Fragment>
  );
};

export default Dashboard;