Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var icons = require('@material-ui/icons');
var PropTypes = require('prop-types');
var core = require('@material-ui/core');

FileUploader.propTypes = {
    borderWidth: PropTypes.number,
    max: PropTypes.number,
    title: PropTypes.string,
    chooseText: PropTypes.string,
    deleteIcon: PropTypes.element,
    className: PropTypes.any,
    emptyGuideText: PropTypes.string,
};
FileUploader.defaultProps = {
    borderWidth: 1,
    max: -1,
    title: "Title",
    chooseText: "Choose",
    deleteIcon: React.createElement(icons.DeleteForever, null),
    className: "",
    emptyGuideText: "List is empty!",
};
function FileUploader(props) {
    var refInput = React.useRef(null);
    var _a = React.useState([]), list = _a[0], setList = _a[1];
    function deleteItem(item) {
        setList(list.filter(function (element) { return element !== item; }));
    }
    function chooseFile() {
        if (refInput !== null && refInput.current !== null) {
            // console.log(refInput.current);
            refInput.current.click();
        }
    }
    return (React.createElement(core.Box, { border: props.borderWidth, borderColor: "divider", className: props.className },
        React.createElement(core.Box, { display: "flex", flexDirection: "row", p: 1, alignItems: "center" },
            React.createElement(core.Box, { flexGrow: 1 },
                React.createElement(core.Typography, null, props.title)),
            React.createElement(core.Button, { variant: "text", onClick: chooseFile },
                props.chooseText,
                React.createElement("input", { ref: refInput, onChange: console.log, type: "file", hidden: true }))),
        React.createElement(core.Box, { minHeight: 50, overflow: "auto", maxHeight: 150, borderTop: props.borderWidth, borderColor: "divider" }, list.length === 0 ?
            React.createElement(core.Typography, { color: "textSecondary" }, props.emptyGuideText)
            :
                React.createElement(core.List, null, list === null || list === void 0 ? void 0 : list.map(function (item, index) { return (React.createElement(core.ListItem, { key: index },
                    React.createElement(core.ListItemText, { primary: item }),
                    React.createElement(core.ListItemIcon, { onClick: function () { return deleteItem(item); } }, props.deleteIcon))); })))));
}

exports.default = FileUploader;
//# sourceMappingURL=index.js.map
