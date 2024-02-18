const text = {
    about_me: {
        name: "Zach M.",
        age: 21,
        location: "Detroit, MI",
        employment: "Under Contract",
        loves: ["🐱 Cats", "💻 Coding"]
    },
    contact: {
        email: ["me@zach.pink", "zachm@tuta.com"]
    },
    socials: {
        x: {
            user: "@passion",
            link: "x.com/passion"
        },
        github: {
            user: "fartg",
            link: "github.com/fartg"
        }
    },
    employment_history: {
        "2020 -> 2023": {
            employer: "Self Employed",
            duties: ["Javascript programming", "Homeserver installation", "Hardware deployment"]
        },
        "2024 -> Now": {
            employer: "Contract work",
            contractor: "Dell",
            duties: ["Hardware installation, deployment & configuration", "Customer support", "Helpdesk"]
        }
    },
    projects: {
        zach_pink: {
            description: "The site you're looking at!",
            built_in: ["React", "Next.js", "Javascript"],
            author: "Zach",
            date: "02/17/24"
        },
        rbxcat: {
            description: "A ROBLOX game engine based off of attributes instead of normal values.",
            link: "https://github.com/fartg/rbxcat",
            built_in: ["Lua"],
            author: "Zach",
            date: "01/10/24",
        },
        rbxcat_server: {
            description: "A webserver -> ROBLOX -> webserver communication framework built in Express.js utilizing MongoDB for communication and data storage.",
            link: "https://github.com/lostmedia/rbxcat-server",
            built_in: ["Express", "Node.js", "JavaScript"],
            author: "Zach & Hunter",
            date: "01/19/24",
        },
        rbxcat_bot: {
            description: "A Discord bot written to interface between your rbxcat-server instance and Discord.",
            link: "https://github.com/lostmedia/rbxcat-server",
            built_in: ["Node.js", "JavaScript"],
            author: "Zach",
            date: "01/18/24",
        },
    }
}

export default text;