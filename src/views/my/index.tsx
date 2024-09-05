import React, { memo } from 'react';
interface MyProps {
  // TODO
}
const My: React.FC<MyProps> = () => {
  return (
    <div>
      <h2>My</h2>
    </div>
  );
};

export default memo(My);
