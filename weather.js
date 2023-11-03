(async function(){
    const key = "ab4639f5754271e773ed6d3ffd73f327";

    async function getWeather(city){
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${key}`);
        return result.json();
    }
    const list = document.querySelector('#list');
    async function addText(city){
        const weather = await getWeather(city);
        console.log(weather.main.temp)
        list.innerHTML = `<ol>${`<li>${weather.main.temp}</li>`}</ol>`;
    }
    const form = document.querySelector('form');
    form.addEventListener('submit',(ev)=>{

        ev.preventDefault();

        const formElement = ev.target;

        const input = formElement.querySelector('input');
        const value = input.value;
        input.value = '';
        
        addText(value)
    })
})();