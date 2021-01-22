function VideoCard({ video }) {
    const { title, link, image } = video
    return (
        <div className='videoCard'>
            <h3>{title}</h3>
            <a href={link} target="_blank"><img src={image} alt={title} /> </a>
        </div>
    )
}
export default VideoCard