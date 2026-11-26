<template>
  <section
    class="services-inline2 section-padding sub-bg bord-bottom-grd bord-top-grd"
  >
    <div class="container ontop">
      <div class="sec-head mb-80">
        <div class="d-flex align-items-center">
          <div>
            <h3 class="fw-600 fz-50 text-u d-rotate wow">
              <span class="rotate-text">
                Faça download dos arquivos</span>       
            </h3>
          </div>
        </div>
      </div>
      <div class="item" v-for="service in services" :key="service.id">
        <div class="row md-marg align-items-end">
          <div class="col-lg-4">
            <div>
              <span class="num">{{ service.number }}</span>
              <div>
                <span class="sub-title main-color mb-10">{{
                  service.category
                }}</span>
                <h2>
                  {{ service.title }}
                  <span class="fw-200">{{ service.subtitle }}</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="text md-mb80">
              <p>{{ service.description }}</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="img fit-img">
              <a href={{service.link}}>
              <img :src="service.image" alt="" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    number: '01',
    category: '',
    title: 'Política Anticorrupção',
    subtitle: '',
    description:
      '',
    image: '/assets/imgs/serv-img/1.jpg',
    link:'/assets/pdf/CodigoCondutaEtica.pdf',
  },
  {
    id: 2,
    number: '02',
    category: 'Web Design',
    title: 'Brand',
    subtitle: 'Strategy',
    description:
      'We help our client succeed by creating identities, digital experiences, and print materials that communicate clearly.',
    image: '/assets/imgs/serv-img/2.jpg',
  },
  {
    id: 3,
    number: '03',
    category: 'Web Design',
    title: 'SEO /',
    subtitle: 'Marketing',
    description:
      'We help our client succeed by creating identities, digital experiences, and print materials that communicate clearly.',
    image: '/assets/imgs/serv-img/3.jpg',
  },
];
</script>
