"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var BaseButton_1 = __importDefault(require("../BaseButton"));
var clickFn = jest.fn();
describe('Button', function () {
    it('should simulate click', function () {
        var component = enzyme_1.mount(react_1.default.createElement(BaseButton_1.default, { onClickHandler: clickFn, text: "Hello" }));
        component.find(BaseButton_1.default).simulate('click');
        expect(clickFn).toHaveBeenCalled();
    });
});
//# sourceMappingURL=BaseButton.test.js.map