(function () {
	const key="35deabced749ce34686ceaf0e43d41f0"
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '97a726d101mshb9928d8a2920189p15fd46jsn5d6e5f39362f',
			'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
		}
	};
	
	fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=delhi&format=json&u=f`, options)
		.then(response => response.json())
		.then(response => {
	showData(response);}
		)
})()
function showData(response){
	let city=response.location.city
	let temp=Math.trunc((response.current_observation.condition
	.temperature-32)*0.555555556)
	let humid=response.current_observation.atmosphere.humidity
	let text=response.current_observation.condition.text
	let wind=response.current_observation.wind.direction
	let speed=response.current_observation.wind.speed
	document.getElementById("weather").innerHTML=`
	<h2>Weather in ${city}</h2>
	<div class="temp">${temp}°</div>
	<div class="discription">${text}</div>
	<div class="humidity">Humidity: ${humid}%</div>
	<div class="wind">Wind Direction:  ${wind}</div>
	<div> speed:  ${speed}km/h</div>`;
	let other=""
	response.forecasts.forEach((day,idx)=>{
		if (idx>6){
			return
		}
		let high=Math.trunc((day.high-32)*0.555555556)
		let low=Math.trunc((day.low-32)*0.555555556)
		other+=`
	<div class="weather-forcast" id="weather-forcast">
	  <div class="weather-items">
	  <div class="day">${day.day}</div>
	  <div>${text}</div>
	  <div class="temp">Night ${low}°</div>
	  <div class="temp">Day ${high}°</div>
	</div>`
	})
	document.getElementById("future").innerHTML=other;
}
document.querySelector(".search button").addEventListener("click",function(){
	let location=document.querySelector(".search-bar").value
	const key="35deabced749ce34686ceaf0e43d41f0"
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '97a726d101mshb9928d8a2920189p15fd46jsn5d6e5f39362f',
				'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
			}
		};
		
		fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=f`, options)
			.then(response => response.json())
			.then(response => {
		showData(response);}
			)
	})