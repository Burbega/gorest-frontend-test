<template>
  <nav class="navbar nav-bg navbar-light justify-content-between">
    <div class="container">
      <img src="../assets/images/logo-pulses-branco.svg" class="navbar-brand" />
      <h1 class="text-white">Teste Pulses</h1>
    </div>
  </nav>
  <nav v-if="isProducts" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <div class="d-flex justify-content-center container">
        <li class="breadcrumb-item active" aria-current="page">
          20 registros encontrados
        </li>
      </div>
    </ol>
  </nav>
  <nav v-else aria-label="breadcrumb">
    <ol class="breadcrumb">
      <div class="d-flex justify-content-start container">
        <button
          class="d-flex justify-content-center align-items-center breadcrumb-item active"
          @click="back"
        >
          <img
            src="../assets/images/chevron-left-solid.svg"
            class="navbar-arrow-icon mr-2"
          />Voltar
        </button>
        <li class="ml-0 breadcrumb-item active" aria-current="page">
          Detalhes do item
        </li>
      </div>
    </ol>
  </nav>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  computed: {
    isProducts() {
      return this.$route.name === "Products";
    },
  },
};
</script>
