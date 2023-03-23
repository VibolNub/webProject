fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=phnom%20penh&appid=7543369bf03121a1ae9521a5c827e0f8')
.then(res => res.json())
.then(data => alert(data.name))