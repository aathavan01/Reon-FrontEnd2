import "./App.css";


function Mode() {

   var element = document.body;
   element.classList.toggle("dark-mode");
   
   return(
    <button onClick={() => Mode()}>Dark mode</button>
   )
}

export default Mode;
