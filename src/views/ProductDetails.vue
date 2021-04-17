<template>
  <!-- if a product is already loaded -->
  <div v-if="product">
    <div class="container p-0 sm-px-20px">
      <div class="row">
        <div class="col-12 col-lg">
          <img
            :src="product.data.image"
            :alt="product.data.name"
            class="mw-100 border-radius-5px"
          />
        </div>
        <div class="card-body min-h-190px d-flex flex-column col-12 col-lg-9">
          <h2 class="custom-card-title-text mt-0">
            {{ product.data.name }}
          </h2>

          <div class="row ml-n1">
            <div v-for="category in product.data.categories" :key="category">
              <span class="category-text border-radius-3px px-2 ml-1">
                {{ category.name }}</span
              >
            </div>
          </div>

          <p class="custom-text mt-2">
            {{ product.data.description }}
          </p>
          <p class="custom-price-text">
            R$
            {{
              product.data.price
                .replace(".", ",")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- if loading a product -->
  <div v-else>
    <p>LOADING...</p>
  </div>
</template>

<!-- get specific product -->
<script>
export default {
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    fetch("https://gorest.co.in/public-api/products/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.product = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
