import techBlog from './assets/images/Tech Blog.png';
import bucketList from './assets/images/BucketList.png';
import datePlanner from './assets/images/DatePlanner.png';
import weatherDashboard from './assets/images/WeatherDashboard.png';
import noteTaker from './assets/images/NoteTaker.png';
import prof from './assets/images/prof.png';

const logotext = "David";
const meta = {
    title: "David Clarke",
    description: "I’m David Clarke Software Engineer _ Full stack devloper, currently working in New York City",
};

const introdata = {
    title: "I’m David Clarke",
    animated: {
        first: "I develop full-stack apps",
        second: "I can dunk a basketball",
        third: "Click the about tab to learn more!",
    },
    description: "Software Engineer - Full-Stack Applications - NYC",
    your_img_url: prof,
};

const dataabout = {
    title: "About Myself",
    aboutme: "I am a full-stack software engineer specializing in the MERN (Mongodb, ExpressJS, React, NodeJS) application stack. I live in New York City and recently completed a rigorous coding bootcamp with the University of Pennsylvania, and am now in search of my first job as a software engineer.",
};
const resume = "http://localhost:3000/David_Hernandez_Clarke_Resume-v2.pdf";

const skills = [{
    name: "Javascript", 
},
{
    name: "ExpressJS",  
},
{
    name: "MongoDB",   
},
{
    name: "React",  
},
{
    name: "mySQL",
},
];

const interests = [{
    title: "Exercise",
    description: "I enjoy multiple forms of exercise like weightlifting, playing basketball, and hiking.",
},
{
    title: "Music",
    description: "I've played guitar since I was 10 years old and have a passion for music in all forms.",
},
{
    title: "Bay Area Sports",
    description: "Born and raised in the Bay Area, I've always been a huge fan and follower of the Giants, Warriors, and 49ers.",
},
];

const dataportfolio = [{
    title: "Tech Blog",
    img: techBlog,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://safe-stream-47655.herokuapp.com/",
    gitHubLink: 'https://github.com/dhclarke99/tech-blog'
},
{
    title: "BucketList Generator",
    img: bucketList,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: 'https://pacific-beach-42449.herokuapp.com/',
    gitHubLink: 'https://github.com/dhclarke99/bucketlist-generator'
},
{
    title: "Date Planner",
    img: datePlanner,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: 'https://dhclarke99.github.io/date_planner/',
    gitHubLink: 'https://github.com/dhclarke99/date_planner'
},
{
    title: "Weather Dashboard",
    img: weatherDashboard,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: 'https://dhclarke99.github.io/weather-dashboard/',
    gitHubLink: 'https://github.com/dhclarke99/weather-dashboard'
},
{
    title: "ExpressJS NoteTaker",
    img: noteTaker,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: 'https://serene-hamlet-96189.herokuapp.com/',
    gitHubLink: 'https://github.com/dhclarke99/expressjs-note-taker'
},

];

const contactConfig = {
    YOUR_EMAIL: "dhclarke99@gmail.com",
    YOUR_FONE: "(650)888-7563",
    description: "Feel free to contact me regarding any job inquiries, services, or questions! ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_bg8lqmf",
    YOUR_TEMPLATE_ID: "template_at6l977",
    YOUR_USER_ID: "3Mc2Gyl0Fense4EqS",
};

const socialprofils = {
    github: "https://github.com/dhclarke99",
    linkedin: "https://www.linkedin.com/in/david-clarke-17355a185/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    resume,
    skills,
    interests,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};