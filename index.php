<?php
get_header(); 

if ( have_posts() ) {
    ?>
        <?php
        while ( have_posts() ) {
            the_post();
            ?><article class="content"><?php
            the_content();
            ?></article><?php
        }
        ?>
    <?php
}

get_footer();