import { useRef } from 'react';
import Display from './Display';
import Palette from './Palette';

const AccessDom = () => {
  const divRef = useRef(null);

  return (
    <div>
      <Display ref={divRef} />
      <Palette divRef={divRef} />
    </div>
  );
};

export default AccessDom;
