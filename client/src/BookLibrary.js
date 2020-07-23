import React from 'react';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link } from 'react-router-dom';
import './BookLibrary.css';

class BookLibrary extends React.Component {

    constructor(props) {
        super(props);

        console.log('book library')

        this.state = {
            books: [],
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.refresh();
    }

    refresh() {
        axios(process.env.REACT_APP_SERVER_URL)
        .then(result => this.setState({ books: result.data }))
        .catch(error => console.log(error));
    }

    handleDelete(id) {
        console.log('delete', id);

        axios.delete(process.env.REACT_APP_SERVER_URL + '/' + id)
            .then(result => {
                this.refresh();
            }) 
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        let books = this.state.books.map(book => {

            let date = book.published.toString().substr(0, 4);

            return (
                <tr key={book.id}>
                    <td>{book.author}</td>
                    <td>{book.title}</td>
                    <td>{date}</td>
                    <td><Link to={'/edit/' + book.id}><EditIcon /></Link></td>
                    <td><Link onClick={() => { if(window.confirm('Really delete this book?')) {this.handleDelete(book.id)}}} to='/'><DeleteForeverIcon /></Link></td>
                </tr>
            )
        });

        console.log('render', this.state.books);
        return (
            <div>
                <table>
                    <thead>
                        <tr><th>Author</th><th>Title</th><th>Published</th></tr>
                    </thead>
                    <tbody>
                        {books}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BookLibrary;