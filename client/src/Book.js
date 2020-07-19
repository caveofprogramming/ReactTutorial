import React from 'react';
import './Book.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import FlashMessage from './FlashMessage';

class Book extends React.Component {

    validation = {
        author: {
            rule: /^\S.{0,48}\S$/,
            message: 'Author field must have 2-50 characters'
        },

        title: {
            rule: /^\S.{0,68}\S$/,
            message: 'Title field must have 2-70 characters'
        },

        published: {
            rule: /^\d{4}$/,
            message: 'Published date must be a 4-digit year'
        }
    }

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

    validate() {
        for (let field in this.validation) {
            const rule = this.validation[field].rule;
            const message = this.validation[field].message;
            const value = this.state[field];

            if (!value.match(rule)) {
                this.setState({ message: message });
                return false;
            }
        }

        return true;
    }

    handleSubmit(event) {
        
        event.preventDefault();
        
        if(!this.validate()) {
            return;
        }

        let { author, title, published } = this.state;

        published += '-01-01';

        const book = {
            author: author,
            title: title,
            published: published,
        }

        axios.post(process.env.REACT_APP_SERVER_URL, book)
            .then(result => {
                this.setState({ created: true });
            })
            .catch(error => {
                console.log(error);
            });

    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {

        if (this.state.created) {
            return <Redirect to='/' />;
        }

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
                    <FlashMessage message={this.state.message} duration='3000'/>
                </form>


            </div>
        );
    }
}

export default Book;