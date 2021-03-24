import * as React from 'react';
import { DeleteForever } from "@material-ui/icons";
import * as PropTypes from "prop-types";
import {
    Box,
    Badge,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    CircularProgress
} from "@material-ui/core";


interface FileUploaderProps {
    borderWidth: number,
    maxCount: number,
    minCount: number,
    title: string,
    chooseText: "Choose",
    deleteIcon: any,
    className: any,
    emptyGuideText: "Choose file!",
    api: any,
    disabled: boolean,
    showFooter: boolean,
};

FileUploader.propTypes = {
    borderWidth: PropTypes.number,
    maxCount: PropTypes.number,
    minCount: PropTypes.number,
    title: PropTypes.string,
    chooseText: PropTypes.string,
    deleteIcon: PropTypes.element,
    className: PropTypes.any,
    emptyGuideText: PropTypes.string,
    api: PropTypes.func,
    disabled: PropTypes.bool,
    showFooter: PropTypes.bool,
};

FileUploader.defaultProps = {
    borderWidth: 1,
    maxCount: 10,
    minCount: 0,
    title: "Title",
    chooseText: "Choose",
    deleteIcon: <DeleteForever />,
    className: "",
    emptyGuideText: "List is empty!",
    disabled: false,
    showFooter: false,
};

function FileUploader(props: FileUploaderProps) {

    const refInput = React.useRef<HTMLInputElement>(null);

    const [wait, setWait] = React.useState<boolean>(false);
    const [message, setMessage] = React.useState<string>("")
    const [list, setList] = React.useState<Array<File>>([]);

    function deleteItem(item: File) {
        setList(list.filter(element => element.name !== item.name));
    }

    function chooseFile() {

        if (refInput !== null && refInput.current !== null) {
            // console.log(refInput.current);
            refInput.current.click()
        }

    }

    function upload() {
        if (list.length < props.minCount) {
            setMessage("Choose at least " + list.length.toString() + " items");
        } else {
            setWait(true);
            setMessage("");
            props.api(list, console.log);
        }
    }

    return (
        <Box border={props.borderWidth} borderColor="divider" className={props.className} >
            <Box bgcolor="background.default" display="flex" flexDirection="row" p={1} alignItems="center">
                <Box flexGrow={1}>
                    <Typography>
                        {props.title}
                    </Typography>
                </Box>
                <Button size="small" variant="text" onClick={chooseFile} disabled={props.disabled || wait || props.maxCount === list.length}>
                    {props.chooseText}
                </Button>
            </Box>
            <input
                ref={refInput}
                type="file"
                hidden
                multiple
                onChange={(event) => {
                    console.log((event.target).files);
                    const files = (event.target).files;
                    if (files !== null) {
                        setList([...list, files[0]]);
                    }
                }}
            />
            <Box overflow="auto" height={150} borderTop={props.borderWidth} borderColor="divider">
                {list.length === 0 ?
                    <Box p={1} height="100%" display="flex" alignItems="center" justifyContent="center">
                        <Typography color="textSecondary" align="center" >
                            {props.emptyGuideText}
                        </Typography>
                    </Box>
                    :
                    <List dense>
                        {
                            list?.map((file, index) => (
                                <ListItem key={index} dense>
                                    <ListItemText primary={file.name} primaryTypographyProps={{ variant: "caption", ...wait ? { color: "textSecondary" } : { color: "textPrimary" } }} />
                                    <ListItemSecondaryAction >
                                        <IconButton size="small" onClick={() => deleteItem(file)} disabled={props.disabled || wait}>
                                            {props.deleteIcon}
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))
                        }
                    </List>
                }
            </Box>
            {props.showFooter ?
                <Box bgcolor="background.default" display="flex" alignItems="center" p={1} borderTop={props.borderWidth} borderColor="divider" >
                    {
                        wait ? <CircularProgress size={20} /> : null
                    }
                    <Box flexGrow={1}>
                        <Typography variant="caption">
                            {message}
                        </Typography>
                    </Box>
                    <Button
                        size="small"
                        variant="text"
                        onClick={upload}
                        disabled={props.disabled || wait}
                        endIcon={
                            <Badge
                                style={{ marginLeft: 5, marginRight: 5 }}
                                {...wait ? { color: "default" } : { color: "primary" }}
                                badgeContent={list.length} />}>
                        Upload
                    </Button>
                </Box>
                : null}
        </Box>
    );
}


export default FileUploader;