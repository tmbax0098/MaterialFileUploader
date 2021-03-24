import * as React from 'react';
import { DeleteForever } from "@material-ui/icons";
import * as PropTypes from "prop-types";
import { Box, Typography, Button, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";


interface FileUploaderProps {
    max?: number
    title?: string,
    chooseText?: "Choose",
    deleteIcon?: any,
    className?: any,
    emptyGuideText?: "Choose file!"
};

FileUploader.propTypes = {
    max: PropTypes.number,
    title: PropTypes.string,
    chooseText: PropTypes.string,
    deleteIcon: PropTypes.element,
    className: PropTypes.any,
    emptyGuideText: PropTypes.string,
};

FileUploader.defaultProps = {
    max: -1,
    title: "Title",
    chooseText: "Choose",
    deleteIcon: <DeleteForever />,
    className: "",
    emptyGuideText: "List is empty!",
};

function FileUploader(props: FileUploaderProps) {


    const [list, setList] = React.useState<Array<string>>([]);

    function deleteItem(item: string) {
        setList(list.filter(element => element !== item));
    }

    return (
        <Box className={props.className}>
            <Box display="flex" flexDirection="row" p={1} borderBottom={1} borderColor="divider">
                <Box flexGrow={1}>
                    <Typography>
                        {props.title}
                    </Typography>
                </Box>
                <Button variant="text">
                    {props.chooseText}
                    <input
                        onChange={console.log}
                        type="file"
                        hidden
                    />
                </Button>
            </Box>
            <Box minHeight={50} overflow="auto" maxHeight={150}>
                list.length === 0 ?
                <Typography color="textSecondary">
                    {props.emptyGuideText}
                </Typography>
                :
                <List>
                    {
                        list?.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={item} />
                                <ListItemIcon onClick={() => deleteItem(item)}>
                                    {props.deleteIcon}
                                </ListItemIcon>
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Box>
    );
}


export default FileUploader;