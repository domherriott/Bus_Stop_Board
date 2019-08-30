
// Request to tfl api for arrivals at the Wandsworth Road bus stop
request = {
  let response = await fetch('https://api.tfl.gov.uk/StopPoint/490001310A/Arrivals');
  let json = await response.json();
  return json;
}

// Extract of the returned json, taking the bus, destination and time to arrival

busSummary = {
    while (true) {

    var response, buses
    response = await fetch('https://api.tfl.gov.uk/StopPoint/490001310A/Arrivals');
    buses = await response.json();

    function returnTime(i) {
      var t, d, n
      t = Math.round(buses[i]["timeToStation"] / 60)
      d = buses[i]["destinationName"]
      n = buses[i]["lineId"]
      return [n, d, t]
    }

   var output
   output = []
   var x

   for (x in buses) {

      output.push( returnTime(x) )
      output.sort
   }

   function Comparator(a, b) {
    if (a[2] < b[2]) return -1;
    if (a[2] > b[2]) return 1;
    return 0;
   }

   output = output.sort(Comparator)

    yield output

}
}
