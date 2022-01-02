<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">2</span>
      <span class="mx-1 fs-3">Enero</span>
      <span class="mx-2 fs-4 fw-light">2022</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="Que se cuenta?"
    ></textarea>
  </div>
  <Fab />
  <img src="" alt="" />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>

<style></style>
