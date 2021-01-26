const fetchPolifill = require('whatwg-fetch');
require('jest-fetch-mock').enableMocks();

global.fetch = fetchPolifill.fetch;
global.Request = fetchPolifill.Request;
global.Headers = fetchPolifill.Headers;
global.Response = fetchPolifill.Respons;
