import React from 'react'; // import potrzebnych bibliotek
import ReactDOM from 'react-dom';  // import potrzebnych bibliotek

import MyFirstComponent from './myFirstComponent';
import MySecondComponent from './mySecondComponent';




ReactDOM.render(<div>
    <MyFirstComponent />
    <MySecondComponent/>            
</div>, document.getElementById('app'));

