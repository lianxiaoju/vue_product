import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';
import Data from './data/data.json'

const mock = new mockAdapter(axios);
mock.onGet('/data').reply(200, Data);