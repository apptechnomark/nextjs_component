import React, { ReactNode } from "react";
import { Typography } from "typography-ts";
import 'typography-ts/dist/index.css';

interface ModalTitleProps {
  children: ReactNode;
}

const ModalTitle: React.FC<ModalTitleProps> = ({ children }) => {
  return (
    <>
    <Typography type='body' className="text-pureBlack flex items-center justify-between p-3 border-b border-solid border-lightSilver rounded-t">
      {children || 'Modal Title'}
    </Typography>
    </>
  );
};

export default ModalTitle;
