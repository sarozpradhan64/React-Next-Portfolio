const data = {
  socials: [
    // icon uses fontawesome classes
    {
      title: "github",
      href: "https://github.com/sarozpradhan64",
      icon: <i className="fab fa-github"></i>,
    },
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/saroj-pradhan-4628831a1/",
      icon: <i className="fab fa-linkedin-in"></i>,
    },
    {
      title: "facebook",
      href: "https://facebook.com/srz.prdhn",
      icon: <i className="fab fa-facebook-f"></i>,
    },
    {
      title: "instagram",
      href: "https://instagram.com/srz.prdhn",
      icon: <i className="fab fa-instagram"></i>,
    },
  ],

  routes: [
    {
      title: "home",
      href: "/",
      icon: <i className="fa-solid fa-home"></i>,
    },

    {
      title: "works",
      href: "/works",
      icon: <i className="fa-solid fa-briefcase"></i>,
    },
    {
      title: "blogs",
      href: "/blogs",
      icon: <i className="fa-solid fa-note-sticky"></i>,
    },
    {
      title: "contact",
      href: "/contact",
      icon: <i className="fa-solid fa-address-book"></i>,
    },
  ],

  services: [
    {
      title: "Web Development",
      slug: "web-development",
      thumbnail:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "Create a site to represent your brand, inform customers, and provide a user-friendly experience.",
    },

    {
      title: "Web Hosting",
      slug: "web-hosting",
      thumbnail:
        "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "Complete web hosting with deployment, backups, and robust hardware for optimal performance.",
    },
    {
      title: "Search Engine Optimization",
      slug: "seo",
      thumbnail:
        "https://images.unsplash.com/photo-1637606346315-d23ed32a6cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description:
        "Optimize websites to rank higher on SERPs, increasing organic traffic and improving visibility.",
    },
    {
      title: "Mobile App",
      slug: "mobile-app",
      thumbnail:
        "https://images.unsplash.com/photo-1596742578443-7682ef5251cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=954&q=80",
      description:
        "Develop cross-platform apps with React Native for iOS and Android using a single codebase.",
    },
  ],
};

export default data;
