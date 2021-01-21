function VideoCard({ video }) {
    const { title, link, image } = video
    return (
        <div className='videoCard'>
            <h2>{title}</h2>
            <a href={link} target="_blank"><img src={image} alt={title} /> </a>
        </div>
    )
}

export default VideoCard