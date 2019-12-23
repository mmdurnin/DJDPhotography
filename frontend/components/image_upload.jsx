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
                    <h3>Add Image:</h3>
                    <input className="input-field" type="text" placeholder="Name" value={this.state.name} onChange={this.update("name")}/>
                    <textarea className="input-field" placeholder="Description" value={this.state.description} onChange={this.update("description")}/>
                    <input className="add-file" type="file" onChange={this.handleFile}/>
                    <input className="submit-file" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default ImageUpload;