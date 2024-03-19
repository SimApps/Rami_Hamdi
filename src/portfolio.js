/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rami's Portfolio",
  description:
    "A passionate individual who always eager to learn and create an impact.",
  og: {
    title: "Rami Hamdi Portfolio",
    type: "website",
    url: "https://simapps.github.io/Rami_Hamdi",
  },
};

//Home Page
const greeting = {
  title: "Rami Hamdi",
  logo_name: "RamiHamdi",
  nickname: "SimApp",
  subTitle:   "A passionate individual who always eager to learn and create an impact.",
  resumeLink: "https://drive.google.com/file/d/1kgxLKiV26b5Z3za7uUKDsZy7XbpGMWep/view?usp=sharing",
  portfolio_repository: "https://simapps.github.io/rami_hamdi_blog/",
  githubProfile: "https://github.com/SimApps",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/SimApps",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rami-hamdi-57b371149/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
 /* {
    name: "YouTube",
    link: "https://youtube.com",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },*/
  {
    name: "Gmail",
    link: "mailto:rami.hamdi.2023@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
 /* {
    name: "Twitter",
    link: "https://twitter.com",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },*/
  {
    name: "Facebook",
    link: "https://www.facebook.com/degague",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
 /* {
    name: "Instagram",
    link: "https://www.instagram.com",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },*/
];

const skills = {
  data: [
    {
      title: "Mobile development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Develop highly scalable production ready mobile applications",
        "⚡ Develop native mobile applications using Kotlin and java",
        "⚡ Develop cross platform applications using Flutter",
      ],
      softwareSkills: [
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "devicon:kotlin-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "logos:android",
          style: {
            backgroundColor: "transparent",
           // color: "#D00000",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Jetpack Compose",
        //  imageSrc: "deeplearning_ai_logo.png",
        fontAwesomeClassname: "simple-icons:jetpackcompose",
        },
      ],
    },
    {
      title: "Familiar with QHSE issues, standards and certifications",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in planning, developing, and implementing emergency preparedness plans and conducting mock drills that comply with standards and requirements",
        "⚡ During my military service, I developed the ability to conduct risk assessments, investigate incidents and accidents, prepare reports, and schedule and conduct training",
        "⚡ Deliver engineers point of view to identify and apply the suitable control measures against various hazards to achieve zero incidents in the workplace"
      ],
      softwareSkills: [
        {
          skillName: "Management",
          fontAwesomeClassname: "fluent-mdl2:workforce-management",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "safety",
          fontAwesomeClassname: "fa6-solid:helmet-safety",
          style: {
            color: "#1572B6",
          },
        },
        
      ],
    },
    {
      title: "Navy Special Forces Officer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Former Navy Special Forces Officer with proven experience in leading and executing special operations missions", 
        "⚡ Joint Military Operations, Risk Management, Military Engineering, and Maintenance Management",
        "⚡ Team leader, program manager and analyst",
        "⚡ Acting as a liaison officer",
      ],
      softwareSkills: [
        {
          skillName: "Military",
          fontAwesomeClassname: "healthicons:military-worker",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Navy",
          fontAwesomeClassname: "noto:anchor",
          style: {
            color: "#FF9900",
          },
        },
        
      
      ],
    },
    {
      title: "Just started Learning UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Try Designing highly attractive user interface for mobile applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        }
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/SimApps/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/amirami_simapp?hr_r=1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ramihamdi",
    },
   /* {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },*/
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@amirami.simapp",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/hamdirami",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Tunis Higher Institute of Management",
      subtitle: "Master In Integrated Management Quality, Safety and Environment",
      logo_path: "isg_logo.svg",
      alt_name: "ISG Tunis",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ I have taken varity of courses related to Quality Management, Risk Assesment, Strategic Management etc.",
        "⚡ Apart from this, I have done online courses on HSE and Project Management.",
        "⚡ End of Study Project ⚡Migration from ohsas 18001 to ISO 45001",
      ],
      website_link: "https://isg.rnu.tn/",
    },
    {
      title: "School of Specialities and Application : Naval Academy",
      subtitle: "Captain Courses",
      logo_path: "centre_formation_marine_inf.png",
      alt_name: "Naval Academy",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ I have taken varity of courses related to Armement, Maritime operation's planning, military logistics, etc.",
       // "⚡ Apart from this, I have also done Logistic Courses.",
      ],
      website_link: "http://www.csn.defense.tn/index.php/en",
    },
    {
      title: "Royal Naval School Casablanca",
      subtitle: "The Navy School of application",
      logo_path: "logo_ern_casablanca.png",
      alt_name: "Royal Naval School - Casa Blanca : Morocco",
      duration: "2015 - 2016",
      descriptions: [
        "⚡ I have taken varity of courses related to Martime Laws, Meteorologie, etc.",
      ],
      website_link: "",
    },
    {
      title: "Military Academy",
      subtitle: "Weapons Science Engineer",
      logo_path: "fondouk_jdid_logo.jpeg",
      alt_name: "Fondouk Jdid",
      duration: "2012 - 2015",
      descriptions: [
        "⚡ I have taken varity of courses related to Armements, Probabilie, Statistics, Electronics, OptRonics, Munition, etc.",
        "⚡ Ballistic and aerodynamic analysis: Understanding the physics of projectiles and flight.",
        "⚡ Testing and evaluation: Assessing weapon performance and safety.",
        "⚡ Materials and manufacturing: Knowledge of materials properties and manufacturing techniques.",
        "⚡ Weapons designs and developments: Creating and improving weapons systems.",
        "⚡ End of Study Project ⚡ Design and implement a system that fix small weapons on shooting carriage"
      ],
      website_link: "http://www.csn.defense.tn/index.php/en",
    },
      {
        title: "Tunisia Preparatory School for the Military Academies",
        subtitle: "Bachelor License in Physics-Chemistry",
        logo_path: "epams_logo.jpg",
        alt_name: "EPAMS",
        duration: "2010 - 2012",
        descriptions: [
          "⚡  I have taken varity of courses related to Algebra, Mathematics, Chemistry, Physics, computer science, industrial science etc.",

        ],
      website_link: "http://www.csn.defense.tn/index.php/en",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Paratrooper Training",
      subtitle: "Ministery Of Defence Tunisia",
      logo_path: "paratrooper.jpeg",
      certificate_link:    "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Special Force Training",
      subtitle: "Ministery Of Defence Tunisia",
      logo_path: "navy_commando.jpg",
      certificate_link:   "",
      alt_name: "Ministery Of Defence Tunisia",
      color_code: "#8C151599",
    },
    {
      title: "NATO Planing",
      subtitle: "Ministery Of Defence Tunisia",
      logo_path: "nato_logo.jpeg",
      certificate_link: "",
      alt_name: "Ministery Of Defence Tunisia",
      color_code: "#8C151599",
    },
    {
      title: "Hazard Communication: Basic",
      subtitle: "OSHA Academy",
      logo_path: "osha.jpg",
      certificate_link:
        "https://www.oshatrain.org/courses/mods/105e.html",
      alt_name: "Occupational Safety & Health Training",
      color_code: "#8C151599",
    },
    {
      title: "Introduction to Safety Management",
      subtitle: "OSHA Academy",
      logo_path: "osha.jpg",
      certificate_link:
        "https://www.oshatrain.org/courses/mods/700e.html",
      alt_name: "Occupational Safety & Health Training",
      color_code: "#8C151599",
    },
    {
      title: "Effective Safety Committee Operations",
      subtitle: "OSHA Academy",
      logo_path: "osha.jpg",
      certificate_link:
        "https://www.oshatrain.org/courses/mods/701e.html",
      alt_name: "Occupational Safety & Health Training",
      color_code: "#8C151599",
    },
    {
      title: "Effective Accident Investigation",
      subtitle: "OSHA Academy",
      logo_path: "osha.jpg",
      certificate_link:
        "https://www.oshatrain.org/courses/mods/702e.html",
      alt_name: "Occupational Safety & Health Training",
      color_code: "#8C151599",
    },
    {
      title: "Introduction to OSH Training",
      subtitle: "OSHA Academy",
      logo_path: "osha.jpg",
      certificate_link:
        "https://www.oshatrain.org/courses/mods/703e.html",
      alt_name: "Occupational Safety & Health Training",
      color_code: "#8C151599",
    },
    {
      title: "Hazard Analysis and Control",
      subtitle: "OSHA Academy",
      logo_path: "osha.jpg",
      certificate_link:
        "https://www.oshatrain.org/courses/mods/704e.html",
      alt_name: "Occupational Safety & Health Training",
      color_code: "#8C151599",
    },
    {
      title: "Hazard Communication Program",
      subtitle: "OSHA Academy",
      logo_path: "osha.jpg",
      certificate_link:
        "https://www.oshatrain.org/courses/mods/705e.html",
      alt_name: "Occupational Safety & Health Training",
      color_code: "#8C151599",
    },
    {
      title: "Hazard Analysis and Control",
      subtitle: "OSHA Academy",
      logo_path: "osha.jpg",
      certificate_link:
        "https://www.oshatrain.org/courses/mods/704e.html",
      alt_name: "Occupational Safety & Health Training",
      color_code: "#8C151599",
    },
    {
      title: "Conducting a Job Hazard Analysis (JHA)",
      subtitle: "OSHA Academy",
      logo_path: "osha.jpg",
      certificate_link:
        "https://www.oshatrain.org/courses/mods/706e.html",
      alt_name: "Occupational Safety & Health Training",
      color_code: "#8C151599",
    },
    {
      title: "Effective OSH Committee Meetings",
      subtitle: "OSHA Academy",
      logo_path: "osha.jpg",
      certificate_link:
        "https://www.oshatrain.org/courses/mods/707e.html",
      alt_name: "Occupational Safety & Health Training",
      color_code: "#8C151599",
    },
    {
      title: "Safety Supervision and Leadership",
      subtitle: "OSHA Academy",
      logo_path: "osha.jpg",
      certificate_link:
        "https://www.oshatrain.org/courses/mods/712e.html",
      alt_name: "Occupational Safety & Health Training",
      color_code: "#8C151599",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
 // subtitle: "Work, Internship and Volunteership",
  subtitle: "Work and Internship",
  description:
    " I'm quietly confident, naturally curious, and perpetually working on improving my skills.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Flutter Developer",
          company: "Digital & Data Services",
          company_url: "https://dndserv.com/",
          logo_path: "logo-dnd.webp",
          duration: "Since October 2023",
          location: "Remote",
          description:
            "Skilled in building cross-platform solutions for education and delivery. Proven ability to deliver from concept to user testing and deployment.",
           
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "All Soft Multimedia",
          company_url: "https://www.asm-tunisie.com/",
          logo_path: "asm_logo.png",
          duration: "Since July 2021",
          location: "Remote",
          description:
            "Building new features, fixing bugs and try to improve overall performance. Now I'm writing a complete Android Application in jetpack compose for products inventory and sales. Interfaced with clients on a weekly basis, providing technological expertise.",
           
          color: "#9b1578",
        },
        {
          title: "Company Leader",
          company: "Ministry of Defence Tunisia",
          company_url: "http://www.csn.defense.tn/index.php/en",
          logo_path: "defence_tunisia.jpg",
          duration: "July 2020 - Aug 2021",
          location: "Bizerte, Tunisia",
          description:
            "Responsible for the accountability, mission readiness, and professional development of all personnel within my company. Safety and risk management; Perform facility and field inspections. Provided technical and tactical guidance to help both commanding officers and subordinates in completing several missions. Initiate administrative actions on assigned Soldiers; Responsible for the mission readiness of equipment and property accountability. Professional counseling, evaluations, and promotion determinations.Perform facility and field inspections. Conduct inspections (control safety and security measures). Supervise platoon leaders. ",
          color: "#0879bf",
        },
        
        {
          title: "Platoon Leader",
          company: "Ministry of Defence Tunisia",
          company_url: "http://www.csn.defense.tn/index.php/en",
          logo_path: "defence_tunisia.jpg",
          duration: "June 2015 - Aug 2020",
          location: "Bizerte, Tunisia",
          description:
            "Implement and review standard operation procedures. Handle disciplinary issues. Handle administrative and logistical needs. Responsible for the training proficiency (Plans training, evaluate's teams leader and crew-level collective training, and conducts platoon training meetings). Conducts evaluations, inspections, and feedback.  Evaluate and request appropriate resources. Liaison Officer for foreign teams.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "I've done sevral internship in the army",
          company: "Ministry of Defence Tunisia",
          company_url: "http://www.csn.defense.tn/index.php/en",
          logo_path: "defence_tunisia.jpg",
          duration: "June 2015 - Aug 2021",
          location: "Bizerte, Tunisia",
          description:
            "Well there's a lot to talk about . . . ",
          color: "#000000",
        },
       
        {
          title: "QHSE Intern",
          company: "Inter-Con Security of Tunisia",
          company_url: "https://www.icsecuritytunisia.com/",
          logo_path: "ic_tunisia.png",
          duration: "Nov 2018 - Dec 2018",
          location: "Tunis, Tunisia",
          description:
            "Participate in the migration from ohsas 18001 to ISO 45001: 2018.",
          color: "#0071C5",
        },
      ],
    },
    /*{
      title: "Volunteerships",
      experiences: [
        {
          title: "I did not Volunteer !!",
          company: "I will try",
          company_url: "",
          logo_path: "empty.jpg",
          duration: "N/A",
          location: "N/A",
          description:
            "But That doeasn't mean i don't want!",
          color: "#4285F4",
        },
        
      ],
    },*/
  ],
};

// Projects Page
const projectsHeader = {
  title: "Personal Projects",
  description:
    //"My projects makes use of vast variety of latest technology tools. My best experience is to create an app to get prices in diffrent local stores based on prices added by community .",
 
 "I have learned that it is usually better to get the job done as soon as possible, then learn from it and improve it over time. This is not an excuse to create crap, but rather a reminder that perfectionism can actually hinder the accomplishment of a goal.",
 
    avatar_image_path: "projects_image.svg",
};



//I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.
const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
  /*  {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "N/A",
      createdAt: "2023-03-06T16:26:54Z",
      description: "N/A ",
      url:
        "",
    }*/
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "You can message me anytime. My inbox is always open. Whether you have a new opportunities, question or just want to say hi, I’ll get back to you!",
  },
  blogSection: {
    title: "Keep learning and challenging yourself",
    subtitle:
      "In any profession, it’s easy to stagnate and get comfortable. It’s important for me to read and absorb as much as I can to stay passionate about my craft and to continue to challenge myself and those around me. I try to set aside some time every day to read and learn something new.",
    link: "https://simapps.github.io/rami_hamdi_blog/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    subtitle:
      "Benjamin Franklin",
    locality: "Tijna",
    country: "TN",
    region: "Bizerte",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/VZ7p5Qm3cLQJvwiZ8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
