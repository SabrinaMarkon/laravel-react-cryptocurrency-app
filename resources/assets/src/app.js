
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
import './app.scss';
import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Root from './components/Root';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// require('./components/Example');

/*
We’re using BrowserRouter instead of HashRouter because we’re rendering app view against every possible route and we’re sure about it. We use HashRouter in situations where we have limited access to the server or serving our app statically via index.html  file.
*/
if($('#root').length) {
    ReactDOM.render(
        <BrowserRouter>
            <Root/>
        </BrowserRouter>
        document.getElementById('root');
    );
}
