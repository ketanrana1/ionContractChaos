<?php
if( ! function_exists( 'better_comments' ) ):
function better_comments($comment, $args, $depth) {
    ?>
   <div <?php comment_class(); ?> id="li-comment-<?php comment_ID() ?>">

   <div class="each-comment">
       <div class="author-image">
       <?php echo get_avatar($comment,$size='120',$default='http://0.gravatar.com/avatar/36c2a25e62935705c5565ec465c59a70?s=32&d=mm&r=g' ); ?>
        </div>
        <div class="author-name-reply-btn">
            <div class="row">
                <div class="col-6">
                    <h3 class="comment-by"><?php echo get_comment_author() ?></h3>
                    <h5 class="date"><?php printf(/* translators: 1: date and time(s). */ esc_html__('%1$s at %2$s' , '5balloons_theme'), get_comment_date(),  get_comment_time()) ?></h5>
                </div>
                <div class="col-6">          
                    <div class="reply-button">
                        <?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
                    </div>                    
                </div>
                <div class="col-12">
                    <div class="comment-text">
                        <p> <?php comment_text() ?></p>
                    </div>
                </div>
            </div>
            <?php if ($comment->comment_approved == '0') : ?>
                    <em><?php esc_html_e('Your comment is awaiting moderation.','5balloons_theme') ?></em>
                    <br />
                <?php endif; ?>
        </div>
        
   </div>

<?php
        }
endif;
