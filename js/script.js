$(document).ready(function() {
	var projectsCount = 17;
	var arr = [];

	while (arr.length < 4) {
		var randomProject = Math.floor(Math.random() * projectsCount + 1);
		if (arr.indexOf(randomProject) == -1) {
			arr.push(randomProject);
		} 
		
	}

	$('.other-project').append('<div class="project project' + arr[0] + '"><p>Проект ' + arr[0] + '</p><a href="../projectViews/project' + arr[0] + '.html"><div class="image"><div class="filler"></div><p>Подробнее о проекте</p></div></a></div>');
	$('.other-project').append('<div class="project project' + arr[1] + '"><p>Проект ' + arr[1] + '</p><a href="../projectViews/project' + arr[1] + '.html"><div class="image"><div class="filler"></div><p>Подробнее о проекте</p></div></a></div>');
	$('.other-project').append('<div class="project project' + arr[2] + '"><p>Проект ' + arr[2] + '</p><a href="../projectViews/project' + arr[2] + '.html"><div class="image"><div class="filler"></div><p>Подробнее о проекте</p></div></a></div>');
	$('.other-project').append('<div class="project project' + arr[3] + '"><p>Проект ' + arr[3] + '</p><a href="../projectViews/project' + arr[3] + '.html"><div class="image"><div class="filler"></div><p>Подробнее о проекте</p></div></a></div>');

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('.order > div:nth-of-type(1)').addClass('inactive');
			$('.order-success').addClass('active');
			$("#form").trigger("reset");
		});
		return false;
	});
	$('.order-success button').click(function() {
		$('.order > div:nth-of-type(1)').removeClass('inactive');
		$('.order-success').removeClass('active');
	});
});