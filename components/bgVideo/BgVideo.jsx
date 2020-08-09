import styles from './BgVideo.module.scss'
import video from './brain.mp4'

const BgVideo = props => {
    return (
        <video className={styles.video} autoplay muted loop>
            <source src={video} type="video/mp4"/>
        </video>
    )
}

export default BgVideo;