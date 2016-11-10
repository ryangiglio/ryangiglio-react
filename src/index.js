// React
import { render } from 'react-dom';

// Router
import routes from './config/routes.js';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

render(
  routes,
  document.getElementById('root')
);
