Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var icons = require('@material-ui/icons');
var PropTypes = require('prop-types');
var core = require('@material-ui/core');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

FileUploader.propTypes = {
    borderWidth: PropTypes.number,
    maxCount: PropTypes.number,
    minCount: PropTypes.number,
    title: PropTypes.string,
    chooseText: PropTypes.string,
    deleteIcon: PropTypes.element,
    className: PropTypes.any,
    emptyGuideText: PropTypes.string,
    disabled: PropTypes.bool,
    showFooter: PropTypes.bool,
    onUpload: PropTypes.func
};
FileUploader.defaultProps = {
    borderWidth: 1,
    maxCount: 10,
    minCount: 0,
    title: "Title",
    chooseText: "Choose",
    deleteIcon: React.createElement(icons.DeleteForever, null),
    className: "",
    emptyGuideText: "List is empty!",
    disabled: false,
    showFooter: false,
    onUpload: function (fileList, afterDone) {
        console.log(fileList, afterDone);
    }
};
function FileUploader(props) {
    var refInput = React.useRef(null);
    var _a = React.useState(false), wait = _a[0], setWait = _a[1];
    var _b = React.useState(""), message = _b[0], setMessage = _b[1];
    var _c = React.useState([]), list = _c[0], setList = _c[1];
    function deleteItem(item) {
        setList(list.filter(function (element) { return element.name !== item.name; }));
    }
    function chooseFile() {
        if (refInput !== null && refInput.current !== null) {
            // console.log(refInput.current);
            refInput.current.click();
        }
    }
    function upload() {
        if (list.length < props.minCount) {
            setMessage("Choose at least " + list.length.toString() + " items");
        }
        else {
            setWait(true);
            setMessage("");
            props.onUpload(list, function (_message) {
                setWait(false);
                setMessage(_message);
            });
        }
    }
    return (React.createElement(core.Box, { border: props.borderWidth, borderColor: "divider", className: props.className },
        React.createElement(core.Box, { bgcolor: "background.default", display: "flex", flexDirection: "row", p: 1, alignItems: "center" },
            React.createElement(core.Box, { flexGrow: 1 },
                React.createElement(core.Typography, null, props.title)),
            React.createElement(core.Button, { size: "small", variant: "text", onClick: chooseFile, disabled: props.disabled || wait || props.maxCount === list.length }, props.chooseText)),
        React.createElement("input", { ref: refInput, type: "file", hidden: true, multiple: true, onChange: function (event) {
                console.log((event.target).files);
                var files = (event.target).files;
                if (files !== null) {
                    setList(__spreadArrays(list, [files[0]]));
                }
            } }),
        React.createElement(core.Box, { overflow: "auto", height: 150, borderTop: props.borderWidth, borderColor: "divider" }, list.length === 0 ?
            React.createElement(core.Box, { p: 1, height: "100%", display: "flex", alignItems: "center", justifyContent: "center" },
                React.createElement(core.Typography, { color: "textSecondary", align: "center" }, props.emptyGuideText))
            :
                React.createElement(core.List, { dense: true }, list === null || list === void 0 ? void 0 : list.map(function (file, index) { return (React.createElement(core.ListItem, { key: index, dense: true },
                    React.createElement(core.ListItemText, { primary: file.name, primaryTypographyProps: __assign({ variant: "caption" }, wait ? { color: "textSecondary" } : { color: "textPrimary" }) }),
                    React.createElement(core.ListItemSecondaryAction, null,
                        React.createElement(core.IconButton, { size: "small", onClick: function () { return deleteItem(file); }, disabled: props.disabled || wait }, props.deleteIcon)))); }))),
        props.showFooter ?
            React.createElement(core.Box, { bgcolor: "background.default", display: "flex", alignItems: "center", p: 1, borderTop: props.borderWidth, borderColor: "divider" },
                wait ? React.createElement(core.CircularProgress, { size: 20 }) : null,
                React.createElement(core.Box, { flexGrow: 1 },
                    React.createElement(core.Typography, { variant: "caption" }, message)),
                React.createElement(core.Button, { size: "small", variant: "text", onClick: upload, disabled: props.disabled || wait, endIcon: React.createElement(core.Badge, __assign({ style: { marginLeft: 5, marginRight: 5 } }, wait ? { color: "default" } : { color: "primary" }, { badgeContent: list.length })) }, "Upload"))
            : null));
}

exports.default = FileUploader;
//# sourceMappingURL=index.js.map
