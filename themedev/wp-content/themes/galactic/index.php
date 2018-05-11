<?php get_header(); ?>
    <div class="margin"></div

    <?php if( have_posts() ):
        while ( have_posts() ): the_post();?>
            <section class="main">
                <h2>
                <?php the_title(); ?>
            </h2>
            <p>
                <?php the_content(); ?>
            </p>
        <small>
            Posted: <?php the_time('F j, Y')?>
            </br>Category: <?php the_category()?>
        </small>
        <hr>
    </section>
    <?php
        endwhile;
        endif;
    ?>

<?php get_footer(); ?>
