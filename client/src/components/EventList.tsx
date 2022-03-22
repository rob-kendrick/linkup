import React from 'react';
import type { LU_Event } from '../utilities/types/LU_Event';

interface eventProps {
  events : LU_Event[];
  }

function EventList({ events } : eventProps) {
  return (
    <div>EventList</div>
  );
}

export default EventList;
