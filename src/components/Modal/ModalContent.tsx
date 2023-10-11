import React, { ReactNode } from 'react';

interface ModalContentProps {
  children: ReactNode;
  className?: string;

}

const ModalContent: React.FC<ModalContentProps> = ({ children,className }) => {

  return (
    <div
    className={`${className} flex-auto max-h-96 overflow-y-auto text-pureBlack`}
  >
        {children || 'Modal Content'}
      </div>
  );
};

export default ModalContent;