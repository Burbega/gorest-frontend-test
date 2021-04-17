<template>
  <div class="container p-0">
    <div class="row d-flex sm-justify-content-center products-list">
      <!-- lists all api products -->
      <div
        v-for="product in products.data"
        :key="product.id"
        class="product sm-px-0 col-12 col-lg-3 h-100 mb-2"
      >
        <!-- route to specific api product details -->
        <router-link
          :to="{ name: 'ProductDetails', params: { id: product.id } }"
        >
          <div class="card-bg app-card h-100">
            <div class="card mt-3 h-100 min-h503px border-radius-5px">
              <div class="d-flex">
                <div
                  v-bind:style="{
                    backgroundImage: 'url(' + product.image + ')',
                  }"
                  class="img-w-h d-flex justify-content-end align-items-end"
                >
                  <div
                    class="row col-9 mx-0 pr-0 d-flex justify-content-end align-items-end"
                  >
                    <!-- lists all product categories -->
                    <div
                      v-for="category in product.categories"
                      :key="category"
                      class="d-flex align-items-end col-6 px-0"
                    >
                      <span class="categories-overflow px-1 ml-1 mb-1">
                        {{ category.name }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-body min-h-190px d-flex flex-column">
                <h4 class="custom-card-title-text mt-0">
                  {{ product.name }}
                </h4>
                <p class="custom-text">
                  {{ product.description }}
                </p>

                <!-- replace dollar currency separators for real currency separators -->
                <p class="custom-price-text">
                  R$
                  {{
                    product.price
                      .replace(".", ",")
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  }}
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<!-- get products from api -->
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    fetch("https://gorest.co.in/public-api/products")
      .then((res) => res.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
