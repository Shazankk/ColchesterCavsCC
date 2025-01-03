import { SectionWrapper } from "../hoc";

const ContactUs = () => {
  console.log("Rendering ContactUs Page");
  return (
    <div id="contact">
      <h1>Contact Us Page</h1>
      <p>This is the Contact Us page of the website.</p>
    </div>
  );
};

const WrappedContact = SectionWrapper(ContactUs, "ContactUs");
export default WrappedContact;
