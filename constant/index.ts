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
import Analysis from "@/public/assets/planing.svg"
import Design from "@/public/assets/design.png"
import Development from "@/public/assets/coding-language.svg"
import Testing from "@/public/assets/security.svg"
import Launching from "@/public/assets/hosting 1.svg"
import Application from "@/public/assets/application.svg"
import One from "@/public/assets/1.svg"
import Two from "@/public/assets/2.svg"
import Three from "@/public/assets/3.svg"
import Four from "@/public/assets/4.svg"
import Five from "@/public/assets/5.svg"
import six from "@/public/assets/6.svg"
import Phone from "@/public/assets/phonef.svg";
import Address from "@/public/assets/addf.svg";
import Mailf from "@/public/assets/mailf.svg";
import Request from "@/public/assets/requestf.svg";



//navbar 

export const itemleft = [
  {
    href: "#project",
    text: "Services",
  },
  {
    href: "#planet",
    text: "Media",
  },
  {
    href: "#cases",
    text: "Cases",
  },
  {
    href: "#faq",
    text: "FAQ",
  },
  {
    href: "#contact",
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
    label: "My Name",
    type: "text",
    placeholder: "",
    required: false,
  },
  {
    id: "last_name",
    label: "🏳️‍🌈 +91 0000000000",
    type: "number",
    placeholder: "",
    required: true,
  },
  {
    id: "phone_number",
    label: "Bussiness Name",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    id: "company_name",
    label: "demoaccount@gmail,com",
    type: "email",
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


export const CardDatasLeft = [
  {
    id: 1,
    imageSrc: Analysis,
    title: "Analysis",
    description: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
    badgeSrc: One
  },
  {
    id: 2,
    imageSrc: Design,
    title: "Design",
    description: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
    badgeSrc: Two
  },
  {
    id: 3,
    imageSrc: Development,
    title: "Development",
    description: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
    badgeSrc: Three
  },
];

export const CardDatasRight = [
  {
    id: 1,
    imageSrc: Testing,
    title: "Testing",
    description: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
    badgeSrc: Four
  },
  {
    id: 2,
    imageSrc: Launching,
    title: "Launching",
    description: "We craft precise technical specs, aligning with your business, technology, and user requirements.",

    badgeSrc: Five
  },
  {
    id: 3,
    imageSrc: Application,
    title: "Support",
    description: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
    badgeSrc: six
  },
]

export const values = [
  { value: '28', label: 'team members' },
  { value: '+100', label: 'Projects' },
  { value: '7 Years', label: 'in IT sphere' },
];

 export const contactInfo = [
  {
    image: Phone,
    label: 'Contact nums',
    value: '+91 0000000000'
  },
  {
    image: Mailf,
    label: 'Gmail',
    value: 'demo@gmail.com'
  },
  {
    image: Address,
    label: 'Address',
    value: 'Mumbai, INDIA'
  },
  {
    image: Request,
    label: 'Leave a Request',
    value: 'Leave a Request'
  }
];