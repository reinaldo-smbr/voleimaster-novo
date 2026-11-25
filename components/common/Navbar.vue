<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container o-hidden">
      <a class="logo icon-img-100" href="/">
        <img src="/assets/imgs/fvmr-logo.png" alt="Federação de voleibol master do rio de janeiro" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item"
          >
            <a
              class="nav-link"
              data-toggle="dropdown"
              href="/"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Home</span>
            </a>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Calendário</span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/page-about"> Quadra </a>
              </li>
              <li>
                <a class="dropdown-item" href="/page-services"> Praia </a>
              </li>
            </ul>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">A Federação</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/portfolio-gallery"> Quem Somos </a>
              <a class="dropdown-item" href="/portfolio-creative">
                Comitê ESG
              </a>
              <a class="dropdown-item" href="/portfolio-creative-carousel">
                Políticas e Normas
              </a>
              <a class="dropdown-item" href="/portfolio-grid">
                Gestão
              </a>
            </div>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Notícias</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contato">
              <span class="rolling-text">Fale Conosco</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="contact-button">
       <ul class="rest social-icon d-flex align-items-center">
              <li class="hover-this cursor-pointer">
                <a href="#0" class="hover-anim">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="hover-this cursor-pointer ml-10">
                <a href="#0" class="hover-anim">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li class="hover-this cursor-pointer ml-10">
                <a href="#0" class="hover-anim">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
      </div>
 
    </div>
  </nav>

</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { ref } from 'vue';

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');

  if (bodyScroll > 300) navbar.classList.add('nav-scroll');
  else navbar.classList.remove('nav-scroll');
}

function handleDropdownMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
}

function handleDropdownMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
