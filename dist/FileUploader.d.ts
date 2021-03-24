/// <reference types="react" />
import * as PropTypes from "prop-types";
interface FileUploaderProps {
    borderWidth: number;
    maxCount: number;
    minCount: number;
    title: string;
    chooseText: "Choose";
    deleteIcon: any;
    className: any;
    emptyGuideText: "Choose file!";
    disabled: boolean;
    showFooter: boolean;
    onUpload: any;
}
declare function FileUploader(props: FileUploaderProps): JSX.Element;
declare namespace FileUploader {
    var propTypes: {
        borderWidth: PropTypes.Requireable<number>;
        maxCount: PropTypes.Requireable<number>;
        minCount: PropTypes.Requireable<number>;
        title: PropTypes.Requireable<string>;
        chooseText: PropTypes.Requireable<string>;
        deleteIcon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<any>;
        emptyGuideText: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        showFooter: PropTypes.Requireable<boolean>;
        onUpload: PropTypes.Requireable<(...args: any[]) => any>;
    };
    var defaultProps: {
        borderWidth: number;
        maxCount: number;
        minCount: number;
        title: string;
        chooseText: string;
        deleteIcon: JSX.Element;
        className: string;
        emptyGuideText: string;
        disabled: boolean;
        showFooter: boolean;
        onUpload: (fileList: File[], afterDone: any) => void;
    };
}
export default FileUploader;
