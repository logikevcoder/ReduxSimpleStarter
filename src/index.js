import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const api_key = 'AIzaSyAuOMlo2rK_H824NWJL0KX_YylL8CE0BIk';
// Create a new component
const App = () => {
    return  (
      <div>
        <SearchBar />
      </div>
    );
}
// Should produce some html
// Take the components (generated html) and display in the dom ( on the page )
ReactDOM.render(<App />, document.querySelector('.container'));