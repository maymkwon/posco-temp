require('jest-styled-components');
const configure = require('enzyme').configure;
const EnzymeAdapter = require('@wojtekmaj/enzyme-adapter-react-17');

const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
configure({ adapter: new EnzymeAdapter() });
