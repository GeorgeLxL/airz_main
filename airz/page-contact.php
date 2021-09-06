<?php
/*
Template Name: contact
*/
?>
<?php get_header('contact');?>
    <main>
        <section class="news_main">
            <div class="container">
                <h2 class="section_title">
                    <div class="section_title_cover">
                        <span class="section_title_cover1">Contact</span>
                        <span class="section_title_cover2">Contact</span>
                    </div>
                    <span>お問い合わせ</span>
                </h2>
                <div class="contact_form">
                    <?php echo do_shortcode('[contact-form-7 id="27" title="Contact_Form"]'); ?>
                </div>
            </div>
        </section>
    </main>
<?php get_footer('subpage');?>