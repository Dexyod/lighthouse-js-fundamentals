const chooseStations = (stations) => {
  let goodStations = [];
  for (const station of stations) {
    const name = station[0];
    const capacity = station[1];
    const building = station[2];
    if (
      capacity >= 20 &&
      (building === "school" || building === "community centre")
    ) {
      goodStations.push(name);
    }
  }
  return goodStations;
};
const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

console.log(chooseStations(stations));
