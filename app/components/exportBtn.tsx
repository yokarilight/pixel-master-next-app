import React from 'react';

interface ExportBtnProps {
  onClick: () => void;
  format: string;
}

const ExportBtn = ({ onClick, format }: ExportBtnProps) => {
  return (
    <button
      onClick={onClick}
      className='bg-transparent hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded mr-2 border border-white transition-colors duration-300'
    >
      Export as {format.toUpperCase()}
    </button>
  );
};

export default ExportBtn;
