		<div class="wrap">
	            <footer id="bottom">
	                <small id="footer-text">&copy; <?php echo date('Y'); ?> <?php echo site_name(); ?>. All rights reserved.</small>

	                <ul role="navigation">
	                    <li><a href="<?php echo github_url(); ?>">Github</a></li>
	                    <?php if(twitter_account()): ?>
	                    <li><a href="<?php echo twitter_url(); ?>">@<?php echo twitter_account(); ?></a></li>
	                    <?php endif; ?>
	                   	<li><a href="<?php echo soundcloud_url(); ?>">SoundCloud</a></li>
	                   	<li><a href="<?php echo linkedin_url(); ?>">LinkedIn</a></li>
	                    <li><a href="<?php echo base_url('admin'); ?>" title="Administer your site!">Admin</a></li>

	                    <li><a href="/" title="Return to my website.">Home</a></li>
	                </ul>
	            </footer>

	        </div>
        </div>
    </body>
</html>