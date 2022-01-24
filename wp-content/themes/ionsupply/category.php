<?php
get_header(); ?>

<div class="blog-page-cont">

  <div class="banner-ontainer">
      <?php the_content(); ?>
  </div>
<div class="container blog-page-inner-cont">
    <div class="row gx-5">
        <div class="col-12 col-lg-8">
           <?php
            $paged = ( get_query_var( 'paged' ) ) ? absint( get_query_var( 'paged' ) ) : 1;
            $category = get_queried_object();
            $args = array(  
              'post_status' => 'publish',
              'posts_per_page' => 3, 
              'orderby' => 'title', 
              'order' => 'ASC', 
              'paged' => $paged,
              'category__in' => $category->term_id
            ); 
            $loop = new WP_Query( $args );               
            while ( $loop->have_posts() ) : $loop->the_post(); 
            $url =  wp_get_attachment_url(get_post_thumbnail_id( get_the_ID() )) ; ?>

            <div class="each-blog-post-cont">
              
              <?php  if ( $url ) { ?>
                  <img class="blog-ftrd-img" src="<?php echo  $url ; ?> " />
              <?php } ?>
              <div class="text-cont">
                  <h2><?php the_title(); ?> </h2>
              <?php the_excerpt(); 
                $auth_id=$post->post_author; ?>
              <div class="authr-read-more-detail-cont mt-5">
                  <div class="row justify-content-between align-items-center">
                      
              <div class="col-12 col-md-6">
                <div class="author-info"><?php echo get_avatar( $auth_id ); ?>
                    <p class="author-name"> <?php echo get_the_author_meta( 'display_name', $auth_id ); ?> </p>
                </div>
                <p class="post-added-on"><i class="far fa-clock"></i><?php echo get_the_date('F j, Y'); ?></p>
                </div>
                <div class="col-12 col-md-4">
                    <a class="read-more-btn" href="<?php the_permalink() ?>">Read More <span><i class="fas fa-long-arrow-alt-right"></i></span></a>
                </div>
              </div>
              </div>         
              </div>
            </div>
            
            <?php endwhile; ?>
            <div class="blog-page-pagination">
            <?php
            $big = 999999999; // need an unlikely integer

            echo paginate_links( array(
                'base'      => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                'format'    => '?paged=%#%',
                'current'   => max( 1, get_query_var('paged') ),
                'total'     => $loop->max_num_pages
            ) ); ?>
            </div>
            <?php wp_reset_postdata(); ?>
        </div>
        <div class="col-12 col-lg-4 blog-sidebar-cont">
            <form class="blog-search-form" role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
                <label>
                    <input type="search" class="search-field"
                        placeholder="<?php echo esc_attr_x( 'Search here…', 'placeholder' ) ?>"
                        value="<?php echo get_search_query() ?>" name="s"
                        title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" />
                </label>
                <button type="submit" id="searchsubmit"><span class="icon"><i class="fa fa-search"></i></span></button>
                <!-- <input type="submit" class="search-submit" value="<?php // echo esc_attr_x( 'Search', 'submit button' ) ?>" /> -->
            </form>
            <div class="all-categories-cont">
                <h3 class="sidebar-head">Blog Categories</h3>
                <ul class="categories-list-cont">
                    <?php $total = wp_count_posts()->publish; ?> 
                    <li><a href="/">All categories <span>(<?php echo $total; ?>)</span></a></li>
                    <?php
                    $categories = get_categories( array(
                        'orderby' => 'name',
                        'order'   => 'ASC',
                        'post_type'    => 'post'
                    ) );
                    foreach( $categories as $category ) {
                    echo '<li><a href="' . get_category_link($category->term_id) . '">' . $category->name . '<span>(' . $category->count . ')</span></a></li>';   
                    } ?>
                </ul>
            </div>
            <div class="latst-blog-cont">
            <h3 class="sidebar-head latest-blog">Latest Blogs</h3>
                <div class="recent-posts-cont">
                    <div class="each-post">
                      <?php 
                      $the_query = new WP_Query( array(
                          'posts_per_page' => 3,
                      )); ?>
                      <?php if ( $the_query->have_posts() ) : ?>
                      <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                      
                      <?php $url =  wp_get_attachment_url(get_post_thumbnail_id( get_the_ID() )) ?>
                      <a href="<?php the_permalink() ?>" >
                      <div class="row align-items-center mb-4">
                          <div class="col-4">
                            <img src="<?php echo  $url ; ?> " />
                        </div>
                      <div class="col-8 text-cont">
                      <h5 ><?php the_title(); ?></h5>
                      <p>
                      <?php $auth_id = $the_query->post_author; 
                          echo "By " . get_the_author_meta( 'display_name', $auth_id ); ?> | 
                      <?php echo get_the_date(); ?>
                      </p>
                      </div>
                      </div>
                      </a>
                      <?php endwhile; ?>
                      <?php wp_reset_postdata(); ?>
                      <?php else : ?>
                      <p><?php __('Currently there are no posts to display.'); ?></p>
                      <?php endif; ?>
                    </div>
                  </div>
                </ul>
            </div>
        </div>  
      </div>    
    </div>
</div> 


<?php get_footer(); ?>
