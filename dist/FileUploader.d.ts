/// <reference types="react" />
import * as PropTypes from "prop-types";
interface FileUploaderProps {
    max?: number;
    title?: string;
    chooseText?: "Choose";
    deleteIcon?: any;
    className?: any;
    emptyGuideText?: "Choose file!";
}
declare function FileUploader(props: FileUploaderProps): JSX.Element;
declare namespace FileUploader {
    var propTypes: {
        max: PropTypes.Requireable<number>;
        title: PropTypes.Requireable<string>;
        chooseText: PropTypes.Requireable<string>;
        deleteIcon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<any>;
        emptyGuideText: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        max: number;
        title: string;
        chooseText: string;
        deleteIcon: JSX.Element;
        className: string;
        emptyGuideText: string;
    };
}
export default FileUploader;
