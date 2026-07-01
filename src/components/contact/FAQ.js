import React, { useState } from "react";
import "../../styles/FAQ.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "Is JobPilot AI free to use?",
    answer:
      "Yes! JobPilot AI offers free career tools, with additional premium features planned for the future.",
  },
  {
    question: "How does the AI Resume Analyzer work?",
    answer:
      "Upload your resume and our AI analyzes it for ATS compatibility, formatting, missing skills, and improvement suggestions.",
  },
  {
    question: "Can I download my resume?",
    answer:
      "Yes. You can create and download your resume in a professional PDF format.",
  },
  {
    question: "How can I contact support?",
    answer:
      "Simply fill out the contact form above or email us at support@jobpilotai.com.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        <div className="faq-header">
          <span>FAQs</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to the most common questions about JobPilot AI.
          </p>
        </div>

        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}

              {activeIndex === index ? (
                <FaMinus />
              ) : (
                <FaPlus />
              )}
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}

export default FAQ;