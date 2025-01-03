import { SectionWrapper } from "../hoc";

const Faqs = () => {
  console.log("Rendering Faqs Page");
  return (
    <div id="faqs">
      <h1>FAQs Page</h1>
      <p>This is the FAQs page of the website.</p>
    </div>
  );
};

const WrappedFaqs = SectionWrapper(Faqs, "Faqs");
export default WrappedFaqs;
