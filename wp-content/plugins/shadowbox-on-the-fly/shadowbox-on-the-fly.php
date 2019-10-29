<?php
/*
Plugin Name: Shadowbox On The Fly
Description: Instantiates Shadowbox for WordPress Galleries. User only has to activate the plugin.
Version: 1.0
Author: Paul Lyons
*/


function enqueue_shadowbox_files() {
	wp_enqueue_style('shsdowbox-css', '/wp-content/plugins/shadowbox-on-the-fly/vendor/shadowbox/shadowbox.css');
	wp_enqueue_script('jquerylib', 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js');
	wp_enqueue_script('shsdowbox-js', '/wp-content/plugins/shadowbox-on-the-fly/vendor/shadowbox/shadowbox.js');
	wp_enqueue_script('shsdowbox-local-js', '/wp-content/plugins/shadowbox-on-the-fly/js/scripts.js');
}

add_action('wp_enqueue_scripts', 'enqueue_shadowbox_files');





