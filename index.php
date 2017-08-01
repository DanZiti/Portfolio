<!DOCTYPE html>
<html lang="en-US">
	<head>
		<title>Dan Zervoudakes | A Refreshingly Minimalistic Web Development Portfolio</title>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="msapplication-tap-highlight" content="no">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0">
		<meta name="description" content="I am a passionate web/interactive developer looking to tackle new challenges. Please contact me to discuss my work or even just to chat.">
		<meta name="keywords" content="Dan Zervoudakes, Developer, Portfolio, Web, Interactive, HTML5, CSS3, JavaScript, Responsive, Photoshop, PHP">
		<meta name="author" content="Dan Zervoudakes">
		<link rel="shortcut icon" href="favicon.ico">
		<link rel="stylesheet" type="text/css" href="css/style.css" media="all">
	</head>
	<body class="overflow-<?= ($_GET['formSubmitted']) === 'true' ? 'hidden' : 'visible' ?>">
		<?php
			if ($_GET['formSubmitted'] === 'true') { ?>
				<div id="successful-form-submission-overlay" class="successful-form-submission-overlay">
					<div class="enclosure">
						<button class="close-button">X</button>
						<h3>Thank you for your submission!</h3>
						<p>I will take a look at your email soon.</p>
					</div>
				</div>
			<?php }
		?>
		<?php
			include 'includes/header.php';
		?>
		<article class="main-content">
			<div class="top">
				<div class="white-bg">
					<img class="white-border" src="images/white-border.png" alt="Border">
				</div>
				<div class="center">
					<div class="title-info">
						<h1>dan.zervoudakes</h1>
						<h2>web / interactive developer</h2>
					</div>
					<p class="city-txt">Currently Based in Denver, Colorado</p>
				</div>
				<img id="parallax" class="parallax" src="images/denver-banner.jpg" alt="Denver Skyline">
			</div>
			<?php
				include 'includes/about.php';
				include 'includes/work.php';
				include 'includes/contact.php';
			?>
		</article>
		<?php
			include 'includes/footer.php';
		?>
		<script type="text/javascript" src="js/grindstone-v3.0.1.min.js"></script>
		<script type="text/javascript" src="js/services.js"></script>
		<script type="text/javascript" src="js/portfolio.js"></script>
	</body>
</html>