import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HiPencilAlt } from '../../../assets/HiPencilAlt.svg';
import './MyEventsMenu.css';

interface Functions {
  filterHosted : () => void ;
  filterAttending : () => void;
}

function MyEventsMenu({ filterHosted, filterAttending } : Functions) {
  const navigate = useNavigate();

  return (
    <div>

      <div className="mem__main-container">
        {/* all buttons should be /src/components/Form/ButtonEventsMenu components */}

        <div className="mem__inner-left-container">
          <button
            type="button"
            className="mem__selectors-btns-btn"
            onClick={filterHosted}
          >
            <p>Hosting</p>
          </button>

          <button
            type="button"
            className="mem__selectors-btns-btn"
            onClick={filterAttending}
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
