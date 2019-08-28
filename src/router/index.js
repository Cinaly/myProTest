import Vue from 'vue'
import Router from 'vue-router'
import utils from '@/common/utils'

Vue.use(Router)
const P_404 = r => require.ensure([], () => r(require('@/components/404/404.vue')), '404');


/** require.context
 第一个参数表示相对的文件目录，
 第二个参数表示是否包括子目录中的文件，
 第三个参数表示引入的文件匹配的正则表达式。
 */
// 自动加载子路由
const siteSonRouterList = utils.loadSonRouters(require.context('@/components/', false, /vue$/))

const myRoutes = [];
siteSonRouterList.forEach((v, index) => {
    var obj = {
        path: '/' + v['default'].name,
        component: v['default']
    }
    myRoutes.push(obj);
});

myRoutes.push({
    // 异常路由
    path: '*',
    component: P_404
});

console.log(myRoutes);

export default new Router({
    routes: myRoutes
})
