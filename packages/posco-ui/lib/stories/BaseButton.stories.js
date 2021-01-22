"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withText = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var addon_actions_1 = require("@storybook/addon-actions");
var addon_knobs_1 = require("@storybook/addon-knobs");
var BaseButton_1 = __importDefault(require("../BaseButton"));
exports.default = {
    title: 'Sample / Button',
    component: BaseButton_1.default,
};
var withText = function () { return (jsx_runtime_1.jsx(BaseButton_1.default, { text: addon_knobs_1.text('value', 'Click Me'), onClickHandler: addon_actions_1.action('button-click') }, void 0)); };
exports.withText = withText;
exports.withText.story = {
    parameters: {
        jest: ['BaseButton.test.tsx'],
    },
};
//# sourceMappingURL=BaseButton.stories.js.map