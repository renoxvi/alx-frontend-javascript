import ClassRoom from './0-classroom.js';

function initializeRooms () {
  const rooms = [19, 20, 34].map(
    maxStudentsSize => new ClassRoom(maxStudentsSize)
  );
  return rooms;
}

export default initializeRooms;
