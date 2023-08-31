import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";

interface Props{
  id: number,
  size?:number,
  backImage? : boolean,
  isVisible? : boolean
}

export const PokemonImage = component$(({id,size = 200,backImage = true, isVisible = false }:Props) => {

  const charged = useSignal(false)
  
  useTask$(({track})=>{
    track(() => id )
    charged.value = false
  })
  
  const toggleImageVisibility = $((backImage1:boolean)=>{
    if (backImage1 === true) {
      return <>
      <img onLoad$={()=>charged.value=true} class={{'hidden': !charged.value }} width={`${size}`} height="96" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} ></img>
      </>
    }
    else{
      return<>
       <img  onLoad$={()=>charged.value=true} class={[{'hidden': !charged.value , 'brightness-0': isVisible },'transition-all']} width={`${size}`} height="96" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} ></img>
       {console.log(isVisible)}
      </>
    }
  })

  return   (
    <div class="flex items-center justify-center"
    style={{width:`${size}px`, height:`${size}px` }}>
      
     {!charged.value && <span>Cargando....</span>}
     
     {toggleImageVisibility(backImage)}
    
    </div>
  )
});

