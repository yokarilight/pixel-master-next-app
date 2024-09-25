import React from 'react';

interface ActionBtnProps {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
  btnClassName?: string;
}

const ActionBtn = ({ onClick, label, icon, btnClassName }: ActionBtnProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-btn-primary hover:bg-btn-primary-hover text-white font-bold w-28 max-h-9 py-2 px-4 rounded mr-2 transition-colors duration-300 flex items-center ${btnClassName}`}
    >
      {icon}
      <span className='ml-2'>{label}</span>
    </button>
  );
};

export default ActionBtn;
