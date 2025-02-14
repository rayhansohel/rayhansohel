import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  // Handle form submission
  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        "service_17iiarl",
        "template_eojf38b",
        form.current,
        {
          publicKey: "22EN8vr03AmvSFy6n",
        }
      );
      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Email sending failed:", error);
    }
  };

  return (
    <div className="col-span-1 md:col-span-2 bg-base-200 p-6 rounded-3xl">
      <h3 className="mb-4 uppercase">Send Message</h3>
      <form ref={form} className="space-y-4" onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="input input-sm w-full rounded-full"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="input input-sm w-full rounded-full"
          required
        />
        <textarea
          name="message"
          className="textarea w-full rounded-xl"
          placeholder="Type your message here..."
          rows="5"
          required
        />
        <button type="submit" className="btn btn-sm btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

