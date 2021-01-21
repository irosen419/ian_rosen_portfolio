import * as FaIcons from 'react-icons/fa'
import * as CgIcons from 'react-icons/cg'

export default function Social() {
    return (
        <div id="social">
            <a href="https://www.linkedin.com/in/irosen419/" target="_blank" rel="noreferrer"><FaIcons.FaLinkedin /></a>
            <a href="https://github.com/irosen419" target="_blank" rel="noreferrer"><FaIcons.FaGithub /></a>
            <a href="https://medium.com/@irosen419" target="_blank" rel="noreferrer"><FaIcons.FaMedium /></a>
            <a href="https://twitter.com/irosen419" target="_blank" rel="noreferrer"><FaIcons.FaTwitter /></a>
            <a href="mailto:irosen419@gmail.com" target="_blank" rel="noreferrer"><CgIcons.CgMail /></a>
        </div>
    )
}