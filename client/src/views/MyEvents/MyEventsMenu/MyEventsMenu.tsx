import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyEventsMenu() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>MyEventsMenu</h3>
      <div className="flex-row-delete">
        {/* all buttons should be /src/components/Form/ButtonEventsMenu components */}
        <button type="button">Hosting</button>
        <button type="button">Participating</button>
        <button type="button" onClick={() => navigate('/myevents/create')}>Create</button>
      </div>
    </div>
  );
}

export default MyEventsMenu;
