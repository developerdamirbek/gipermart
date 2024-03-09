import React from 'react';
import { FaqItem } from './faq-item';

export const FaqAccordion = ({ faqs }) => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-full">
            {faqs.map((faq, index) => (
                <FaqItem
                    key={index}
                    question={faq.question}
                    links={faq}
                    isOpen={openIndex === index}
                    toggleAccordion={() => toggleAccordion(index)}
                />
            ))}
        </div>
    );
};
