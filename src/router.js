import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/components/Pages/HomePage";
import AboutPage from "@/components/Pages/AboutPage";
import ServicesPage from "@/components/Pages/ServicesPage";
import ContactPage from "@/components/Pages/ContactPage";
import ProjectPage from "@/components/Pages/ProjectPage";

const routes = [
    { path: '/arkit-vue/', component: HomePage },
    { path: '/arkit-vue/about', component: AboutPage },
    { path: '/arkit-vue/services', component: ServicesPage},
    { path: '/arkit-vue/projects', component: ProjectPage},
    { path: '/arkit-vue/contacts', component: ContactPage},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router