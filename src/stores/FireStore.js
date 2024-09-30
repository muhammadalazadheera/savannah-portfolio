import { defineStore } from "pinia";
import { db } from "@/firebase/config";
import { collection, doc, getDocs, addDoc, getDoc, deleteDoc, updateDoc, query, orderBy, limit} from 'firebase/firestore'
import { push } from "notivue";

export const useFirestore = defineStore('Firestore', {
    state: () => ({
        blogs: [],
        blog: ''
    }),
    actions: {
        // Create Blog
        async addBlog(title, body, fImage) {
            const notification = push.promise('Please wait...')
            const colRef = collection(db, 'blogs')
            try {
                await addDoc(colRef, {
                    title: title,
                    body: body,
                    featured_image: fImage,
                    created_at: Date.now()
                })
                notification.resolve('Blog successfully added!')
            } catch (error) {
                notification.reject(`${error}`)
            }
        },
        // Read all Blog
        async getBlogs() {
            const colRef = collection(db, 'blogs')
            const latestBlogQuery = query(colRef, orderBy('created_at', 'asc'), limit(10));
            try {
                const blogsSnapshot = await getDocs(latestBlogQuery)
                this.blogs = []
                blogsSnapshot.forEach((doc) => {
                    this.blogs.push({...doc.data(), id: doc.id});
                });
            } catch (error) {
                push.error(`${error}`)
            }
            
        },
        // Read a singleblog
        async getBlog(id) {
            try {
                const docRef = doc(db, 'blogs', id);
                const blogSnap = await getDoc(docRef);
                if (blogSnap.exists()) {
                    const blogData = blogSnap.data();
                    this.blog = blogData
                } else {
                    return null;
                }
            } catch (error) {
                push.error(`${error}`)
            }
        },
        // Update Blog
        async updateBlog(id, title, body, featured_image) {
            const notification = push.promise('Please wait...')
            const docRef = doc(db, 'blogs', id);
            try {
                await updateDoc(docRef, {
                    title: title,
                    body: body,
                    featured_image: featured_image
                })
                notification.resolve('Blog successfully Edited!')
            } catch (error) {
                notification.reject(`${error}`)
            }
        },
        // Delete Blog
        async deleteBlog(id) {
            const notification = push.promise('Please wait...')
            const docRef = doc(db, 'blogs', id);
            try {
                await deleteDoc(docRef)
                this.blogs = []
                this.getBlog()
                notification.resolve('Blog successfully deleted!')
            } catch (error) {
                notification.reject(`${error}`)
            }
        }
    }
})