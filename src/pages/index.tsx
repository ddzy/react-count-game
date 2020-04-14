import * as React from 'react';
import Redirect from 'umi/redirect';


const HomePage = () => {
  return (
    <div>
      <Redirect to="/example" />
    </div>
  );
};


export default HomePage;