import React from 'react';
import type { LU_Event } from '../utilities/types/LU_Event';
import marker from '../assets/IoLocationSharp.svg';

interface eventProps {
  events : LU_Event[];
  }

function EventList({ events } : eventProps) {
  console.log(events, 'Events from events component');
  return (
    <div className="event-list-container">
      <div>
        {events.map((event) => (
          <div key={event.event_id} className="activity-card">
            <div>
              {event.tags}
            </div>
            <div className="activity-card-profile">
              <div>
                <div><img src="https://burgmaier.com/wp-content/uploads/2021/05/Musterbild-Mann.jpg" alt="profile picture" className="activity-card-picture" /></div>
              </div>
              <div className="activity-card-header-info">
                <h4 id="activity-card-title">{event.title}</h4>
                <p id="activity-card-user">User name</p>
              </div>
            </div>
            <div className="activity-card-details">
              <div className="activity-card-details-icon"><img src={marker}></img></div>
              <p>{event.address}</p>
            </div>
            <div className="activity-card-details"> 
              <div className="activity-card-details-icon"><img src={marker}></img></div>
              <p>{event.date_time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default EventList;
