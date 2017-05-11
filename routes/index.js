'use strict';

import home        from './home';
import user        from './user'
import saleIssue   from './im/saleIssue'
import purInWarehs from './im/purInWarehs'

export default app => { 
  app.get('/', (req, res, next) => {
	  res.send('EAS Mobile backend...');
  });
  app.use('/home', home);
  app.use('/user', user);
  app.use('/saleIssue', saleIssue);
  app.use('/purInWarehs', purInWarehs);
}