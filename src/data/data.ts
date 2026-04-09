import { Code2, Server, Search, Smartphone, Sparkles } from "lucide-react";

const data = {
  services: [
    {
      title: "AI & LLM Integration",
      slug: "ai-llm-integration",
      icon: Sparkles,
      description:
        "I integrate advanced Artificial Intelligence and Large Language Models into existing systems to automate processes and enhance intelligence.",
    },
    {
      title: "Software Development",
      slug: "software-development",
      icon: Code2,
      description:
        "I build custom software solutions tailored to your business needs, from web applications to enterprise systems.",
    },

    {
      title: "Search Engine Optimization",
      slug: "seo",
      icon: Search,
      description:
        "I optimize websites to rank higher on SERPs, increasing organic traffic and improving visibility.",
    },
    {
      title: "Mobile App",
      slug: "mobile-app",
      icon: Smartphone,
      description:
        "I develop cross-platform mobile apps for iOS and Android using React Native, ensuring a seamless user experience.",
    },
  ],
};

export default data;
