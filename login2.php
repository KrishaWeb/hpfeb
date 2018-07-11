<!DOCTYPE html>
<html lang="en">
<head>
	<?php include('include/styles.php'); ?>
</head>
<body>
	<?php include('include/header.php'); ?>
	<div class="breadcrumb-wrap">
		<div class="container">
			<ol class="breadcrumb">
				<li><a href="#">HOME</a></li>
				<li class="active">LOGIN</li>
			</ol>
		</div>
	</div>
	<div class="login-wrap">
		<div class="container">
			<div class="row clearfix">
				<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
					<div class="login-wrap-left">
						<h3>Enter Password</h3>
						<div class="login-form">
							<form>
								<label>Enter your password to enter</label>
								<div class="form-group">
									<input type="text" class="form-control">
									<input type="submit" class="submit" value="LOGIN">
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
					<div class="login-wrap-right">
						<h3>Request Access</h3>
						<div class="access-form">
							<div class="gform_wrapper">
								<form>
									<div class="gform_body">
										<ul class="gform_fields top_label form_sublabel_below description_below">
											<li class="gfield select-dropdown">
												<label class="gfield_label" >Select Agency</label>
												<div class="ginput_container ginput_container_select">
													<select class="medium gfield_select">
														<option>Please Select Your Agency</option>
														<option>Agency 1</option>
														<option>Agency 2</option>
													</select>
												</div>
											</li>
											<li class="gfield">
												<label class="gfield_label">First Name</label>
												<div class="ginput_container ginput_container_text">
													<input type="text" class="medium">
												</div>
											</li>
											<li class="gfield">
												<label class="gfield_label">Last Name</label>
												<div class="ginput_container ginput_container_text">
													<input type="text" class="medium">
												</div>
											</li>
											<li class="gfield">
												<label class="gfield_label">Your Email Address</label>
												<div class="ginput_container ginput_container_text">
													<input type="text" class="medium">
												</div>
											</li>
											<li class="gfield">
												<label class="gfield_label">Job Title</label>
												<div class="ginput_container ginput_container_text">
													<input type="text" class="medium">
												</div>
											</li>
											<li class="captcha">
												<div class="ginput_recaptcha">
													<img src="images/captcha.png" alt="">
												</div>
											</li>
			                            </ul>
			                        </div>
							        <div class="gform_footer top_label">
							        	<input type="submit" class="gform_button button" value="REQUEST ACCESS"">
							        </div>
		                        </form>
	                        </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<?php include('include/footer.php'); ?>
	<?php include('include/scripts.php'); ?>
</body>
</html>