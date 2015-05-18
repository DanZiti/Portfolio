<!DOCTYPE html>
<html lang="en-US">
	<head>
		<title>Dan Zervoudakes | Web Development Portfolio</title>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="msapplication-tap-highlight" content="no">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0">
		<meta name="description" content="I am a web/interactive developer and this is my portfolio. Please contact me to discuss potential opportunities.">
		<meta name="keywords" content="Developer, Portfolio, Web, Interactive, HTML5, CSS3, JavaScript, Responsive, Photoshop, PHP">
		<meta name="author" content="Dan Zervoudakes">
		<link rel="shortcut icon" href="favicon.ico">
		<link rel="stylesheet" type="text/css" href="css/style.css" media="all">
		<script type="text/javascript" src="js/grindstone-v1.2.5.min.js"></script>
		<script type="text/javascript" src="js/global.js"></script>
	</head>
	<body>
		<?php
			include 'templates/header.php';
		?>
		<article id="main-content">
			<div id="top">
				<div class="white-bg">
					<img class="white-border" src="img/white-border.png" alt="Border">
				</div>
				<div class="center">
					<div id="title-info">
						<h1>dan.zervoudakes</h1>
						<h2>web / interactive developer</h2>
					</div>
					<p class="city-txt">Currently Based in the Greater Philadelphia Area</p>
				</div>
				<img id="philly" src="img/philly-banner.jpg" alt="Philadelphia Skyline">
			</div>
			<?php
				include 'templates/about.php';
				include 'templates/work.php';
				include 'templates/contact.php';
			?>
		</article>
		<?php
			include 'templates/footer.php';
		?>
		<script type="text/javascript" src="js/script.js" async></script>
		<script type="text/javascript" src="js/parallax.js" async></script>
	</body>
</html>