<template>
  <section class="team-crev2 section-padding pb-90">
    <div class="container">
      <div class="sec-head mb-80">
        <div class="d-flex align-items-center">
          <div>
            <span class="sub-title main-color mb-5">Integrantes</span>
            <h3 class="fw-600 fz-50 text-u d-rotate wow">
              <span class="rotate-text">
               Conheça  <span class="fw-200">o nosso time</span>
              </span>
            </h3>
          </div>
         
        </div>
      </div>
      <div class="row md-marg">
        <div v-for="(item, i) in data" :key="{ i }" class="col-lg-3 col-md-6">
          <div class="item mb-50">
            <div class="bg-blur">
              <div class="img">
                <img :src="item.img" alt="" />
              </div>
              <div class="circle-blur">
                <img src="/assets/imgs/patterns/blur1.png" alt="" />
              </div>
            </div>
            <div class="cont pt-30">
              <div class="info">
                <h6>{{ item.name }}</h6>
                <span class="fz-14 p-color mt-10">{{ item.subName }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="circle-blur">
      <img src="/assets/imgs/patterns/blur1.png" alt="" />
    </div>
  </section>
</template>

<script setup>
import data from '@/data/team-t';
</script>
