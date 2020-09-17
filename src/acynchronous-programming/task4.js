import { getData } from '../utils/getData';

export function getUsers() {
  getData(`http://www.json-generator.com/api/json/get/cfQCylRjuG`).then(({ getUsersData }) => {
    if (getUsersData) {
      getData(`http://www.json-generator.com/api/json/get/cfVGucaXPC`).then(result =>
        console.log(result)
      );
    }
  });
}
