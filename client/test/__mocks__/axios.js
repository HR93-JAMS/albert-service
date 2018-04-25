import { images3, images5 } from '../exampleData.json';

const IMAGES_ENDPOINT_3 = 'http://localhost:8080/images/3';
const IMAGES_ENDPOINT_5 = 'http://localhost:8080/images/5';
const NO_IMAGES_ENDPOINT = 'http://localhost:8080/images/NO_IMAGES';

console.log('axios js used');

module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case IMAGES_ENDPOINT_3:
      return Promise.resolve({
        data: images3
      });
      case IMAGES_ENDPOINT_5:
      return Promise.resolve({
        data: images5
      });
      case NO_IMAGES_ENDPOINT:
      return Promise.resolve({
        data: []
      });
    }
  })
};