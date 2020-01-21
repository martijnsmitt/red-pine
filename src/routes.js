import Contact from './components/Contact.vue'
import Gallery from './components/Gallery.vue'
import Home from './components/Home.vue'
import Photo from './components/Photo.vue'

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/gallery/:slug', component: Gallery, name: 'gallery' },
    { path: '/gallery/:slug/:id', component: Photo, name: 'photo' },
    { path: '/contact', component: Contact, name: 'contact' }
];

export default routes;