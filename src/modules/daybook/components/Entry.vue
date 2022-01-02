<template>
  <div
    class="mb-3 pointer p-2 entry-container"
    @click="$router.push({ name: 'entry', params: { id: 1 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5 fw-light">Julio</span>
      <span class="mx-2 fs-5 fw-light">2021</span>
    </div>
    <div class="entry-description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
      excepturi aperiam neque. Voluptatem nam laborum eveniet. Incidunt animi
      hic impedit rem fugit nam, fugiat assumenda eaque sunt illo porro
      architecto.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>
