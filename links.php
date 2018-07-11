<!DOCTYPE html>
<html>
<head>
	<?php include('include/styles.php') ?>

	<style type="text/css">
		.alllinklist {
			padding: 100px 20px;
		}
		.alllinklist ul li {
			margin-bottom: 10px;
		}
		.alllinklist ul li a{
			position: relative;
			font-size: 16px;
			padding-left: 25px;
			color: #000000;
			font-weight: 700;
			letter-spacing: 0.050em;
			transition: all 0.3s ease-in-out;
		}
		.alllinklist ul li a:hover {
			color: #57904D;
		}
		.alllinklist ul li a:before {
			content: "\66";
			font-family: "hpfeb" !important;
			font-size: 16px;
			position: absolute;
			left: 0;
			top: 4px;
			color: #222222;
		}
	</style>
</head>
<body>
<?php include('include/header.php') ?>

<div class="alllinklist">
	<div class="container">
		<ul>
			<li><a target="_blank" href="index.php">Home</a></li>
			<li><a target="_blank" href="who-we-are.php">Who We Are</a></li>
			<li><a target="_blank" href="who-we-are-executive-committee.php">who-we-are-executive-committee</a></li>
			<li><a target="_blank" href="annualreports.php">Annual Reports</a></li>
			<li><a target="_blank" href="what-we-do.php">What We Do</a></li>
			<li><a target="_blank" href="what-we-do-workforce-development-retirementplanning.php">what-we-do-workforce-development-retirementplanning</a></li>
			<li><a target="_blank" href="what-we-do-workforce-development-payandbenefits.php">what-we-do-workforce-development-payandbenefits</a></li>
			<li><a target="_blank" href="what-we-do-workforce-development-pacificleadershipacademy.php">what-we-do-workforce-development-pacificleadershipacademy</a></li>
			<li><a target="_blank" href="what-we-do-workforce-development-allHazardsemergency.php">what-we-do-workforce-development-allHazardsemergency</a></li>
			<li><a target="_blank" href="what-we-do-workforce-development-employeerewardsprogram.php">what-we-do-workforce-development-employeerewardsprogram</a></li>
			<li><a target="_blank" href="login.php">Login</a></li>
			<li><a target="_blank" href="login2.php">Login without banner</a></li>
			<li><a target="_blank" href="portal-home.php">portal-home</a></li>
			<li><a target="_blank" href="what-we-do-emergency-preparedness.php">what-we-do-emergency-preparedness</a></li>
			<li><a target="_blank" href="what-we-do-workforce-development.php">what-we-do-workforce-development</a></li>
			<li><a target="_blank" href="what-we-do-strategic-partnerships.php">what-we-do-strategic-partnerships</a></li>
			<li><a target="_blank" href="news.php">News And Announcements</a></li>
			<li><a target="_blank" href="news-detail.php">News And Announcements Detail</a></li>
		</ul>
	</div>
</div>

	<?php include('include/footer.php'); ?>
	<?php include('include/scripts.php'); ?>

</body>
</html>