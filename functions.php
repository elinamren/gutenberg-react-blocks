<?php

include "src/blocks.php";

add_action('wp_enqueue_scripts', function() {
  wp_enqueue_style('adeprimo', get_template_directory_uri().'/dist/style.css', array(), filemtime(get_template_directory().'/dist/style.css'));
  wp_enqueue_script('adeprimo', get_template_directory_uri().'/dist/script.js', array("jquery"), filemtime(get_template_directory().'/dist/script.js'), true);
});

add_action( 'after_setup_theme', function (){
  add_theme_support( 'wp-block-styles' );
  add_theme_support( 'align-wide' );
  add_theme_support( 'post-thumbnails' ); 
  add_theme_support( 'title-tag' );

  add_theme_support(
    'html5',
    array(
      'search-form',
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
      'widgets',
      'style',
      'script',
    )
  );
});