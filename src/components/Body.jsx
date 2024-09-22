import InfoPane from "./InfoPane";
import ListContainer from "./ListContainer";

export default function Body() {
    const position = ["Software Developer", "Front End Developer", "Front End Developer", "Test Analyst", "Desktop Support Technician", "Software Developer", "Desktop Support Technician"];
    const positionDetails = ["OpenText Corporation, Mississauga, ON", "Imagine Communications, Waterloo, ON", "MCAP Inc., Waterloo, ON", "Economical Insurance, Waterloo, ON", "Goodmans LLP, Toronto, ON", "Teranet, Mississauga, ON", "Linamar Corporation, Guelph, ON"]
    const positionDates = ["May 2022 – Oct 2023","Sept 2021 – Dec 2021", "Sept 2020 – Dec 2020", "Jan 2020 – Apr 2020", "May 2019 – Aug 2019", "Sept 2018 – Dec 2018", "Jan 2018 – Apr 2018"]
    const descriptions = [
        [
            "Developed critical features and implemented hotfixes in a product purchase flow redesign project, Vue.js (Composition API), TypeScript, and C#, optimizing performance and improving user experience by leveraging Vue’s Reactivity API, Vue Router, Lifecycle Hooks, and Pinia store",
            "Collaborated closely with QA team, engineers, and business stakeholders across 6 projects using Vue.js, C#, Node.js, and SQL to drive iterative software deployment cycles, ensuring robust application logic and thorough testing testing for various screen sizes and device types",
            "Demonstrated proficiency in diagnosing and resolving production failures within network proxies, APIs, and web services, bolstering system reliability and performance",
            "Refactored and deployed several legacy support and internal applications with VB6, Python, C#, and SQL, optimizing for operational efficiency, stability and scalability"
        ],
        [
            "Enhanced readability and usability of the channel management system utilized by ESPN through the implementation of applications built in AngularJS, enhancing user interaction and navigation",
            "Leveraged C# APIs to develop tailored data display features, meeting specific customer requirements and enhancing the core functionality"        
        ],
        [
            "Enhanced internal applications by refining API integrations and optimizing codebase using Vue.JS",
            " Conducted comprehensive data validation and data manipulation for cross-team analytics, as well as performing CRUD operations in SQL, ensuring meticulous database consistency and integrity",
            "Authored documentation for both new and existing applications"
        ],
        [
            "Developed Python tools to improve triage workflow",
            "Built Visual Basic decryption tool and updated health checks to assist with code deployments"
        ],
        [
            "Ran project to upgrade 200+ firm computers to Windows 10",
            "Practiced time management and communication skills with lawyers and assistants to maximize and meet tight deadlines"
        ],
        [
            "Upgraded VB6 batches to C# while maintaining functionality with existing SQL stored procedures",
            "Redeveloped SharePoint website with improved navigation tools, readability, and HTML practices",
            "Identified and resolved application failures following the migration of web services servers, ensuring transition and uninterrupted functionality",
            "Produced technical documentation and reference sheets for future co-ops"
        ],
        [
            "Developed features using Visual Basic for Outlook signature generator with Active Directory integration",
            "Prepared PowerShell scripts and 200+ device specific QR codes to improve remote device identification"
        ]
    ]
    const skills =
        [
            ["JavaScript", "TypeScript", "Vue.JS", "C#", "Visual Basic 6", "SQL"],
            ["JavaScript", "Angular.JS","C#"],
            ["JavaScript", "TypeScript", "Vue.JS", "SQL"],
            ["Python", "Visual Basic"],
            ["Windows OS", "Linux", "Microsoft Office", "PowerShell", "Active Directory"],
            ["C#", "Visual Basic 6", "SQL", "HTML/CSS", ".NET", "SharePoint"],
            ["Visual Basic", "PowerShell", "Active Directory", "Microsoft Office"]
        ];

    const urls = ["https://www.opentext.com/", "https://imaginecommunications.com/", "https://www.mcap.com/",
    "https://www.economical.com/en/home", "https://www.goodmans.ca/", "https://www.teranet.ca/", "https://www.linamar.com/"];

    const projects = ["LoL Item Damage Calculator", "PNG File Concatenation/Reconstruction Tool", "Arduino-powered Lightsaber"]
    const projectDates = ["Feb 2020", "Sept 2019", "Jun 2017"];
    const projectDetails = ["","",""];
    const projUrls = ["","",""];
    const projectDescription = 
        [
            [
                "Gatsby.JS front-end using react-vis hosted on Netlify (named ‘ryzeRework’ on Git with link)",
                "Express.JS back-end API hosted on Heroku dyno serving updated data from Riot API (‘morellos’ on Git)"
            ],
            [
                "Developed CLI program in C that locates PNG files under a directory and merges them in a select order",
                "Used zlib to inflate/deflate RGBA encoded IDAT chunks while maintaining tight memory allocation"
            ],
            [
                "Used gyroscope/accelerometer feedback to drive a variety of sound effects based on type of motion",
                "Implemented serial communication in C++ allowing an iPad to control LEDs and speaker with Bluetooth"
            ]
        ]
    const projectSkills = 
        [
            ["JavaScript", "Node.JS", "Gatsby.JS", "Express.JS"],
            ["C"],
            ["C++"]
        ]

    return (
        <div className="container">
            <div className="body">
                <InfoPane />
                <div className="vertical-divider"></div>
                <div className="main-list-container">
                    <ListContainer title="EXPERIENCE" urls={urls} position={position} positionDetails={positionDetails} positionDates={positionDates} descriptions={descriptions} skills={skills} />
                    <ListContainer title="PROJECTS" urls={projUrls}position={projects} positionDetails={projectDetails} positionDates={projectDates} descriptions={projectDescription} skills={projectSkills} />
                </div>
            </div>
        </div>
    );
  }