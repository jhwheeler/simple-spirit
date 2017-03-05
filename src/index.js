import React from 'react';
import { render } from 'react-dom';
import { app } from '../server.js';

import App from './components/App';

render(<App/>, document.querySelector("#main"));
