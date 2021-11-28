import React from 'react';

const Display = React.forwardRef((props, ref) => {
  return (
    <div>
      <div ref={ref} style={{ width: '200px', height: '200px' }} />
    </div>
  );
});

export default Display;
