import rockpaper from '../assets/img/rockpaper.png'
import blackjack from '../assets/img/blackjack.png'
import filmapp from '../assets/img/filmapp.png'
import v1website from '../assets/img/v1website.png'
import letterquiz from '../assets/img/letterquiz.png'
import shoppinglist from '../assets/img/shopping.png'

const ProjectsList = [ 
    { 
        name: 'Rock Paper Scissors',
        image: rockpaper,
        description: 'In this project I replicated the famous Rock/Paper/Scissors game where as a player you can choose any from the 3 choices, and then from a Javascript generation the opponent will pick a choice also.',
        skills: ['HTML', 'CSS', 'Javascript'],
        buttons: 
        [
            { label: 'Preview', url: 'https://mihaimisai.github.io/rock_scissors_paper/'},
            { label: 'GitHub', url: 'https://github.com/mihaimisai/rock_scissors_paper/'}
        ]
    },
    { 
        name: 'Blackjack',
        image: blackjack,
        description: 'I made a Blackjack game with the same rules like in Las Vegas. It is a project I enjoyed very much for how close to the real Blackjack is, and how real the generation of cards is',
        skills: ['HTML', 'CSS', 'Javascript'],
        buttons: 
        [
            { label: 'Preview', url: 'https://mihaimisai.github.io/blackjack/'},
            { label: 'GitHub', url: 'https://github.com/mihaimisai/blackjack'}
        ]
    },
    { 
        name: 'Film Database',
        image: filmapp,
        description: "This is a Python project connected to a SQlite database in which you can add/remove/update and check the list of movies inside the database. It's hosted on Replit and I enjoyed this project a lot since I learn how to connect and work with a database",
        skills: ['Python', 'MySQL'],
        buttons: 
        [
            { label: 'Preview', url: 'https://replit.com/@MihaiMisai/Films?v=1'},
            { label: 'GitHub', url: 'https://github.com/mihaimisai/filmapp'}
        ]
    },
    { 
        name: 'Website portfolio v1',
        image: v1website,
        description: "This is the first version of this portfolio website. It had an intro animation made in Javascript and the design is made with vanilla CSS.",
        skills: ['HTML', 'CSS', 'Javascript'],
        buttons: 
        [
            { label: 'Preview', url: 'https://mihaimisai.github.io/portfolio/'},
            { label: 'GitHub', url: 'https://github.com/2busynexus/portfolio'}
        ]
    },
    { 
        name: 'Letter Quiz',
        image: letterquiz,
        description: "This is a Flask game project where you have to answer based on a generated letter. You need to type in countries, cities, mountains etc that begins with that letter and if the answer is correct then a number of points will be allocated and stored in a database. I used to play this game on a piece of paper in school.",
        skills: ['HTML', 'CSS', 'Javascript', 'Python', 'Flask', 'MySQL'],
        buttons: 
        [
            { label: 'Preview', url: 'https://letterquiz.mihaimisai.repl.co'},
            { label: 'GitHub', url: 'https://github.com/mihaimisai/letterquiz'}
        ]
    },
    { 
        name: 'Shopping List',
        image: shoppinglist,
        description: "This is a React-Flask-MongoDB  project where you can take your old paper shopping list digital. You can create your own user and access it from anywhere. The project is hosted on GitHub, deployed with Netlify and the back-end is deployed from Replit and the data is stored in a MongoDB database.",
        skills: ['React', 'Bootstrap', 'Python', 'Flask', 'MongoDB'],
        buttons: 
        [
            { label: 'Preview', url: 'https://poetic-kangaroo-70c3de.netlify.app/'},
            { label: 'GitHub Front-end', url: 'https://github.com/mihaimisai/simple_shopping'},
            { label: 'GitHub Back-end', url: 'https://github.com/2busynexus/simple_shopping_server'}
        ]
    }
]

export default ProjectsList