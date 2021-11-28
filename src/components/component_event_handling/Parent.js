import { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);

  const onClickButton = (number) => {
    setCount(count + number);
  };

  return (
    <div>
      <button onClick={() => onClickButton(+1)}>+1</button>
      <button onClick={() => onClickButton(-1)}>-1</button>
      <Child count={count} setCount={setCount}>
        <Child count={count} setCount={setCount} />
      </Child>
    </div>
  );
};

export default Parent;
