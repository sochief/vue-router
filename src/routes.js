import VueRouter from "vue-router";
import Home from "./pages/Home";
import CarFull from "./pages/CarFull";
import ErrorCmp from "./pages/Error";
const Cars = resolve => {
  require.ensure(["./pages/Cars.vue"], () => {
    resolve(require("./pages/Cars.vue"));
  });
};
const Car = resolve => {
  require.ensure(["./pages/Car.vue"], () => {
    resolve(require("./pages/Car.vue"));
  });
};
export default new VueRouter({
  routes: [
    {
      path: "",
      component: Home
    },
    {
      path: "/cars",
      component: Cars,
      name: "cars"
    },
    {
      path: "/car/:id",
      component: Car,
      children: [
        {
          path: "full", //localhost:8080/cars/(id)/full
          component: CarFull,
          name: "carFull",
          //eslint-disable-next-line
          beforeEnter(to, from, next) {
            console.log("before enter");
            next();
          }
        }
      ]
    },
    {
      path: "/none",
      redirect: {
        name: "cars"
      }
    },
    {
      path: "*",
      redirect: ErrorCmp
    }
  ],
  mode: "history",
  //eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return {
      x: 0,
      y: 0
    };
  }
});
