<?php
/*
Template Name: news
*/
?>
<?php get_header('news');?>
<?php
    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
    $news_category = get_query_var( 'news_category' ) ? get_query_var( 'news_category' ) : '';
    $news_year = get_query_var( 'news_year' ) ? get_query_var( 'news_year' ) : '';
?>

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
                <div class="news_main_container">
                    <div class="news_category_container">
                        <ul class="news_category_list">
                            <?php
                                $all_categories = get_categories([
                                    'hide_empty' => false,
                                    "orderby"   => "slug",
                                    "order"     => "DESC" 
                                ]);
                                $all_link = true;
                                foreach ($all_categories as $category) :
                                    if ( $news_category == $category->slug) : $all_link = false; endif;
                                endforeach;
                            ?>
                                <li><a class="<?php if( $all_link == true ) : echo 'news_category_current'; endif; ?>" href="<?php echo esc_url( add_query_arg( [ 'news_year' => $news_year ], site_url('/') . 'news' ) ); ?>">All</a></li>
                            <?php
                            foreach ($all_categories as $category) :
                            ?>
                                <li><a class="<?php if( $news_category == $category->slug ) : echo 'news_category_current'; endif; ?>" href="<?php echo esc_url( add_query_arg( [ 'news_category' => $category->slug, 'news_year' => $news_year ], site_url('/') . 'news' ) ); ?>" ><?php echo $category->name; ?></a></li>
                            <?php
                                endforeach;
                            ?>
                        </ul>
                    </div>
                    <div class="news_category_container">
                        <ul class="news_category_list">
                            <li><a <?php echo $news_year ? '' : 'class="news_category_current"'; ?> href="<?php echo esc_url( add_query_arg( [ 'news_category' => $news_category ], site_url('/') . 'news' ) ); ?>">All</a></li>
                            <?php for ($nI = 0; $nI < 10; $nI ++) :?>
                            <li class="">
                                <a <?php echo $news_year == date('Y',strtotime("-" . $nI . " year")) ? 'class="news_category_current"' : ''; ?> href="<?php echo esc_url( add_query_arg( [ 'news_category' => $news_category, 'news_year' => date('Y',strtotime("-" . $nI . " year")) ], site_url('/') . 'news' ) ); ?>" class="years_link"><?php echo date('Y',strtotime("-" . $nI . " year")); ?></a>
                            </li>
                            <?php endfor; ?>
                        </ul>
                    </div>
                    <?php 
                        $args = array(
                            'post_type' => 'post',
                            'posts_per_page' => 9,
                            'post_status' => 'publish',
                            'order_by' => 'post_date',
                            'order' => 'DESC',
                            'paged' => $paged
                        );
                        if( !empty( $news_category ) ) {
                            $args['tax_query'] = [[
                                'taxonomy' => 'category',
                                'field' => 'slug',
                                'terms' => $news_category
                            ]];
                        }
                        if( !empty( $news_year ) ) {
                            $args['date_query'] = [[
                                'year' => $news_year
                            ]];
                        }
                    $news_query = new WP_Query( $args );
                    ?>
                    <div class="news_main_container1">
                        <?php if( $news_query->have_posts() ) : ?>
                        <?php while( $news_query->have_posts() ) :  $news_query->the_post(); ?>
                        <a class="news_card" href="<?php the_permalink(); ?>">
                            <?php if ( has_post_thumbnail() ) {
                            the_post_thumbnail();
                            } else { ?>
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/top/service1.jpg" alt="<?php the_title(); ?>" />
                            <?php } ?>
                            <div class="news_card_detail">
                                <div class="news_card_category_container">
                                <?php
                                    $the_category = get_the_category();
                                    foreach ($the_category as $category) :
                                ?>
                                <p class="news_card_category">
                                    <?php
                                        echo $category->name;
                                    ?>
                                </p>
                                <?php
                                    endforeach;
                                ?>
                                </div>
                                <h4 class="news_card_title"><?php the_title(); ?></h4>
                                <p class="news_card_date"><?php the_time('Y.m.d'); ?></p>
                            </div>
                        </a>
                        <?php endwhile; ?>
                        <?php
                        else :
                        ?>
                            <p class="no_news">​お知らせ記事はありません。</p>
                        <?php endif; ?>
                    </div>
                    <div class="news_pagination">
                        <?php if(function_exists('wp_pagenavi')) wp_pagenavi(array('query' => $news_query)); ?>
                    </div>
                </div>
            </div>
        </section>
    </main>
<?php get_footer('subpage');?>