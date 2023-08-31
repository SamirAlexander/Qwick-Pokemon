import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

/*import Counter from "~/components/starter/counter/counter";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import Starter from "~/components/starter/next-steps/next-steps";*/

export default component$(() => {

  const pokemosID = useSignal(1)
  const backImage = useSignal(false)
  const isVisble =  useSignal(false)

  const stopPokemonId = $((value:number)=>{
    if (pokemosID.value + value === 0) return
    pokemosID.value +=  value
  })
  useTask$(({track})=>{
    track(()=>pokemosID.value)
    isVisble.value = true
  })

    return (
    <>
      <span class="text-2xl mb-2">Buscador Simple</span>
      <span class="text-5xl mb-3">{pokemosID} </span>
      <PokemonImage
      id = {pokemosID.value}
      size={200}
      backImage={backImage.value}
      isVisible={isVisble.value}
      />
      
      <dev>
        <button onClick$={()=>stopPokemonId(-1)} class="btn btn-primary mr-5">Retroceder</button>
        <button onClick$={()=>stopPokemonId(+1)}class="btn btn-primary">Adelantar</button>
        <button onClick$={()=>backImage.value = !backImage.value}class="btn btn-primary ml-5">Voltear</button>
        <button onClick$={()=>{isVisble.value = !isVisble.value}}class="btn btn-primary ml-5">Revelar</button>
      </dev>
    </>
  );
});

export const head: DocumentHead = {
  title: "PokeQwik",
meta: [
    {
      name: "description",
      content: "Esta es una aplicacion de Pokemons",
    },
  ],
};
