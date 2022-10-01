import YouTube, { YouTubeProps } from 'react-youtube'

export const YoutubePlayer = (props: { videoId: string }) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo()
  }

  const opts: YouTubeProps['opts'] = {
    height: '230',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <YouTube videoId={props?.videoId} opts={opts} onReady={onPlayerReady} />
  )
}
