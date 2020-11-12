import * as SiIcons from 'react-icons/si'

export const ProjectData = [
    {
        title: 'Penguin Runner',
        description: "Side-scrolling game",
        frontend: "https://github.com/irosen419/penguin-runner-client",
        backend: "https://github.com/irosen419/penguin-runner-api",
        demoLink: "https://www.loom.com/embed/b7e4cc5194e744e58189f050d1d44d3d",
        liveLink: "https://www.penguinswithlasers.com",
        image: window.location.origin + '/penguin_zoom.png',
        backendIcon: <div className="backend"><SiIcons.SiRails /></div>,
        frontendIcon: <div className="frontend"><SiIcons.SiJavascript /></div>
    },
    {
        title: '!fcebook',
        description: "Social media app",
        frontend: "https://github.com/irosen419/not_fcebook_frontend",
        backend: "https://github.com/irosen419/not_fcebook_backend",
        demoLink: "https://www.loom.com/embed/aa8ad6229ec749289a34815b787a5d21",
        liveLink: "https://notfcebook.herokuapp.com/login",
        image: window.location.origin + '/not_fcebook.png',
        backendIcon: <div className="backend"><SiIcons.SiRails /></div>,
        frontendIcon: <div className="frontend"><SiIcons.SiReact /></div>
    },
    {
        title: 'Adventure Log',
        description: "Wildlife conservation app",
        frontend: "https://github.com/irosen419/adventure_log_frontend",
        backend: "https://github.com/irosen419/adventure_log_backend",
        demoLink: "https://www.loom.com/embed/6e686f67d2bd48bbad23e9533dc5032b",
        liveLink: null,
        image: window.location.origin + '/adventure_log.png',
        backendIcon: <div className="backend"><SiIcons.SiRails /></div>,
        frontendIcon: <div className="frontend"><SiIcons.SiReact /></div>
    }
]
