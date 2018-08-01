import * as React from 'react';

import Counter from './components/Counter';

const styles: NodeRequire = require('./index.less');


const App = () => {
  return (
    <div className={styles['app-container']}>
      <div className={styles['app-content']}>
        <Counter />
      </div>
    </div>
  );
};


export default App; 