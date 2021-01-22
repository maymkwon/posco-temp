"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withText = void 0;
var react_1 = __importDefault(require("react"));
var addon_actions_1 = require("@storybook/addon-actions");
var addon_knobs_1 = require("@storybook/addon-knobs");
var BaseButton_1 = __importDefault(require("../BaseButton"));
exports.default = {
    title: 'Sample / Button',
    component: BaseButton_1.default,
};
var withText = function () { return (react_1.default.createElement(BaseButton_1.default, { text: addon_knobs_1.text('value', 'Click Me'), onClickHandler: addon_actions_1.action('button-click') })); };
exports.withText = withText;
exports.withText.story = {
    parameters: {
        jest: ['BaseButton.test.tsx'],
    },
};
//# sourceMappingURL=BaseButton.stories.js.map