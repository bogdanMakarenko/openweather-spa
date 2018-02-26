import cityList from './citylist';

export const findCityId = cityName => {
  return cityList.find(function(element) {
    if (element.name === cityName){
      return element.id;
    }
  });
};