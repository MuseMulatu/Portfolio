import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiScikitlearn,
  SiTypescript,
  SiPandas,
  SiNumpy,
  SiMongodb,
  SiApachehadoop,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in JavaScript for developing interactive and dynamic web applications, utilizing modern frameworks and libraries to enhance user experiences.",
  },

  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500 ml-5" />,
    text: "Skilled in React for building single-page applications with reusable components, managing state efficiently, and implementing responsive user interfaces.",
  },
  {
    id: nanoid(),
    title: "Node Js",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in Node.js for developing server-side applications, creating RESTful APIs, and handling asynchronous operations for scalable back-end solutions.",
  },

  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in HTML5/CSS for creating structured and semantic web content, building responsive and accessible web pages with modern web standards.",
  },
  {
    id: nanoid(),
    title: "Scikit-learn",
    icon: <SiScikitlearn className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Scikit-learn for implementing machine learning algorithms, data preprocessing, and model evaluation to build predictive models and analyze data effectively.",
  },
  {
    id: nanoid(),
    title: "Typescript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in using TypeScript to develop scalable and maintainable web applications with type-safe JavaScript, improving code quality and development efficiency.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Python for general-purpose programming, data analysis, web development, and automation, with expertise in libraries such as Flask, Django, and NumPy.",
  },

  {
    id: nanoid(),
    title: "Pandas",
    icon: <SiPandas className="h-16 w-16 text-emerald-500 ml-5" />,
    text: "Skilled in Pandas for data manipulation and analysis, enabling efficient handling of large datasets, data cleaning, and exploratory data analysis.",
  },

  {
    id: nanoid(),
    title: "Numpy",
    icon: <SiNumpy className="h-16 w-16 text-emerald-500 ml-5" />,
    text: "Adept at using NumPy for numerical computing, including array operations, mathematical functions, and performing high-performance calculations on large datasets.",
  },

  {
    id: nanoid(),
    title: "Hadoop",
    icon: <SiApachehadoop className="h-16 w-16 text-emerald-500 ml-5" />,
    text: "Experienced in Apache Hadoop for big data processing and distributed storage, leveraging HDFS and MapReduce to manage and analyze large-scale datasets.",
  },

  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-16 w-16 text-emerald-500 ml-5" />,
    text: "Proficient in MongoDB for building and managing NoSQL databases, designing schema-less data models, and performing complex queries for efficient data retrieval.",
  },

  {
    id: nanoid(),
    title: "Postgresql",
    icon: <SiPostgresql className="h-16 w-16 text-emerald-500 ml-5" />,
    text: "Skilled in PostgreSQL for relational database management, designing robust database schemas, writing complex SQL queries, and ensuring data integrity and performance optimization.",
  },
  {
    id: nanoid(),
    title: "MySQL",
    icon: <SiMysql className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in MySQL for managing relational databases, performing data modeling, writing efficient SQL queries, and ensuring high availability and security of data.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/3756345/pexels-photo-3756345.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://storify-gamma.vercel.app/",
    github: "https://github.com/musemulatu",
    title: "Storify E-Commerce Store",
    text: "Discover top-quality products at unbeatable prices. Shop now for the latest in fashion, electronics, home goods, and more!",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://siras.netlify.app/",
    github: "https://github.com/musemulatu",
    title: "Siras Jobs",
    text: "Your career starts here. Explore thousands of job listings, connect with employers, and find your dream job today!",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/6392975/pexels-photo-6392975.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://savdemy.com/",
    github: "https://github.com/musemulatu",
    title: "Online Learning Platform",
    text: "Transform your learning experience with our comprehensive LMS. Access courses, track progress, and achieve your educational goals efficiently.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://savdemy.com/",
    github: "https://github.com/musemulatu",
    title: "Coffee Exports Data Prediction and Analysis Model",
    text: "Jupyter Notebook On Coffee Exports Data Exploratory Analysis, Feature Engineering and Prediction Models by Python, NumPy, Pandas, MatplotLib and Sckit-Learn",
  },
];
