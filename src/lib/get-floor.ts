export const getFloor = (
  lockerNumber: number,
  floor: number = 1,
  lockersPerFloor: number = 5,
): number => {
  if (lockerNumber <= lockersPerFloor) {
    return floor;
  }

  lockerNumber -= lockersPerFloor;

  if (lockersPerFloor === 5) {
    lockersPerFloor = 6;
  } else if (lockersPerFloor === 6) {
    lockersPerFloor = 7;
  } else {
    lockersPerFloor = 5;
  }

  return getFloor(lockerNumber, floor + 1, lockersPerFloor);
};
