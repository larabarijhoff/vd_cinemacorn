<script>
  import * as d3 from "d3"
  import {onMount} from "svelte"

  /* Array donde guardaremos la data */
  let caras =[]

  let color_pelo = d3
    .scaleLineal().range([0, 0.9])

  let color_figura = d3
    .scaleOrdinal()
    .domain(["Netflix","Prime","Max", "Star +","National Geographic"])
    .range(["#e50914", "#00a8e1", "#50128f", "#ff6e00","ffce00"])

  let iluminacion = d3
    .scaleLineal()
    .domain([1,0])
    .range([0.35,0.80])

  let figura = d3
    .scaleOrdinal()
    .domain(["Comedia", "Terror", "Documental","Suspenso","Romance","Rom-Com","Sci-Fi"])
    .range

 



  

  
</script>

<main>
  opacity para la luminosidad de figuras 

</main>

<style>


</style>
