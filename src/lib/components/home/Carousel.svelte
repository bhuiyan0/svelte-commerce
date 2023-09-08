<script>
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import Swiper from 'swiper';
    import { Navigation, Pagination } from 'swiper/modules';

    import { onMount } from 'svelte';

    export let data = [];

    

    onMount(() => {
        const swiper = new Swiper('.swiper', {
            modules: [ Pagination],

            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
        });
        swiper.init();
    });
</script>


<!-- Slider main container -->
<div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <img src="https://picsum.photos/200/300" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://picsum.photos/200/300" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://picsum.photos/200/300" alt="">
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
  
    <!-- If we need navigation buttons -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  
    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>

  <style>
    .swiper {
        width: 100%;
        height: 300px;
        overflow: hidden;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  </style>