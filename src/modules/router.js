import HomePage_Guest from './HomePage_Guest/HomePage_Guest'
import About from './About/About'
import CoursePage from './CoursePage/CoursePage'
import NotFoundPage from "./NotFoundPage/NotFoundPage"
import VideoCoursePage from "./VideoCoursePage/VideoCoursePage"
import MyPage from "./MyPage/MyPage"
import InstructorPage from "./InstructorPage/InstructorPage"
import InstructorCoursePage from "./InstructorCoursePage/InstructorCoursePage"
import InstructorLessonPage from "./InstructorLessonPage/InstructorLessonPage"
import InstructorMessagePage from "./InstructorMessagePage/InstructorMessagePage"
import InstructorAnnoucementPage from "./InstructorAnnoucementPage/InstructorAnnoucementPage"
import Cart from "./Cart/Cart.vue";
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
        path: '/cart',
        name: 'cart-page',
        component: Cart
    },
    {
        path: '/instructor',
        name: 'instructor-page',
        component: InstructorPage,
        redirect: '/instructor/course',
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
                meta:  {
                    instructor: true,
                    course_id: ''
                }
            },
            {
                path: 'message',
                name: 'ins-message-page',
                component: InstructorMessagePage,
                meta: {
                    instructor: true
                }
            },
            {
                path: 'annouce',
                name: 'ins-annouce-page',
                component: InstructorAnnoucementPage,
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