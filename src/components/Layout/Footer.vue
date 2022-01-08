<template>
  <section class="widget-section padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-6 sm-padding">
          <div class="widget-content">
            <router-link to="/arkit-vue/"><img src="/arkit/img/logo-dark.png" alt="brand"></router-link>
            <p>Building your own home is about desire, fantasy. But it’s achievable anyone can do it.</p>
          </div>
        </div>
        <div class="col-lg-2 col-sm-6 sm-padding">
          <div class="widget-content">
            <h4>Company</h4>
            <ul class="widget-links">
              <li><router-link to="/arkit-vue/about">About Us</router-link></li>
              <li><router-link to="/arkit-vue/services">Our Services</router-link></li>
              <li><router-link to="/arkit-vue/contacts">Contact Us</router-link></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 sm-padding">
          <div class="widget-content">
            <h4>Headquaters</h4>
            <p>Ukraine, Mykolaiv</p>
            <span>Hello@itstep.net</span>
            <span>(+38 050) 19 45 116</span>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 sm-padding">
          <div class="widget-content">
            <h4>Newslatter Subscription</h4>
            <p>Subscribe and get 10% off from our <br>architecture company.</p>
            <div class="subscribe-box clearfix">
              <div class="subscribe-form-wrap">
                <form action="#" class="subscribe-form">
                  <input type="email" name="email" id="subs-email" class="form-input" placeholder="Enter Your Email Address...">
                  <button type="submit" class="submit-btn">Subscribe</button>
                  <div id="subscribe-result">
                    <p class="subscription-success"></p>
                    <p class="subscription-error"></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer-section align-center">
    <div class="container">
      <p>&copy; 2022 Arkit Powered by DynamicLayers</p>
    </div>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>

</style>