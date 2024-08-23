import React from 'react';

export interface ZodiacBlockProps {
  sign: string;
  dates: string;
  icon: JSX.Element;
  onClick: () => void;
}

const ZodiacBlock: React.FC<ZodiacBlockProps> = ({ sign, dates, icon, onClick }) => {
  return (
    <div className="zodiac-block" onClick={onClick}>
      {icon}
      <h3>{sign}</h3>
      <p>{dates}</p>
    </div>
  );
};

export default React.memo(ZodiacBlock);
