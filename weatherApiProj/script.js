const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
        //console.log(regionNamesInEnglish.of('KH'));

        var input = document.getElementById("searchbox");
        input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            start();
        }
        });

        async function start(){
            console.log('loading...')
            var city = document.getElementById('searchbox').value;
            searchUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='+city+'&appid=7543369bf03121a1ae9521a5c827e0f8';

            const respone = await fetch(searchUrl);
            if(respone.ok){
                const data = await respone.json();
                console.log(data);

                document.getElementById('notFound').style.display = 'none'
                document.getElementById('Found').style.display = 'block';

                document.getElementById('cityName').innerHTML = data.name;
                document.getElementById('longitute').innerHTML = data.coord.lon;
                document.getElementById('latitute').innerHTML = data.coord.lat;
                document.getElementById('temp').innerHTML = Math.round(data.main.temp * 10)/10 + "°";
                document.getElementById('windSpeed').innerHTML = Math.round(data.wind.speed * 10)/10;
                //alert(data.weather[0].main);
                if (data.weather[0].main =="Clouds"){
                    document.getElementById('clouds').innerHTML = "ពពកច្រើន";
                }else if (data.weather[0].main =="Thunderstorm"){
                    document.getElementById('clouds').innerHTML = "ភ្លៀងខ្លាំង";
                }else if (data.weather[0].main =="Clear"){
                    document.getElementById('clouds').innerHTML = "មេឃស្រឡះ";
                }else if (data.weather[0].main =="Snow"){
                    document.getElementById('clouds').innerHTML = "ធ្លាក់ព្រឹល";
                }else if (data.weather[0].main =="Rain"){
                    document.getElementById('clouds').innerHTML = "មានភ្លៀង";
                }else if (data.weather[0].main =="Drizzle"){
                    document.getElementById('clouds').innerHTML = "រលឹម";
                }else {
                    document.getElementById('clouds').innerHTML = "ចុះអ័ព្ទ";
                }
                


                if(data.sys.country == "KH"){
                    document.getElementById('countryName').innerHTML = "កម្ពុជា";
                }
                else{
                    document.getElementById('countryName').innerHTML = regionNamesInEnglish.of(data.sys.country);
                }

            }
            else{
                document.getElementById('notFound').style.display = 'block'
                document.getElementById('Found').style.display = 'none';
            }
            
            console.log('loaded!')
        }