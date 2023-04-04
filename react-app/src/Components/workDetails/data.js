export const data = [
  /*******************************************************************  Sueca *******************************************************************/
  {
    id: "sueca",
    title: {
      pt: "Sueca Online",
      eng: "Sueca Websocket Game",
    },
    context: [
      {
        icon: "webdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Web Development",
        },
      },
      {
        icon: "ux/ui",
        label: {
          pt: "UX/UI",
          eng: "UX/UI",
        },
      },
      {
        icon: "int",
        label: {
          pt: "Desenvolvimento Web",
          eng: "System Integration",
        },
      },
      {
        icon: "personal",
        label: {
          pt: "Projeto Pessoal",
          eng: "Personal Project",
        },
      },
    ],
    tech: [
      {
        icon: "react",
        label: "React",
      },
      {
        icon: "antd",
        label: "Ant Design",
      },
      {
        icon: "html",
        label: "HTML",
      },
      {
        icon: "css",
        label: "CSS",
      },
      {
        icon: "js",
        label: "JavaScript",
      },
      {
        icon: 'nodejs',
        label: 'Node.js'
      },
      {
        icon: "ws",
        label: "WebSockets",
      },
      {
        icon: "repl",
        label: "Repl.it ",
      },
    ],
    roles: [
      {
        pt: "Aplicação Completa",
        eng: "Full Application",
      },
      {
        pt: "Design UX/UI",
        eng: "UX/UI Design",
      },
      {
        pt: "Desenvolvimento da App",
        eng: "Server Development",
      },
      {
        pt: "Desenvolvimento da App",
        eng: "Client Development",
      },
      {
        pt: "Desenvolvimento da App",
        eng: "WebSocket Design and implementation",
      },
      {
        pt: "Deploy da App publicamente",
        eng: "App Deployment",
      },
    ],
    duration: {
      year: 2023,
      timelen: {
        pt: "1 semana",
        eng: "1 week",
      },
    },
    desc: [
      {
        pt: '',
        eng: 'While learning about WebSockets and their place in Web Development I was amazed at their potential. Page refreshing was always a big concern to me while developing Web Applications so I knew I needed to dip my toes in WebSockets. Having already some experience with traditional Sockets in Java I opted to learn traditional WebSockets instead of using the popular Socket.io. This proved to me quite the challenge since Socket.io is home for many quality of life functionalities that are simply not present in normal WebSockets.'
      },
      {
        pt: '',
        eng: "While learning I had the idea of recreating the popular game Sueca from the ground up using WebSockets communication for the game state and logic since the rules are very well established and would give my learning project a puropose, to play online with whoever joins me."
      },
      {
        pt: '',
        eng: "There were some initial choices like having a max of 4 players and identifying the players solely by their nicknames and not persisting sessions of players that disconnected would complicate my life later down the line but the game started there. The logic is pretty simple connecting every client but only adding them to the pool of players if their nickname is not present in said pool or if there are not 4 players already playing. Everytime a player would make a connection to the server, being it joining the game or making a move ther server would update every player connected so every client knows exactly the state the game is in."
      },
      {
        eng: "Overall I enjoyed learning and practicing my skills in Web Development and WebSockets with this challenge"
      }
    ],
    chall: [
      {
        pt: '',
        eng: 'Learning the WebSocket protocol and interactions'
      },
      {
        pt: '',
        eng: 'Implementing WebSockets for an interactive game'
      },
      {
        pt: '',
        eng: 'Implementing the rules of Sueca in the server'
      },
      {
        pt: '',
        eng: 'Keeping all clients up to date with all player moves'
      },
      {
        pt: '',
        eng: '"Seating" every player in their respective seats on each client proved to be the worst and most challenging part'
      },
      {
        pt: '',
        eng: "The most popular hosting services are very particular with the WebSockets protocol which made the deployment a knightmare."
      },
    ],
    rate: 10,
    ratelabel: "Loved It",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "Taught me a lot about WebSockets and how they work",
      },
      {
        pt: "",
        eng: "Good practice for Web Development and Web Design",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "WebSockets can be very challenging to work with ",
      },
      {
        pt: "",
        eng: "Hosting services are very strict with WebSockets communications",
      },
      {
        pt: "",
        eng: "My first ever WebSockets server so the learning experience was a little rough",
      },
    ],
    img: ["sueca1.png", "sueca2.png", "sueca3.png", "sueca4.png", "sueca5.png", "sueca6.png", "sueca7.png", "sueca8.png"],
    deploy: "https://joaoguedes01.github.io/sueca_websocket_client/",
    git: "https://github.com/JoaoGuedes01/sueca_websocket_client",
  },
  /*******************************************************************  QA Integration *******************************************************************/
  {
    id: "qaint",
    title: {
      pt: "Website Pessoal",
      eng: "QA Integration",
    },
    context: [
      {
        icon: "webdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Web Development",
        },
      },
      {
        icon: "ux/ui",
        label: {
          pt: "UX/UI",
          eng: "UX/UI",
        },
      },
      {
        icon: "int",
        label: {
          pt: "Desenvolvimento Web",
          eng: "System Integration",
        },
      },
      {
        icon: "work",
        label: {
          pt: "Projeto de Trabalho",
          eng: "Professional Project",
        },
      },
    ],
    tech: [
      {
        icon: "react",
        label: "React",
      },
      {
        icon: "html",
        label: "HTML",
      },
      {
        icon: "css",
        label: "CSS",
      },
      {
        icon: 'nodejs',
        label: 'Node.js'
      },
      {
        icon: "jira",
        label: "Jira",
      },
      {
        icon: "tfs",
        label: "Azure Devops ",
      },
      {
        icon: "mongo",
        label: "MongoDB ",
      },
    ],
    roles: [
      {
        pt: "Aplicação Completa",
        eng: "Full Application",
      },
      {
        pt: "Design UX/UI",
        eng: "UX/UI Design",
      },
      {
        pt: "Desenvolvimento da App",
        eng: "App Development",
      },
      {
        pt: "Desenvolvimento da App",
        eng: "System Integration",
      },
      {
        pt: "Desenvolvimento da App",
        eng: "Database Administration",
      },
      {
        pt: "Deploy da App publicamente",
        eng: "App Deployment",
      },
    ],
    duration: {
      year: 2023,
      timelen: {
        pt: "1 mês",
        eng: "1 month",
      },
    },
    desc: [
      {
        pt: '',
        eng: 'While working at checkmarx, being part of the Quality Assurance team, I noticed that there were a lot of teams that needed their work reviews but also that all of them used different platforms and systems to manage their work. This created a lot of unnecessary and repetitive work for the QA team since we spent quite some time copying and pasting work item information from one platform to another before even starting the QA process. I also noticed that the QA review consisted in a simple comment, with a defined structure containing all tests and their status and observations, directly in the work item on Azure Devops platform. We would need to write this comment every time a work item was under revision. For these reasons, and some mismanagement on some team-specific member rotation motivated me to create a centralized platform where the item migration would be automatic, que QA revision process would be standardized and easier to perform and manage the team rotation through various reoccurring activities.'
      },
      {
        pt: '',
        eng: 'Architecture-wise, since the application needed a database to persist data I went with a typical Client-Server approach where all the communication with the Database and APIs would be done in the Server (Backend) and the Client (Frontend) would only need to look good, be practical and communicate with the Server via http.'
      },
      {
        pt: '',
        eng: 'To make this platform possible I had to understand and implement both APIs (Jira and Azure Devops) and make them interact in a seamless way. Since I’m quite familiar with Web Development the application wasn’t hard to develop, the integration however proved to be pretty challenging.'
      },
    ],
    chall: [
      {
        pt: '',
        eng: 'Learning and Integrating the Jira API'
      },
      {
        pt: '',
        eng: 'Learning and Integrating the Azure Devops API'
      },
      {
        pt: '',
        eng: 'Create a seamless integration between the two APIs'
      },
      {
        pt: '',
        eng: 'Optimizing request number for performing actions for better performance'
      },
      {
        pt: '',
        eng: 'Creating and Deploying an entire architecture/system in a real work environment'
      },
    ],
    rate: 10,
    ratelabel: "Loved It",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "Taught me a lot about API Integration (Jira and Azure Devops)",
      },
      {
        pt: "",
        eng: "Improved the working conditions for me and my team",
      },
      {
        pt: "",
        eng: "Good practice for Software Architectural Design",
      },
      {
        pt: "",
        eng: "Good practice for web design and web development",
      }
    ],
    neg: [
      {
        pt: "",
        eng: "Azure Devops isn\'t the easiest API to work with",
      },
      {
        pt: "",
        eng: "The Jira API is better than Azure, but still pretty confusing and limited",
      },
      {
        pt: "",
        eng: "Both APIs requiere a ridiculous ammount of requests to achieve small actions",
      },
    ],
    img: ["qaint1.png", "qaint2.png", "qaint3.png", "qaint4.png", "qaint5.png", "qaint6.png", "qaint7.png", "qaint8.png", "qaint9.png", "qaint10.png"],
    git: "https://github.com/JoaoGuedes01/QA_Integration_Tool",
  },
  /*******************************************************************  Personal Website *******************************************************************/
  {
    id: "personalweb",
    title: {
      pt: "Website Pessoal",
      eng: "Personal Website",
    },
    context: [
      {
        icon: "webdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Web Development",
        },
      },
      {
        icon: "ux/ui",
        label: {
          pt: "UX/UI",
          eng: "UX/UI",
        },
      },
      {
        icon: "personal",
        label: {
          pt: "Projeto Pessoal",
          eng: "Personal Project",
        },
      },
    ],
    tech: [
      {
        icon: "react",
        label: "React",
      },
      {
        icon: "framer",
        label: "Framer Motion",
      },
      {
        icon: "css",
        label: "CSS",
      },
    ],
    roles: [
      {
        pt: "Aplicação Completa",
        eng: "Full Application",
      },
      {
        pt: "Design UX/UI",
        eng: "UX/UI Design",
      },
      {
        pt: "Desenvolvimento da App",
        eng: "App Development",
      },
      {
        pt: "Deploy da App publicamente",
        eng: "App Deployment",
      },
    ],
    duration: {
      year: 2022,
      timelen: {
        pt: "2 semanas",
        eng: "2 weeks",
      },
    },
    desc: [
      {
        pt: "À medida que o meu CV crescia fui ficando cada vez mais limitado no que toca ao que incluir nele, chegando ao ponto de ter de selecionar entre 2 projetos igualmente bons. Sendo que os projetos realizados e experiência são as áreas mais fortes de qualquer currículo necessitava de uma forma nova que pudesse incluir todos os meus projetos, experiencia e informações relevantes de forma intuitiva e agradável. Como tinha algum tempo livre (Férias de Verão) e muita experiência em desenvolvimento web Backend e quase nenhuma em Frontend achei que construir o meu próprio website pessoal completamente do 0 iria ser uma experiência agradável e enriquecedora e me permitiria largar o bootstrap (ao qual recorria sempre que necessitava de um frontend básico e utilizável)",
        eng: "As my Resume grew I found myself unable to add everything I wanted to it, therefore I needed another medium that I could share and that painted a picture of who I am, what I do, what I'm good at, what I enjoy doing, and most important of all my work and projects. Since I had some free time(Summer Vacation) and a lot of experience in web development backend-wise and next to 0 frontend-wise I thought it would be a fun and enriching experience to build my personal website completely from scratch and finally allow me to break away from boostrap (which I would use everytime I needed a bare bones frontend for any backend).",
      },
      {
        pt: "Uma vez que já tenho um certo domínio com Angular (e seria uma abordagem exagerada para um simples website pessoal) decidi aprender React e, finalmente, css devidamente. Então, em preparação para o projeto assisti a algumas aulas e lições de Design (puramente design de frontend, sem código), cursos de CSS, que me fizerem perceber o porquê e quando utilizar as diferentes propriedades e cursos completos de React nas plataformas Youtube e Udemy.",
        eng: "Since I already knew Angular pretty well, and considering it pretty overkill for a personal website, I chose to learn React and, finally, css properly. So in preparation for this project I took some designing lessons(purely frotend design with no code), css courses, which made me understand why and when to use all of the tool's properties, and full react courses on youtube and udemy.",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "I'm pretty happy with the result and I really enjoyed the process of witnessing my design coming (little by little) to life and learned a lot about design theory, web app design,responsive and modern design, css basic and advanced concepts and have a completely new appreciation for frontend developers. I always stayed away from design and frontend aspects but having built this website I feel pretty confident to add css and frontend development to my skills.",
      },
    ],
    chall: [
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning modern and responsive design having 0 experience in the subject",
      },
      {
        pt: "",
        eng: "Learning CSS from scratch is pretty challenging by itself",
      },
      {
        pt: "",
        eng: "Learning responsive CSS and learning to not 'figh your code' with good practices ",
      },
      {
        pt: "",
        eng: "Learning React extensively",
      },
      {
        pt: "",
        eng: "Learning Framer Motion",
      },
      {
        pt: "",
        eng: "Image compressing, loading and carousel",
      },
      {
        pt: "",
        eng: "Redundant Code that makes a light app heavy",
      },
    ],
    rate: 10,
    ratelabel: "Loved It",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "Taught me a lot about css and front-end development",
      },
      {
        pt: "",
        eng: "Learned a ton about responsive web design and development",
      },
      {
        pt: "",
        eng: "Made me really creative in the way I solved problems",
      },
      {
        pt: "",
        eng: "Finally understood CSS",
      },
      {
        pt: "",
        eng: "Great way of learning React and Framer Motion",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "Hard concepts to grasp when starting",
      },
      {
        pt: "",
        eng: "Lack of 'correct way' of developing a react app",
      },
      {
        pt: "",
        eng: "Complex animation framework that adds to the dificulty of learning everything at once",
      },
    ],
    img: ["pw1.png", "pw2.png", "pw3.png", "pw4.png", "pw5.png"],
    git: "https://github.com/JoaoGuedes01/personal_website/tree/main/react-app",
    deploy: "https://joaoguedes01.github.io/personal_website/",
  },

  /*******************************************************************  TIAPOSE R Forecasting *******************************************************************/
  {
    id: "tsf",
    title: {
      pt: "Previsões de Séries Temporais",
      eng: "Time Series Forecasting",
    },
    context: [
      {
        icon: "ml",
        label: {
          pt: "Machine Learning",
          eng: "Machine Learning",
        },
      },
      {
        icon: "webdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Web Development",
        },
      },

      {
        icon: "academic",
        label: {
          pt: "Projeto Académico",
          eng: "Academic Project",
        },
      },
    ],
    tech: [
      {
        icon: "R",
        label: "R",
      },
      {
        icon: "python",
        label: "Python",
      },
      {
        icon: "jupyter",
        label: "Jupyter",
      },
      {
        icon: "shiny",
        label: "Shiny",
      },
    ],
    roles: [
      {
        pt: "Aplicação Completa",
        eng: "Full Application",
      },
      {
        pt: "Design UX/UI",
        eng: "UX/UI Design",
      },
      {
        pt: "Desenvolvimento da App",
        eng: "App Development",
      },
      {
        pt: "Deploy da App publicamente",
        eng: "App Deployment",
      },

      {
        pt: "Deploy da App publicamente",
        eng: "Exploratory Data Analysis",
      },

      {
        pt: "Deploy da App publicamente",
        eng: "Model Construction and Implementation",
      },

      {
        pt: "Deploy da App publicamente",
        eng: "Scenarios",
      },

      {
        pt: "Deploy da App publicamente",
        eng: "Entire Infrastructure and Logic",
      },
    ],
    duration: {
      year: 2022,
      timelen: {
        pt: "1 semestre",
        eng: "1 semester",
      },
    },
    desc: [
      {
        pt: "À medida que o meu CV crescia fui ficando cada vez mais limitado no que toca ao que incluir nele, chegando ao ponto de ter de selecionar entre 2 projetos igualmente bons. Sendo que os projetos realizados e experiência são as áreas mais fortes de qualquer currículo necessitava de uma forma nova que pudesse incluir todos os meus projetos, experiencia e informações relevantes de forma intuitiva e agradável. Como tinha algum tempo livre (Férias de Verão) e muita experiência em desenvolvimento web Backend e quase nenhuma em Frontend achei que construir o meu próprio website pessoal completamente do 0 iria ser uma experiência agradável e enriquecedora e me permitiria largar o bootstrap (ao qual recorria sempre que necessitava de um frontend básico e utilizável)",
        eng: "As part of the assessment of the course on Artificial Intelligence Techniques in Forecasting and Optimization in Business Systems I was tasked with developing a project focused on supporting to the management of a commercial space target of a pilot project previously carried out by an IT company. This previous company provided all the data that was analysed and used in all the machine learning models and techniques required to complete this project. ",
      },
      {
        pt: "Uma vez que já tenho um certo domínio com Angular (e seria uma abordagem exagerada para um simples website pessoal) decidi aprender React e, finalmente, css devidamente. Então, em preparação para o projeto assisti a algumas aulas e lições de Design (puramente design de frontend, sem código), cursos de CSS, que me fizerem perceber o porquê e quando utilizar as diferentes propriedades e cursos completos de React nas plataformas Youtube e Udemy.",
        eng: "The project's goal was to, initially, predict, to the best of my abilities, how many people would be visiting the space daily and, based on those predictions, define an entire marketing strategy optimizing profit",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "In this project my only restriction was that I needed to use R instead of the traditional python for these types of problems and I should use my professor's package Rminer.",
      },
      {
        pt: "",
        eng: "Using the CRISP-DM methodology I was able to structure my project in 6 different phases",
      },
      {
        pt: "",
        eng: "Business Understanding: Where I got familiar with the problem (Regression) and studied a lot of examples (provided by my professor and through the internet)",
      },
      {
        pt: "",
        eng: "Data Understanding: Where I studied the data I was given, understood every variable/attribute and conducted the Exploratory Data Analysis (EDA)",
      },
      {
        pt: "",
        eng: "Data Preparation: Where I got to alter all the variables I didn't think would perform well such as combining different attributes into one, removing attributes or adding extra ones. I also corrected all the errors or mistakes that were present in the dataset and identified the outlier values. Not knowing the best combination of pre-processing I divided the project in scenarios, each one with a differently structured initial dataset",
      },
      {
        pt: "",
        eng: "Making use of the libraries Rminer and Forecast I was able to identify the best models available to feed my training data. Using some classification techinques such as cross validation and window backtesting I was able to test my univariate, multivariate and hybrid models in order to find the best ones for each time series",
      },
      {
        pt: "",
        eng: "Using my thought out metrics I evaluated and recoreded my results and ",
      },
      {
        pt: "",
        eng: "Deployment: Using Shinyapps I was able to create a Web Interface for my R project and deploy it publicly concluding the forecasting part of the project ",
      },
      {
        pt: "",
        eng: "With the results from the forecast I proceeded to feed them to my optimization models giving me the final answer to the marketing campaign for the selected week",
      },
    ],
    chall: [
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning R from scratch",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning the Forecast and Rminer packages",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning and creating an app with ShinyApps from scratch",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Applying my machine learning knowledge (classification with python) to a completely new problem",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Window backtesting to find the best models",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Dificulty of crafting a good pre-processed dataset",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Time Series Forecasting is a tough concept to understand and even tougher to do well",
      },
    ],
    rate: 8,
    ratelabel: "Pretty Good",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "Learned a lot about R, Forecast, Rminer and Shinyapps",
      },
      {
        pt: "",
        eng: "Great way to understand Time Series Forecasting and regression problems in machine learning",
      },
      {
        pt: "",
        eng: "Taught me some new techinques like window backtesting",
      },
      {
        pt: "",
        eng: "Allowed me to be creative with how I solved my problems like the creation of scenarios",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "Very hard concepts to grasp when starting",
      },
      {
        pt: "",
        eng: "Lack of 'correct way' of developing a machine learning project",
      },
      {
        pt: "",
        eng: "Lack of experience with regression problems and R slowed progress down a lot",
      },
      {
        pt: "",
        eng: "Lack of knowledge in machine learning made some decisions a lot harder and research longer",
      },
      {
        pt: "",
        eng: "Massive lack of support from my professor resulted in doing the project alone with a lot of sleepless nights",
      },
    ],
    img: ["RF1.png", "RF2.png", "RF3.png", "RF4.png", "RF5.png"],
    git: "https://github.com/JoaoGuedes01/TIAPOSE_R_Data_Mining",
    deploy: "https://guedes.shinyapps.io/shiny/",
    yt: "https://www.youtube.com/watch?v=5QNv2cpboyg&t=132s",
  },
  /*******************************************************************  ESRB Predictor *******************************************************************/
  {
    id: "esrbpred",
    title: {
      pt: "Preditor ESRB",
      eng: "ESRB Predictor",
    },
    context: [
      {
        icon: "ml",
        label: {
          pt: "Machine Learning",
          eng: "Machine Learning",
        },
      },
      {
        icon: "webdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Web Development",
        },
      },

      {
        icon: "academic",
        label: {
          pt: "Projeto Académico",
          eng: "Academic Project",
        },
      },
    ],
    tech: [
      {
        icon: "python",
        label: "Python",
      },
      {
        icon: "sklearn",
        label: "Scikit Learn",
      },
      {
        icon: "mysql",
        label: "MySQL",
      },
      {
        icon: "tableau",
        label: "Tableau",
      },
      {
        icon: "flask",
        label: "Flask",
      },

      {
        icon: "jupyter",
        label: "Jupyter",
      },
    ],
    roles: [
      {
        pt: "Deploy da App publicamente",
        eng: "Exploratory Data Analysis",
      },

      {
        pt: "Deploy da App publicamente",
        eng: "Data Pre-Processing and scenarios ",
      },

      {
        pt: "Deploy da App publicamente",
        eng: "Model Research, Construction and Implementation",
      },

      {
        pt: "Deploy da App publicamente",
        eng: "Model Evaluation and Cross-Validation",
      },

      {
        pt: "Design UX/UI",
        eng: "UX/UI Design",
      },

      {
        pt: "Desenvolvimento da App",
        eng: "Interface Development",
      },

      {
        pt: "Desenvolvimento da App",
        eng: "App Deployment",
      },
    ],
    duration: {
      year: "2021/2022",
      timelen: {
        pt: "1 semestre",
        eng: "1 semester",
      },
    },
    desc: [
      {
        pt: "À medida que o meu CV crescia fui ficando cada vez mais limitado no que toca ao que incluir nele, chegando ao ponto de ter de selecionar entre 2 projetos igualmente bons. Sendo que os projetos realizados e experiência são as áreas mais fortes de qualquer currículo necessitava de uma forma nova que pudesse incluir todos os meus projetos, experiencia e informações relevantes de forma intuitiva e agradável. Como tinha algum tempo livre (Férias de Verão) e muita experiência em desenvolvimento web Backend e quase nenhuma em Frontend achei que construir o meu próprio website pessoal completamente do 0 iria ser uma experiência agradável e enriquecedora e me permitiria largar o bootstrap (ao qual recorria sempre que necessitava de um frontend básico e utilizável)",
        eng: "In the class of Machine Learning in Enterprise Systems me and my team of 3 people were tasked with developing a project that would accurately predict an ESRB Rating of a video game based on its features ( Like the game features blood or sexuality/nudity).",
      },
      {
        pt: "Uma vez que já tenho um certo domínio com Angular (e seria uma abordagem exagerada para um simples website pessoal) decidi aprender React e, finalmente, css devidamente. Então, em preparação para o projeto assisti a algumas aulas e lições de Design (puramente design de frontend, sem código), cursos de CSS, que me fizerem perceber o porquê e quando utilizar as diferentes propriedades e cursos completos de React nas plataformas Youtube e Udemy.",
        eng: "We were given a dataset of video games complete with flags for their specific content (blood = 1 if yes / blood = no if no ). In this class we learned about CRISP-DM, therefore we used methodology to carry out the entire project beggining with understanding our data, then processing it, then building some predictive models and finally evaluating them.",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "Since this was my first experience with real machine learning methods I struggled a bit a first with all the concepts and aspects of this field but then once I got used to it everything fell in place and the project seemed to have become much easier",
      },
      {
        pt: "",
        eng: "In the pre-processing stage we divided our dataset in scenarios to experiment in the best structure for our data. We tried removing/keeping the outlier values and also adding new features like the game release date. After all the scenario that gave us the best results was scenario 2 (without the outlier values)",
      },
      {
        pt: "",
        eng: "We selected over 10 different models (classification models, given our problem) and used the Grid Search method to find the very best hyperparameters for each. Having the best configuration for each model we proceeded to conduct Cross-Validation to assess which model would be better overall (Since in cross-validation all data is used as train and test at some point).",
      },
      {
        pt: "",
        eng: "We recorded the results into a Data Warehouse using MYSQL and then built a few graphs to visualize these results with Tableau",
      },
      {
        pt: "",
        eng: "To finish off the project we built a Web Interface using HTML and CSS served with Flask (given our entire project was built with Python) and hosted in a free tier Heroku App Instance.",
      },

      {
        pt: "",
        eng: "I am very pleased with how everything ended up, the model results were very good, the pre-processing was clean and easy to understand giving us our best dataset,the Data Warehouse is beautifully organized, the dashboards are clear and clean and the Web Application is hosted publicly on Heroku for everyone to try out. My teacher was also very pleased with the result having finished this class with a score of 19/20",
      },
    ],
    chall: [
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning Machine Learning concepts for the first time",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning the SKLearn and other machine learning packages",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "The Exploratory Data Analysis was pretty challenging not knowing what to look for and how",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Understanding methods like Cross Validation and Grid Searching",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Building a relevant Data Warehouse with relevant data",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning and Using Tableau dashboards",
      },
    ],
    rate: 9,
    ratelabel: "Almost Loved It",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "Learned a lot about Machine Learning",
      },
      {
        pt: "",
        eng: "Great way to practice Python and to learn machine learning packages",
      },
      {
        pt: "",
        eng: "Great way to remember Data Warehousing and Tableau Dashboards",
      },

      {
        pt: "",
        eng: "Great support from my professor made the project much more bearable and also easier",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "Very hard concepts to grasp when starting",
      },
      {
        pt: "",
        eng: "Lack of 'correct way' of developing a machine learning project",
      },
      {
        pt: "",
        eng: "Lack of experience in machine learning",
      },
      {
        pt: "",
        eng: "Lack of knowledge in machine learning made some decisions a lot harder and research longer",
      },

      {
        pt: "",
        eng: "The Web Interface could be better looking and improved",
      },
    ],
    img: ["esrb1.png", "esrb2.png", "esrb3.png", "esrb4.png", "esrb5.png"],
    git: "https://github.com/JoaoGuedes01/ESRB_Rating_Predictor_CRISPDM",
    deploy: "https://esrb-rating-predictor.herokuapp.com/",
  },

  /*******************************************************************  ITI Docker Cluster *******************************************************************/
  {
    id: "traefik",
    title: {
      pt: "Balanceador de Carga de Servidor Web",
      eng: "Web Server Load Balancing",
    },
    context: [
      {
        icon: "netinf",
        label: {
          pt: "Machine Learning",
          eng: "Networking and Infrastructure",
        },
      },
      {
        icon: "webdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Web Development",
        },
      },

      {
        icon: "academic",
        label: {
          pt: "Projeto Académico",
          eng: "Academic Project",
        },
      },
    ],
    tech: [
      {
        icon: "nodejs",
        label: "Node.js",
      },
      {
        icon: "mongo",
        label: "MongoDB",
      },
      {
        icon: "docker",
        label: "Docker",
      },
      {
        icon: "traefik",
        label: "Traefik",
      },
      {
        icon: "powershell",
        label: "PowerShell",
      },
      {
        icon: "zerotier",
        label: "ZeroTier VPN",
      },
    ],
    roles: [
      {
        pt: "Projeto Completo",
        eng: "Entire Project",
      },
      {
        pt: "Pesquisa",
        eng: "Research",
      },
      {
        pt: "Design da Arquitetura",
        eng: "Architecture Design",
      },
      {
        pt: "Configuração das Tecnologias",
        eng: "Technology Configuration",
      },
      {
        pt: "Código",
        eng: "Coding",
      },
      {
        pt: "Design e código da App",
        eng: "App Design and Code",
      },
    ],
    duration: {
      year: "2021/2022",
      timelen: {
        pt: "1 semestre",
        eng: "1 semester",
      },
    },
    desc: [
      {
        pt: "À medida que o meu CV crescia fui ficando cada vez mais limitado no que toca ao que incluir nele, chegando ao ponto de ter de selecionar entre 2 projetos igualmente bons. Sendo que os projetos realizados e experiência são as áreas mais fortes de qualquer currículo necessitava de uma forma nova que pudesse incluir todos os meus projetos, experiencia e informações relevantes de forma intuitiva e agradável. Como tinha algum tempo livre (Férias de Verão) e muita experiência em desenvolvimento web Backend e quase nenhuma em Frontend achei que construir o meu próprio website pessoal completamente do 0 iria ser uma experiência agradável e enriquecedora e me permitiria largar o bootstrap (ao qual recorria sempre que necessitava de um frontend básico e utilizável)",
        eng: "DISCLAIMER: The projects for this class were supposed to be developed by team of 8 people, unfortunately for me my team was everything but interested in doing the projects so they were all done entirely by me.",
      },
      {
        pt: "À medida que o meu CV crescia fui ficando cada vez mais limitado no que toca ao que incluir nele, chegando ao ponto de ter de selecionar entre 2 projetos igualmente bons. Sendo que os projetos realizados e experiência são as áreas mais fortes de qualquer currículo necessitava de uma forma nova que pudesse incluir todos os meus projetos, experiencia e informações relevantes de forma intuitiva e agradável. Como tinha algum tempo livre (Férias de Verão) e muita experiência em desenvolvimento web Backend e quase nenhuma em Frontend achei que construir o meu próprio website pessoal completamente do 0 iria ser uma experiência agradável e enriquecedora e me permitiria largar o bootstrap (ao qual recorria sempre que necessitava de um frontend básico e utilizável)",
        eng: "In my class of Infrastructures of Information Technology I learned a lot about how differente technologies communicate and what tools exist to create these communication infrastructures. With my previous Networking knowledge, this class only built on top of it. I had a few projects in this class such as:",
      },
      {
        pt: "Uma vez que já tenho um certo domínio com Angular (e seria uma abordagem exagerada para um simples website pessoal) decidi aprender React e, finalmente, css devidamente. Então, em preparação para o projeto assisti a algumas aulas e lições de Design (puramente design de frontend, sem código), cursos de CSS, que me fizerem perceber o porquê e quando utilizar as diferentes propriedades e cursos completos de React nas plataformas Youtube e Udemy.",
        eng: "Benchmarking Applications ( I benchmarked my own webservers) for which I got a pretty good grade",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "Install a NAS/SAN network that would connect to multiple Machines ( I chose to do the NAS project and it went pretty well and got it working securely with a private VPN Zerotier",
      },
      {
        pt: "",
        eng: "A Load Balancer that would balance multiple connections to multiple instances of a service ( I chose Traefik/Haproxy as alternative load balancers, developed the webserver service myself using HTML/CSS/JS served by Node.js connecting to MongoDB ). This project consisted of:",
      },
      {
        pt: "",
        eng: "Containerized Web Server Service / Containerized MongoDB Service / Containerized Traefik Service",
      },
      {
        pt: "",
        eng: "2 distinct networks Backend - For the Database and all the webserver instances / Frontend - For Traefik (Load Balancer) and all the webserver instances",
      },
      {
        pt: "",
        eng: "5 webserver Instances (Replicas) (Bakend/Frontend) / 1 Traefik Instance (Frontend) / 1 MongoDB Instance (Bakend)",
      },
      {
        pt: "",
        eng: "Docker Compose file that sets everything up / Powershell script that abstracts the user from the complexity of docker commands",
      },
      {
        pt: "",
        eng: "In the end I'm pretty happy with how everything turned out, the git repository has a descriptive README file with instructions to use my architecture, all of my code is clean and easy to read, the docker compose file is well organized and there is a ps1 file for abstraction purposes. My professor was also very pleased with this project giving me full marks for it.",
      },
      {
        pt: "",
        eng: "Extra: The professor in this class also offered me an internship in his company based on my work in class",
      },
    ],
    chall: [
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning Docker and Docker-Compose from Scratch",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Docker Networking",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning Traefik Load Balancing and tags",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning and implementing PowerShell Scripts",
      },
    ],
    rate: 7,
    ratelabel: "Good Project",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "Learned a lot about Load Balancing Webservers",
      },
      {
        pt: "",
        eng: "Learned docker/docker-compose/docker-swarm fully (Although docker swarm was not implemented)",
      },
      {
        pt: "",
        eng: "Got to practice my Web Developer Skills with the Demo WebServer Service ",
      },

      {
        pt: "",
        eng: "Great project to sharpen my infrastructure and IT faculties",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "Very hard concepts to grasp when starting",
      },
      {
        pt: "",
        eng: "Everything is built solely in code and almost nothing has visual confirmation/representation",
      },
      {
        pt: "",
        eng: "Team of 8 people that didn't contribute a thing for the project",
      },
    ],
    img: [
      "itidocker1.png",
      "itidocker2.png",
      "itidocker3.png",
      "itidocker4.png",
      "itidocker5.png",
    ],
    git: "https://github.com/JoaoGuedes01/iti-docker-cluster",
  },

  /*******************************************************************  SBC *******************************************************************/
  {
    id: "sbc",
    title: {
      pt: "Balanceador de Carga de Servidor Web",
      eng: "SmartFood/FoodExpress",
    },
    context: [
      {
        icon: "ml",
        label: {
          pt: "Machine Learning",
          eng: "Machine Learning",
        },
      },
      {
        icon: "webdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Web Development",
        },
      },

      {
        icon: "academic",
        label: {
          pt: "Projeto Académico",
          eng: "Academic Project",
        },
      },
    ],
    tech: [
      {
        icon: "perl",
        label: "Perl",
      },
      {
        icon: "prolog",
        label: "Prolog",
      },
      {
        icon: "java",
        label: "Java",
      },
      {
        icon: "spring",
        label: "Spring Boot",
      },

      {
        icon: "nodejs",
        label: "Node.js",
      },
    ],
    roles: [
      {
        pt: "Projeto Completo",
        eng: "Entire Project",
      },
      {
        pt: "Pesquisa",
        eng: "Research",
      },
      {
        pt: "Design da Arquitetura",
        eng: "Architecture Design",
      },
      {
        pt: "Configuração das Tecnologias",
        eng: "Technology Study and Exploration",
      },
      {
        pt: "Código",
        eng: "Coding & Logic",
      },
      {
        pt: "Design e código da App",
        eng: "App Design and Code",
      },
    ],
    duration: {
      year: "2020/2021",
      timelen: {
        pt: "1 semestre",
        eng: "1 semester",
      },
    },
    desc: [
      {
        pt: "À medida que o meu CV crescia fui ficando cada vez mais limitado no que toca ao que incluir nele, chegando ao ponto de ter de selecionar entre 2 projetos igualmente bons. Sendo que os projetos realizados e experiência são as áreas mais fortes de qualquer currículo necessitava de uma forma nova que pudesse incluir todos os meus projetos, experiencia e informações relevantes de forma intuitiva e agradável. Como tinha algum tempo livre (Férias de Verão) e muita experiência em desenvolvimento web Backend e quase nenhuma em Frontend achei que construir o meu próprio website pessoal completamente do 0 iria ser uma experiência agradável e enriquecedora e me permitiria largar o bootstrap (ao qual recorria sempre que necessitava de um frontend básico e utilizável)",
        eng: "DISCLAIMER: This project was meant for a team of 4 people but, once again, my team was not interested at all in the development of the project leaving me to do everything alone, so both of the projects featured here were fully concepted, researched and executed by me.",
      },
      {
        pt: "À medida que o meu CV crescia fui ficando cada vez mais limitado no que toca ao que incluir nele, chegando ao ponto de ter de selecionar entre 2 projetos igualmente bons. Sendo que os projetos realizados e experiência são as áreas mais fortes de qualquer currículo necessitava de uma forma nova que pudesse incluir todos os meus projetos, experiencia e informações relevantes de forma intuitiva e agradável. Como tinha algum tempo livre (Férias de Verão) e muita experiência em desenvolvimento web Backend e quase nenhuma em Frontend achei que construir o meu próprio website pessoal completamente do 0 iria ser uma experiência agradável e enriquecedora e me permitiria largar o bootstrap (ao qual recorria sempre que necessitava de um frontend básico e utilizável)",
        eng: "In the class of Knowledge Based Systems I was tasked with building a Knowledge Bassed System using Perl and Prolog that would, in the part A of the project, recommend a few dishes to the user after they completed a small quizz about their tastes.",
      },
      {
        pt: "Uma vez que já tenho um certo domínio com Angular (e seria uma abordagem exagerada para um simples website pessoal) decidi aprender React e, finalmente, css devidamente. Então, em preparação para o projeto assisti a algumas aulas e lições de Design (puramente design de frontend, sem código), cursos de CSS, que me fizerem perceber o porquê e quando utilizar as diferentes propriedades e cursos completos de React nas plataformas Youtube e Udemy.",
        eng: "The part B of the project was delivering set dish and optimizing the delivery boy's routes in order to maximize profit, minimize time or to optimize a set formula given to us by our professor.",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "While developing the Systems and algorithms for the project I noticed that SWI-Prolog was a very well-known Java dependency that supported the whole Prolog Logic thus I converted the entire project to Java (Except the Knowledge Based System) using SWI-Prolog as an API to interact with it in order to able to use Java Spring and add REST features to the entire project and make possible the separation in a Backend/Frontend System. This gave me liberty to develop the Frontend in Node.js (Using HTML/CSS/JS), something I was much more familiar than say Java Swing or other desktop UI frameworks.",
      },

      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "Both parts (projects) of this project were fun to develop and research given that this project was my first contact ever with machine learning and its concepts. The highlight of this project was, for sure, the usage of Spring and SWI-Prolog while everyone else was using the shell runtime and Java Swing, something that my professor seemed to enjoy very much giving me full marks in the project. (20/20)",
      },
    ],
    chall: [
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning a completely new Programming Language in Prolog and Perl",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Prolog and Perl are very outdated languages with a lot of issues and nuances modern programming languages don't have",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Building Knowledge Based Systems for the first time is very challenging ( Even more if you do it by yourself like I did)",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Integrating SWI-Prolog with native prolog code in a Java Runtime is quite challenging",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Almost no support in the web communities (like stackoverflow) for Perl Prolog or SWI-Prolog and their applications in Knowledge Based Systems",
      },
    ],
    rate: 7,
    ratelabel: "Good Project",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "Learned a lot about knowledge Based Systems",
      },
      {
        pt: "",
        eng: "Opportunity to learn and use Perl and Prolog",
      },
      {
        pt: "",
        eng: "Re-learned and used Java Spring Boot",
      },

      {
        pt: "",
        eng: "Great project to lay the foundation of my interest in machine learning",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "Very hard concepts to grasp when starting",
      },
      {
        pt: "",
        eng: "Everything is built solely in code and almost nothing has visual confirmation/representation",
      },
      {
        pt: "",
        eng: "Team of 4 people that didn't contribute a thing for the project",
      },
      {
        pt: "",
        eng: "Outdated technologies and programming languages",
      },
    ],
    img: [
      "sbc1.png",
      "sbc2.png",
      "sbc3.png",
      "sbc4.png",
      "sbc5.png",
      "sbc6.png",
    ],
    git: "https://github.com/JoaoGuedes01/sbcBackend",
    yt: "https://www.youtube.com/watch?v=Rs8bN-K6f4w&t=214s",
  },

  /*******************************************************************  SD *******************************************************************/
  {
    id: "sd",
    title: {
      pt: "Balanceador de Carga de Servidor Web",
      eng: "SD Social App",
    },
    context: [
      {
        icon: "netprog",
        label: {
          pt: "Machine Learning",
          eng: "Network Programming",
        },
      },
      {
        icon: "softdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Software Development",
        },
      },

      {
        icon: "academic",
        label: {
          pt: "Projeto Académico",
          eng: "Academic Project",
        },
      },
    ],
    tech: [
      {
        icon: "java",
        label: "Java",
      },
      {
        icon: "javafx",
        label: "JavaFX",
      },
      {
        icon: "intj",
        label: "IntelliJ",
      },
      {
        icon: "scnb",
        label: "Scene Builder",
      },
    ],
    roles: [
      {
        pt: "Projeto Completo",
        eng: "Complete Application",
      },
      {
        pt: "Projeto Completo",
        eng: "Design and Architecture",
      },
      {
        pt: "Projeto Completo",
        eng: "Research and Implementation",
      },
      {
        pt: "Projeto Completo",
        eng: "Coding and Logic",
      },
    ],
    duration: {
      year: "2020/2021",
      timelen: {
        pt: "1 semestre",
        eng: "1 semester",
      },
    },
    desc: [
      {
        pt: "À medida que o meu CV crescia fui ficando cada vez mais limitado no que toca ao que incluir nele, chegando ao ponto de ter de selecionar entre 2 projetos igualmente bons. Sendo que os projetos realizados e experiência são as áreas mais fortes de qualquer currículo necessitava de uma forma nova que pudesse incluir todos os meus projetos, experiencia e informações relevantes de forma intuitiva e agradável. Como tinha algum tempo livre (Férias de Verão) e muita experiência em desenvolvimento web Backend e quase nenhuma em Frontend achei que construir o meu próprio website pessoal completamente do 0 iria ser uma experiência agradável e enriquecedora e me permitiria largar o bootstrap (ao qual recorria sempre que necessitava de um frontend básico e utilizável)",
        eng: "In my class of Distributed Systems I learned a lot about computer network structures and their designations, such as Peer to Peer and Client/Server Networking. In this class I was tasked with building a social media application (like Twitter) using the netowrking notions I was taught and Java with network sockets.",
      },
      {
        pt: "Uma vez que já tenho um certo domínio com Angular (e seria uma abordagem exagerada para um simples website pessoal) decidi aprender React e, finalmente, css devidamente. Então, em preparação para o projeto assisti a algumas aulas e lições de Design (puramente design de frontend, sem código), cursos de CSS, que me fizerem perceber o porquê e quando utilizar as diferentes propriedades e cursos completos de React nas plataformas Youtube e Udemy.",
        eng: "Having said that, this project was made with 2 distinct architectures in mind, Peer to Peer, where one client would act as the server as well, and the other client would simply be a client and Server/client where Clients would just be clients connecting to a central server.",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "Using Java Sockets and RMI (Remote Method Invocation) I was able to create a network application that would allow:",
      },

      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "Registration - Users are able to register in the app with their credentials as long as the e-mail is not already taken ( Since it's the identifier attribute of the user class)",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "Login - Users would be able to login with previously registered credentials. These credentials would persist through power downs of all clients and server since everything would be logged in their respective files (like accounts and friends lists)",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "Updating User Information - Users are able to update all their information except for their e-mail and this information update would propagate through the entire network",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "Friends Lists - Each user has their unique friends lists with all the users that agreed the connection.",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "Friend Requests - A user is able to send a friend request to any online user at any moment.",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "Online/Offline monitorization - Any user could check how many users are online/offline in their network at any given moment. If these users are online a friend request could be made directly to the other client, if not the request information goes to the server.",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "Personal Messaging - Any user is able to chat privately with any other user as long they are friends. If the other user is online the message would go directly to their client, if not the message will go the server and be flagged 'to be delivered' and when set client goes online again the message would pop up in their client.",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "Boards - Friends have the ability to see their friends boards and messages. Any user's friends list's users are all in 'one big chat room' where all messages are 'seeable' to any user as long as they are part of that friends list. If a user is not part of another person's friends list they are not able to see their board messages.",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "Notification States - A User has the ability to toggle their state from 'active' to 'Do not Disturb'. This will dictate their client's notification behaviour",
      },
    ],
    chall: [
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Java and OOP (Object Oriented Programming) slowed down the development of the system",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Java Sockets were a new concept for me and a bit challenging at first.",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Java Remote Method Invocation (RMI) is, like sockets, a bit hard to grasp at first.",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "JavaFX was very hard to work with properly and to get started with.",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Java Application are hard to deploy and the time constraints of the class did not allow for proper deployment",
      },
    ],
    rate: 8,
    ratelabel: "Great Project",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "Learned a lot about Network Programming and Architecturing",
      },
      {
        pt: "",
        eng: "Fully understood Java Sockets and RMI",
      },
      {
        pt: "",
        eng: "Perfect excuse to practice Java, since not a lot of projects use it as a first choice",
      },

      {
        pt: "",
        eng: "Fully learned JavaFX and grew to like and appreciate it",
      },

      {
        pt: "",
        eng: "Very rewarding project",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "Very hard concepts to grasp when starting",
      },
      {
        pt: "",
        eng: "Little, if any, help from my professors and teaching team",
      },
      {
        pt: "",
        eng: "Outdated technologies are always infamous for ambiguous error messages and lack of online support",
      },
      {
        pt: "",
        eng: "Lack of online guides and/or libraries having to build everything from scratch",
      },
    ],
    img: ["sd1.png", "sd2.png", "sd3.png", "sd4.png", "sd5.png", "sd6.png"],
    git: "https://github.com/JoaoGuedes01/SDFinal",
  },

  /*******************************************************************  Debts *******************************************************************/
  {
    id: "debts",
    title: {
      pt: "Dívidas",
      eng: "Debts",
    },
    context: [
      {
        icon: "webdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Web Development",
        },
      },
      {
        icon: "ux/ui",
        label: {
          pt: "UX/UI",
          eng: "UX/UI",
        },
      },
      {
        icon: "personal",
        label: {
          pt: "Projeto Pessoal",
          eng: "Personal Project",
        },
      },
    ],
    tech: [
      {
        icon: "react",
        label: "React",
      },
      {
        icon: "framer",
        label: "Framer Motion",
      },
      {
        icon: "css",
        label: "CSS",
      },
      {
        icon: "mongo",
        label: "MongoDB",
      },
      {
        icon: "nodejs",
        label: "Node.js",
      },
    ],
    roles: [
      {
        pt: "Aplicação Completa",
        eng: "Full Application",
      },
      {
        pt: "Design UX/UI",
        eng: "UX/UI Design",
      },
      {
        pt: "Deploy da App publicamente",
        eng: "App Architecture (MERN)",
      },
      {
        pt: "Deploy da App publicamente",
        eng: "Technology Configuration",
      },
      {
        pt: "Desenvolvimento da App",
        eng: "App Development",
      },
      {
        pt: "Deploy da App publicamente",
        eng: "App Deployment",
      },

      {
        pt: "Deploy da App publicamente",
        eng: "Backend and Frontend Logic",
      },
    ],
    duration: {
      year: 2021,
      timelen: {
        pt: "1 semana",
        eng: "1 week",
      },
    },
    desc: [
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "In 2021 I was on a trip with some friends when we started talking about money and issues, people that would be paying later, people would forget to pay, everything would be a mess and everyone always ends up losing.",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "I was looking for an excuse to practice my skills in development (web) so I though it would a great idea to build a little platform to share our debts with each other so it is always logged and documented somewhere. Having this opportunity to build it I thought I would try out the MERN stack ( MongoDB, Express.js, React, Node.js).",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "In this app we can add users, each user can add a debt associated with someone with a monetary value representative of the debt. This debt can be updated as the person is paying what they owe or eliminated. All the objects (Users and Debts) have CRUD functionality working with node and mongoDB (through mongoose).",
      },
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "I used Framer Motion for the animations in the frontend as well as react. These 2 technologies were the Big Firsts for me and I enjoyed working with them very much.",
      },
    ],
    chall: [
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning React and CSS for the first time",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning Framer Motion for the first time",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Java Remote Method Invocation (RMI) is, like sockets, a bit hard to grasp at first.",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "JavaFX was very hard to work with properly and to get started with.",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Java Application are hard to deploy and the time constraints of the class did not allow for proper deployment",
      },
    ],
    rate: 8,
    ratelabel: "Great Project",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "Learned a lot about React/Framer/CSS",
      },
      {
        pt: "",
        eng: "Expanded my range of Skills in web development",
      },
      {
        pt: "",
        eng: "Challenging Project and great for practicing",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "Web Designing and Frontend development are hard if you've never worked on them",
      },
      {
        pt: "",
        eng: "Responsive web design and code is hard when you have no experience",
      },
      {
        pt: "",
        eng: "The app does not have much depth",
      },
    ],
    img: [
      "debts1.png",
      "debts2.png",
      "debts3.png",
      "debts4.png",
      "debts5.png",
      "debts6.png",
    ],
    git: "https://github.com/JoaoGuedes01/dividas",
    deploy: "https://dividas.joaoguedes01.repl.co/",
  },

  /*******************************************************************  ISI *******************************************************************/
  {
    id: "isi",
    title: {
      pt: "SP Mobile",
      eng: "SP Mobile",
    },
    context: [
      {
        icon: "webdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Web Development",
        },
      },
      {
        icon: "softdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Software Development",
        },
      },
      {
        icon: "int",
        label: {
          pt: "Integração de Tecnologias",
          eng: "Technology Integration",
        },
      },
      {
        icon: "academic",
        label: {
          pt: "Projeto Académico",
          eng: "Academic Project",
        },
      },
    ],
    tech: [
      {
        icon: "pwa",
        label: "Progressive Web App",
      },
      {
        icon: "nodejs",
        label: "Node.js",
      },
      {
        icon: "mongo",
        label: "MongoDB",
      },
      {
        icon: "salesforce",
        label: "Salesforce",
      },
      {
        icon: "hubspot",
        label: "Hubspot",
      },
      {
        icon: "moloni",
        label: "Moloni",
      },
      {
        icon: "nodemailer",
        label: "NodeMailer",
      },
      {
        icon: "twilio",
        label: "Twilio",
      },
      {
        icon: "paypal",
        label: "PayPal",
      },
      {
        icon: "gmaps",
        label: "Google Maps",
      },
      {
        icon: "fb",
        label: "Facebook API",
      },
      {
        icon: "invoice",
        label: "EasyInvoice",
      },
    ],
    roles: [
      {
        pt: "Aplicação Completa",
        eng: "Full Application Architecture",
      },

      {
        pt: "Deploy da App publicamente",
        eng: "Technology Research",
      },
      {
        pt: "Deploy da App publicamente",
        eng: "Technology Configuration and Implementation",
      },
      {
        pt: "Desenvolvimento da App",
        eng: "All Technology Integration",
      },
      {
        pt: "Deploy da App publicamente",
        eng: "All Backend Logic and code",
      },
      {
        pt: "Deploy da App publicamente",
        eng: "FullStack",
      },
      {
        pt: "Design UX/UI",
        eng: "PWA Implementation",
      },
      {
        pt: "Deploy da App publicamente",
        eng: "App Deployment",
      },
    ],
    duration: {
      year: 2021,
      timelen: {
        pt: "1 semestre",
        eng: "1 semester",
      },
    },
    desc: [
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "In my class of Implementation of Information Systems the goal was to do research and find existing/new technology in order to add value and extra features to our own solution. As the name implies the essence of the class was to use a lot of different services to achieve our goals such as Rest APIs, Web Services or even entire solutions as long as we could integrate it our unique solution.",
      },
      {
        pt: "",
        eng: "For the project we were tasked with finding an existing business with a lot of moving parts, study their business model, propose and develop a new tech-based solution that would increase the value of the business using different technologies.",
      },
      {
        pt: "",
        eng: "For my project I chose the SP Modelismo company based in Barcelos, Portugal (my uncle was the owner so I could get every detail I needed very fast). This is an RC vehicle racing specialized company that has 3 foundations for their business model:",
      },
      {
        pt: "",
        eng: "Selling RC vehicles to new and existing pilots, given they are licenced",
      },
      {
        pt: "",
        eng: "Licencing new pilots or supporting already existing licences with upgrades and branding",
      },
      {
        pt: "",
        eng: "Hosting and participating in events (made by them or the Portuguese Federation for RC Events)",
      },
      {
        pt: "",
        eng: "We chose to focus on the licencing of new and existing pilots and hosting/participating in new events since these 2 are the ones that are very slow and could use some optimization and automation. We also took the liberty of taking marketing and divulgation into consideration with social media posting.",
      },
      {
        pt: "",
        eng: "To summarize SP Modelismo cannot do anything (licencing and participating/hosting events) without the Federation's approval. This approval is very slow and tedious to get since it's done on the fly by e-mail never knowing when an answer will come. This slows everything down in the business, new pilots take very long to get licenced and start purchasing vehicles and participating in events and the event hosting process is long and gratuitous, it's hard for teams to know when events are going to be hosted and where. Overall the burocracies that involve the SP Modelismo and the Federation are slow, ill-optimized and wasting a lot of money. To top it all off, the marketing that goes into event planning and broadcasting is done by an outside company that is also ill-informed and unhappy with the way things work right now.",
      },
      {
        pt: "",
        eng: "To simulate all these entities (SP Modelismo/Federation/Marketing Company) I designed an architecture that has my platform as the center engine for everything and all the comunications are made to each entity's system. For example SP Modelismo is based in Salesforce the Federation is based in Hubspot and the marketing team is based in Moloni ERPs.",
      },
      {
        pt: "",
        eng: "This project meant for students to break free from only coding in 1 codebase and learn how to adapt to multiple platforms from multiple entities as it is in the real world.",
      },
      {
        pt: "",
        eng: "Having implemented communication between the 3 platforms for the 3 entities I also implemented some online services to add even more value to the solution:",
      },
      {
        pt: "",
        eng: "Facebook & Twitter - Automatic event announcing in social media with all the relevant info for the event",
      },
      {
        pt: "",
        eng: "Paypal - Takes care of all payments regarding pilot licencing and event participation as well as refunding features",
      },
      {
        pt: "",
        eng: "NodeMailer & Twilio - For E-mail and SMS notifications (such as reminders, classification proof and srating positioning in the upcoming event) to the pilots",
      },
      {
        pt: "",
        eng: "MongoDB for ranking Information",
      },
      {
        pt: "",
        eng: "Easy Invoice for all invoices generated and emited",
      },
      {
        pt: "",
        eng: "Google Maps for event location",
      },
      {
        pt: "",
        eng: "Having implemented all this our app gave the three entities freedom to communicate directly logging everything in their own in-house systems (salesforce/hubspot/moloni), minimize time wasters, facilitate the burocratic process automating a lot of things and modernize/digitalize a lot of aspects in the company",
      },
      {
        pt: "",
        eng: "The owner of the company was very pleased with the result as was my teacher giving us full marks once again for the project (20/20)",
      },
    ],
    chall: [
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Understanding and trying to concept a way of improving the business",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Online Research about useable technologies",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Implementing all the technologies with one another (Some were very challenging to work with)",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Complete freedom in what I could use was very overwhelming",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "My team was very hard to work with since I built everything on my own (Except the frontend)",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "A lot of bugs occur in a lot of different places when trying to implement a lot different of technologies at once",
      },
    ],
    rate: 8,
    ratelabel: "Great Project",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "Learned how to read a documentation properly and use it in my project",
      },
      {
        pt: "",
        eng: "Learned how to correctly search for relevant technology for projects",
      },
      {
        pt: "",
        eng: "Learned how to use some of the most popular and powerful APIs in the web Facebook/Twitter/Paypal/Google Maps",
      },
      {
        pt: "",
        eng: "Really rewarding and important project since 'reinventing the wheel' for every project is ineficient and a time waster",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "So many technologies gave way to a LOT of problems, bugs and errors",
      },
      {
        pt: "",
        eng: "Since I was alone I had a hard time grasping the big picture sometimes focusing on niche problems",
      },
      {
        pt: "",
        eng: "In a team of 8 people I coded the entire system (except the frontedn application)",
      },
      {
        pt: "",
        eng: "There are some problems that, with more time could be fixed",
      },
      {
        pt: "",
        eng: "The Frontend App is very slow and unoptimized",
      },
      {
        pt: "",
        eng: "Since the keys for the APIs and ERPs/CRMs were valid for the academic year of this project, in the future the system will no longer work because of bad API keys",
      },
    ],
    img: [
      "isi1.png",
      "isi2.png",
      "isi3.png",
      "isi4.png",
      "isi5.png",
      "isi6.png",
      "isi7.png",
      "isi8.png",
      "isi9.png",
      "isi10.png",
    ],
    git: "https://github.com/JoaoGuedes01/ISI-IntegratedApp",
    deploy: "https://isi-integratedapp.joaoguedes01.repl.co/",
    yt: "https://www.youtube.com/watch?v=f_Q1Jtap5WI",
  },
  /*******************************************************************  Titanic *******************************************************************/
  {
    id: "titanic",
    title: {
      pt: "SP Mobile",
      eng: "Titanic Kaggle",
    },
    context: [
      {
        icon: "ml",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Machine Learning",
        },
      },
      {
        icon: "personal",
        label: {
          pt: "Projeto Académico",
          eng: "Personal Project",
        },
      },
    ],
    tech: [
      {
        icon: "python",
        label: "Python",
      },
      {
        icon: "jupyter",
        label: "Jupyter Notebooks",
      },
    ],
    roles: [
      {
        pt: "Aplicação Completa",
        eng: "Full Project",
      },
    ],
    duration: {
      year: 2021,
      timelen: {
        pt: "1 week",
        eng: "1 semana",
      },
    },
    desc: [
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "I wanted to get familiar with machine learning since I was going to be taking some classes on it so I decided to try and do a Kaggle Challenge. The most well-known one out there was the Titanic so I figured I'd have great online support and it would be, an overall, good experience",
      },

      {
        pt: "",
        eng: "I used all the great practices for machine learning such as the Grid Search for hyperparameter tuning and cross-validation to be able to choose a model with a lot more certainty.",
      },
      {
        pt: "",
        eng: "In the end this was a pretty simple project but with hard concepts to grasp. Overall I loved the time I spent researching this topic and writting my own solution.",
      },
      {
        pt: "",
        eng: "I submitted my answers to Kaggle and got a 75% that I'm happy with. This was my first experience with machine learning and it left a great impression on me. It took me from programming to math and back to programming all while I watched my precision scores increasing with each new idea I had. It was very fun and I can't wait for my next Data Science/Machine Learning Project",
      },
    ],
    chall: [
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "I never dabbled in machine learning before so this was new and challenging",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "All the research I made seemed pretty irrelevant with so many names and terminology",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Statistics are a gib part of Data Science which was a surprise for me",
      },
    ],
    rate: 9,
    ratelabel: "Almost Perfect",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "Learned a lot about Data Science",
      },
      {
        pt: "",
        eng: "Finally dipped my toes in Machine Learning",
      },
      {
        pt: "",
        eng: "Understood the relationships between Data Science/Machine Learning and Statistics",
      },
      {
        pt: "",
        eng: "Really rewarding and important project since it touches on every aspect of Machine Learning for beginners",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "Very hard concepts to wrap your head around at first",
      },
      {
        pt: "",
        eng: "Too many models, weird terminology and technologies/libraries",
      },
      {
        pt: "",
        eng: "You need to freshen' up on your Statistical Knowledge",
      },
      {
        pt: "",
        eng: "There is no 'correct' way of carrying out a Machine Learning project which left me lost sometimes",
      },
      {
        pt: "",
        eng: "The end result could be improved",
      },
    ],
    img: [
      "titanic1.png",
      "titanic2.png",
      "titanic3.png",
      "titanic4.png",
      "titanic5.png",
      "titanic6.png",
    ],
    git: "https://github.com/JoaoGuedes01/SDFinal",
  },

  /*******************************************************************  guedesDB *******************************************************************/
  {
    id: "guedesdb",
    title: {
      pt: "SP Mobile",
      eng: "guedesDB",
    },
    context: [
      {
        icon: "softdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Software Development",
        },
      },
      {
        icon: "personal",
        label: {
          pt: "Projeto Académico",
          eng: "Personal Project",
        },
      },
    ],
    tech: [
      {
        icon: "nodejs",
        label: "Node.js",
      },
      {
        icon: "js",
        label: "JavaScript",
      },
    ],
    roles: [
      {
        pt: "Aplicação Completa",
        eng: "Full Project",
      },
    ],
    duration: {
      year: 2021,
      timelen: {
        pt: "1 week",
        eng: "1 semana",
      },
    },
    desc: [
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "guedesDB is a lightweight Node.js library that offers a very simple database with CRUD and id functionality. I thought about it and most databases are really overkill for small applications and there is a lot of boilerplate connections and code that is unnecessary.",
      },
      {
        pt: "",
        eng: "guedesDB was born out of the challenge and the thought that I could take the simplest aspects of a database and replicate them in JavaScript as a nodejs dependency.",
      },
      {
        pt: "",
        eng: "The result is a very simple file system that allows developers to store data in gds files (guedes format) in an automatically created folder structure. guedesDB is completely abstracted and only exposes basic and intuitive commands to create, read, update and delete objects from the database.",
      },
      {
        pt: "",
        eng: "As an extra I also implemented hosting, so you can host the database locally inside a project or globally for all your node projects to access.",
      },
    ],
    chall: [
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Messing with the file system in Node was challenging at first",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "The concept of a database is so simple that it is hard to inovate",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "The Id functionality and differentiation was a nightmare",
      },
    ],
    rate: 10,
    ratelabel: "Loved It",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "Got to make something from scratch without external libraries",
      },
      {
        pt: "",
        eng: "I was able to achieve my goal of a simpler and easier to use local database",
      },
      {
        pt: "",
        eng: "guedesDB is available for download in the Node Package Manager (npm)",
      },
      {
        pt: "",
        eng: "Rewritting existing technologies is always a very fun and rewarding experience and it makes you appreciate the work that other people have done.",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "gds files are just JSON files in 'disguise'",
      },
      {
        pt: "",
        eng: "There are some things that, probably, could be optimized",
      },
    ],
    img: ["guedesdb1.png", "guedesdb2.png", "guedesdb3.png", "guedesdb4.png"],
    git: "https://github.com/JoaoGuedes01/SDFinal",
    deploy: "https://www.npmjs.com/package/guedesdb",
  },
  /*******************************************************************  TicTacBoom *******************************************************************/
  {
    id: "tictac",
    title: {
      pt: "SP Mobile",
      eng: "TicTacBoom",
    },
    context: [
      {
        icon: "webdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Web Development",
        },
      },
      {
        icon: "softdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Software Development",
        },
      },
      {
        icon: "personal",
        label: {
          pt: "Projeto Académico",
          eng: "Personal Project",
        },
      },
    ],
    tech: [
      {
        icon: "nodejs",
        label: "Node.js",
      },
      {
        icon: "js",
        label: "JavaScript",
      },
      {
        icon: "react",
        label: "React",
      },
    ],
    roles: [
      {
        pt: "Aplicação Completa",
        eng: "Full Project",
      },
    ],
    duration: {
      year: 2021,
      timelen: {
        pt: "1 day",
        eng: "1 dia",
      },
    },
    desc: [
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "TicTacBoom is a game meant to be played in gatherings of friends and to pass the time. It's simple concept allows everyone to join in and has no player limit.",
      },
      {
        pt: "",
        eng: "I always enjoyed this game but it's a chore having to take it anywhere and set it up on a table. That's when I thought that the concept was so simple it would only take a couple of minutes to create the logic and make it available online for eveyone to play.",
      },
      {
        pt: "",
        eng: "The way the game works is we roll a die (that gives us either tic, tac or boom), pick a card (that gives us a random letter of the alphabet or a random common syllable in pt/eng words) and we start the bomb.",
      },
      {
        pt: "",
        eng: "If we get Tic we must say words that start with the letter from the picked card",
      },
      {
        pt: "",
        eng: "If we get Tac we must say words that end with the letter from the picked card",
      },
      {
        pt: "",
        eng: "If we get Boom we must say words that have the letter from the picked card anywhere",
      },
      {
        pt: "",
        eng: "The game starts by creating the rules (rolling the die and picking the card) and as soon as the bomb starts players take turns passing the bomb around. When a player has the bomb they have to say a word that obeys the set rules in order to pass it along. The player that still has the bomb when it explodes loses. The timer on this bomb is set to a random value on an interval to make things interesting and not predictable",
      },
    ],
    chall: [
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "I had no real challenges while making this project since everything that I used was used because I already was quite conforable with and used them before",
      },
    ],
    rate: 10,
    ratelabel: "Loved It",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "Really enjoyed how the development of this project was error-free and there were no delays or 'hiccups' because of lack of knowledge/experience",
      },
      {
        pt: "",
        eng: "I was able to achieve my goal of creating a more convient version of this game meant to be played with just a phone",
      },
      {
        pt: "",
        eng: "It's a great addition to the portfolio since it's a complete solution to solve an existing problem",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "User Interface could be a lot better since, at the time, I had no experience/interest in it",
      },
      {
        pt: "",
        eng: "The alphabet roster could be shorter since there are a lot of words that do not end with 'z' for example",
      },
      {
        pt: "",
        eng: "The syllable list could be a lot more optimized to work with more words",
      },
    ],
    img: [
      "tictac1.png",
      "tictac2.png",
      "tictac3.png",
      "tictac4.png",
      "tictac5.png",
    ],
    git: "https://github.com/JoaoGuedes01/tictacboom",
    deploy: "https://tictacboom.joaoguedes01.repl.co",
  },
  /*******************************************************************  BracelHertz *******************************************************************/
  {
    id: "bracelhertz",
    title: {
      pt: "BracelHertz",
      eng: "BracelHertz",
    },
    context: [
      {
        icon: "webdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Web Development",
        },
      },
      {
        icon: "softdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Software Development",
        },
      },
      {
        icon: "harddev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Hardware Development",
        },
      },
      {
        icon: "academic",
        label: {
          pt: "Projeto Académico",
          eng: "Academic Project",
        },
      },
    ],
    tech: [
      {
        icon: "java",
        label: "Java",
      },
      {
        icon: "spring",
        label: "Spring Boot",
      },
      {
        icon: "arduino",
        label: "Arduino",
      },
      {
        icon: "heroku",
        label: "Heroku",
      },
      {
        icon: "html",
        label: "HTML",
      },
      {
        icon: "css",
        label: "CSS",
      },
      {
        icon: "js",
        label: "Javascript",
      },
    ],
    roles: [
      {
        pt: "Aplicação Completa",
        eng: "Backend Server and Logic",
      },
      {
        pt: "Aplicação Completa",
        eng: "Spring Boot Configuration and Research",
      },
      {
        pt: "Aplicação Completa",
        eng: "Hardware and Arduino Programming",
      },
      {
        pt: "Aplicação Completa",
        eng: "Arduino Connection to Spring",
      },
      {
        pt: "",
        eng: "Wristband Design and Modeling",
      },
      {
        pt: "Aplicação Completa",
        eng: "Full Stack and App Deployment",
      },
    ],
    duration: {
      year: 2020,
      timelen: {
        pt: "1 semestre",
        eng: "1 semester",
      },
    },
    desc: [
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "In my class of Development of Computer Applications we were tasked to deliver a solution that would help the Portuguese Prison System that partnered with the University.",
      },
      {
        pt: "",
        eng: "While meeting with a representative it came to our attention that the prison system has a big suicidal issue. Knowing this we decided to make this the theme for our class project.",
      },
      {
        pt: "",
        eng: "After much research we found many papers and proof that linked certain patterns of anomal heart rates and suicides/suicidal attempents. Knowing this we decided that we wanted our solution to be able to measure the heartbeat patterns of inmates that were considered 'risky'.",
      },
      {
        pt: "",
        eng: "To do this we developed a dashboard for all of the prison staff and divided it by roles since it was explained to us that there were operacional staff followd by Supervisores followe by the Prison Director(s). Each of these entities has their level of permissions inside our system and we have a number of thought-out failsafes implemented in case of mistakes and credential losses.",
      },
      {
        pt: "",
        eng: "We also developed a wristband capable of recording an inmate's heartbeat and send it in real time directly to our servers so the staff can accompany it through the online interface. Our system will automatically send risk alerts with a strict ruleset based on the research we had done.",
      },
      {
        pt: "",
        eng: "The details about permissions and other features about our application can be found in the video of this project.",
      },
      {
        pt: "",
        eng: "I really enjoyed this project, I was still very new to web development and it was a very rewarding system. Our teacher seemed to share this feeling as she gave us full marks for the project (20/20).",
      },
    ],
    chall: [
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning Spring Boot from scratch and without help and classes",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Configuring and programming an arduino micro-controller for the first time and from scratch was also very challenging",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Linkning the arduino board and the Spring Boot System was not easy",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Adapting Web programming (backend) from functional to Object Oriented seemed like a step backwards",
      },
    ],
    rate: 9,
    ratelabel: "Almost Perfect",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "I really enjoyed learning Spring Boot for the first time",
      },
      {
        pt: "",
        eng: "Programming an Arduino board was very fun and exciting",
      },
      {
        pt: "",
        eng: "Got to work with Hardware and 3d Modeling for the first time",
      },
      {
        pt: "",
        eng: "Seeing everything connected and working was a very rewarding experience",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "Very ambitious project for a beginner level Web Development Project",
      },
      {
        pt: "",
        eng: "No support from our teacher, we were on our own with almost no experience in web",
      },
      {
        pt: "",
        eng: "Overwhelming ammount of technologies/techniques and options to choose while developing something like this",
      },
    ],
    img: [
      "brac1.png",
      "brac2.png",
      "brac3.png",
      "brac4.png",
      "brac5.png",
      "brac6.png",
      "brac7.png",
      "brac8.png",
    ],
    git: "https://github.com/JoaoGuedes01/BracelHertz",
    deploy: "https://bracelhertz.herokuapp.com/",
    yt: "https://www.youtube.com/watch?v=-Cp5I06yuSc",
  },
  /*******************************************************************  Press&Play *******************************************************************/
  {
    id: "pressplay",
    title: {
      pt: "Press&Play",
      eng: "Press&Play",
    },
    context: [
      {
        icon: "webdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Web Development",
        },
      },
      {
        icon: "softdev",
        label: {
          pt: "Desenvolvimento Web",
          eng: "Software Development",
        },
      },
      {
        icon: "academic",
        label: {
          pt: "Projeto Académico",
          eng: "Academic Project",
        },
      },
    ],
    tech: [
      {
        icon: "nodejs",
        label: "Node & Express.js",
      },
      {
        icon: "js",
        label: "JavaScript",
      },
      {
        icon: "html",
        label: "HTML",
      },
      {
        icon: "css",
        label: "CSS",
      },
      {
        icon: "mysql",
        label: "MySQL",
      },
      {
        icon: "googleapi",
        label: "Google API",
      },
    ],
    roles: [
      {
        pt: "Aplicação Completa",
        eng: "Backend Server and Logic",
      },
      {
        pt: "Aplicação Completa",
        eng: "Node.js and Express.js Configuration and Research",
      },
      {
        pt: "Aplicação Completa",
        eng: "Google API Configuration and Research",
      },
      {
        pt: "Aplicação Completa",
        eng: "Full Stack and e2e configuration",
      },
      {
        pt: "",
        eng: "App Deployment",
      },
      {
        pt: "Aplicação Completa",
        eng: "PWA Implementation",
      },
    ],
    duration: {
      year: "2019 / 2020",
      timelen: {
        pt: "1 semestre",
        eng: "1 semester",
      },
    },
    desc: [
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "It was in my class of Web Development that my journey and interest in Web Development started. In this class we learned a lot about servers, Tech Stacks, different technologies and we had a lot of support from the teachers.",
      },
      {
        pt: "",
        eng: "This class focused almost solely in JavaScript HTML and CSS leaving all the frameworks and fancy things for us to discover on our own. If I never had been taught the fundamentals of Web Development with HTML CSS and JavaScript I would probably never tried or even searched for frameworks like React, Next.js, Angular, Vue.js, among others or even tried them. ",
      },
      {
        pt: "",
        eng: "For my project in this class my team was tasked with building a PWA (Among 6+ teams in each class only one was tasked with the PWA) application for booking and scheduling football matches in football fields all across Portugal.",
      },
      {
        pt: "",
        eng: "Our app had social features such as friend requests, notifications and chat in addition to having the ability of booking, searching and checking availability for specific hours and intervals of time in any of the available football fields.",
      },
      {
        pt: "",
        eng: "The other teams in our class got projects like 'Fields Administrator', which handled the fields, and our server communicated with theirs to get the list of fields and their specifications.",
      },
      {
        pt: "",
        eng: "We used MySQL for the Database since we were learning it in the DataBases class, so we built a model and implemented it in our server with sequelize",
      },
      {
        pt: "",
        eng: "To top it all off we impplemented authentication via normal credentials (email/password with email verification when registering) or with Google's API. (Log In with Google).",
      },
      {
        pt: "",
        eng: "The app was deployed on Heroku and we were pretty pleased with the result and so was our teacher giving us full marks (20/20) and awakening my interest in Web Development.",
      },
    ],
    chall: [
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "Learning Web Development for the first time",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "With no experience these are pretty hard concepts",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "It was the first project I did that mixed multiple classes I was having or ever had",
      },
      {
        pt: "Aprender design moderno e responsivo, não tendo qualquer tipo de experiência neste campo",
        eng: "The concept of Web APIs was really new to me and the Google API was a nightmare to implement with online tutorials and guides",
      },
      {
        pt: "",
        eng: "The deployment of the app was another nightmare since we did not know what we were doing yet",
      },
      {
        pt: "",
        eng: "Integrating our project with the rest of the other teams' projects was nearly impossible, we all had different opinions on how things should tie together, it was very hard",
      },
      {
        pt: "",
        eng: "We had to scrap the chat feature since implementing socket.io on top of the stress of everything else would halt or destroy everything we had made",
      },
    ],
    rate: 9,
    ratelabel: "Almost Perfect",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "I really enjoyed learning Web Development for the first time",
      },
      {
        pt: "",
        eng: "One of the most important project I ever worked on in University",
      },
      {
        pt: "",
        eng: "Gave me the foundations for what I can do today weahter it is in terms of skill or in terms of interest",
      },
      {
        pt: "",
        eng: "Very rewarding and fit project since, as I said, we were developing the app and having a Databases class at the same time",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "Really hard concepts to understand having no experience on the matter",
      },
      {
        pt: "",
        eng: "It is an area that only works if you have interest and put in the time to learn",
      },
      {
        pt: "",
        eng: "Working as a large team on this project proved to be pretty challenging",
      },
    ],
    img: [
      "pressplay1.png",
      "pressplay2.png",
      "pressplay3.png",
      "pressplay4.png",
      "pressplay5.png",
      "pressplay6.png",
      "pressplay7.png",
      "pressplay8.png",
      "pressplay9.png",
    ],
    git: "https://github.com/ruigomes99/press-and-play",
    deploy: "https://press-and-play.herokuapp.com/",
  },
  /*******************************************************************  TSG *******************************************************************/
  {
    id: "tsg",
    title: {
      pt: "WorldWide BI",
      eng: "WorldWide BI",
    },
    context: [
      {
        icon: "datascn",
        label: {
          pt: "Data Science",
          eng: "Data Science",
        },
      },
      {
        icon: "academic",
        label: {
          pt: "Projeto Académico",
          eng: "Academic Project",
        },
      },
    ],
    tech: [
      {
        icon: "java",
        label: "Java",
      },
      {
        icon: "mysql",
        label: "MySQL"
      },
      {
        icon: "talend",
        label: "Talend Open Studio",
      },
      {
        icon: "tableau",
        label: "Tableau",
      }
    ],
    roles: [
      {
        pt: "Aplicação Completa",
        eng: "Exploratory Data Analysis"
      },
      {
        pt: "",
        eng: "Data exploration and subject research"
      },
      {
        pt: "",
        eng: "Data Warehouse conception and Design"
      },
      {
        pt: "",
        eng: "Data Pre-Processing and correction"
      },
      {
        pt: "",
        eng: "ETL Process and Data Warehouse Population"
      },
      {
        pt: "",
        eng: "Tableau exploration and Dashboard design/implementation"
      }
    ],
    duration: {
      year: "2020 / 2021",
      timelen: {
        pt: "1 semestre",
        eng: "1 semester",
      },
    },
    desc: [
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "In my Management Support Technologies I had my first encounter with Data Science and I immediately fell in love with the concept of being able to look at 1 million lines of data and not only understanding it but also withdraw useful information."
      },
      {
        pt: "",
        eng: "For our project (me and my team) we had 3 datasets, each containing roughly 1 million observations a refering to a different Natural Disaster (Earthquakes, Tsunamis or Volcanic Eruptions)."
      },
      {
        pt: "",
        eng: "The first thing we did, and also the most tedious, was to explore and study these datasets. Every attribute and every line of code was inspected with the help of Talend Data Quality"
      },
      {
        pt: "",
        eng: "Having identified the problematic data we set out to design and develop a Data Warehouse to store all that data using MySQL as a Multidimensional Model. Our Data Warehouse uses the Slow Changing Dimension concept where the Dimension Tables are able to be updated dynamically without needing to re-populate the Data Warehouse"
      },
      {
        pt: "",
        eng: "We, then, proceeded to develop the ETL scripts in Java using Talend for Data Integration where we corrected all the null and empty values replacing them with the last value of our number/alphabetic pattern (ex: scale 1-10, null values : 99) "
      },
      {
        pt: "",
        eng: "After the Data Warehouse was populated and the data clean we built a few View Tables for a better analysis in Tableau"
      },
      {
        pt: "",
        eng: "To end the project we designed and implemented a few dashboards that let us explore our View Tables and experience the Big Data from all the datasets."
      },
      {
        pt: "",
        eng: "I really enjoyed working on this project and witnessing that meaningless data make more and more sense. Our teacher was very happy with our work giving us full marks for the project (20/20)."
      }

    ],
    chall: [
      {
        pt: "",
        eng: "Data Science was a very challenging field to go blindly"
      },
      {
        pt: "",
        eng: "I had to revisit a lot of statistics techniques and knowledge for the EDA, most of which was forgotten"
      },
      {
        pt: "",
        eng: "It's really hard to decide when the EDA is done"
      },
      {
        pt: "",
        eng: "Designing the Data Warehouse with no experience was very tough"
      },
      {
        pt: "",
        eng: "The ETL process was very hard at first, and time consuming with a lot of errors and tweaks"
      },
      {
        pt: "",
        eng: "Learning Tableau and how to create dashboards was very challenging at first. We created the View Tables to make it easier"
      }
    ],
    rate: 8,
    ratelabel: "Pretty Good",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: "I already had some curiosity regarding Big Data and Data Science and here I got the opportunity to experience those concepts",
      },
      {
        pt: "",
        eng: "One of the most important project I ever worked on in University",
      },
      {
        pt: "",
        eng: "Gave me the foundations for the knowledge and interest I have in Data Science fields",
      },
      {
        pt: "",
        eng: "Very rewarding project and a very realistic depiction of how woriking in this area will/would be like in the real world",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "Really hard concepts to understand having no experience on the matter",
      },
      {
        pt: "",
        eng: "Not a lot of clear and clean online support for Data Warehousing and complete guides",
      },
      {
        pt: "",
        eng: "Working as a large team on this project proved to be pretty challenging",
      },
    ],
    img: [
      "tsg1.png",
      "tsg2.png",
      "tsg3.png",
      "tsg4.png",
      "tsg5.png",
      "tsg6.png",
      "tsg7.png",
      "tsg8.png",
      "tsg9.png",
      "tsg10.png",
    ],
    yt: "https://www.youtube.com/watch?v=Y-PI2xwVct4"
  },
  /*******************************************************************  FafenseAD *******************************************************************/
  {
    id: "fafensead",
    title: {
      pt: "Aventura do Fafense",
      eng: "Fafense Adventure",
    },
    context: [
      {
        icon: "gamedev",
        label: {
          pt: "Data Science",
          eng: "Game Development",
        },
      },
      {
        icon: "softdev",
        label: {
          pt: "Data Science",
          eng: "Software Development",
        },
      },
      {
        icon: "ux/ui",
        label: {
          pt: "Data Science",
          eng: "UX/UI",
        },
      },
      {
        icon: "personal",
        label: {
          pt: "Projeto Académico",
          eng: "Personal Project",
        },
      },
    ],
    tech: [
      {
        icon: "cs",
        label: "C#",
      },
      {
        icon: "unity",
        label: "Unity"
      },
      {
        icon: "ps",
        label: "Adobe Photoshop",
      }
    ],
    roles: [
      {
        pt: "Projeto Completo",
        eng: "Entire Project"
      }
    ],
    duration: {
      year: "2020",
      timelen: {
        pt: "1 mês",
        eng: "1 month",
      },
    },
    desc: [
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "This project started out as a practical joke, but slowly evolved into an opportunity for me to actually develop a game with real game-art and mechanics. Games always were a huge part of my life and in University, knowing how to program better than I ever did, I decided to try and tackle a Game Development Project more seriously."
      },
      {
        pt: "",
        eng: "This game is a basic platformer with small/long/wall jumps and running mechanics built from scratch. These mechanics are explored across 5 different levels each with their own interactions and art direction. Being a complete beginner a platformer was my first and safest choice when making this game."
      },
      {
        pt: "",
        eng: "The game follows a 'super mario-like' structure where if you get to a certain checkpoint in the end of a level you finish it and move along to the next one as well as a very bare-bones save/load system where you get a code after finishing a level which you can then use to load that same level instead of having to beat the whole game. This load mechanism was implemented given that I wanted it to be playable only in a browser."
      },
      {
        pt: "",
        eng: "After many hours of work and many more in reasearch and trial/error I was finally able to 'finish' this game, that was never meant to be a real thing, and deploy it in the internet for everyone to play and I'm pretty happy with the result."
      }

    ],
    chall: [
      {
        pt: "",
        eng: "Developing a game from scratch is very hard"
      },
      {
        pt: "",
        eng: "Learning Unity on the fly without a real vision for my game was pretty challenging"
      },
      {
        pt: "",
        eng: "Creating the Art and Animations for the game was much more time consuming than I thought initially."
      },
      {
        pt: "",
        eng: "Designing and creating the Levels (Good or even Average Levels) is an art in itself, which I severely underestimated"
      },
      {
        pt: "",
        eng: "Converting the final build to WegGL and integrating it in an actual HTML file was very hard and almost made me give up entirely in the final stage of the project"
      }
    ],
    rate: 8,
    ratelabel: "Pretty Good",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: " I learned a lot about Game Development and what is needed to make a game"
      },
      {
        pt: "",
        eng: "Made me gain a lot of respect and appreciation for the people who created the games I love because I struggled to make this bad little one",
      },
      {
        pt: "",
        eng: "Making a game is the perfect excuse to practice and exercise one's creative, artistic and progrmming abilities",
      },
      {
        pt: "",
        eng: "Creating a game is such a complex and envolved process that you end up learning a lot about so much more than just programming a game",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "Really ambitious project to pull of in a month with no experience",
      },
      {
        pt: "",
        eng: "I started this game with no vision either functionally or artisticly, always hoping I would find it along the way. That's a recipe for disaster when making a game",
      },
      {
        pt: "",
        eng: "Learning to create a game has less to do with knowing how to program and more to having the complete set of skills (art/creativity/programming) and adapting each skill to your overall level of mastery.",
      },
      {
        pt: "",
        eng: "The reasons I listed above contributed for this project being, at times, very overwhelming and making me doubt my skills a lot. Of all the project I worked on to this day, game development is the area that creates this effect the most"
      }
    ],
    img: [
      "fafensead1.png",
      "fafensead2.png",
      "fafensead3.png",
      "fafensead4.png",
      "fafensead5.png",
      "fafensead6.png",
      "fafensead7.png",
      "fafensead8.png"
    ],
    git: "https://github.com/JoaoGuedes01/FafenseAdventure",
    deploy: "https://fafenseadventure.joaoguedes01.repl.co/"
  },
  /*******************************************************************  Little Me *******************************************************************/
  {
    id: "little",
    title: {
      pt: "Pequeno Eu",
      eng: "Little Me",
    },
    context: [
      {
        icon: "gamedev",
        label: {
          pt: "Data Science",
          eng: "Game Development",
        },
      },
      {
        icon: "softdev",
        label: {
          pt: "Data Science",
          eng: "Software Development",
        },
      },
      {
        icon: "ux/ui",
        label: {
          pt: "Data Science",
          eng: "UX/UI",
        },
      },
      {
        icon: "personal",
        label: {
          pt: "Projeto Académico",
          eng: "Personal Project",
        },
      },
    ],
    tech: [
      {
        icon: "cs",
        label: "C#",
      },
      {
        icon: "unity",
        label: "Unity"
      },
      {
        icon: "ps",
        label: "Adobe Photoshop",
      }
    ],
    roles: [
      {
        pt: "Projeto Completo",
        eng: "Entire Project"
      }
    ],
    duration: {
      year: "2019",
      timelen: {
        pt: "1 mês",
        eng: "1 month",
      },
    },
    desc: [
      {
        pt: "Estou bastante contente com o resultado e gostei muito do processo de desenvolvimento assim como o de presenciar o meu design a 'ganhar vida' aos poucos no meu ecrâ. Aprendi imenso acerca de teoria de Design, Design de Aplicações Web, design moderno e responsivo, conceitos básicos e avançados de CSS e saí com uma nova apreciação por desenvolvedores de Frontend. Sempre me manti bem afastado de Design e Frontend mas tendo construído este website sinto-me bastante confiante ao acrescentar desenvolvimento frontend e CSS nas minhas Skills/Habilidades.",
        eng: "Little me was a game I started working when I decided I wanted to experiment a bit with Game Development, which always fascinated me. I had a pretty cool idea for a video game 'life seen through a child's eyes' but I clearly underestimated the amount of work, not only programming but art and creativity, that creating a video game would take. Soon I found myself wasting entire days working on a little basic asset that no one would see so I began to lose motivation and worked less and less on the project until I scraped it."
      },
      {
        pt: "",
        eng: "Suddenly covid came and I had a lot more time so I decided to dug the project and keep it going. This time around it wasn't as hard and I began to really enjoy it."
      },
      {
        pt: "",
        eng: "A friend of mine's birthday was coming up and I decided to be realistic and my game was not going anywhere soon so I repurposed the game to be a birthday gift, changed a lot of assets, keeping as many as I could, reworked some mechanics and shifted the focus of the game to be a fun birthday gift meant to be played in 5 minutes."
      },
      {
        pt: "",
        eng: "The result was a much more thought out project with a defined scope that made it a lot easier to work on and finish. I was pretty happy with the result and it's not very likely I'd ever work on this project again."
      }

    ],
    chall: [
      {
        pt: "",
        eng: "Developing a game from scratch is very hard"
      },
      {
        pt: "",
        eng: "Learning Unity on the fly without a real vision for my game was pretty challenging"
      },
      {
        pt: "",
        eng: "Creating the Art and Animations for the game was much more time consuming than I thought initially."
      },
      {
        pt: "",
        eng: "Designing and creating the Levels (Good or even Average Levels) is an art in itself, which I severely underestimated"
      },
      {
        pt: "",
        eng: "Converting the final build to WegGL and integrating it in an actual HTML file was very hard and almost made me give up entirely in the final stage of the project"
      }
    ],
    rate: 8,
    ratelabel: "Pretty Good",
    pos: [
      {
        pt: "",
        eng: "Really fun project",
      },
      {
        pt: "",
        eng: " I learned a lot about Game Development and what is needed to make a game"
      },
      {
        pt: "",
        eng: "Made me gain a lot of respect and appreciation for the people who created the games I love because I struggled to make this bad little one",
      },
      {
        pt: "",
        eng: "Making a game is the perfect excuse to practice and exercise one's creative, artistic and progrmming abilities",
      },
      {
        pt: "",
        eng: "Creating a game is such a complex and envolved process that you end up learning a lot about so much more than just programming a game",
      },
    ],
    neg: [
      {
        pt: "",
        eng: "Really ambitious project to pull of in a month with no experience",
      },
      {
        pt: "",
        eng: "I started this game with no vision either functionally or artisticly, always hoping I would find it along the way. That's a recipe for disaster when making a game",
      },
      {
        pt: "",
        eng: "Learning to create a game has less to do with knowing how to program and more to having the complete set of skills (art/creativity/programming) and adapting each skill to your overall level of mastery.",
      },
      {
        pt: "",
        eng: "The reasons I listed above contributed for this project being, at times, very overwhelming and making me doubt my skills a lot. Of all the project I worked on to this day, game development is the area that creates this effect the most"
      }
    ],
    img: [
      "little1.png",
      "little2.png",
      "little3.png",
      "little4.png",
      "little5.png",
      "little6.png",
      "little7.png",
      "little8.png"
    ],
    git: "https://github.com/JoaoGuedes01/LittleMe",
    yt: "https://www.youtube.com/watch?v=j-a9NvyXbfM"
  },
];
