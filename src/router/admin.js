import AdminBase from "@/views/admin/AdminBase.vue";
import Blogs from "@/views/admin/blog/Blogs.vue";
import EditBlog from "@/views/admin/blog/EditBlog.vue";
import NewBlog from "@/views/admin/blog/NewBlog.vue";
import Books from "@/views/admin/books/Books.vue";
import EditBook from "@/views/admin/books/EditBook.vue";
import NewBook from "@/views/admin/books/NewBook.vue";
import LoginView from "@/views/admin/LoginView.vue";

export default [
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/admin',
        component: AdminBase,
        redirect: 'admin/blogs',
        children: [
            {
                name: 'Blogs',
                path: 'blogs',
                component: Blogs
            },
            {
                name: 'NewBlog',
                path: 'create-new-blog',
                component: NewBlog
            },
            {
                name: 'EditBlog',
                path: 'edit-blog/:id',
                component: EditBlog
            },
            {
                name: 'Books',
                path: 'books',
                component: Books
            },
            {
                name: 'NewBook',
                path: 'create-new-book',
                component: NewBook
            },
            {
                name: 'EditBook',
                path: 'edit-book/:id',
                component: EditBook
            },
        ]
    }
]
  