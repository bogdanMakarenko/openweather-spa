import { constants } from 'utils/constants';

const { proxyUrl, url, appid } = constants;

export const getWeather = city => {
  return fetch(`${proxyUrl}${url}${city}${appid}`, {
    method: 'GET',
    headers : {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  .then(response => {
    if (response.status !== 200) {
      console.log(`Oops, problem. Status Code: ${response.status}`);
      throw new Error('Bad request');
    }
    return response.json()
  })
  .then(data => {
    return data;
  });
}