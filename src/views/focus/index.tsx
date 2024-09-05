import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const focus: FC<IProps> = () => {
  return <div>focus</div>;
};

export default memo(focus);
