<?php
/*
Template Name: single
*/
?>
<?php get_header('news');?>
    <main>
        <section class="news_main">
            <div class="container">
                <h2 class="section_title">
                    <div class="section_title_cover">
                        <span class="section_title_cover1">News</span>
                        <span class="section_title_cover2">News</span>
                    </div>
                    <span>​お知らせ</span>
                </h2>
                <div class="news_detail_container">
                    <?php 
                    if ( have_posts() ) :
                        while ( have_posts() ) : the_post();
                    ?>
                    <h3 class="news_detail_title"><?php the_title();?></h3>
                    <div class="news_detail_content"><?php the_content();?></div>
                    <?php
                        endwhile;
                    endif;
                    ?>
                </div>
            </div>
        </section>
    </main>
<?php get_footer('subpage');?>