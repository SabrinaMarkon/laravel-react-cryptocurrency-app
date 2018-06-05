<?php

/*
A route to serve the app.blade.php view against every incoming request and including all the necessary scripts to bootstrap our SPA so that react router can take care of routing and rendering of React components.
(Ahmad, 2018)
*/

Route::get('{all?}', function () {
    return view('app');
})->where('all', '([A-z\d-\/_.]+)?');
