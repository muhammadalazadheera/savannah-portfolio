import { doc, addDoc, collection, deleteDoc, getDoc, getDocs, limit, orderBy, query, updateDoc, where } from "firebase/firestore";
import { defineStore } from "pinia";
import { db } from "@/firebase/config";
import { push } from "notivue";

export const useBookStore = defineStore('BookStore', {
    state: () => ({
        books: [],
        book: '',
        featured_book: []
    }),
    actions: {
        // Create Books
        async addBook(name, author, cover_photo, link, order_no, is_featured) {
            const notification = push.promise('Please wait...')
            try {
                const collectionRef = collection(db, 'books');
                await addDoc(collectionRef, {
                    'name': name,
                    'author': author,
                    'cover_photo':cover_photo,
                    'link':link,
                    'order_no':order_no,
                    'is_featured':is_featured,
                    'created_at':Date.now()
                })
                notification.resolve('Book successfully added!')
            } catch (error) {
                notification.reject(`${error}`)
            }
        },

        // Read Books
        async getBooks() {
            try {
                const collectionRef = collection(db, 'books');
                const latestBooks = query(collectionRef, orderBy('created_at','asc'), limit(10));
                const booksSnapshot = await getDocs(latestBooks);
                booksSnapshot.forEach((doc) => {
                    this.books.push({...doc.data(), id: doc.id})
                })
            } catch (error) {
                push.error(`${error}`)
            }
        },

        // Read Book
        async getBook(id) {
            try {
                const docRef = doc(db, 'books', id);
                const bookSnapshot = await getDoc(docRef);
                this.book = bookSnapshot.data()
            } catch (error) {
                push.error(`${error}`)
            }
        },

        // Update Book
        async updateBook(id, name, author, cover_photo, link, order_no, is_featured) {
            const notification = push.promise('Please wait...')
            try {
                const docRef = doc(db, 'books', id)
                await updateDoc(docRef, {
                    'name': name,
                    'author': author,
                    'cover_photo':cover_photo,
                    'link':link,
                    'order_no':order_no,
                    'is_featured': is_featured
                })
                notification.resolve('Book successfully updated')
            } catch (error) {
                notification.reject(`${error}`)
            }
        },

        // Delete Book
        async deleteBook(id) {
            const notification = push.promise('Please wait...')
            const docRef = doc(db, 'books', id)
            try {
                await deleteDoc(docRef)
                notification.resolve('Book successfully deleted!')
            } catch (error) {
                notification.reject(`${error}`)
            }
        },

        // Fetch books for home page slider
        async featuredBook() {
            try {
                const colRef = collection(db, 'books')
                const latestBooks = query(
                    colRef,
                    where('is_featured', '==', true),
                    orderBy('order_no','asc')
                );
                const booksSnapshot = await getDocs(latestBooks);
                this.featured_book = []
                booksSnapshot.forEach((doc) => {
                    this.featured_book.push({...doc.data(), id: doc.id})
                })
            } catch (error) {
                console.log(error)
            }
        },

        // Fetch books order by order number
        async getBooksInOrder() {
            try {
                const colRef = collection(db, 'books')
                const latestBooks = query(
                    colRef,
                    orderBy('order_no','asc')
                );
                const booksSnapshot = await getDocs(latestBooks);
                this.featured_book = []
                booksSnapshot.forEach((doc) => {
                    this.featured_book.push({...doc.data(), id: doc.id})
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
})