import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/components/Pages/HomePage";
import AboutPage from "@/components/Pages/AboutPage";
import ServicesPage from "@/components/Pages/ServicesPage";
import ContactPage from "@/components/Pages/ContactPage";
import ProjectPage from "@/components/Pages/ProjectPage";

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/services', component: ServicesPage},
    { path: '/projects', component: ProjectPage},
    { path: '/contacts', component: ContactPage},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router