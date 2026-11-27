<template>
  <section class="intro-skill section-padding pb-0">
    <div class="container pt-80 pb-80">
      <div class="row md-marg">
        <div class="col-lg-6">
          <div class="cont">
            <h6 class="sub-title main-color mb-15">Sobre nós</h6>
            <h2 class="mb-30">Federação de Voleibol Master do Rio de Janeiro </h2>
            <h4 class="mb-35">
              Somos uma organização não governamental e sem fins econômicos que trabalha na gestão técnica, administrativa e política do Voleibol Master no Estado do Rio de Janeiro.
            </h4>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="imgs">
            <div class="img1">
              <img src="/assets/imgs/intro/2.jpg" alt="" />
            </div>
            <div class="img2">
              <img src="/assets/imgs/intro/03.jpg" alt="" />
            </div>
            <div class="img3">
              <img src="/assets/imgs/intro/04.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-80 pb-30">
      <div class="row md-marg">
        <div class="col-lg-12">
          <div class="cont">
            <p class="mb-35">
             A federação tem por objetivo o desenvolvimento das modalidades Voleibol de Quadra e Vôlei de Praia no Rio de Janeiro, promovendo a integração com as entidades ligadas ao esporte master no Brasil e fortalecendo a imagem do esporte master brasileiro. A entidade é reconhecida pelo Comitê Brasileiro do Esporte Master (CBEM) como a responsável única pela administração desportiva do Voleibol Master para o Estado do Rio de Janeiro (RJ), sendo o CBEM reconhecido pela Legislação Desportiva Brasileira como a Entidade Matriz do Seguimento Esportivo Master, no ordenamento do Subsistema Nacional do Desporto e também reconhecido como entidade máxima no segmento master no Brasil pela IMGA (International Master Games Association), que é vinculada ao COI, Comitê Olímpico Internacional.
            </p>
            <p class="mb-35">
              Ao longo de seus 21 anos de existência atuando no desenvolvimento do Voleibol Master no Estado do Rio de Janeiro, primeiro como Amavôlei e, a partir de 2016 como FVMR, a entidade acumula importantes conquistas como a criação do Campeonato Carioca de Voleibol de Quadra e a criação do Circuito Carioca Master de Vôlei de Praia. Essas ações vêm produzindo resultados relevantes no crescimento do movimento master do Rio de Janeiro, contribuições essas reconhecidas pela Câmara Municipal do Rio de Janeiro através da condecoração com a Medalha de Mérito Pedro Ernesto, principal Comenda que o Rio de Janeiro possui e que tem como objetivo agraciar aqueles que se destacaram na sociedade brasileira ou internacional.
            </p>    
          </div>
        </div>
        <div class="col-lg-12">
          <p class="mb-35">
              Outro reconhecimento importante veio em 2019 pelo Comitê Brasileiro do Esporte Master (CBEM) e pelo Comitê Rio Master 2020 através da escolha da FVMR como entidade esportiva responsável pela organização das competições de Voleibol de Quadra e Vôlei de Praia nos Jogos Pan-americanos Masters Rio 2020 (evento adiado para o ano de 2021 em virtude da crise do Covid-19).
            </p>
            <p class="mb-35">
              A FVMR tem como principal fonte de recursos para o cumprimento de seus objetivos estratégicos a arrecadação com inscrições e taxas, e tem nas recém-criadas “Comissão de Voleibol de Quadra da FVMR e “Comissão de Vôlei de Praia da FVMR” parcerias importantes nas ações que envolvem a transparência e democratização no desenvolvimento do Voleibol Master no Estado do Rio de Janeiro.
            </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import isInView from '@/common/isInView';

function handleShowProgressValues() {
  isInView({
    selector: '.skill-progress .progres',
    isElements: true,
    callback: (element) => {
      element.style.width = element.getAttribute('data-value');
    },
  });
}

onMounted(() => {
  window.addEventListener('scroll', handleShowProgressValues);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleShowProgressValues);
});
</script>
