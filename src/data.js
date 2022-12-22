const data = {
  socials: [
    // icon uses fontawesome classes
    {
      title: "github",
      href: "https://github.com/sarozpradhan64",
      icon: <i className="fab fa-github"></i>,
    },
    {
      title:"dev.to",
      href:'https://dev.to/sarozpradhan64',
      icon: <i class="fa-brands fa-dev"></i>,
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
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/saroj-pradhan-4628831a1/",
      icon: <i className="fab fa-linkedin-in"></i>,
    },
  ],

  routes: [
    { title: "works", href: "/works" },
    { title: "contact", href: "/contact" },
  ],
  works: [
    {
      title: "Gyannhub",
      slug: "gyannhub",
      type: "website",
      year: "2022",
      href: "https://gyannhub.com",
      source: "https://github.com",
      image: "gyannhubImg",
      description: "Quiz note application",
      role: "FullStack",
      task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat taciti lacinia per semper vestibulum potenti lacinia at ullamcorper enim. Suspendisse ante sodales luctus lacinia purus in lobortis habitasse dapibus neque. Nulla ipsum amet mollis metus bibendum pulvinar ridiculus malesuada porta placerat.",
    },
    {
      title: "BlazeCodes",
      slug: "blazecodes",
      type: "website",
      year: "2022",
      href: "https://blazecodes.com",
      source: "https://github.com",
      image: "blazecodesImg",
      description: "blog application",
      role: "FullStack",
      task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat taciti lacinia per semper vestibulum potenti lacinia at ullamcorper enim. Suspendisse ante sodales luctus lacinia purus in lobortis habitasse dapibus neque. Nulla ipsum amet mollis metus bibendum pulvinar ridiculus malesuada porta placerat.",
    },
  ],
};

export default data;
