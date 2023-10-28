'use client'
import axios from 'axios'
// import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [webDesign, setWebDesign] = useState<boolean>(false)
  const [eCommerce, setECommerce] = useState<boolean>(false)
  const [dbDevelopment, setDBDevelopment] = useState<boolean>(false)
  const [seoOptimization, setSeoOptimization] = useState<boolean>(false)
  const [mobileDevelopment, setMobileDevelopment] = useState<boolean>(false)
  const [brand, setBrand] = useState<boolean>(false)
  const [success, setSuccess] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const obj = {
      name,
      email,
      phone,
      message,
      service: {
        webDesign,
        eCommerce,
        dbDevelopment,
        seoOptimization,
        mobileDevelopment,
        brand,
      },
    }
    const sendMessage = async () => {
      setLoading(true)
      const { data } = await axios.post(`/api/contact`, obj)
      setLoading(false)
      return await data
    }

    sendMessage()
      .then(({ message }) => {
        setSuccess(message)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setWebDesign(false)
        setECommerce(false)
        setDBDevelopment(false)
        setSeoOptimization(false)
        setMobileDevelopment(false)
        setBrand(false)

        setTimeout(() => {
          setSuccess('')
        }, 10000)
      })
      .catch(({ message }) => {
        setError(message)
        setTimeout(() => {
          setError('')
        }, 10000)
      })
  }

  const services = [
    {
      _id: '1',
      name: 'Web Design',
      value: 'Web Design',
      onChange: (e: any) => setWebDesign(e.target.checked),
      checked: webDesign,
    },
    {
      _id: '2',
      name: 'Database Development',
      value: 'Database Development',
      onChange: (e: any) => setDBDevelopment(e.target.checked),
      checked: dbDevelopment,
    },
    {
      _id: '3',
      name: 'E-Commerce',
      value: 'E-Commerce',
      onChange: (e: any) => setECommerce(e.target.checked),
      checked: eCommerce,
    },
    {
      _id: '4',
      name: 'SEO Optimization',
      value: 'SEO Optimization',
      onChange: (e: any) => setSeoOptimization(e.target.checked),
      checked: seoOptimization,
    },
    {
      _id: '5',
      name: 'Mobile Development',
      value: 'Mobile Development',
      onChange: (e: any) => setMobileDevelopment(e.target.checked),
      checked: mobileDevelopment,
    },
    {
      _id: '6',
      name: 'Branding',
      value: 'Branding',
      onChange: (e: any) => setBrand(e.target.checked),
      checked: brand,
    },
  ]
  return (
    <div
      className='mb-20 sm:mb-32 container px-4 mx-auto scroll-m-28 w-full sm:w-4/5 lg:w-[65%]'
      id='contact'
    >
      <h2 className='text-center text-3xl font-bold sm:text-5xl uppercase  mb-4 mt-5 sm:mt-0 text-secondary'>
        Get in touch!
      </h2>
      <p className='text-center py-2'>
        I will help to achieve your goals and grow your business
      </p>

      <div className='py-3'>
        <div className='flex flex-wrap flex-col items-center sm:flex-row flex-grow justify-between mx-auto'>
          {[
            {
              icon: <FaMapMarkedAlt className='text-4xl text-warning' />,
              title: <a className=''>Makka al mukarramah</a>,
            },
            {
              icon: <FaPhoneAlt className='text-4xl text-warning' />,
              title: (
                <a className='' href='tel:+252615301507'>
                  +252 (0) 61 530 1507
                </a>
              ),
            },
            {
              icon: <FaEnvelope className='text-4xl text-warning' />,
              title: (
                <a className='' href='mailto:info@ahmedibra.com'>
                  info@ahmedibra.com
                </a>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className='flex flex-wrap flex-col justify-center items-center shadow shadow-primary hover:shadow-xl hover:shadow-primary w-4/5 sm:w-[80%] md:w-[32%] p-4 m-5 md:m-0 mx-auto bg-white rounded-lg'
            >
              <div className='card-img-top'>{item.icon}</div>
              <div className='card-text my-2 text-center'>{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className='pt-3'>
        <form onSubmit={(e) => handleSubmit(e as FormEvent)} className=''>
          <div className='p-5 mx-auto'>
            <p className='mb-3 text-center w-full sm:w-[80%] mx-auto'>
              Please fill out the contact form below to get in touch with me,
              and I will do my best to respond to you as soon as I can.
            </p>
            <div className='my-5'>
              <label htmlFor='name'>Name</label>
              <input
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                type='text'
                className='w-full p-2 rounded border bg-white'
                id='name'
                placeholder='Enter name'
              />
            </div>

            <div className='my-1'>
              <label htmlFor='email' className='text-muted'>
                Email
              </label>
              <input
                required
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='w-full p-2 rounded border bg-white'
                id='email'
                placeholder='Enter email address'
                aria-describedby='emailHelp'
              />
            </div>
            <div
              id='emailHelp'
              className='form-text mb-4 text-xs'
            >{`I'll never share your email with anyone else.`}</div>

            <div className='my-1'>
              <label htmlFor='phone'>Phone</label>
              <input
                required
                type='text'
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className='w-full p-2 rounded border bg-white'
                id='phone'
                placeholder='Enter phone'
                aria-describedby='phoneHelp'
              />
            </div>
            <div
              id='phoneHelp'
              className='form-text mb-5 text-xs'
            >{`Your phone number will never be given to a third party.`}</div>

            <div className='my-3'>
              <label htmlFor='message'>Message</label>
              <textarea
                required
                cols={30}
                rows={9}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className='w-full p-2 rounded border bg-white'
                id='message'
                placeholder='Enter message'
              />
            </div>
            <div className='my-5'>
              <h5 className='text-lg font-bold'>Services</h5>
              <ul className='list-group'>
                {services?.map((service) => (
                  <li
                    key={service?._id}
                    className='list-group-item rounded-0 mb-2'
                  >
                    <input
                      onChange={service?.onChange}
                      className='form-check-input mr-2'
                      type='checkbox'
                      value=''
                      checked={service?.checked}
                      id={service?._id}
                    />
                    <label className='form-check-label' htmlFor={service?._id}>
                      {service?.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className='my-3 text-center'>
              {success && (
                <div className='alert alert-success my-3' role='alert'>
                  {success}
                </div>
              )}
              {error && (
                <div className='alert alert-error my-3' role='alert'>
                  {error}
                </div>
              )}
              <button
                disabled={loading}
                className='btn btn-ghost bg-white rounded-full py-2 px-8 shadow-lg hover:scale-90 duration-1000'
              >
                {loading ? <span>Loading... </span> : <span>Send Message</span>}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
