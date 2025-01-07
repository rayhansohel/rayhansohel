import { Helmet } from "react-helmet-async";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  return (
    <div id="contact" className="p-4">
      <Helmet>
        <title>Contact - Rayhan Sohel</title>
      </Helmet>
      <div className="space-y-6 w-full container mx-auto max-w-7xl">
        <div className="w-full text-center flex items-center flex-col">
          <h3 className="uppercase opacity-70">Contact Me</h3>
          <div className="flex items-center justify-center w-full gap-4 mt-2">
            <h1 className="text-4xl uppercase mb-2">Get In Touch</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Information Section */}
          <div className="space-y-6 col-span-1">
            <h3 className="mb-4 uppercase text-accent">Contact Info</h3>

            <div className="space-y-4">
              {/* Email */}
              {/* email  */}
              <div className="flex gap-4 items-center">
                <div className="w-20 h-20 rounded-xl bg-base-200 flex items-center justify-center">
                  <CiMail className="text-3xl" />
                </div>
                <div className="flex flex-col">
                  <h3 className="uppercase">Mail Me</h3>
                  <p className="flex items-center">
                    <a
                      href="mailto:arayhanohel@gmail.com"
                      className="hover:text-accent opacity-70"
                    >
                      arayhanohel@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center">
                    <a
                      href="mailto:hello@rayhansohel.com"
                      className="hover:text-accent opacity-70"
                    >
                      hello@rayhansohel.com
                    </a>
                  </p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex gap-4 items-center">
                <div className="w-20 h-20 rounded-xl bg-base-200 flex items-center justify-center">
                  <FiPhone className="text-3xl" />
                </div>
                <div className="flex flex-col">
                  <h3 className="uppercase">Contact Me</h3>
                  <p className="flex items-center">
                    <a
                      href="tel:+8801719403406"
                      className="hover:text-accent opacity-70"
                    >
                      +8801719403406
                    </a>
                  </p>
                  <p className="flex items-center">
                    <a
                      href="tel:+8801979403406"
                      className="hover:text-accent opacity-70"
                    >
                      +8801979403406
                    </a>
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-center">
                <div className="w-20 h-20 rounded-xl bg-base-200 flex items-center justify-center">
                  <IoLocationOutline className="text-3xl" />
                </div>
                <div className="flex flex-col">
                  <h3 className="uppercase">Location</h3>
                  <p className="flex items-center opacity-70">
                    Uttara, Dhaka-1230
                  </p>
                  <p className="flex items-center opacity-70">Bangladesh.</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-span-1 md:col-span-2 bg-base-200 p-6 rounded-3xl">
            <h3 className="mb-4 uppercase">Send Message</h3>
            <form>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input input-sm w-full"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input input-sm w-full"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    className="textarea w-full"
                    placeholder="Type your message here..."
                    rows="5"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-sm btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
