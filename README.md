# NAME
> material file uploader

# ABOUT
> choose many (0 - n) file for upload and show list of selected files

# EXAMPLE
        import FileUploader from "material_file_uploader";

        return (
            <FileUploader
                maxCount={1}
                showFooter={true}
                onUpload={(list, onAnswer) => {
                    console.log(list);
                    setTimeout(() => onAnswer("Upload successfully!") , 2000);
                }}/>
            );