<div   class="o-clients__col o-clients__col--left d-block d-md-none">
			  <div class="swiper clients_slider"> 
				  <div class="swiper-wrapper">
					  <?php
						$clients_ids = get_post_meta( $pageid, 'select_clients', true);
						if ( !$clients_ids ) {
							$clients_ids = 'all';
						}
						$client_args = array(
							'hide_empty' => false, 
							'include' => $clients_ids,
							'number' => 24,
							'orderby' => 'meta_value_num',
							'order' => 'ASC',
							'meta_key' => 'client_priority',
						);
						$clientlist = get_terms( 'client', $client_args );
						if ( $clientlist ) {
							foreach ( $clientlist as $client ) {
								$logo_image_id = get_term_meta( $client->term_id, 'client_logo', true);
								$logo_hover_image_id = get_term_meta( $client->term_id, 'client_logo_hover', true);
								$logo_image_alt = get_post_meta($logo_image_id, '_wp_attachment_image_alt', true);
								$logo_hover_image_alt = get_post_meta($logo_hover_image_id, '_wp_attachment_image_alt', true);
					  ?>
					  <div class="swiper-slide">
						  <div class="hover_section">
							  <img src="<?php  echo wp_get_attachment_url( $logo_image_id); ?>" alt="<?php echo esc_attr($logo_image_alt); ?>" class="img-fluid" loading="lazy">
							  <img src="<?php echo wp_get_attachment_url( $logo_hover_image_id);?>" alt="<?php echo esc_attr($logo_hover_image_alt); ?>" class="img-fluid hover_img">
						  </div>
					  </div>  
					  <?php } } ?>
				  </div>
				  <div class="swiper-pagination"></div>
			  </div>
<!-- 			  <div class="swiper clients_slider"> 
						   <div class="o-clients__items swiper-wrapper">
            <?php
            // $clients_ids = get_post_meta( $pageid, 'select_clients', true);
            // if ( !$clients_ids ) {
             //  $clients_ids = 'all';
            // }
           //  $client_args = array(
            // //   'hide_empty' => false, 
              // 'include' => $clients_ids,
			// 	'number' => 24,
			// 	'orderby' => 'meta_value_num',
              // 'order' => 'ASC',
              // 'meta_key' => 'client_priority',
           //  );
            // $clientlist = get_terms( 'client', $client_args );
            // if ( $clientlist ) {
             //  foreach ( $clientlist as $client ) {
                // $logo_image_id = get_term_meta( $client->term_id, 'client_logo', true);
               //  $logo_hover_image_id = get_term_meta( $client->term_id, 'client_logo_hover', true);
			  // $logo_image_alt = get_post_meta($logo_image_id, '_wp_attachment_image_alt', true);
			// $logo_hover_image_alt = get_post_meta($logo_hover_image_id, '_wp_attachment_image_alt', true);
								?>
            <div class="o-clients__item  swiper-slide">
				<div itemscope itemtype="https://schema.org/Brand"  >
					 
              <img itemprop="image"  src="<?php  // echo wp_get_attachment_url( $logo_image_id); ?>" alt="<?php // echo esc_attr($logo_image_alt); ?>"
                 class=o-clients__logo loading="lazy" >
              <img  src="<?php // echo wp_get_attachment_url( $logo_hover_image_id);?>" alt="<?php // echo esc_attr($logo_hover_image_alt); ?>"
                 class=o-clients__image loading="lazy">
				</div>
            </div>
            <?php // } } ?>
          </div>  
			  </div> -->
         
        <div class="read-more-wrapper d-block d-md-none">
         <a href="<?php echo get_site_url(); ?>/our-clients/" class="read-more-two smallerview">
              <span class="read-more-icon"></span>
              <span class="read-more-square"></span>
              <span class="text">View more</span>
            </a>
        </div> 
		  <!-- 		  client mobile-slider end -->
        
    </div> 
		
        <div class="read-more-wrapper d-none d-md-block mt-lg-4 mt-2">
     <a href="<?php echo get_site_url(); ?>/our-clients/" class="read-more-two smallerview">
              <span class="read-more-icon"></span>
              <span class="read-more-square"></span>
              <span class="text">See all our clients</span>
            </a>
        </div>
  </div> 
	  </div>