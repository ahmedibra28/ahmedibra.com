import Meta from '../../components/Meta'
import Nav from '../../components/Nav'
import axios from 'axios'
import { RootObject } from '../../types/playlistItems'
import Image from 'next/image'
import moment from 'moment'
import { FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

const PlayListVideos = (props: { videos: RootObject }) => {
  console.log(props?.videos?.items[0].snippet.resourceId.kind)
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
        <h3 className='text-center text-muted text-uppercase fw-bold'>
          Youtube Playlist Videos [{props?.videos?.pageInfo?.totalResults}]
        </h3>
        <hr />
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
                  <div className='card-text d-flex justify-content-between align-items-center'>
                    <small>
                      {moment(playlist?.snippet?.publishedAt).format('lll')}
                    </small>
                    <Link
                      href={`https://www.youtube.com/watch?v=${playlist.snippet.resourceId.videoId}`}
                    >
                      <a
                        target='_blank'
                        className='btn btn-danger btn-sm border-0'
                      >
                        <FaYoutube className='mb-1 me-1' />
                        Watch Video
                      </a>
                    </Link>
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
