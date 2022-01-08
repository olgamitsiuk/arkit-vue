<template>
  <section class="page-header padding">
    <div class="container">
      <div class="page-content text-center">
        <h2>Our contacts</h2>
        <p>Contacts with us</p>
      </div>
    </div>
  </section>
  <section class="contact-section bg-grey padding">
    <div class="dots"></div>
    <div class="container">
      <div class="contact-wrap d-flex align-items-center row">
        <div class="col-md-6 padding-15">
          <div class="contact-info">
            <h2>Get in touch with us & <br>send us message today!</h2>
            <p>Arkit is a different kind of architecture practice. Founded by LoganCee in 1991, we’re an employee-owned firm pursuing a democratic design process that values everyone’s input.</p>
            <h3>Ukraine<br>Mykolaiv, </h3>
            <h4><span>Email:</span> itstep.Net <br> <span>Phone:</span> +800 000 000 00<br> <span>Fax:</span> +800 000 000 00</h4>
          </div>
        </div>
        <div class="col-md-6 padding-15">
          <div class="contact-form">
            <form action="contact.php" method="post" id="ajax_form" class="form-horizontal">
              <div class="form-group colum-row row">
                <div class="col-sm-6">
                  <input type="text" id="name" name="name" class="form-control" placeholder="Name" required>
                </div>
                <div class="col-sm-6">
                  <input type="email" id="email" name="email" class="form-control" placeholder="Email" required>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <textarea id="message" name="message" cols="30" rows="5" class="form-control message" placeholder="Message" required></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <button id="submit" class="default-btn" type="submit">Send Message</button>
                </div>
              </div>
              <div id="form-messages" class="alert" role="alert"></div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>

export default {
name: "ContactPage",

}
</script>

<style scoped>

</style>