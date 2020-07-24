import React from 'react';
import './Book.css';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';
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
            id: props.match.params.id,
            author: '',
            title: '',
            published: '',
            submitAttempts: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (!this.state.id) {
            return;
        }

        axios.get(process.env.REACT_APP_SERVER_URL + '/' + this.state.id)
            .then(result => {
                let { author, title, published}  = result.data[0];

                this.setState({
                    author: author,
                    title: title,
                    published: published.substr(0, 4)
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    validate() {
        for (let field in this.validation) {
            const rule = this.validation[field].rule;
            const message = this.validation[field].message;
            const value = this.state[field];

            if (!value.match(rule)) {
                this.setState({ message: message, submitAttempts: this.state.submitAttempts + 1 });
                return false;
            }
        }

        return true;
    }

    handleSubmit(event) {

        event.preventDefault();

        if (!this.validate()) {
            return;
        }

        let { id, author, title, published } = this.state;

        published += '-01-01';

        const book = {
            id: id,
            author: author,
            title: title,
            published: published,
        }

        let updateFunc = axios.post;
        let url = process.env.REACT_APP_SERVER_URL;

        if(id) {
            updateFunc = axios.put;
            url += '/' + id;
        }

        updateFunc(url, book)
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
                    <FlashMessage key={this.state.submitAttempts} message={this.state.message} duration='3000' />
                </form>


            </div>
        );
    }
}

export default withRouter(Book);