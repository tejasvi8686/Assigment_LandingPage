import Socials from "@/public/assets/social media.svg";
import Sports from "@/public/assets/sport.svg";
import Bank from "@/public/assets/bank.svg";
import Construction from "@/public/assets/construction.svg"
import Game from "@/public/assets/game.svg";
import Education from "@/public/assets/education.svg";
import Transport from '@/public/assets/transport.svg';
import Health from "@/public/assets/health.svg";
import Resturant from "@/public/assets/resturant.svg";
import MarketPlace from "@/public/assets/marketplace.svg";
import AR from "@/public/assets/ar.svg";
import TV from "@/public/assets/tv.svg";
import Startup from "@/public/assets/startup.svg";
import Religions from "@/public/assets/religions.svg";
import Online from "@/public/assets/online.svg";
import call from "@/public/assets/phone.svg";
import Mail from "@/public/assets/mail.svg";
import Map from "@/public/assets/map.svg";
import Esate from "@/public/assets/estate.svg";


//navbar 

export const itemleft = [
  {
    href: "/",
    text: "Services",
  },
  {
    href: "/",
    text: "Media",
  },
  {
    href: "/",
    text: "Cases",
  },
  {
    href: "/",
    text: "FAQ",
  },
  {
    href: "/",
    text: "Contacts",
  },

];

export const itemright = [
  {
    href: "/",
    img: call,
    text: "+91  0000000000",
  },
  {
    href: "/",
    img: Mail,
    text: "demo@gmail.com",
  },

];


export const course = [
  "iOS development",
  "Android development",
  "Web development",
  "UI/UX design",
  "Testing",
  "Launch",
  "IT consulting"
];



export const formFields = [
  {
    id: "full_name",
    label: "Full Name",
    type: "text",
    placeholder: "",
    required: false,
  },
  {
    id: "last_name",
    label: "Last Name",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    id: "phone_number",
    label: "Phone number (123-456-7890)",
    type: "tel",
    placeholder: "",
    required: true,
  },
  {
    id: "company_name",
    label: "Company (Ex. Google)",
    type: "text",
    placeholder: "",
    required: true,
  },
];

// constants.js

export const WEB_TECH = [
  'PHP',
  'Javascript',
  'Node.JS',
  'Web Socket',
  'Socket.Io',
  'Vue.js',
  'Nuxt',
  'MySQL',
  'Laravel',
  'GO lang',
  'django',
  'Python'
];

export const MOBILE_TECH = [
  'Swift',
  'Kotlin',
  'Alamofire',
  'Firebase',
  'CoreData',
  'Room',
  'Realm',
  'Coroutines',
  'RxJava',
  'RxSwift',
  'Unit Test',
  'Navigation'
];


export const projects = [
  { text: 'Social media', imageSrc: Socials },
  { text: 'Fitness and sport', imageSrc: Sports },
  { text: 'Bank', imageSrc: Bank },
  { text: 'Construction', imageSrc: Construction },
  { text: 'Game projects', imageSrc: Game },
  { text: 'Education', imageSrc: Education },
  { text: 'Auto, transport', imageSrc: Transport },
  { text: 'Medicine, health', imageSrc: Health },
  { text: 'Restaurants, food delivery', imageSrc: Resturant },
  { text: 'Marketplaces', imageSrc: MarketPlace },
  { text: 'AR technology', imageSrc: AR },
  { text: 'TV series', imageSrc: TV },
  { text: 'Startups', imageSrc: Startup },
  { text: 'Religion', imageSrc: Religions },
  { text: 'Online courses', imageSrc: Online }
];

type ProjectDetails = {
  title: string;
  description: string;
};

type DevelopedsType = {
  [key: string]: ProjectDetails;
};


export const Developeds: DevelopedsType  = {
  "Project 1": {
    title: "Project 1",
    description:
      "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels",
  },
  "Project 2": {
    title: "Project 2",
    description:
      "Developed a cutting-edge e-commerce platform with a focus on user experience, streamlined checkout process, and robust security measures.",
  },
  "Project 3": {
    title: "Project 3",
    description:
      "Created a comprehensive healthcare management system, featuring patient records, appointment scheduling, and telemedicine capabilities.",
  },
  "Project 4": {
    title: "Project 4",
    description:
      "Designed a scalable cloud-based solution for data analytics, offering real-time insights and customizable dashboards for various business needs.",
  },
};

export const links = [
  { text: 'Business analysis', separator: true },
  { text: 'iOS', separator: true },
  { text: 'Android', separator: true },
  { text: 'QA', separator: true },
  { text: 'UI/UX Design', separator: false }
];


export const Maps = [
  { src: Map, text: 'India' },
  { src: Esate, text: 'Real Estate' }
];

export const stats = [
  { title: '400%', description: 'User Growth' },
  { title: '+ 200 000', description: 'Active User' }
];