<script>
  import * as d3 from "d3"
  import {onMount} from "svelte"

  /* Array donde guardaremos la data */
  let peliculas = []

  let color_pelo = d3.scaleLinear()

  let hue_figura = d3
    .scaleOrdinal()
    .domain(["Netflix","Prime","Max", "Star +","National Geographic"])
    .range([357, 195, 270, 26, 48])

  let luminosidad = d3 // luminosidad de color de tipito
    .scaleLinear()
    .domain([1,0])
    .range([35,80])

  let cant_ojeras = d3
    .scaleOrdinal()
    .domain([1, 2, 3, 4, 5, 6])
    .range(["./images/ojeras/unaOjera.svg", "./images/ojeras/dosOjeras.svg", "./images/ojeras/tresOjeras.svg", "./images/ojeras/cuatroOjeras.svg", "./images/ojeras/cincoOjeras.svg", "./images/ojeras/seisOjeras.svg"])

  onMount(() => {
    d3.csv("./data/peliculas.csv", d3.autoType).then(data => {
      console.log(data)

      /* Actualizamos dominio con la data de edad */
      let minMaxEdad = d3.extent(data, d => d.edad)
      color_pelo = color_pelo.domain(minMaxEdad).range([0, 90])

      peliculas = data
    })
  })
</script>

<main> 
  <div class = "header">
    <h1>
      Who's watching?
    </h1>
  </div>

  <div class="mini-container">
    <div class= "container">
      {#each peliculas as peli}
        <div class = "person-container">
          <div class = "figura">
            {#if peli.genero_peli === "Comedia"}  <!-- genero de peli = forma de figura -->
              <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill={`hsl(${hue_figura(peli.plataforma)}, 100%, ${luminosidad(peli.acompanado)}%)`}/>
              </svg>
            {:else if peli.genero_peli === "Terror"}
              <svg width="98" height="80" viewBox="0 0 98 80" xmlns="http://www.w3.org/2000/svg">
                <path d="M69.6453 79.9999H28.8619C27.189 80.0002 23.2535 79.9999 23.2535 79.9999L21.5 75.0869L0 10.1553V10.274C0 9.73668 0 10.1553 0 
                10.1553H0.938717L90.903 10.1553C94.5 10.0777 94.5 10.0777 94.5 10.0777C94.5 10.0777 97.5192 10.1591 97.5 10.0777V11.1522V10.615L77 
                75.0869L75.2536 79.9999C75.2536 79.9999 71.3181 80.0002 69.6453 79.9999Z" fill={`hsl(${hue_figura(peli.plataforma)}, 100%, ${luminosidad(peli.acompanado)}%)`}/>
              </svg>
            {:else if peli.genero_peli === "Documental"}
              <svg width="75" height="75" viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="75" height="75" fill={`hsl(${hue_figura(peli.plataforma)}, 100%, ${luminosidad(peli.acompanado)}%)`}/>
              </svg>
            {:else if peli.genero_peli === "Suspenso"}
              <svg width="78" height="90" viewBox="0 0 78 90" xmlns="http://www.w3.org/2000/svg">
                <path d="M39 0L77.9711 22.5V67.5L39 90L0.0288582 67.5V22.5L39 0Z" 
                fill={`hsl(${hue_figura(peli.plataforma)}, 100%, ${luminosidad(peli.acompanado)}%)`}/>
              </svg>
            {:else if peli.genero_peli === "Romance"}
              <svg width="84" height="82" viewBox="0 0 84 82" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.6667 81.5229L35.625 75.6929C14.1667 55.0671 0 41.4196 0 24.7687C0 11.1212 10.0833 0.477081 22.9167 0.477081C30.1667 0.477081 37.125 
                4.05458 41.6667 9.66375C46.2083 4.05458 53.1667 0.477081 60.4167 0.477081C73.25 0.477081 83.3333 11.1212 83.3333 24.7687C83.3333 41.4196 69.1667 
                55.0671 47.7083 75.6929L41.6667 81.5229Z" fill={`hsl(${hue_figura(peli.plataforma)}, 100%, ${luminosidad(peli.acompanado)}%)`}/>
              </svg>
            {:else if peli.genero_peli === "Rom-Com"}
              <svg width="82" height="82" viewBox="0 0 82 82" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.8333 0.5L69.4711 12.3622L81.3333 41L69.4711 69.6378L40.8333 81.5L12.1955 69.6378L0.333313 
                41L12.1955 12.3622L40.8333 0.5Z" fill={`hsl(${hue_figura(peli.plataforma)}, 100%, ${luminosidad(peli.acompanado)}%)`}/>
              </svg>
            {:else if peli.genero_peli === "Sci-Fi"}
              <svg width="81" height="80" viewBox="0 0 81 80" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.8334 0C30.2285 0.0103977 20.0614 3.62597 12.5626 10.0535C5.06374 16.4811 0.845566 
                25.1958 0.833435 34.2857C0.833435 42.8571 6.06677 53.95 14.8376 63.9286C23.6626 73.9821 33.3793 
                80 40.8334 80C48.2876 80 58.0043 73.9964 66.8293 63.9286C75.6001 53.9286 80.8334 42.8571 80.8334 
                34.2857C80.8213 25.1958 76.6031 16.4811 69.1043 10.0535C61.6055 3.62597 51.4384 0.0103977 
                40.8334 0Z" fill={`hsl(${hue_figura(peli.plataforma)}, 100%, ${luminosidad(peli.acompanado)}%)`}/> 
              </svg>
            {/if}
          </div>

          <div class = "pelo">
            {#if peli.genero === "Mujer"}   <!--- genero = tipo de pelo -->
            <svg class="pelo-mujer" width="140" height="87" viewBox="0 0 140 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.5 9.0131C45.5 9.0131 40.4 13.1153 38 17.5153C35 
                23.0153 36.5 35.5154 38 39.5153C39.5 43.5153 35 73.5152 33.5 75.0153C33.2914 75.224 33.0634 75.6164 
                32.7623 76.1347C30.8983 79.3431 26.2315 87.3762 6 86.5153C5.2 86.5153 2 85.8487 0.5 85.5153L0 
                85.0153C4.16667 82.682 12.7 75.6153 13.5 66.0153C14.8333 60.3487 15 45.0154 15 42.5153C15 42.1662 
                14.9025 41.3092 14.762 40.0737C13.8961 32.4615 11.3963 10.4845 20 4.46189C30 -2.5381 47.5 -0.486897 
                57.5 5.0131L48.5 9.0131ZM91.5 9.0131C94.5 9.0131 99.6 13.1153 102 17.5153C105 23.0153 103.5 35.5154 
                102 39.5153C100.5 43.5153 105 73.5152 106.5 75.0153C106.709 75.224 106.937 75.6164 107.238 
                76.1347C109.102 79.3431 113.768 87.3762 134 86.5153C134.8 86.5153 138 85.8487 139.5 85.5153L140 
                85.0153C135.833 82.682 127.3 75.6153 126.5 66.0153C125.167 60.3487 125 45.0154 125 42.5153C125 
                42.1662 125.097 41.3092 125.238 40.0737C126.104 32.4615 128.604 10.4845 120 4.46189C110 -2.5381 
                92.5 -0.486897 82.5 5.0131L91.5 9.0131Z" fill={`hsl(0, 0%, ${color_pelo(peli.edad)}%)`}/>
              </svg>
            {:else if peli.genero === "Hombre"}
              <svg class="pelo-hombre" width="108" height="65" viewBox="0 0 108 65" xmlns="http://www.w3.org/2000/svg">
                <path d="M107.746 41.3067C107.745 39.9137 107.361 38.5439 106.631 37.3259C105.9 36.1079 104.847 
                35.0818 103.57 34.3439C103.948 33.4298 104.18 32.4465 104.18 31.407C104.175 29.3997 103.378 
                27.4632 101.937 25.9625C100.496 24.4617 98.5117 23.5004 96.3578 23.2595C96.7786 22.1937 97.0462 
                21.0585 97.0462 19.8573C97.0462 17.2318 95.9188 14.7137 93.9121 12.8572C91.9054 11.0006 89.1838 
                9.95761 86.3459 9.95761C84.937 9.95761 83.5995 10.2249 82.369 10.6836C81.7623 8.58604 80.4256 
                6.73182 78.5656 5.40763C76.7056 4.08345 74.4259 3.36304 72.0789 3.3578C68.9759 3.3578 66.2081 
                4.59856 64.2535 6.54881C62.7483 2.76711 58.8534 0.0578918 54.2452 0.0578918C49.6369 0.0578918 
                45.7421 2.76711 44.2369 6.54881C43.2422 5.54486 42.0331 4.74287 40.6861 4.1936C39.3391 3.64432 
                37.8835 3.35972 36.4114 3.3578C34.0648 3.36265 31.7853 4.08297 29.9258 5.40728C28.0663 6.73158 
                26.7304 8.58602 26.1249 10.6836C24.8607 10.2077 23.5093 9.96123 22.1444 9.95761C19.3066 9.95761 
                16.5849 11.0006 14.5782 12.8572C12.5715 14.7137 11.4442 17.2318 11.4442 19.8573C11.4442 21.0585 
                11.7117 22.1937 12.1326 23.2595C9.97868 23.5004 7.99435 24.4617 6.55358 25.9625C5.11279 27.4632 
                4.31506 29.3997 4.31071 31.407C4.31071 32.4465 4.54255 33.4298 4.92062 34.3439C3.65237 35.0773 
                2.60483 36.095 1.87515 37.3029C1.14547 38.5107 0.757297 39.8694 0.746625 41.2531C0.735953 42.6368 
                1.10313 44.0005 1.8141 45.2178C2.52507 46.4352 3.55681 47.4667 4.81362 48.2167C4.48281 49.1839 
                4.31323 50.192 4.31071 51.2064C4.31071 55.7636 7.50295 59.4562 11.4442 59.4562C12.6105 59.4562 
                13.6913 59.1031 14.665 58.5289C16.2486 63.2907 18.5777 65.9966 18.5777 59.4562C18.5777 54.2258 
                18.6241 51.0348 21.2884 45.9893C25.5293 47.3191 31.6605 46.514 37.4565 43.4186C38.435 42.8927 
                39.3795 42.3142 40.2849 41.6862C41.6332 46.1807 47.3685 49.5565 54.2452 49.5565C58.8677 49.5565 
                62.9373 48.0055 65.5411 45.6395C67.2388 49.7941 72.6817 52.8564 79.2124 52.8564C83.0502 52.8564
                86.5207 51.7938 89.0816 50.0812C90.0161 53.0973 90.0518 55.7669 90.0518 59.4562C90.0518 67.2044 
                92.4558 63.9375 94.043 58.6642C94.956 59.1592 95.969 59.4562 97.0462 59.4562C100.987 59.4562 
                104.18 55.7636 104.18 51.2064C104.18 50.1472 103.991 49.144 103.68 48.2167C104.927 47.4702 
                105.953 46.4468 106.663 45.2399C107.373 44.033 107.745 42.6809 107.746 41.3067Z" fill={`hsl(0, 0%, ${color_pelo(peli.edad)}%)`}/>
              </svg>
            {:else if peli.genero === "Otro"}
              <svg class="pelo-otro" width="108" height="80" viewBox="0 0 108 80" xmlns="http://www.w3.org/2000/svg">
                <path d="M102.476 75.6128C102.476 75.6128 98.9908 37.6736 76.0962 36.7201C53.1933 35.7636 
                24.3214 31.807 21.3348 28.8042C18.0168 34.265 15.1973 42.862 12.5415 50.7749C9.88424 58.688 10.0516 
                79.1605 10.0516 79.1605C10.0516 79.1605 0.424943 49.6825 0.754648 39.3087C1.08435 28.9405 7.55985 16.929 
                19.1744 14.4738C29.4637 -1.35793 78.2529 -6.27076 97.6652 16.2478C117.081 38.7636 102.476 75.6128 
                102.476 75.6128Z" fill={`hsl(0, 0%, ${color_pelo(peli.edad)}%)`}/>
              </svg>
            {/if}
          </div>
          
          <div class = "ojeras">
            <img src={cant_ojeras(peli.max_peli)} alt="Ojeras">
          </div>
          
          <p class="name">
            {peli.nombre}
          </p>
        </div>
      {/each}
    </div>
  </div>  
 
        
</main>

<style>
  .header {
    font-family: 'Helvetica';
    font-size: 24px;
    color: rgb(226, 226, 226);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 250px;
    margin-bottom: 100px;
  }
  .header h1{
    position: fixed;
  }
 
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: end;
    flex-wrap: nowrap;
    width: 15000px;
    height: 250px;
    gap: 200px;
    padding-left: 110px;
    padding-right: 200px;
    
  }
  .person-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center; 
    width: 180px; 
    height: 180px; 
    transform-origin: center center;
  } 
  .figura {
    transform: scale(2);
    filter: drop-shadow(-10px 10px 15px rgba(255, 255, 255, 0.1));  
  }
  
  .pelo {
    position: absolute;
    filter: drop-shadow(0px -10px 15px rgba(255, 255, 255, 0.1));
  }
  .pelo-mujer {
    transform: scale(1.65) translate(0%, -43%)
  }
  .pelo-hombre {
    transform: scale(2.1) translate(0%, -75%);
  }
  .pelo-otro {
    transform: scale(1.6) translate(0%, -70%);
  }
  .ojeras {
    position: absolute;
    transform: scale(1.5) translate(0%, -85%);
  }
  .name {
    font-size: 20px;
    font-family: 'Helvetica';
    color: rgb(142, 141, 141);
    font-weight: normal;
    text-align: center;
    margin-top: auto;
  }
</style>
