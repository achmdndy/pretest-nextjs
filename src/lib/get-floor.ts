export const getFloor = (lockerNumber: number): number => {
  let floor = 0;
  let lockersPerFloor = 5;
  let lockerCount = 0;

  while (lockerCount < lockerNumber) {
    floor++;
    lockerCount += lockersPerFloor;

    // Rotate between 5, 6, and 7 lockers per floor
    if (lockersPerFloor === 5) {
      lockersPerFloor = 6;
    } else if (lockersPerFloor === 6) {
      lockersPerFloor = 7;
    } else {
      lockersPerFloor = 5;
    }
  }

  return floor;
};
