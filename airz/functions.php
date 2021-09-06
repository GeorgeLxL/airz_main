<?php
    function theme_custom_setup() {
        add_theme_support( 'post-thumbnails' );
    }
    
    add_action( 'after_setup_theme', 'theme_custom_setup' );

    add_filter('query_vars', function($vars) {
        $vars[] = 'news_category';
        $vars[] = 'news_year';
        return $vars;
    });
?>