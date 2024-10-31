import { defineClientConfig } from 'vuepress/client';

export default defineClientConfig({
    enhance({ router, app }) {
        router.beforeEach((to, from, next) => {
            if (to.path === '/') {
                // Redirect / to /zh/author/
                next('/zh/author/');
            } else if (/^\/[a-zA-Z\-_]+\/$/u.test(to.path)) {
                // Redirect /lang/ to /lang/author/
                next(`${to.path}author/`);
            } else {
                next();
            }
        });
    },
});
