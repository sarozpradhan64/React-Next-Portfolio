import data from "./data";
// get github username 
const getGithubLink = function(){
  let githubLink = null;
  data.socials.forEach((social)=>{
    if(social.title.toLowerCase()==='github' && social.href !== undefined){
     githubLink = social.href;
    }
  });
  return githubLink;
}
console.log(getGithubLink());
const metas = {
  google_analytics_id: "G-1618WEC7X4",
  user: {
    name: "Saroj Pradhan",
    whoAmI: "Web Developer",
    about: `As a web developer, I am skilled in the development and maintenance of 
    websites and web applications. I have experience working with frameworks such as 
    Laravel and Django, which allow for the efficient creation of scalable and reliable 
    web applications. I also have knowledge of React, a popular JavaScript library for 
    building user interfaces. I am constantly learning and staying up-to-date with the 
    latest technologies and best practices in web development, and I am able to apply my
     knowledge to solve complex problems and build high-quality web solutions.`,
  },
  title:'Saroj Pradhan - Django, Laravel developer in Nepal',
  description: "Looking for a skilled web developer with expertise in Laravel, Django, React, and Node.js? Check out my portfolio website! As a freelancer, I've developed custom web applications and websites that meet the unique needs of my clients. Explore my portfolio and let's work together to bring your ideas to life!",
   imageSrc: `${getGithubLink() && getGithubLink()+'.png'}`,
   keywords:'web developer, software developer, freelancer, nepal, freelancer in kathmandu, web developer in kathmandu'
};

export default metas;
