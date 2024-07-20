import Ista from "@/public/assets/insta.svg";
import fb from "@/public/assets/fb.png";
import x from "@/public/assets/x.svg";
import Li from "@/public/assets/link.svg";
import yt from "@/public/assets/yt.svg";
import call from "@/public/assets/phone.svg";
import Mail from "@/public/assets/mail.svg";


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



// fotter 
// export const footerLinks = [
//   {
//     title: "Models",
//     links: [
//       { href: "/", text: "Storie" },
//       { href: "/", text: "One" },
//       { href: "/", text: "Loev" }

//     ],
//   },
//   {
//     title: "Company",
//     links: [
//       { href: "/", text: "About" },
//       { href: "/", text: "Blog" }

//     ],
//   },
//   {
//     title: "Quick Link",
//     links: [
//       { href: "/", text: "Become Dealer" },
//       { href: "/", text: "Locate a Dealer" },
//       { href: "/", text: "Emagine" },
//     ],
//   },
//   {
//     title: "",
//     links: [
//       { href: "/", text: "Book a test ride" },
//       { href: "/", text: "Book now" },
//       { href: "/", text: "Contact" },
//     ],
//   },
// ];



// export const links = [
//   {
//     href: "https://www.instagram.com",
//     src: Ista,
//     alt: "insta",
//   },
//   {
//     href: "https://www.twitter.com",
//     src: x,
//     alt: "x",
//   },
//   {
//     href: "https://www.facebook.com",
//     src: fb,
//     alt: "fb",
//   },
//   {
//     href: "https://www.linkedin.com",
//     src: Li,
//     alt: "li",
//   },
//   {
//     href: "https://www.youtube.com",
//     src: yt,
//     alt: "yt",
//   },
// ];  


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
