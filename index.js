function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/a/gi, "╔")
      .replace(/b/gi, "╩")
      .replace(/c/gi, "╦")
      .replace(/d/gi, "╠")
      .replace(/e/gi, "═")
      .replace(/f/gi, "╬")
      .replace(/g/gi, "╧")
      .replace(/h/gi, "╨")
      .replace(/i/gi, "▄")
      .replace(/j/gi, "°")
      .replace(/k/gi, "░")
      .replace(/l/gi, "┤")
      .replace(/m/gi, "♥")
      .replace(/n/gi, "•")
      .replace(/ñ/gi, "♦")
      .replace(/o/gi, "∟")
      .replace(/p/gi, "Œ")
      .replace(/q/gi, "©")
      .replace(/r/gi, "⌠")
      .replace(/s/gi, "≈")
      .replace(/t/gi, "§")
      .replace(/u/gi, "£")
      .replace(/v/gi, "&")
      .replace(/w/gi, "™")
      .replace(/x/gi, "š")
      .replace(/y/gi, "±")
      .replace(/z/gi, "ø");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./imagenes/found.gif";
    } else {
      muñeco.src = "./imagenes/giphy3.gif";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/╔/gi, "a")
      .replace(/╩/gi, "b")
      .replace(/╦/gi, "c")
      .replace(/╠/gi, "d")
      .replace(/═/gi, "e")
      .replace(/╬/gi, "f")
      .replace(/╧/gi, "g")
      .replace(/╨/gi, "h")
      .replace(/▄/gi, "i")
      .replace(/°/gi, "j")
      .replace(/░/gi, "k")
      .replace(/┤/gi, "l")
      .replace(/♥/gi, "m")
      .replace(/•/gi, "n")
      .replace(/♦/gi, "ñ")
      .replace(/∟/gi, "o")
      .replace(/Œ/gi, "p")
      .replace(/©/gi, "q")
      .replace(/⌠/gi, "r")
      .replace(/≈/gi, "s")
      .replace(/§/gi, "t")
      .replace(/£/gi, "u")
      .replace(/&/gi, "v")
      .replace(/™/gi, "w")
      .replace(/š/gi, "x")
      .replace(/±/gi, "y")
      .replace(/ø/gi, "z");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./imagenes/giphy2.gif";
      } else {
        muñeco.src = "./imagenes/giphy3.gif";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
  }