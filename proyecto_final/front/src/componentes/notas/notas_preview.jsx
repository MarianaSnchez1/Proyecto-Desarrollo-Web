const NotasPreview = ({files}) => {
    if (!files.length) {
        return null
    }

    return files.map((file, index) => <img id={index} style={{maxWidth: '200px'}} src={`/../../../back/public`} alt={file.originalname}/>);
};

export default NotasPreview