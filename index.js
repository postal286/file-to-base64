onChange = (e) => {
    const {
        files
    } = e.target;
    const file = files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const outputFileData = {
                name: file.name,
                base64: reader.result,
                file,
            };
            this.props.input.onChange([outputFileData]);
        };
        reader.readAsDataURL(file);
    }
};
