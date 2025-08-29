import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

// Social media links from CV
const socialLinks = [
  {
    name: "Email",
    link: "mailto:abdelrahman.samy.dev@outlook.com",
    icon: "📧"
  },
  {
    name: "Phone",
    link: "tel:+201141393811",
    icon: "📞"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdelrahman-samy-ali/",
    icon: "💼"
  },
  {
    name: "GitHub",
    link: "https://github.com/abdelrahman-samy-dev",
    icon: "💻"
  }
];

const Contact = () => {

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <div className="mt-12 flex flex-col gap-8">
          <p className="text-white text-lg mb-4">
            Feel free to reach out through any of these platforms:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary flex items-center gap-4 rounded-lg px-6 py-4 font-medium text-white hover:bg-opacity-80 transition-all duration-300"
              >
                <span className="text-2xl">{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-white text-lg">
              Download my CV to learn more about my experience and skills.
            </p>
            <a
              href="/Abdelrahman_Samy_Ali_Frontend_Developer_CV.pdf"
              download
              className="bg-tertiary shadow-primary mt-4 inline-block rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none hover:bg-opacity-80 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
