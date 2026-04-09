import { Code2, Server, Search, Smartphone } from "lucide-react";

const data = {
  services: [
    {
      title: "Web Development",
      slug: "web-development",
      icon: Code2,
      description:
        "Create a site to represent your brand, inform customers, and provide a user-friendly experience.",
    },

    {
      title: "Web Hosting",
      slug: "web-hosting",
      icon: Server,
      description:
        "Complete web hosting with deployment, backups, and robust hardware for optimal performance.",
    },
    {
      title: "Search Engine Optimization",
      slug: "seo",
      icon: Search,
      description:
        "Optimize websites to rank higher on SERPs, increasing organic traffic and improving visibility.",
    },
    {
      title: "Mobile App",
      slug: "mobile-app",
      icon: Smartphone,
      description:
        "Develop cross-platform apps with React Native for iOS and Android using a single codebase.",
    },
  ],
};

export default data;

