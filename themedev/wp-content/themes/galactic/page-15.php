<?php
get_header('opening');
?>
    <div class="margin"></div>
<section class="main">
    <?php if( have_posts() ):
    while ( have_posts() ): the_post();?>
        <h2>
            <?php the_title(); ?>
        </h2>
        <p>
            <?php the_content(); ?>
        </p>
        <small>
        Posted: <?php the_time('F j, Y')?>
        </small>
    <?php
    endwhile;
endif;
    ?>
    </section>
<?php get_footer(); ?>