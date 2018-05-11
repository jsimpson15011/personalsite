<html>
<head>
    <meta charset="utf-8">
    <title><?php
        echo get_bloginfo('name');
        ?>
    </title>
    <?php wp_head(); ?>
</head>
<?php
if( is_front_page() ):
    $galactic_classes = array('galactic-class');
else:
    $galactic_classes = array('no-galactic-class');
endif;
?>
<body <?php body_class($galactic_classes);?>>


<?php
$site_title = get_bloginfo('name');
$site_description = get_bloginfo('description');
?>
<header id="main-header" class="fade-in">
    <section id="main-header-content">
        <h1><?php echo $site_title ?></h1>
        <h2><?php echo $site_description ?></h2>
        <?php wp_nav_menu(); ?>
        <img src="<?php header_image();?>"/>
    </section>
</header>
