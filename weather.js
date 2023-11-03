(async function(){
    const key = "ab4639f5754271e773ed6d3ffd73f327";

    async function getWeather(city){
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${key}`);
        return result.json();
    }
    const list = document.querySelector('#list');
    console.log(list)
    function showWeather(){
        list.innerHTML = `<ol>${items.map((el)=>`<li>${el}</li>`).join('')}</ol>`;
        addToLocalStorage(items); 
    }
    function showText(items){
        // const weather = await getWeather(city);
        list.innerHTML = `<ol>${items.map((el)=>`<li>${el}</li>`).join('')}</ol>`;
        // return weather
    }
    const storageKey = 'items';
    function readLocalStorage(list){
        try{
            const data = localStorage.getItem(storageKey);
            const items = data === null ? [] : JSON.parse(data);
            console.log(items,list)
            list.innerHTML = `<ol>${items.map((el)=>`<li>${el}</li>`).join('')}</ol>`;
        }catch(e){
            console.error(e);
            return [];
        }
    }
    readLocalStorage(list);
    async function addToLocalStorage(items,value){
        const weather = await getWeather(value);
        items.push(weather.main.temp);
        localStorage.setItem(storageKey,JSON.stringify(items));//??
    }
    const form = document.querySelector('form');
    form.addEventListener('submit',(ev)=>{
        
        ev.preventDefault();

        const formElement = ev.target;

        const input = formElement.querySelector('input');
        const value = input.value;
        input.value = '';
        console.log(items)
        addToLocalStorage(items,value);
        readLocalStorage(list);
        
    });
})();