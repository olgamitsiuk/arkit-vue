<template>
<AboutImage/>
  <section class="about-section padding">
    <div class="container">
      <div class="row about-wrap d-flex align-items-center">
        <div class="col-md-6 xs-padding">
          <div class="about-content">
            <h2>Creating place that enhance <br> the human experience.</h2>
            <p>Arkit is a different kind of architecture practice. Founded by LoganCee in 1991, we’re an employee-owned firm pursuing a democratic design process that values everyone’s input.</p>
            <p>Today we have more than 150 people in London, Hong Kong and Sydney providing architecture, interior and urban design services from concept to completion.</p>
            <a href="#" class="default-btn">More About Us</a>
          </div>
        </div>
        <div class="col-md-6 xs-padding">
          <div class="about-bg">
            <div class="about-bg"></div>
            <div class="dots"></div>
            <div class="year-text">
              <div class="year-content">
                <h2>10</h2>
                <span>Years of experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AboutImage from "@/components/Layout/AboutImage";
export default {
name: "AboutPage",
  components: {AboutImage}
}
</script>

<style scoped>

</style>