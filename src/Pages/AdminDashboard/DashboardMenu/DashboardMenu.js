import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaDesktop,
  FaNotesMedical,
  FaPhotoVideo,
  FaTags,
  FaUserAlt,
  FaHandPointer,
  FaRegCalendarCheck,
  FaLocationArrow,
  FaAdversal,
  FaPlusCircle,
  FaEye,
} from 'react-icons/fa'

const DashboardMenu = () => {
  return (
    <div className='drawer-side'>
      <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
      <ul className='menu p-4 w-80 text-white bg-slate-800'>
        <Link
          to=''
          className='collapse-title text-sm font-medium flex items-center gap-2'
        >
          <span>
            <FaDesktop />
          </span>
          Dashboard
        </Link>
        <div className='collapse collapse-arrow'>
          <input type='checkbox' />
          <div className='collapse-title text-sm font-medium flex items-center gap-2'>
            <span>
              <FaNotesMedical />
            </span>
            Article
          </div>
          <div className='collapse-content'>
            <ul className='flex flex-col p-0 m-0 gap-0'>
              <li>
                <Link
                  to='articles/new-article'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaPlusCircle />
                  </span>
                  Add Article
                </Link>
              </li>
              <li>
                <Link
                  to='articles'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaEye />
                  </span>
                  All Article
                </Link>
                <Link
                  to='articles/my-articles'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaEye />
                  </span>
                  My Articles
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='collapse collapse-arrow'>
          <input type='checkbox' />
          <div className='collapse-title text-sm font-medium flex items-center gap-2'>
            <span>
              <FaPhotoVideo />
            </span>
            Category
          </div>
          <div className='collapse-content'>
            <ul className='flex flex-col p-0 m-0 gap-0'>
              <li>
                <Link
                  to='add-category'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaPlusCircle />
                  </span>
                  Add Category
                </Link>
              </li>
              <li>
                <Link
                  to='categories'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaEye />
                  </span>
                  All Category
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='collapse collapse-arrow'>
          <input type='checkbox' />
          <div className='collapse-title text-sm font-medium flex items-center gap-2'>
            <span>
              <FaTags />
            </span>
            Tag
          </div>
          <div className='collapse-content'>
            <ul className='flex flex-col p-0 m-0 gap-0'>
              <li>
                <Link
                  to='add-tag'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaPlusCircle />
                  </span>
                  Add Tag
                </Link>
              </li>
              <li>
                <Link
                  to='tags'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaEye />
                  </span>
                  All Tag
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='collapse collapse-arrow'>
          <input type='checkbox' />
          <div className='collapse-title text-sm font-medium flex items-center gap-2'>
            <span>
              <FaTags />
            </span>
            Hero Slider
          </div>
          <div className='collapse-content'>
            <ul className='flex flex-col p-0 m-0 gap-0'>
              <li>
                <Link
                  to='add-hero-slider'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaPlusCircle />
                  </span>
                  Add Slider
                </Link>
              </li>
              <li>
                <Link
                  to='hero-sliders'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaEye />
                  </span>
                  All Sliders
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='collapse collapse-arrow'>
          <input type='checkbox' />
          <div className='collapse-title text-sm font-medium flex items-center gap-2'>
            <span>
              <FaUserAlt />
            </span>
            Users
          </div>
          <div className='collapse-content'>
            <ul className='flex flex-col p-0 m-0 gap-0'>
              <li>
                <Link
                  to='admins'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaEye />
                  </span>
                  Admins
                </Link>
              </li>
              <li>
                <Link
                  to='users'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaEye />
                  </span>
                  All Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='collapse collapse-arrow'>
          <input type='checkbox' />
          <div className='collapse-title text-sm font-medium flex items-center gap-2'>
            <FaHandPointer />
            Newsletter
          </div>
          <div className='collapse-content'>
            <ul className='flex flex-col p-0 m-0 gap-0'>
              <li>
                <Link
                  to='subscribers'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaEye />
                  </span>
                  Subscribers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='collapse collapse-arrow'>
          <input type='checkbox' />
          <div className='collapse-title text-sm font-medium flex items-center gap-2'>
            <FaRegCalendarCheck />
            Matches
          </div>
          <div className='collapse-content'>
            <ul className='flex flex-col p-0 m-0 gap-0'>
              <li>
                <Link
                  to='add-football-match'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaPlusCircle />
                  </span>
                  Add Match
                </Link>
              </li>
              <li>
                <Link
                  to='football-matches'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaEye />
                  </span>
                  Matches
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='collapse collapse-arrow'>
          <input type='checkbox' />
          <div className='collapse-title text-sm font-medium flex items-center gap-2'>
            <FaLocationArrow />
            Point table
          </div>
          <div className='collapse-content'>
            <ul className='flex flex-col p-0 m-0 gap-0'>
              <li>
                <Link
                  to='laliga'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaEye />
                  </span>
                  Laliga
                </Link>
              </li>
              <li>
                <Link
                  to='premier-league'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaEye />
                  </span>
                  Premier League
                </Link>
              </li>
              <li>
                <Link
                  to='serie-a'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaEye />
                  </span>
                  Serie A
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='collapse collapse-arrow'>
          <input type='checkbox' />
          <div className='collapse-title text-sm font-medium flex items-center gap-2'>
            <span>
              <FaAdversal />
            </span>
            Advertisements
          </div>
          <div className='collapse-content'>
            <ul className='flex flex-col p-0 m-0 gap-0'>
              <li>
                <Link
                  to='header-ad'
                  className='py-1 flex items-center gap-2 text-xs'
                >
                  <span>
                    <FaEye />
                  </span>
                  Header Ad
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default DashboardMenu
