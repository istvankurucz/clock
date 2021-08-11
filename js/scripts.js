$(document).ready(function () {
	const setPins = () => {
		let now = new Date();
		let hours = now.getHours();
		let minutes = now.getMinutes();
		let seconds = now.getSeconds();

		// Setting the pins
		$(".second-pin").css("transform", `rotate(${6 * (seconds - 15)}deg)`);
		$(".minute-pin").css("transform", `rotate(${6 * (minutes - 15)}deg)`);
		$(".hour-pin").css("transform", `rotate(${30 * (hours - 3 + minutes / 60)}deg)`);

		// Setting the digital clock
		if (minutes < 10) minutes = `0${minutes}`;
		if (seconds < 10) seconds = `0${seconds}`;
		if (hours < 13) {
			if (hours < 10) hours = `0${hours}`;
			$(".hours").text(hours);

			$(".am button").addClass("active");
			$(".am span").addClass("active");

			$(".pm button").removeClass("active");
			$(".pm span").removeClass("active");
		} else {
			hours -= 12;
			if (hours < 10) hours = `0${hours}`;
			$(".hours").text(hours);

			$(".am button").removeClass("active");
			$(".am span").removeClass("active");

			$(".pm button").addClass("active");
			$(".pm span").addClass("active");
		}

		$(".minutes").text(minutes);
		$(".seconds").text(seconds);
	};

	setPins();
	setInterval(setPins, 1000);
});
