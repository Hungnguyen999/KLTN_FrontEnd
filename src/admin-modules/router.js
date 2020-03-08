import EmployeePage from "./EmployeePage/EmployeePage"
import ITPage from "./ITPage/ITPage"
import CategoryPage from "./CategoryPage.vue/CategoryPage"
import CoursePage from "./CoursePage/CoursePage"
import ChatBotPage from "./ChatBotPage/ChatBotPage"
import TopicPage from "./TopicPage/TopicPage"
import StatisticalPage from "./StatisticalPage/StatisticalPage"
import CategoryDetailPage from "./CategoryDetailPage/CategoryDetailPage"
export default [
    {
        path: 'emp',
        name: 'employee-page',
        component: EmployeePage,
        meta: {
            emp: true
        }
    },
    {
        path: 'category',
        name: 'category-page',
        component: CategoryPage,
        meta: {
            emp: true
        }
    },
    {
        path: 'category/:id',
        name: 'category-detail-page',
        component: CategoryDetailPage,
        meta: {
            emp: true
        }
    },
    {
        path: 'topic',
        name: 'topic-page',
        component: TopicPage,
        meta: {
            emp: true
        }
    },
    {
        path: 'course',
        name: 'course-page',
        component: CoursePage,
        meta: {
            emp: true
        }
    },
    {
        path: 'chatbot',
        name: 'chatbot-page',
        component: ChatBotPage,
        meta: {
            emp: true
        }
    },
    {
        path: 'statistical',
        name: 'statistical-page',
        component: StatisticalPage,
        meta: {
            emp: true
        }
    },
    {
        path: 'it',
        name: 'it-page',
        component: ITPage,
        meta: {
            emp: false
        }
    }
]