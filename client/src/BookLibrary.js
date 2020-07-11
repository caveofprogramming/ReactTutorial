import React from 'react';
import axios from 'axios'; 

class BookLibrary extends React.Component {

    componentDidMount() {

        axios(process.env.REACT_APP_SERVER_URL)
            .then(result => console.log(result))
            .catch(error => console.log(error));
    }

    render() {
        return ( <div>Library</div>);
    }
}

export default BookLibrary;