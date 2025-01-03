// src/components/FooterFlow.jsx
import { Footer } from "flowbite-react";

function FooterFlow() {
  return (
    <Footer
      container={true}
      className="bg-gradient-to-t from-gray-300 to-gray-500 dark:from-gray-800 dark:to-gray-900 shadow-lg pt-4" // Adjusted padding-top
    >
      <div className="w-full flex flex-wrap items-center justify-between">
        <Footer.Copyright
          href="#"
          by="Colchester Cavaliers CC™"
          year={2024}
          className="text-sm text-gray-600 dark:text-gray-300 font-bold"
        />
        <div className="mt-2 md:mt-0">
          {" "}
          {/* Reduced margin-top */}
          <span className="text-sm text-gray-600 dark:text-gray-300 font-bold">
            Developed by{" "}
            <a
              href="mailto:shashaankgoud@gmail.com"
              className="text-blue-600 hover:underline dark:text-blue-500 font-bold"
            >
              Shashank
            </a>
          </span>
        </div>
      </div>
    </Footer>
  );
}

export default FooterFlow;
