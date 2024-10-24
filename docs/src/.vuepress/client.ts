import { defineClientConfig } from 'vuepress/client';
import { onMounted, onUpdated } from 'vue';

export default defineClientConfig({
    setup() {
        const initLogoURL = () => {
            const logo = document.querySelector('.vp-nav-logo');
            if (logo && logo.parentNode) {
                logo.parentNode.addEventListener('click', function () {
                    window.location.href = '/author/';
                });
            }
        };
        onMounted(initLogoURL);
        onUpdated(initLogoURL);
    },

    enhance({ router, app }) {
        router.beforeEach((to, from, next) => {
            if (to.path === '/') {
                next('/home/');
            } else {
                next();
            }
        });
    },
});
