function VideoCard({ video }) {
    const { title, link, image } = video
    return (
        <div className='videoCard'>
            <a href={link} target="_blank" rel="noreferrer">
                <h3>{title}</h3>
                <img src={image} alt={title} />
            </a>
        </div >
    )
}
export default VideoCard