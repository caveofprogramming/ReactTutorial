import React from 'react';
import './Book.css';

function Book() {

    console.log('server url', process.env.REACT_APP_SERVER_URL);

    return (
        <div>
            <form>
                <label htmlFor="author">Author:</label>
                <input type="text" name="author" id="author" />
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="published">Published:</label>
                <input type="text" name="published" id="published" />
                <input type="submit" value="Save" />
            </form>

        </div>
    );
}

export default Book;