import VueRouter from "vue-router";
import Home from "./pages/Home";
import Cars from "./pages/Cars";

export default new VueRouter({
  routes: [
    {
      path: "",
      component: Home
    },
    {
      path: "/cars",
      component: Cars
    }
  ],
  mode: "history"
});
