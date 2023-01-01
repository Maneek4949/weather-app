




document.querySelector(".search button").addEventListener("click",function(){
	let location=document.querySelector(".search-bar")

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '97a726d101mshb9928d8a2920189p15fd46jsn5d6e5f39362f',
			'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
		}
	};
	fetch("https://yahoo-weather5.p.rapidapi.com/weather?location="+location.value+"&format=json&u=f", options)
		.then(response => response.json())
		.then(response => {console.log(response)
		console.log(response.location)}
		)
		.catch(err => console.error(err));
})