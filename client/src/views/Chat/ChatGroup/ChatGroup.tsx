// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
// import ProfilePicture from '../../../components/ProfilePicture/ProfilePicture';
// import eventApi from '../../../utilities/api/event.api';
// import { LuEvent } from '../../../utilities/types/Event';
// import UserProfile from '../../../components/UserProfile/UserProfile';

// function ChatGroup() {
//   const params = useParams();
//   const [event, setEvent] = useState<LuEvent>();

//   useEffect(() => {
//     eventApi.getEventById(Number(params.id))
//       .then((response) => setEvent(response.data)).catch();
//   }, []);

//   return (
//     <div>
//       <HeaderReturn />
//       <div>
//         {event?.participants.map(
//           () => <UserProfile event={event} />,
//         )}
//       </div>
//     </div>
//   );
// }

// export default ChatGroup;

import React from 'react';

type Props = {}

export default function ChatGroup({ }: Props) {
  return (
    <div>ChatGroup</div>
  );
}
