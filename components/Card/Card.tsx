import React from 'react';
import './Card.css';
import { FaSignal,FaRegQuestionCircle } from "react-icons/fa";

interface Props {
  list: {
    icon?: string | Element;
    isTitle?: boolean;
    info?: Record<string, unknown>;
    text: string;
    value: string;
  }[];
}
const Card = ({ list }: Props) => {
  return (
    <div className="card">
      {list.map((item, index) => {
        return (
          <div
            className={item.isTitle ? 'list-item list-item-title' : 'list-item'}
            key={item.text}
          >
            <div className="flex items-center">
              {item.icon && <i className="icon  bg-[var(--bg-transparent-white)] text-white rounded-full w-6 h-6 flex justify-center items-center float-left mr-2"><FaSignal /></i>}
              <span className="list-item-text">{item.text}</span>
              {item.info && <FaRegQuestionCircle className='text-white ml-2' />}
            </div>
            <span className="list-item-value">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
