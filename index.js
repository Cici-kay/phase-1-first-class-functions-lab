function returnFirstTwoDrivers (drivers) {
    return drivers.slice(0, 2);
  };
  
  function returnLastTwoDrivers (drivers) {
    return drivers.slice(-2);
  };
  
  let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
  ];
  
  function createFareMultiplier (multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  let fareDoubler = createFareMultiplier (2);
  
  let fareTripler = createFareMultiplier(3);
  
  function selectDifferentDrivers (arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  };
