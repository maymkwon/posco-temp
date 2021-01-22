/* eslint-disable @typescript-eslint/no-var-requires */
require('jest-styled-components');
const configure = require('enzyme').configure;
const EnzymeAdapter = require('@wojtekmaj/enzyme-adapter-react-17');
/* eslint-disable @typescript-eslint/no-empty-function */
const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
configure({ adapter: new EnzymeAdapter() });
