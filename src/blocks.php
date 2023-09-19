<?php

// add_action('init', function() {
//   if (!function_exists('register_block_type')) return;

//   wp_register_script(
//     'adeprimo-blocks',
//     get_template_directory_uri() . '/dist/blocks.js',
//     array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-plugins', 'wp-edit-post', 'wp-i18n' ),
//     filemtime( get_template_directory() . '/dist/blocks.js' )
//   );

//   $blocks = [
//     'adeprimo/block1'
//   ];

//   wp_set_script_translations( 'adeprimo-blocks', 'adeprimo', get_template_directory() . '/languages/' );

//   $options = array(
//     'editor_script' => 'adeprimo-blocks',
//     'style' => 'adeprimo-blocks'
//   );

//   foreach ($blocks as $block) {
//     if (is_array($block)) {
//       register_block_type( $block[0], array_merge($options, $block[1]) );
//     } else {
//       register_block_type( $block, $options );
//     }
//   }
// });