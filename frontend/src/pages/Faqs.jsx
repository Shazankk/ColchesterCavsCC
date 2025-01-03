// src/components/Faqs.jsx
import { Accordion } from "flowbite-react";
import { questions } from "../constants";

const Faqs = () => {
  console.log("Rendering Faqs Page");
  return (
    <div id="faqs" className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2">
          Find answers to some of the most common questions below.
        </p>
      </div>

      {/* FAQs Section */}
      <Accordion collapseAll alwaysOpen={false}>
        {questions.map((question, index) => (
          <Accordion.Panel key={index} className="mb-4">
            <Accordion.Title
              className="!bg-gradient-to-tr !from-gray-100 !to-gray-300 !text-gray-800 !shadow-lg !rounded-lg hover:!from-gray-200 hover:!to-gray-300 transition duration-300 cursor-pointer"
              as="h2"
            >
              {question.ques}
            </Accordion.Title>
            <Accordion.Content className="bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-700">{question.answer}</p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
};

export default Faqs;
