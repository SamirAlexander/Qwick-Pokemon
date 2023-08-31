import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  
  return (
    <>
      <h2>pokemon: {useLocation().params.id} </h2>
    </>
  );
  //Elementos
});