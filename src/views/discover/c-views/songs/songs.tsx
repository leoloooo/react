import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const ranking: FC<IProps> = () => {
  return <div>ranking</div>;
};

export default memo(ranking);
