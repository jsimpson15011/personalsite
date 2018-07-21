<?php get_header(); ?>
    <div class="margin"></div

    <?php if( have_posts() ):
        while ( have_posts() ): the_post();
        if ($wp_query->current_post == 0 && !is_paged() ):?>
            <section class="main-opening-post">
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
        <?php else: ?>
            <section class="main-posts">
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
        <?php endif?>
    <?php
        endwhile;
        endif;
    ?>
<?php
$sub= Ninja_Forms()->form()->sub( 1 )->get();

$id= $sub->get_id();

//$field_values = $sub->get_field_value( $field_key );

echo $id;
echo json_encode($sub);?>
<?php get_footer(); ?>
