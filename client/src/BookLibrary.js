import React from 'react';
import axios from 'axios'; 

class BookLibrary extends React.Component {

    constructor(props) {
        super(props);

        console.log('book library')

        this.state = {
            books: [],
        };
    }

    componentDidMount() {

        axios(process.env.REACT_APP_SERVER_URL)
            .then(result => this.setState({ books: result.data }))
            .catch(error => console.log(error));
    }

    render() {
        console.log('render', this.state.books);
        return ( <div>Library</div>);
    }
}

export default BookLibrary;