import { createRouter, createWebHistory } from "vue-router";
import Products from "../views/Products.vue";
import ProductDetails from "../views/ProductDetails.vue";

const routes = [
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
