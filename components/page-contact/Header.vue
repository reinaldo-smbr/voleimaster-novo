<template>
  <header
    class="header page-header bg-img section-padding valign"
    data-background="/assets/imgs/background/img-contato.webp"
    data-overlay-dark="7"
  >
    <div class="container pt-80">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1 class="text-u ls1 fz-80">
              Fale <span class="fw-200"> Conosco</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';
onMounted(() => {
  loadBackgroudImages();
});
</script>
