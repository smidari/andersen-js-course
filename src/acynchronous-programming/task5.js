import { getData } from '../utils/getData';

export const urls = [
  `http://www.json-generator.com/api/json/get/cevhxOsZnS`,
  `http://www.json-generator.com/api/json/get/cguaPsRxAi`,
  `http://www.json-generator.com/api/json/get/cfDZdmxnDm`,
  `http://www.json-generator.com/api/json/get/cfkrfOjrfS`,
  `http://www.json-generator.com/api/json/get/ceQMMKpidK`,
];

export function getAllDataParallel(arrUrls) {
  const allData = [];
  Promise.all(arrUrls.map(url => getData(url).then(data => allData.push(data))));
  console.log(allData);
}

export function getDataSequential(arrUrls) {
  let chain = Promise.resolve();
  const arrData = [];
  arrUrls.forEach(url => {
    chain = chain.then(() => getData(url)).then(data => arrData.push(data));
  });
  console.log(arrData);
}
