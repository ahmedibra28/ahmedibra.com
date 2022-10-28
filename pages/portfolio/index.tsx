import Meta from '../../components/Meta'
import Nav from '../../components/Nav'
import axios from 'axios'
import { RootObject } from '../../types/playlist'
import Image from 'next/image'
import moment from 'moment'
import Link from 'next/link'
import { FaListAlt, FaYoutube } from 'react-icons/fa'

const Portfolio = () => {
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
          Portfolio
        </h3>
      </div>
    </div>
  )
}

export default Portfolio
