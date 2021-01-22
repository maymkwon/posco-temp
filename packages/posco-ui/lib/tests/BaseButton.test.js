"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var enzyme_1 = require("enzyme");
var BaseButton_1 = __importDefault(require("../BaseButton"));
var clickFn = jest.fn();
describe('Button', function () {
    it('should simulate click', function () {
        var component = enzyme_1.mount(jsx_runtime_1.jsx(BaseButton_1.default, { onClickHandler: clickFn, text: "Hello" }, void 0));
        component.find(BaseButton_1.default).simulate('click');
        expect(clickFn).toHaveBeenCalled();
    });
});
//# sourceMappingURL=BaseButton.test.js.map