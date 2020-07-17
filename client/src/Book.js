import React from 'react';
import './Book.css';
import axios from 'axios';

class Book extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            author: '',
            title: '',
            published: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        let { author, title, published } = this.state;

        published += '-01-01';

        const book = {
            author: author,
            title: title,
            published: published,
        }

        axios.post(process.env.REACT_APP_SERVER_URL, book)
            .then(result => {
                console.log(result);
            })
            .catch(error=>{
                console.log(error);
            });

        event.preventDefault();
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="author">Author:</label>
                    <input value={this.state.author} onChange={this.handleChange} type="text" name="author" id="author" />
                    <label htmlFor="title">Title:</label>
                    <input value={this.state.title} onChange={this.handleChange} type="text" name="title" id="title" />
                    <label htmlFor="published">Published:</label>
                    <input value={this.state.published} onChange={this.handleChange} type="text" name="published" id="published" />
                    <input type="submit" value="Save" />
                </form>

            </div>
        );
    }
}

export default Book;