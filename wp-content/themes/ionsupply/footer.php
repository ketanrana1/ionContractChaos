<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!-- #content -->

<!--	--><?php //get_template_part( 'template-parts/footer/footer-widgets' ); ?>

<footer class="ion-ft-wrapper">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="ft-logo-with-text">
                    <div class="logo-wrapper">
                        <img src="<?php echo get_stylesheet_directory_uri() ?>/assets/images/logo.png" alt="" class="logo" />
                    </div>
                    <p>iON-SUPPLY CHAIN is a cloud-based, proprietary production monitoring and tracking system that combats the high costs and surprises associated with late deliveries and incorrect shipments.</p>
                </div>
            </div>
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-4">
                        <div class="ion-common-ft-col">
                            <p class="title">QUICK LINKS</p>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Meet the Team</a></li>
                                <li><a href="#">We’re Hiringrem Ipsum</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="ion-common-ft-col">
                            <p class="title">RESOURCES</p>
                            <ul>
                                <li><a href="#">News/Blog</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Supply</a></li>
                                <li><a href="#">COVID-19</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="ion-common-ft-col">
                            <p class="title">CONTACT US</p>
                            <ul>
                                <li><a href="#">info@ionsupply.com</a></li>
                                <li><a href="#">media@supply.com</a></li>
                                <li><a href="#">(844) 424-6844</a></li>
                                <li><a href="#">Request a Demo</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <p class="ion-copyright">© iON Supply 2020. All rights reserved.</p>
            </div>
        </div>
    </div>
</footer>


	<footer id="colophon" class="site-footer" role="contentinfo">

		<?php if ( has_nav_menu( 'footer' ) ) : ?>
			<nav aria-label="<?php esc_attr_e( 'Secondary menu', 'twentytwentyone' ); ?>" class="footer-navigation">
				<ul class="footer-navigation-wrapper">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer',
							'items_wrap'     => '%3$s',
							'container'      => false,
							'depth'          => 1,
							'link_before'    => '<span>',
							'link_after'     => '</span>',
							'fallback_cb'    => false,
						)
					);
					?>
				</ul><!-- .footer-navigation-wrapper -->
			</nav><!-- .footer-navigation -->
		<?php endif; ?>
<!--		<div class="site-info">-->
<!--			<div class="site-name">-->
<!--				--><?php //if ( has_custom_logo() ) : ?>
<!--					<div class="site-logo">--><?php //the_custom_logo(); ?><!--</div>-->
<!--				--><?php //else : ?>
<!--					--><?php //if ( get_bloginfo( 'name' ) && get_theme_mod( 'display_title_and_tagline', true ) ) : ?>
<!--						--><?php //if ( is_front_page() && ! is_paged() ) : ?>
<!--							--><?php //bloginfo( 'name' ); ?>
<!--						--><?php //else : ?>
<!--							<a href="--><?php //echo esc_url( home_url( '/' ) ); ?><!--">--><?php //bloginfo( 'name' ); ?><!--</a>-->
<!--						--><?php //endif; ?>
<!--					--><?php //endif; ?>
<!--				--><?php //endif; ?>
<!--			</div>-->
<!--			<div class="powered-by">-->
<!--				--><?php
//				printf(
//					/* translators: %s: WordPress. */
//					esc_html__( 'Proudly powered by %s.', 'twentytwentyone' ),
//					'<a href="' . esc_url( __( 'https://wordpress.org/', 'twentytwentyone' ) ) . '">WordPress</a>'
//				);
//				?>
<!--			</div>-->
<!---->
<!--		</div>-->
	</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>
<script src="<?php echo get_stylesheet_directory_uri() ?>/assets/js/jquery-3.2.1.js"></script>
<script src="<?php echo get_stylesheet_directory_uri() ?>/assets/js/bootstrap.min.js"></script>
<script src="<?php echo get_stylesheet_directory_uri() ?>/assets/js/custom.js"></script>
</body>
</html>
