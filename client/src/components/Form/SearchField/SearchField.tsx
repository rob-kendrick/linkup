import React, { useEffect, useState } from 'react';
import './SearchField.css';
import '../../../assets/HiSearch.svg';
import userMockData from '../../../utilities/mocks/db-data/users-db-data.json';
import UserListItem from '../../SelectUsers/UserList/UserListItem/UserListItem';

function SearchField({ data }: any) {
  const [result, setResult] = useState({});
  const [query, setQuery] = useState('');

  data = userMockData.data;

  useEffect(() => {
    console.log(result, '<<<RESSSSS');
  }, [query]);

  const search = () => {
    for (let i = 1; i < data.length; i++) {
      if (data[i].first_name.toLowerCase().includes(query.toLowerCase())) {
        setResult(data[i]);
      }
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('data!!!!!!!', data);
    const userInput = event.target.value;
    setQuery(userInput);
    search();
  };

  return (
    <div className="searchField-container">
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleInput}
        />
      </div>
    </div>
  );
}

export default SearchField;
