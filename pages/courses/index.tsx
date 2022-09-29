import Meta from '../../components/Meta'
import Nav from '../../components/Nav'
import axios from 'axios'
import { RootObject } from '../../types/playlist'
import Image from 'next/image'
import moment from 'moment'
import Link from 'next/link'
import { FaListAlt } from 'react-icons/fa'

const Courses = (props: { playlists: RootObject }) => {
  return (
    <div className=''>
      <Meta
        title={'Youtube Playlist Courses | Ahmed Ibrahim'}
        description={`Ahmed Ibrahim Channel Playlist | Courses`}
        author={'Ahmed Ibrahim'}
        image='/logo.png'
      />
      <Nav />
      <div className='container pt-3 mb-4'>
        <h3 className='text-center text-muted text-uppercase fw-bold'>
          Youtube Playlist Courses [{props?.playlists?.pageInfo?.totalResults}]
        </h3>
        <hr />
        <div className='row g-4'>
          {props?.playlists?.items?.map((playlist) => (
            <div key={playlist?.id} className='col-lg-4 col-md-6 col-12'>
              <Link href={`/courses/${playlist?.id}`}>
                <a className='text-decoration-none'>
                  <div className='card border-0'>
                    <Image
                      src={playlist?.snippet?.thumbnails?.maxres?.url}
                      width={playlist?.snippet?.thumbnails?.maxres?.width}
                      height={playlist?.snippet?.thumbnails?.maxres?.height}
                      className='card-img-top'
                      alt={playlist?.snippet?.title}
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{playlist?.snippet?.title}</h5>
                      <div className='card-text d-flex justify-content-between align-items-center'>
                        <small>
                          {moment(playlist?.snippet?.publishedAt).format('lll')}
                        </small>
                        <button className='btn btn-warning text-light btn-sm'>
                          <FaListAlt className='mb-1' />{' '}
                          {playlist?.contentDetails?.itemCount} videos
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${process.env.CHANNEL_ID}&maxResults=50&key=${process.env.GOOGLE_API_KEY}`
    )

    return {
      props: {
        playlists: data,
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
