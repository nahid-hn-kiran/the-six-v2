import { createBrowserRouter } from 'react-router-dom'
import FullNews from '../components/cards/FullNews'
import Main from '../layout/Main'
import AdminDashboard from '../Pages/AdminDashboard/AdminDashboard'
import Articles from '../Pages/AdminDashboard/Article/Articles/Articles'
import AddCategory from '../Pages/AdminDashboard/Category/AddCategory/AddCategory'
import Categories from '../Pages/AdminDashboard/Category/Cagegories/Categories'
import AddTag from '../Pages/AdminDashboard/Tag/AddTag/AddTag'
import Tags from '../Pages/AdminDashboard/Tag/Tags/Tags'
import Admins from '../Pages/AdminDashboard/User/Admins/Admins'
import AllUsers from '../Pages/AdminDashboard/User/AllUsers.js/AllUsers'
import Home from '../Pages/Home/Home'
import Subscribers from '../Pages/AdminDashboard/Subscribers/Subscribers'
import AddNewArticle from '../Pages/AdminDashboard/Article/AddNewArticle/AddNewArticle'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import Dashboard from '../Pages/AdminDashboard/Dashboard'
import MyArticles from '../Pages/AdminDashboard/Article/MyArticles/MyArticles'
import Football from '../Pages/Football/Football'
import Cricket from '../Pages/Cricket/Cricket'
import Tennis from '../Pages/Tennis/Tennis'
import Basketball from '../Pages/Basketball/Basketball'
import HeroSliders from '../Pages/AdminDashboard/HeroSlider/HeroSliders/HeroSliders'
import AddHeroSlider from '../Pages/AdminDashboard/HeroSlider/AddHeroSlider/AddHeroSlider'
import FootballMatches from '../Pages/AdminDashboard/Match/Football/Matches/FootballMatches'
import AddFootballMatch from '../Pages/AdminDashboard/Match/Football/AddUpcomingMatch/AddFootballMatch'
import DisplayError from '../components/DisplayError/DisplayError'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <DisplayError />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'article/:id',
        element: <FullNews />,
      },
      {
        path: '/football',
        element: <Football />,
      },
      {
        path: '/cricket',
        element: <Cricket />,
      },
      {
        path: '/tennis',
        element: <Tennis />,
      },
      {
        path: '/basketball',
        element: <Basketball />,
      },
    ],
  },

  {
    path: '/admin/dashboard',
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
    errorElement: <DisplayError />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'articles/new-article',
        element: <AddNewArticle />,
      },
      {
        path: 'articles/my-articles',
        element: <MyArticles />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'add-category',
        element: <AddCategory />,
      },
      {
        path: 'tags',
        element: <Tags />,
      },
      {
        path: 'add-tag',
        element: <AddTag />,
      },
      {
        path: 'hero-sliders',
        element: <HeroSliders />,
      },
      {
        path: 'add-hero-slider',
        element: <AddHeroSlider />,
      },
      {
        path: 'add-football-match',
        element: <AddFootballMatch />,
      },
      {
        path: 'football-matches',
        element: <FootballMatches />,
      },
      {
        path: 'admins',
        element: <Admins />,
      },
      {
        path: 'users',
        element: <AllUsers />,
      },
      {
        path: 'subscribers',
        element: <Subscribers />,
      },
    ],
  },
])

export default router
