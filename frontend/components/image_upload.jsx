import React from 'react';

class ImageUpload extends React.Component {
    constructor(props) {
        super(props)

        this.state = {name: "", description: "", imageFile: null, imageUrl: null}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
              this.setState({ imageUrl: reader.result, imageFile: file });

        }

        if (file) {
          reader.readAsDataURL(file);
        } else {
          this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo[name]', this.state.name);
        formData.append('photo[description]', this.state.description);
        formData.append('photo[photo]', this.state.imageFile);
        this.props.addPhoto(formData)
        this.setState({name: "", description: "", imageFile: null, imageUrl: null})
    }

    render() {
        const preview = this.state.imageUrl ? <img src={this.state.imageUrl} /> : null;
        return (
            <div className="image-upload-box">
                <form onSubmit={this.handleSubmit} className="column">
                    <h3>Add Image</h3>
                    <input className="input-field" type="text" placeholder="Name" value={this.state.name} onChange={this.update("name")}/>
                    <textarea className="input-field" placeholder="Description" value={this.state.description} onChange={this.update("description")}/>
                    <input className="add-file" type="file" onChange={this.handleFile}/>
                    <div className="image-preview row">{preview}</div>
                    <input className="submit-file" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default ImageUpload;