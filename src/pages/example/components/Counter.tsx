import * as React from 'react';

import { connect } from 'dva';

const styles: NodeRequire = require('../index.less');
import CounterButton from './CounterButton';
import { Dispatch } from '../../../../node_modules/redux';


export interface ICounterProps {
  current: number;
  record?: number;
  dispatch: Dispatch<{type: string, paylod?: any}>;
};


const Counter: React.SFC<ICounterProps> = (props: ICounterProps): JSX.Element => {
  const { current, record, dispatch } = props;

  /* The button click handler */
  const handleClick: React.ReactEventHandler<HTMLButtonElement> = (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(event.currentTarget);
    dispatch({
      type: 'counter/addRemote',
    });

  };

  return (
    <div className={styles['counterbox']}>
      <p className={styles['counter-show']}>The highest count is: {record}</p>
      <div className={styles['counter-currentcount']}>
        Current count is: {current}
      </div>
      <div className={styles['counter-button']}>
        <CounterButton onBtnClick={handleClick} />
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  const { current, record } = state.counter;    // state.counter;

  return {
    current,
    record,
  };
}


export default connect(mapStateToProps)(Counter);