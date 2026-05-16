type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
    roles: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Abdelrahman Samy — Frontend Developer",
    fullName: "Abdelrahman Samy Ali",
    email: "abdelrahman.samy.dev@outlook.com",
  },
  hero: {
    name: "Abdelrahman Samy",
    p: [
      "I build modern web experiences",
      "with pixel-perfect attention to detail",
    ],
    roles: [
      "Frontend Developer",
      "React Specialist",
      "UI/UX Enthusiast",
      "TypeScript Developer",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Let's Work Together.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "About Me.",
      content: `I'm a Frontend Developer at VClasses with hands-on experience building responsive, user-friendly web applications using React, TypeScript, and modern web technologies. I specialize in crafting high-performance UIs with clean, maintainable code and strong attention to detail. From complex LMS platforms to progressive web apps and e-commerce solutions — I turn designs into exceptional digital experiences. Always learning, always building.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `A curated selection of projects showcasing my expertise in frontend development. From full-stack e-commerce platforms to progressive web apps and interactive UI components — each project demonstrates real-world problem-solving with modern technologies.`,
    },
  },
};
