import * as React from 'react';
import { DeleteForever } from "@material-ui/icons";
import * as PropTypes from "prop-types";
import { Box, Typography, Button, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";


interface FileUploaderProps {
    borderWidth?: number,
    max?: number
    title?: string,
    chooseText?: "Choose",
    deleteIcon?: any,
    className?: any,
    emptyGuideText?: "Choose file!"
};

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
    deleteIcon: <DeleteForever />,
    className: "",
    emptyGuideText: "List is empty!",
};

function FileUploader(props: FileUploaderProps) {

    const refInput = React.useRef<HTMLInputElement>(null);

    const [list, setList] = React.useState<Array<string>>([]);

    function deleteItem(item: string) {
        setList(list.filter(element => element !== item));
    }

    function chooseFile() {

        if (refInput !== null && refInput.current !== null) {
            // console.log(refInput.current);
            refInput.current.click()
        }

    }

    return (
        <Box border={props.borderWidth} borderColor="divider" className={props.className} >
            <Box display="flex" flexDirection="row" p={1} alignItems="center">
                <Box flexGrow={1}>
                    <Typography>
                        {props.title}
                    </Typography>
                </Box>
                <Button variant="text" onClick={chooseFile}>
                    {props.chooseText}
                    <input
                        ref={refInput}
                        onChange={console.log}
                        type="file"
                        hidden
                    />
                </Button>
            </Box>
            <Box minHeight={50} overflow="auto" maxHeight={150} borderTop={props.borderWidth} borderColor="divider">
                {list.length === 0 ?
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
                }
            </Box>
        </Box>
    );
}


export default FileUploader;