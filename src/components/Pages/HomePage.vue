<template>
  <HomeImage/>
  <section class="team-section padding">
    <div class="container">
      <div class="row team-wrap">
        <div class="col-lg-3 col-sm-6 padding-15">
          <div class="team-item">
            <div class="overlay"></div>
            <img src="/arkit/img/team-1.jpg" alt="team">
            <div class="team-content">
              <h3>Ivan Ivanov</h3>
              <span>Architect</span>
            </div>
            <ul class="team-social">
              <li><a href="#"><i class="ti-facebook"></i></a></li>
              <li><a href="#"><i class="ti-twitter"></i></a></li>
              <li><a href="#"><i class="ti-instagram"></i></a></li>
              <li><a href="#"><i class="ti-youtube"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 padding-15">
          <div class="team-item">
            <div class="overlay"></div>
            <img src="/arkit/img/team-2.jpg" alt="team">
            <div class="team-content">
              <h3>Vasya Pupkin</h3>
              <span>Designer</span>
            </div>
            <ul class="team-social">
              <li><a href="#"><i class="ti-facebook"></i></a></li>
              <li><a href="#"><i class="ti-twitter"></i></a></li>
              <li><a href="#"><i class="ti-instagram"></i></a></li>
              <li><a href="#"><i class="ti-youtube"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 padding-15">
          <div class="team-item">
            <div class="overlay"></div>
            <img src="/arkit/img/team-3.jpg" alt="team">
            <div class="team-content">
              <h3>Valentin Valentinov</h3>
              <span>Developer</span>
            </div>
            <ul class="team-social">
              <li><a href="#"><i class="ti-facebook"></i></a></li>
              <li><a href="#"><i class="ti-twitter"></i></a></li>
              <li><a href="#"><i class="ti-instagram"></i></a></li>
              <li><a href="#"><i class="ti-youtube"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 padding-15">
          <div class="team-item">
            <div class="overlay"></div>
            <img src="/arkit/img/team-4.jpg" alt="team">
            <div class="team-content">
              <h3>Petya Petrov</h3>
              <span>Marketer</span>
            </div>
            <ul class="team-social">
              <li><a href="#"><i class="ti-facebook"></i></a></li>
              <li><a href="#"><i class="ti-twitter"></i></a></li>
              <li><a href="#"><i class="ti-instagram"></i></a></li>
              <li><a href="#"><i class="ti-youtube"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeImage from "@/components/Layout/HomeImage";

export default {
  name: "HomePage",
  components: {
    HomeImage,
  }
}
</script>

<style scoped>

</style>