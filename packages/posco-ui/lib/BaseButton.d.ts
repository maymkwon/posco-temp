/// <reference types="react" />
declare type BaseButtonProps = {
    text: string;
    onClickHandler: () => void;
};
declare const BaseButton: (props: BaseButtonProps) => JSX.Element;
export default BaseButton;
