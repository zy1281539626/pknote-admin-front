import User from '@/views/user-manage/index.vue'
import UserDetail from '@/views/user-manage/details/index.vue'
import UserComments from '@/views/user-manage/comments.vue'
import UserMessages from '@/views/user-manage/messages.vue'

const userRoutes = [
  // 我的用户
  {
    path: '/user',
    component: User
  },
  // 用户详情
  {
    path: '/user-detail',
    component: UserDetail
  },
  // 用户评论
  {
    path: '/user-comments',
    component: UserComments
  },
  // 用户私信
  {
    path: '/user-messages',
    component: UserMessages
  }
]

export default userRoutes
