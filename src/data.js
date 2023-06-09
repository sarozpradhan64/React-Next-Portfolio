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
    }
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
      title: "tools",
      href: "/tools",
      icon: <i className="fa-solid fa-fire"></i>,
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
      thumbnail:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "A website is your company's online presence and serves as a key marketing tool for attracting and engaging customers. Web development involves creating an online platform that represents your brand, provides information about your products or services, and offers a user-friendly experience to visitors.",
    },
    {
      title: "Mobile App",
      thumbnail:
        "https://images.unsplash.com/photo-1596742578443-7682ef5251cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=954&q=80",
      description:
        "Cross-platform app development using React Native is a way of building mobile applications that can be deployed on multiple platforms, such as iOS and Android, using a single codebase. React Native is a JavaScript framework that allows developers to build native mobile apps using a combination of JavaScript and a set of pre-built components.",
    },

    {
      title: "Search Engine Optimization",
      thumbnail:
        "https://images.unsplash.com/photo-1637606346315-d23ed32a6cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description:
        "SEO is the practice of optimizing websites or web pages to rank higher in search engine results pages (SERPs). The goal of SEO is to increase the quantity and quality of organic traffic to a website by improving its visibility and relevance to users searching for specific keywords or phrases.",
    },
  ],
};

export default data;
