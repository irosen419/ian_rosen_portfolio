import VideoInfo from '../youtubeVideos'
import VideoCard from '../Components/VideoCard'

function VideoBlogs() {
    return (
        <div id="videoBlogs" style={{ 'height': "1000px" }}>
            <h1> Video Blogs</h1>
            <div id="videoCards">
                {VideoInfo.map(video => <VideoCard video={video} />)}
            </div>
        </div>
    )
}

export default VideoBlogs