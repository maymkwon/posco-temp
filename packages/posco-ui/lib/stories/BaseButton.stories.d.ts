/// <reference types="react" />
declare const _default: {
    title: string;
    component: (props: {
        text: string;
        onClickHandler: () => void;
    }) => JSX.Element;
};
export default _default;
export declare const withText: {
    (): JSX.Element;
    story: {
        parameters: {
            jest: string[];
        };
    };
};
