// import * as $ from 'jquery';
// import * as bootstrap from 'bootstrap';

// $(document).ready(() => {
//     // Bootstrapで利用するjsの読み込み
//     bootstrap;
// });


import React from 'react';
import ReactDOM from 'react-dom';
 
 
const App: React.FC = () => {
    return (
        <div>
               Hello World
        </div>
    )
}
 
 
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}