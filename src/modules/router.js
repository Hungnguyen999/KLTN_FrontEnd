import HomePage_Guest from './HomePage_Guest/HomePage_Guest'
import About from './About/About'
import CoursePage from './CoursePage/CoursePage'
import NotFoundPage from "./NotFoundPage/NotFoundPage"
import VideoCoursePage from "./VideoCoursePage/VideoCoursePage"
import MyPage from "./MyPage/MyPage"
import InstructorPage from "./InstructorPage/InstructorPage"
import InstructorCoursePage from "./InstructorCoursePage/InstructorCoursePage"
import InstructorLessonPage from "./InstructorLessonPage/InstructorLessonPage"
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
        path: '/instructor',
        name: 'instructor-page',
        component: InstructorPage,
        meta: {
            instructor: true
        },
        children: [
            {
                path: 'course',
                name: 'ins-course-page',
                component: InstructorCoursePage,
                meta: {
                    instructor: true
                }
            },
            {
                path: 'lesson',
                name: 'ins-lesson-page',
                component: InstructorLessonPage,
                meta: {
                    instructor: true
                }
            }
        ]
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