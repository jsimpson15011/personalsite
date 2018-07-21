<?php
get_header('opening');
?>
    <div class="margin"></div>
<section class="main">
<!--    <?php /*if( have_posts() ):
    while ( have_posts() ): the_post();*/?>
        <h2>
            <?php /*the_title(); */?>
        </h2>
        <p>
            <?php /*the_content(); */?>
        </p>
        <small>
        Posted: <?php /*the_time('F j, Y')*/?>
        </small>
    --><?php
/*    endwhile;
endif;
    */?>
    <?php
    $sub= Ninja_Forms()->form()->sub( 1 )->get();

    $id= $sub->get_id();

    //$field_values = $sub->get_field_value( $field_key );

    echo $id;
    echo json_encode($sub);?>
        <img src="<?php echo get_bloginfo('template_url') ?>/img/animation.jpg"/>
    </section>
<?php get_footer(); ?>