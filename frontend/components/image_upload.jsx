import React from 'react';

class ImageUpload extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {name: "", description: "", imageUrl: ""}
        this.state = {name: "", description: "", imageFile: null}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleFile(e) {
        // const reader = new FileReader();
        // const file = e.currentTarget.files[0];
        // reader.onloadend = () =>
        //   this.setState({ imageUrl: reader.result, imageFile: file });

        // if (file) {
        //   reader.readAsDataURL(file);
        // } else {
        //   this.setState({ imageUrl: "", imageFile: null });
        // }
        this.setState({ imageFile: e.currentTarget.files[0] });
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.addPhoto(this.state);
        const formData = new FormData();
        formData.append('photo[name]', this.state.name);
        formData.append('photo[description]', this.state.description);
        formData.append('photo[image]', this.state.imageFile);
        this.props.addPhoto(formData)
    }

    render() {

        return (
            <div className="image-upload-box">
                <form onSubmit={this.handleSubmit} className="column">
                    <input type="text" placeholder="Name" value={this.state.name} onChange={this.update("name")}/>
                    <textarea placeholder="Description" value={this.state.description} onChange={this.update("description")}/>
                    <input type="file" onChange={this.handleFile}/>
                    <input type="submit" value="Add Image"/>
                </form>
            </div>
        )
    }
}

export default ImageUpload;