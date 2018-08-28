import Vue from 'vue' //引入vue
import Router from 'vue-router' //引入vue-router
import HelloWorld from '@/components/HelloWorld' //引入跟目录下的Hello.vue组件
import Hi from "@/components/Hi" //引入根目录下的Hi.vue组件
import Hi1 from "@/components/Hi1" //引入根目录下的Hi1.vue组件
import Hi2 from "@/components/Hi2" //引入根目录下的Hi2.vue组件
import params from "@/components/params"

Vue.use(Router)

export default new Router({
  routes: [  //配置路由这里是一个数组
    { //每一个链接都是一个对象
      path: '/',  //链接路径
      name: 'HelloWorld', //路由名称
      component: HelloWorld //对应的组件模板
    },
    {
      path: '/hi',
        component: Hi,
        name: 'Hello kaiai!',
        children: [{
            path: '/',
            component: Hi
          },
          {
            path: '/hi1',
            name:'hi1',
            component: Hi1
          },
          {
            path: 'hi2',
            component: Hi2
          },
          {
            path: '/params',
            component: params
          },
        ]
    }


    //  {
    //    path: '/',
    //    components: {
    //      default: HelloWorld,
    //      left: Hi1,
    //      right: Hi2
    //    }
    //  }, {
    //    path: '/Hi',
    //    components: {
    //      default: HelloWorld,
    //      left: Hi2,
    //      right: Hi1
    //    }
    //  }
  ]
})
