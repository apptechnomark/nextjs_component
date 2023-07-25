import React, { ReactNode } from 'react';
import  Typography  from '../Typography/Typography';


interface ModalContentProps {
  children: ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return (
    <div className="p-2 mb-5 flex-auto">
      <div className="text-pureBlack leading-relaxed">
        {children || 'Modal Content'}
      </div>
    </div>
  );
};

export default ModalContent;