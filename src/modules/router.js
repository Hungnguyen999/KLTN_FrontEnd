import HomePage_Guest from './HomePage_Guest/HomePage_Guest'
import About from './About/About'
import CoursePage from './CoursePage/CoursePage'
import NotFoundPage from "./NotFoundPage/NotFoundPage"
import VideoCoursePage from "./VideoCoursePage/VideoCoursePage"
import MyPage from "./MyPage/MyPage"
export default [
    // Guest
    {
        path: '',
        name: 'home-page-guest',
        component: HomePage_Guest
    },
    {
        path: 'About',
        name: 'about-page',
        component: About
    },
    {
        path: 'course/:id',
        name: 'course-detail-page',
        component: CoursePage
    },
    {
        path: 'course/:id/lesson',
        name: 'lesson-page',
        component: VideoCoursePage
    },
    // user
    {
        path: '/mypage',
        name: 'my-page',
        component: MyPage
    },
    {
        path: '/404',
        name: 'not-found-page',
        component: NotFoundPage
    },
    {
        path: '*',
        redirect: '/404'
    }
]