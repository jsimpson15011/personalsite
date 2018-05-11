<?php
/**
 * Created by PhpStorm.
 * User: Joe Simpson
 * Date: 5/6/2018
 * Time: 12:22 PM
 */

function galactic_script_enqueue() {

    wp_enqueue_style('customstyle',get_template_directory_uri().'/css/galactic.css',[],'1.0.0');
    wp_enqueue_script('customjs',get_template_directory_uri().'/js/galactic.js',[],'1.0.0',true);
}

add_action('wp_enqueue_scripts','galactic_script_enqueue');

function galactic_theme_setup(){
    add_theme_support('menus');
    register_nav_menu('primary','Primary Header Navigation');
}

add_action('init','galactic_theme_setup');

add_theme_support('custom-background');
add_theme_support('custom-header');
add_theme_support('post-thumbnails');