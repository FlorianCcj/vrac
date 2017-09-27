Reducer : recupere l'action et l'etat pour mettre a jour l'etat
Action : les differentes actions possible
@Effect : event emiter

store.dispatch({ type: 'LIGHT_ON' }); : permet d'emettre une action 

store.subscribe( () => {
console.log(store.getState()); // recupere l'etat
});