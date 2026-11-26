<template>
  <header
    class="page-header bg-img section-padding valign"
    data-background="/assets/imgs/background/noticias2.webp"
    data-overlay-dark="2"
  >
    <div class="container pt-80">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1 class="text-u ls1 fz-80">
            Notícias <span class="fw-200"> FMVR</span>
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
