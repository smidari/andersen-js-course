import { getData } from '../utils/getData';

export const urls = [
  `http://www.json-generator.com/api/json/get/cevhxOsZnS`,
  `http://www.json-generator.com/api/json/get/cguaPsRxAi`,
  `http://www.json-generator.com/api/json/get/cfDZdmxnDm`,
  `http://www.json-generator.com/api/json/get/cfkrfOjrfS`,
  `http://www.json-generator.com/api/json/get/ceQMMKpidK`,
];

export function getAllDataParallel(arrUrls) {
  Promise.all(arrUrls.map(getData)).then(values => console.log('getAllDataParallel', values));
}

export function getDataSequential(arrUrls) {
  const result = arrUrls.reduce((acm, url) => {
    return acm.then(items => getData(url).then(data => [...items, data]));
  }, Promise.resolve([]));
  result.then(data => console.log(data));
}
