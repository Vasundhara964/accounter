import { Card } from '@mui/material';
import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => (
  <div className="faq-item">
    <h3 className="faq-question">{question}</h3>
    <p className="faq-answer">{answer}</p>
  </div>
);

const FAQPage = ({ faqData }) => (
    <Card sx={{m:2,p:10,bgcolor:'white',color:'black'} } style={{padding:20}} variant='outlined'>
  <div className="faq-page">
    <h1 style={{fontFamily:'italic',color:'red'}}>Frequently Asked Questions</h1>
    <div className="faq-list">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  </div>
  </Card>

);

const faq = () => {
  const faqData = [
    { question: 'Where can I see my business stats?', answer: 'You can go through the dashboard, to find graphs and progressbars of the business data.' },
    { question: 'How do I add new bill?', answer: 'You can click on bills, and you can find new bill button.' },
    { question: 'What is Payments Page?', answer: 'You can make payments to the vendors through payment page, you have variety of mode of Transaction' },
    { question: 'How do I make use of stock images page?', answer: "You can keep an eye on the particular product's image, if you want to identify it quickly." },
    { question: 'How to Edit the bill?', answer: 'You can go through the Bills page, you will see an edit icon there..you can click and edit through that.' },
    
    // ... add more FAQ items
  ];

  return (
    <div>
      <FAQPage faqData={faqData} />
    </div>
  );
};


export default faq;
