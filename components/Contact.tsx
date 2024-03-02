'use client'
import { send } from '@/server/Contact'
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
      return await send(obj)
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
        setLoading(false)

        setTimeout(() => {
          setSuccess('')
        }, 10000)
      })
      .catch(({ message }) => {
        setError(message)
        setLoading(false)

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
      className='sm:mb-32 container px-4 mx-auto scroll-m-40 w-full sm:w-4/5 lg:w-[65%]'
      id='contact'
    >
      <h2 className='text-center text-3xl font-bold sm:text-5xl uppercase  mb-4 mt-5 sm:mt-0 text-my-secondary'>
        Get in touch!
      </h2>
      <p className='text-center py-2'>
        I will help to achieve your goals and grow your business
      </p>

      <div className='py-3'>
        <div className='flex flex-wrap flex-col items-center sm:flex-row flex-grow justify-between mx-auto'>
          {[
            {
              icon: <FaMapMarkedAlt className='text-4xl text-my-secondary' />,
              title: <span className=''>Makka al mukarramah</span>,
            },
            {
              icon: <FaPhoneAlt className='text-4xl text-my-secondary' />,
              title: (
                <a className='' href='tel:+252615301507'>
                  +252 (0) 61 530 1507
                </a>
              ),
            },
            {
              icon: <FaEnvelope className='text-4xl text-my-secondary' />,
              title: (
                <a className='' href='mailto:info@ahmedibra.com'>
                  info@ahmedibra.com
                </a>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className='flex flex-wrap flex-col justify-center items-center shadow shadow-my-primary hover:shadow-xl hover:shadow-my-primary w-4/5 sm:w-[80%] md:w-[32%] p-4 m-5 md:m-0 mx-auto bg-white rounded-lg duration-1000'
            >
              <div className='card-img-top'>{item.icon}</div>
              <div className='card-text my-2 text-center'>{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className='pt-3 bg-white rounded'>
        <form onSubmit={(e) => handleSubmit(e as FormEvent)} className=''>
          <div className='p-5 mx-auto'>
            <p className='mb-3 text-center w-full sm:w-[80%] mx-auto'>
              Please fill out the contact form below to get in touch with me,
              and I will do my best to respond to you as soon as I can.
            </p>

            <div className='flex flex-col md:flex-row flex-wrap justify-between items-centers'>
              <div className='w-full md:w-[48%]'>
                <div className='my-3'>
                  <label className='font-bold' htmlFor='name'>
                    Name
                  </label>
                  <input
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type='text'
                    className='w-full p-2 rounded border bg-gray-100 focus:outline-my-primary'
                    id='name'
                    placeholder='Enter name'
                  />
                </div>

                <div className=''>
                  <div className='my-1'>
                    <label className='font-bold' htmlFor='email'>
                      Email
                    </label>
                    <input
                      required
                      type='email'
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className='w-full p-2 rounded border bg-gray-100 focus:outline-my-primary'
                      id='email'
                      placeholder='Enter email address'
                      aria-describedby='emailHelp'
                    />
                  </div>
                  <div
                    id='emailHelp'
                    className='form-text mb-4 text-xs'
                  >{`I'll never share your email with anyone else.`}</div>
                </div>

                <div className=''>
                  <div className='my-1'>
                    <label className='font-bold' htmlFor='phone'>
                      Phone
                    </label>
                    <input
                      required
                      type='text'
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      className='w-full p-2 rounded border bg-gray-100 focus:outline-my-primary'
                      id='phone'
                      placeholder='Enter phone'
                      aria-describedby='phoneHelp'
                    />
                  </div>
                  <div
                    id='phoneHelp'
                    className='form-text mb-5 text-xs'
                  >{`Your phone number will never be given to a third party.`}</div>
                </div>
              </div>

              <div className='my-3 w-full md:w-[48%]'>
                <label className='font-bold' htmlFor='message'>
                  Message
                </label>
                <textarea
                  required
                  cols={30}
                  rows={9}
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className='w-full p-2 rounded border bg-gray-100 focus:outline-my-primary'
                  id='message'
                  placeholder='Enter message'
                />
              </div>

              <div className='my-5 w-full md:w-[48%]'>
                <label className='text-lg font-bold'>Services</label>
                <ul className='list-group'>
                  {services?.map((service) => (
                    <li
                      key={service?._id}
                      className='list-group-item rounded-0'
                    >
                      <input
                        onChange={service?.onChange}
                        className='form-check-input mr-2 checkbox-my-primary'
                        type='checkbox'
                        value=''
                        checked={service?.checked}
                        id={service?._id}
                      />
                      <label
                        className='form-check-label text-sm'
                        htmlFor={service?._id}
                      >
                        {service?.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
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
                className='btn btn-ghost w-56 bg-my-primary text-my-secondary rounded-full py-2 px-8 shadow-lg hover:scale-90 duration-1000'
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
