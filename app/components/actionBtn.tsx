import React from 'react';

interface ActionBtnProps {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}

const ActionBtn = ({ onClick, label, icon }: ActionBtnProps) => {
  return (
    <button
      onClick={onClick}
      className='bg-[#007bc6] hover:bg-[#0056a8] text-white font-bold py-2 px-4 rounded mr-2 transition-colors duration-300 flex items-center'
    >
      {icon}
      <span className='ml-2'>{label}</span>
    </button>
  );
};

export default ActionBtn;
