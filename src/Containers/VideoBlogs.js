import VideoInfo from '../youtubeVideos'
import VideoCard from '../Components/VideoCard'

function VideoBlogs() {
    return (
        <div class="snap" id="videoBlogs">
            <h1> Video Blogs</h1>
            <div id="videoCards">
                {VideoInfo.map(video => <VideoCard key={video.title} video={video} />)}
            </div>
        </div>
    )
}

export default VideoBlogs