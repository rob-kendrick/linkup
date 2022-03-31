import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HiPencilAlt } from '../../../assets/HiPencilAlt.svg';
import HeaderMain from '../../../components/HeaderMain/HeaderMain';
import './MyEventsMenu.css';

interface Functions {
  filterHosted : () => void ;
  filterAttending : () => void;
}

function MyEventsMenu({ filterHosted, filterAttending } : Functions) {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(true);

  const onClickChange = (func : any) => {
    setToggle(!toggle);
    !toggle ? filterHosted() : filterAttending();
  };

  // useEffect(() => {
  //   filterHosted();
  // }, [])

  return (
    <div>
      <HeaderMain
        title="My Activities"
      />
      <div className="mem__main-container">
        {/* all buttons should be /src/components/Form/ButtonEventsMenu components */}

        <div className="mem__inner-left-container">
          <button
            type="button"
            className={toggle ? 'mem__selectors-btns-btn-active' : 'mem__selectors-btns-btn'}
            onClick={onClickChange}
          >
            <p>Hosting</p>
          </button>

          <button
            type="button"
            className={toggle ? 'mem__selectors-btns-btn' : 'mem__selectors-btns-btn-active'}
            onClick={onClickChange}
          >
            <p>Participating</p>
          </button>
        </div>

        <div className="mem__inner-right-container">
          <button
            type="button"
            className="mem__selectors-btns-btn"
            onClick={() => navigate('/myevents/create')}
          >
            <HiPencilAlt />
            <p>Create</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyEventsMenu;
