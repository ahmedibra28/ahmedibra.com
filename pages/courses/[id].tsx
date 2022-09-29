import Meta from '../../components/Meta'
import Nav from '../../components/Nav'
import axios from 'axios'
import { RootObject } from '../../types/playlistItems'
import Image from 'next/image'
import moment from 'moment'

const PlayListVideos = (props: { videos: RootObject }) => {
  return (
    <div className=''>
      <Meta
        title={'Youtube Playlist Videos | Ahmed Ibrahim'}
        description={`Ahmed Ibrahim Channel Playlist | Videos`}
        author={'Ahmed Ibrahim'}
        image='/logo.png'
      />
      <Nav />
      <div className='container pt-3 mb-4'>
        <div className='row g-4'>
          {props?.videos?.items?.map((playlist) => (
            <div key={playlist?.id} className='col-lg-4 col-md-6 col-12'>
              <div className='card border-0'>
                <Image
                  src={playlist?.snippet?.thumbnails?.maxres?.url}
                  width={playlist?.snippet?.thumbnails?.maxres?.width}
                  height={playlist?.snippet?.thumbnails?.maxres?.height}
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title'>{playlist?.snippet?.title}</h5>
                  <div className='card-text'>
                    <small>
                      {moment(playlist?.snippet?.publishedAt).format('lll')}
                    </small>
                    {/* <p>{playlist?.snippet?.description}</p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlayListVideos

export async function getServerSideProps(context: { params: { id: string } }) {
  try {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&channelId=${process.env.CHANNEL_ID}&playlistId=${context?.params?.id}&maxResults=100&key=${process.env.GOOGLE_API_KEY}`
    )

    return {
      props: {
        videos: data,
      },
    }
  } catch (error: any) {
    return {
      props: {
        error: error.message,
      },
    }
  }
}
