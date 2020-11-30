import Vue from "vue";
import VueRouter from "vue-router";
import asyncRouter from "./modules";

Vue.use(VueRouter);

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
};

const createRouter = () =>
  new VueRouter({
    mode: "history",
    routes: asyncRouter
  });
const router = createRouter();

export default router;
