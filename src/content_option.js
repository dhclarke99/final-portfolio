import techBlog from './assets/images/Tech Blog.png';
import bucketList from './assets/images/BucketList.png';
import datePlanner from './assets/images/DatePlanner.png';
import weatherDashboard from './assets/images/WeatherDashboard.png';
import noteTaker from './assets/images/NoteTaker.png';


const logotext = "David";
const meta = {
    title: "David Clarke",
    description: "I’m David Clarke Software Engineer _ Full stack devloper, currently working in New York City",
};

const introdata = {
    title: "I’m David Clarke",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop full-stack apps",
    },
    description: "Software Engineer - Full-Stack Applications - NYC",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "About Myself",
    aboutme: "I am a full-stack software engineer specializing in the MERN (Mongodb, ExpressJS, React, NodeJS) application stack. I live in New York City and recently completed a rigorous coding bootcamp with the University of Pennsylvania, and am now in search of my first job as a software engineer. ",
};
const worktimeline = [{
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
},
{
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
},
{
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
},
];

const skills = [{
    name: "Python",
    value: 90,
},
{
    name: "Djano",
    value: 85,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "React",
    value: 60,
},
{
    name: "Jquery",
    value: 85,
},
];

const services = [{
    title: "UI & UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Mobile Apps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Wordpress Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
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
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};