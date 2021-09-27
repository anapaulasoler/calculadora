const display = document.querySelector("#display");
const numeros = document.querySelectorAll("[id*=tecla]");
const operadores = document.querySelectorAll("[id*=operador]");

let novoNumero=true;
let operador;
let numeroAnterior;

const atualizardisplay = (texto) =>{
    if(novoNumero){
        display.textContent = texto;
        novoNumero=false;
    }else{
        display.textContent += texto;
    }
};

const insereNumero = (event) => atualizardisplay(event.target.textContent);

numeros.forEach(numero => numero.addEventListener("click", insereNumero));


const selecionaOperador = (event) => {
    novoNumero = true;
    operador = event.target.textContent;
    numeroAnterior = display.textContent.replace(",",".");
  };
  
  operadores.forEach((operador) =>
    operador.addEventListener("click", selecionaOperador)
  );
  
  const calcular = () => {
    if (operador !== undefined) {
      const numeroAtual = display.textContent.replace(",",".");
      novoNumero = true;
      const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`);
      atualizardisplay(resultado.toString().replace(",","."));
      operador = undefined;
    }
  };
  
const ativarIgual = () => calcular();
  
  document.querySelector("#igual").addEventListener("click", ativarIgual);
  
  const limparDisplay = () => display.textContent = "";

document.querySelector("#limparDisplay").addEventListener("click", limparDisplay);

const limparCalculo=()=>{
    limparDisplay();
    novoNumero=true;
    operador = undefined;
    numeroAnterior=undefined;
}

document.querySelector("#limparCalculo").addEventListener("click", limparCalculo);

document.querySelector("#limparCalculo")
.addEventListener("click", limparCalculo);

const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1);

document.querySelector("#backspace").addEventListener("click", removerUltimoNumero);

const inverterSinal = () => {
    novoNumero = true;
    atualizardisplay(display.textContent * -1);
}

document.querySelector("#inverter").addEventListener("click", inverterSinal);

const existeValor = () => display.textContent.length > 0;
const existeDecimal = () => display.textContent.indexOf(",") !== -1;

const inserirDecimal = () => {
  if (!existeDecimal()) {
    if (existeValor()) {
      atualizardisplay(",");
    } else {
      atualizardisplay("0,");
    }
  }
};

document.querySelector("#decimal").addEventListener("click", inserirDecimal);

