<?php theme_include('header'); ?>

  <section class="content" id="content">

    <!-- Your page title -->
    <h2><?php echo page_title(); ?></h2>

    <!-- Your page content -->
    <div><?php echo page_content(); ?></div>

    <!-- Notification message -->
    <div><?php echo Notify::read(); ?></div>

    <!-- The contact form -->
    <form method="post" action="<?php echo current_url(); ?>">
      <p><input name="contact-subject" type="text" placeholder="Hi!" value="<?php echo Input::previous('contact-subject'); ?>"> <label>Subject</label></p>
      <p><input name="contact-name" type="text" placeholder="My name is&hellip;" value="<?php echo Input::previous('contact-name'); ?>"> <label>Your Name</label></p>
      <p><input name="contact-email" type="email" placeholder="email@domain.com" value="<?php echo Input::previous('contact-email'); ?>"> <label>Your Email</label></p>
      <p><textarea name="contact-message" style="width:100%;height:150px;" placeholder="Say something!"><?php echo Input::previous('contact-message'); ?></textarea></p>
      <p><button type="submit">Send Message!</button></p>
    </form>

  </section>

<?php theme_include('footer'); ?>
