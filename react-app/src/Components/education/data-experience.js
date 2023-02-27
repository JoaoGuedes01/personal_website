export const data = {
  title: {
    pt: "A minha Experiência",
    eng: "My Experience",
  },
  explorebtn: {
    pt: "",
    eng: "Check it out"
  },
  work: [
    {
      title: {
        pt: "Estágio de Verão em Engenharia de Software e QA",
        eng: "Summer Internship for Software Engineering and Quality Assurance",
      },
      duration: {
        pt: "",
        eng: "August 2021 - October 2021",
      },
      company: {
        pt: "",
        eng: "Checkmarx - Braga",
      },
      desc: [
        {
          pt: "",
          eng: "In the summer of 2021 I was an Intern at Checkmarx. I heard about the company when they attended the job fair at my college and I was pretty interested so I applied. After some quick meeting they felt I would integrate very well on the QA Development team.",
        },

        {
          pt: "",
          eng: "In this team my responsibilities were not very high but compeling and challenging. My work would be divided in two, I had some development tasks such as adding/removing/supporting new features to existing tools and some QA tasks. My favourite tasks were the development ones where I dabbled with C# and Visual Studio to fix existing features, add new ones or entirely remove parts of the app's engine (which is more challenging than it seems). My QA tasks were, basically, messing with CI (Continuous Integration) git repo version control and static code analysis given we had some legacy tests that no one new were passing/failing.",
        },

        {
          pt: "",
          eng: "I also developed a personal desktop app using Electron React and Bootstrap that would automate my 'boring' work of selecting some tests to evaluate, create a structured word document with my findings, creating a bug, if needed, and marking the said code as analysed. The last thing I did in this internship was a C# library that would give developers an API to call a REST API and then display a styled result window (with Material UI).",
        },
      ],
      companyurl: "https://checkmarx.com/",
    },
    {
      title: {
        pt: "Estágio Profissional em Engenharia de Software, Infraestrutura e QA",
        eng: "Professional Internship for Software Engineering, Infrastructure and Quality Assurance",
      },
      duration: {
        pt: "Agosto 2022 - Abril 2023",
        eng: "August 2022 - April 2023",
      },
      company: {
        pt: "Checkmarx - Braga",
        eng: "Checkmarx - Braga",
      },
      desc: [
        {
          pt: "",
          eng: 'After my Summer Internship at Checkmarx I was offered the opportunity to integrate the Quality Assurance team as a professional intern with the help of IEFP Portugal (Employment Institute). This internship would span 9 months where I would gain a lot of valuable work experience and knowledge. This time I would be integrating the team on their every day activities but I would also be developing an entire project by myself.'
        },

        {
          pt: "",
          eng: 'The quality assurance team at Checkmarx also doubles at Devops or Infrastructure Engineering to the extent that we also take care of Continuous Integration (CI) in the development of Software. As far as Quality Assurance goes I was allocated in the main product (SAST) in which I had to review pull requests and iterations for an entire team on our static code analysis tool. This meant that I had to learn the vulnerabilities/code along with the developers, create code samples to test queries and check all CI impact when introducing new features. In the QA team we worked in an Agile environment following the SCRUM methodology with Daily SCRUM, Plannings, Retrospectives and Knowledge Sharing meetings. In this environment, once per version release, the SCRUM master would rotate so we all could have some experience and share responsibility.'
        },

        {
          pt: "",
          eng: 'The main part of this internship was the development of one of the most influential projects in the company Doppelganger which would assess the current vulnerabilities Sast could pick up and scrape github for new vulnerability flows in order to reduce redundancy in our CI. This project took me all over the development cycle since it was made from scratch. I had creative freedom to decide which technologies to use, approaches and architecture as well as its maintenance. This is an ongoing project that allows me to dabble with Software Architecture (Docker, portainer, Kubernetes and Traefik), Database Management and Integration (MongoDB, ElasticSearch and DynamoDB), Data Analytics for findings review and Business Analytics (Python, Pandas, Tableau, PowerBI) and a lot of software development (mainly in Node.js, python and powershell).'
        },

        {
          pt: "",
          eng: 'To automate my work I created a platform for integration between Jira and Microsoft Devops since different teams use different platforms to manage their work items. This created repetitive cycles of copying and pasting a lot of information about the work items and the review was made in comments. My integration platform eliminated the need for multitasking between platforms, created a way to standardize the QA process and added a few quality of life management options for the entire QA Team.'
        }

      ],
      companyurl: "https://checkmarx.com/",
    }
  ],
};
