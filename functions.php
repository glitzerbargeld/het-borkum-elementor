<?php

/**
 * Theme functions and definitions
 *
 * @package HelloElementorChild
 */

/**
 * Load child theme css and optional scripts
 *
 * @return void
 */
function hello_elementor_child_enqueue_scripts()
{
	wp_enqueue_style(
		'hello-elementor-child-style',
		get_stylesheet_directory_uri() . '/style.css',
		[
			'hello-elementor-theme-style',
		],
		'1.0.0'
	);
	wp_enqueue_script('main-js', get_stylesheet_directory_uri() . '/index.js', array('jquery'), false);
}
add_action('wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 20);


function spiffy_scripts_styles() {
	wp_enqueue_script( 'jquery-ui-datepicker' );
	wp_register_style( 'jquery-ui', 'https://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css' );
	wp_enqueue_style( 'jquery-ui' );
	wp_add_inline_style( 'jquery-ui', '.dp-highlight a { background: orange !important; }' );
	}
	add_action('wp_enqueue_scripts', 'spiffy_scripts_styles');    // Front-end
	add_action('admin_enqueue_scripts', 'spiffy_scripts_styles');   // Back-end