import macroTrackerImg from '@/assets/images/MacroTracker.png'

import githubLogo from '@/assets/images/github.png'
import linkendIn from '@/assets/images/linkedin.png'
import instagram from '@/assets/images/instagram.png'
import facebook from '@/assets/images/facebook.png'
import { skills } from './skills'

export const personalData = {

    name: "Joachim",
    surname: "Tisløv",

    about: [
        `I am a 22 year old male from Sandnes, live with my Alaskan husky - Leo.
        Played football for over 14 years, which provided me with extensive team-building skills.
        I love sports, being active, and taken on challenges, both physically and mentally.`,
                
        `That is part of the reason why programming sparked my interests. Solving problems, creating solutions, and developing
        creative applications, systems or more, all in one.`,
        
        `Technology has been my passion since i got access to it, leading me to pursue
        a bachelor's degree in Computer Technology. `
    ],

    situation: 

        `I am currently working on personal projects, and plan to integrate every project into
        the website. This allows you to interact with and explore them, instead of just reading
        about each project. `,

    education: `Bachelor's Degree in Computer Technology`,

    skills: skills,

    socialLinks: [
        { img: githubLogo, link: 'https://github.com/JoachimTislov'},
        { img: linkendIn, link: 'https://www.linkedin.com/in/joachim-tisl%C3%B8v-7074642b1/'},
        { img: instagram, link: 'https://www.instagram.com/joachimtislov/'},  
        { img: facebook, link: 'https://www.facebook.com/profile.php?id=100011419305331'}
    ],

    jobs: ['Full-Stack', 'IT-Consultant', 'Technology Integration Specialist', 'Software Engineer', 'Game developer', 'Data Engineer', 'Application/Web Developer', 'Database Administrator'],

    projects: [
        {
            name: 'Macro Tracker', 
            githubLink: 'https://github.com/JoachimTislov/MacroTracker', 
            description: [
                `During a two-month development period, my fellow student and I aimed for excellence in creating a Macro Tracker
                I took responsibility for both backend and frontend development, while he focused on styling, 
                the website's structure and the setup of a profile picture for users on their profile.`, 
                
                `This Macro Tracker includes an authentication system, personal meal and ingredient management, user profile, in built calender algorithms (since we could'nt use libraries) and a meal calendar. 
                We integrated the kassal.app API to enhance functionality. The technology stack includes: flask, flask login, vue js and python, enabling robust functionality and a smooth user experience.`,
                
                `Looking ahead, i am planning to expand Macro Tracker with additional features and refactoring the whole code structure, utilizing more tools. 
                We were in fact limited to the tools listed bellow since our teacher knowledge was limited, and that was understandable.  
                My goal is to publish the application as a standalone app, reaching a broader audience and providing enhanced dietary tracking capabilities.`
            ], 
            tools: [

                //Frontend
                skills['Bootstrap'],
                skills['CSS'],
                skills['HTML'],
                skills['Javascript'],
                skills['Vue FrameWork'],
               
                // Backend
                skills['Python'],
                skills['Flask'],
                skills['SQLite'],
            ], 
            imageLink: macroTrackerImg
            //routerLink: '/MacroTracker'
        },
        {
            name: 'Four in a row',
            githubLink: 'https://github.com/JoachimTislov/JTs-Portfolio/tree/main/src/Logic/FourInARow',
            description: [

                `During my holiday, my father and brother played four in a row, and after hearing my brother loose
                for the 7th time, i thought, why not create a bot which he can play against.`,

                `This is what sparked the one-month development of a fairly complex four in a row bot.
                The intent of creating such a bot, were to help my brother, but rather escalated into a far more better goal: `,
                
                `- Creating an intelligent bot combining both simple and advanced algorithms, making it unbeatable.`,
                
                `This is still ongoing, since it is in fact not unbeatable, but i am fortunately on the path to achieve this remarkable goal.`,

                `PS: I created this bot for fun, but half the time it was a pain in the butt, no seriously, i haven't written any typescript before
                and decided midway through the project to convert my application written with javascript to typescript. All the struggles i went
                through during development only made me and the code better, which motivates me when i am having a hard time.`,
            ], 
            tools: [
                //Frontend
                skills['Bootstrap'],
                skills['CSS'],
                skills['HTML'],
                skills['Typescript'],
                skills['Vue FrameWork'],
            ],
            routerLink: '/Four-in-a-row'
        }
    ]
}



