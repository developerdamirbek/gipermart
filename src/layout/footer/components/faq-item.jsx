import React from 'react';
import { Link } from 'react-router-dom';

export const FaqItem = ({ question, links, isOpen, toggleAccordion }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full flex justify-between items-center py-4 px-2 focus:outline-none"
                onClick={toggleAccordion}
            >
                <span className="text-left text-[12px] text-[#333] ">{question}</span>
                <svg
                    className={`${
                        isOpen ? 'transform rotate-180' : ''
                    } w-5 h-5 transition-transform`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="py-1 px-6">
                    <ul>
                        {Object.values(links).map((link, index) => (
                            <li key={index}>
                                <Link className="text-[#333] text-[11px]">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
