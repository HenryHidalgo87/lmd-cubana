const preguntas = {
    //-----BIENVENIDO/A--------------------------------------------------------------------------------------
    bienvenida: {
        pregunta: "¿Tienes ascendencia española?",
        opciones: ["Sí", "No"],
        siguiente: { "Sí": "parentesco", "No": null },
        anterior: [null]
    },
    // correo_electronico: {
    //     pregunta: "Por favor, introduce tu dirección de correo electrónico:",
    //     opciones: [],
    //     siguiente: {
    //         "correo electrónico": "parentesco"
    //     },
    //     anterior: "bienvenida"
    // },
    parentesco: {
        //------PARENTESCO----------------------------------------------------------------------------------
        pregunta: "¿Cuál es tu grado de parentesco con el ciudadano español?",
        opciones: ["Es mi bisabuelo", "Es mi bisabuela", "Abuelo", "Abuela", "Padre", "Madre"],
        siguiente: {
            "Es mi bisabuelo": "renuncia_ciudadania",
            "Es mi bisabuela": "se_casa",
            "Abuelo": "estado_fisico",
            "Abuela": "estado_fisico",
            "Padre": "estado_fisico_mp",
            "Madre": "estado_fisico_mp"
        },
        anterior: "bienvenida"
    },
    //------BISABUELO-----------------------------------------------------------------------------------------
    renuncia_ciudadania: {
        pregunta: "¿Su bisabuelo renunció a la ciudadanía española?",
        opciones: ["Sí", "No"],
        siguiente: {
            "Sí": "antes_despues",
            "No": "quien_hijo"
        },
        anterior: "parentesco"
    },
    antes_despues: {
        pregunta: "¿Antes de nacer su hijo/a?",
        opciones: ["Sí", "No"],
        siguiente: {
            "Sí": "estado_civil_del_bisabuelo",
            "No": "estado_civil_del_bisabuelo"
        },
        anterior: ["renuncia_ciudadania"]
    },
    //-------Estado civil al momento de nacer sus hijo:----
    estado_civil_del_bisabuelo: {
        pregunta: "Que estado civil tenía el bisabuelo/a al momento del nacimiento de su hijo/a:",
        opciones: ["Progenitores casados por el consulado",
            "Progenitores casados por el Registro Civil Cubano",
            "Progenitores casados pero actualmente uno de ellos fallecido",
            "Progenitores casados pero actualmente son divorciados",
            "Nació de padres aun solteros",
            "Nació de padres solteros pero uno/a de ellos ha fallecido",
            "Nació antes de que sus padres se casaran entre ellos y siguen actualmente casados",
            "Nació antes de que sus padres se casaran y posteriormente se divorciaron y se volvieron a casar con terceras personas",
            "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente sigue divorciado del primer matrimonio",
            "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente se volvieron a casar con terceras personas"],
        siguiente: {
            "Progenitores casados por el consulado": "quien_hijo",
            "Progenitores casados por el Registro Civil Cubano": "quien_hijo",
            "Progenitores casados pero actualmente uno de ellos fallecido": "quien_hijo",
            "Progenitores casados pero actualmente son divorciados": "quien_hijo",
            "Nació de padres aun solteros": "quien_hijo",
            "Nació de padres solteros pero uno/a de ellos ha fallecido": "quien_hijo",
            "Nació antes de que sus padres se casaran entre ellos y siguen actualmente casados": "quien_hijo",
            "Nació antes de que sus padres se casaran y posteriormente se divorciaron y se volvieron a casar con terceras personas": "quien_hijo",
            "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente sigue divorciado del primer matrimonio": "quien_hijo",
            "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente se volvieron a casar con terceras personas": "quien_hijo"
        },
        anterior: ["antes_despues"]
    },
    quien_hijo: {
        pregunta: "¿Quién es el hijo/a de su bisabuelo/a?",
        opciones: ["Mi abuelo", "Mi abuela"],
        siguiente: {
            "Mi abuelo": "estado_fisico",
            "Mi abuela": "estado_fisico"
        },
        anterior: ["estado_civil_del_bisabuelo"]
    },
    estado_fisico: {
        pregunta: "¿Qué estado físico tiene en la actualidad?",
        opciones: ["Vivo", "Muerto"],
        siguiente: {
            "Vivo": "estado_civil_de_los_abuelos",
            "Muerto": "estado_civil_de_los_abuelos"
        },
        anterior: ["quien_hijo"]
    },
    //----EStado Civil al momento de nacer sus hijos:
    estado_civil_de_los_abuelos: {
        pregunta: "Que estado civil tenía el abuelo/a al momento del nacimiento de su hijo/a:",
        opciones: ["Progenitores casados por el consulado",
            "Progenitores casados por el Registro Civil Cubano",
            "Progenitores casados pero actualmente uno de ellos fallecido",
            "Progenitores casados pero actualmente son divorciados",
            "Nació de padres aun solteros",
            "Nació de padres solteros pero uno/a de ellos ha fallecido",
            "Nació antes de que sus padres se casaran entre ellos y siguen actualmente casados",
            "Nació antes de que sus padres se casaran y posteriormente se divorciaron y se volvieron a casar con terceras personas",
            "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente sigue divorciado del primer matrimonio",
            "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente se volvieron a casar con terceras personas"],
        siguiente: {
            "Progenitores casados por el consulado": "quien_hijo_abu",
            "Progenitores casados por el Registro Civil Cubano": "quien_hijo_abu",
            "Progenitores casados pero actualmente uno de ellos fallecido": "quien_hijo_abu",
            "Progenitores casados pero actualmente son divorciados": "quien_hijo_abu",
            "Nació de padres aun solteros": "quien_hijo_abu",
            "Nació de padres solteros pero uno/a de ellos ha fallecido": "quien_hijo_abu",
            "Nació antes de que sus padres se casaran entre ellos y siguen actualmente casados": "quien_hijo_abu",
            "Nació antes de que sus padres se casaran y posteriormente se divorciaron y se volvieron a casar con terceras personas": "quien_hijo_abu",
            "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente sigue divorciado del primer matrimonio": "quien_hijo_abu",
            "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente se volvieron a casar con terceras personas": "quien_hijo_abu"
        },
        anterior: ["estado_fisico"]
    },
    quien_hijo_abu: {
        pregunta: "¿Quién es el hijo/a de mi abuelo/a?",
        opciones: ["Mi padre", "Mi madre"],
        siguiente: {
            "Mi padre": "estado_fisico_mp",
            "Mi madre": "estado_fisico_mp"
        },
        anterior: ["estado_civil_de_los_abuelos"]
    },
    estado_fisico_mp: {
        pregunta: "¿Qué estado físico tiene en la actualidad?",
        opciones: ["Vivo", "Muerto"],
        siguiente: {
            "Vivo": "estado_civil_de_los_padres",
            "Muerto": "estado_civil_de_los_padres"
        },
        anterior: ["quien_hijo_abu"]
    },

    estado_civil_de_los_padres: {
        pregunta: "Que estado civil tenían tus padres al momento de tu nacimiento:",
        opciones: ["Progenitores casados por el consulado",
            "Progenitores casados por el Registro Civil Cubano",
            "Progenitores casados pero actualmente uno de ellos fallecido",
            "Progenitores casados pero actualmente son divorciados",
            "Nació de padres aun solteros",
            "Nació de padres solteros pero uno/a de ellos ha fallecido",
            "Nació antes de que sus padres se casaran entre ellos y siguen actualmente casados",
            "Nació antes de que sus padres se casaran y posteriormente se divorciaron y se volvieron a casar con terceras personas",
            "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente sigue divorciado del primer matrimonio",
            "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente se volvieron a casar con terceras personas"],
        siguiente: {
            "Progenitores casados por el consulado": null,
            "Progenitores casados por el Registro Civil Cubano": null,
            "Progenitores casados pero actualmente uno de ellos fallecido": null,
            "Progenitores casados pero actualmente son divorciados": null,
            "Nació de padres aun solteros": null,
            "Nació de padres solteros pero uno/a de ellos ha fallecido": null,
            "Nació antes de que sus padres se casaran entre ellos y siguen actualmente casados": null,
            "Nació antes de que sus padres se casaran y posteriormente se divorciaron y se volvieron a casar con terceras personas": null,
            "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente sigue divorciado del primer matrimonio": null,
            "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente se volvieron a casar con terceras personas": null
        },
        anterior: ["estado_fisico_mp"]
    },
    //--------BISABUELA-------------------------------------------------------------------------------------
    se_casa: {
        pregunta: "Su Bisabuela se caso con:",
        opciones: ["Español", "Cubano"],
        siguiente: {
            "Español": "quien_hijo_bisabuela",
            "Cubano": "antes_despues_hijos_bisabuela"
        },
        anterior: ["parentesco"]
    },
    antes_despues_hijos_bisabuela: {
        pregunta: "¿Antes de nacer su hijo/a?",
        opciones: ["Sí", "No"],
        siguiente: {
            "Sí": "estado_civil_del_bisabuelo",
            "No": "estado_civil_del_bisabuelo"
        },
        anterior: ["se_casa"]
    }
};

let claveActual = "bienvenida";
const encuestaDiv = document.getElementById("encuesta");
// const formulario = document.getElementById('formulario');

function mostrarPregunta() {
    const preguntaActual = preguntas[claveActual];
    if (preguntaActual && preguntaActual.opciones && preguntaActual.opciones.length > 0) {
        let html = `<h2>${preguntaActual.pregunta}</h2>`;
        html += '<select id="opcion" class="form-select" required>';
        for (const opcion of preguntaActual.opciones) {
            html += `<option value="${opcion}">${opcion}</option>`;
        }
        html += '</select>';
        encuestaDiv.innerHTML = html;
    } else if (preguntaActual && preguntaActual.pregunta === "Por favor, introduce tu dirección de correo electrónico:") {
        let html = `<h2>${preguntaActual.pregunta}</h2>`;
        html += '<input type="email" id="opcion" class="form-control" required>';
        encuestaDiv.innerHTML = html;
    } else {
        console.error(`La pregunta actual (${claveActual}) no está definida correctamente en el objeto "preguntas".`);
    }
}
let respuestas = {}; // Define la variable "respuestas" antes de utilizarla


function siguientePregunta() {
    const select = document.getElementById('opcion');
    const respuestaElegida = select.options[select.selectedIndex].value;
    if (!respuestaElegida) {
        alert("Por favor, selecciona una opción.");
        return;
    }

    const preguntaActual = preguntas[claveActual];
    const claveSiguiente = preguntaActual.siguiente[respuestaElegida];
    respuestas[claveActual] = respuestaElegida; // Actualiza la variable "respuestas" con la respuesta del usuario

    if (claveSiguiente === null) {
        document.getElementById("siguiente").style.display = "none";
        document.getElementById("resultado").style.display = "inline";
        mostrarResultado(respuestas); // Pasa la variable "respuestas" como argumento a la función "mostrarResultado"
    } else if (preguntas.hasOwnProperty(claveSiguiente)) {
        claveActual = claveSiguiente;
        mostrarPregunta();
    } else {
        console.error(`La clave siguiente (${claveSiguiente}) no está definida correctamente en el objeto "preguntas".`);
    }
}

function obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, estadoCivilPadres, estadoCivilBisabuelo) {
    let respuesta = "";

    if (estadoCivilBisabuelo) {
        switch (estadoCivilBisabuelo) {
            case "Progenitores casados por el consulado":
                respuesta += "Debes presentar Certificado español de matrimonio <br>Nota: En caso de que el matrimonio esté inscrito en el Registro Civil del Consulado General de España en La Habana, no es necesario que lo aporte, pero lo recomendamos que lleve una fotocopia del mismo.";
                break;
            case "Progenitores casados por el Registro Civil Cubano":
                respuesta += "Debes presentar el certificado de matrimonio cubano";
                break;
            case "Progenitores casados pero actualmente uno de ellos fallecido":
                respuesta = "Debes presentar una de estas variantes: certificado de vigencia del matrimonio, certificado de viudez del cónyuge viudo o viuda, certificado de matrimonio + certificado de defunción y legalizado por el MINREX.";
                break;
            case "Progenitores casados pero actualmente son divorciados":
                respuesta = "Debes presentar una de estas variantes: certificado de vigencia del matrimonioo certificado de matrimonio con nota del divorcio y legalizado por el MINREX.";
                break;
            case "Nació de padres aun solteros":
                respuesta = "Debes presentar Certificación de Fe de soltería en caso de que no hayan contraído nunca matrimonio por ambos progenitores,legalizado por el MINREX.";
                break;
            case "Nació de padres solteros pero uno/a de ellos ha fallecido":
                respuesta = "Debes presentar Certificación de Fe de soltería y Certificado de defunción,legalizado por el MINREX..";
                break;
            case "Nació antes de que sus padres se casaran entre ellos y siguen actualmente casados":
                respuesta = "Debes presentar Certificado de matrimonio con notas del estado conyugal de estos al casarse o Certificado de matrimonio + Certificado de estado conyugal al momento de contraer el matrimonio, legalizado por el MINREX.<br> <strong>En caso:</strong> que uno de los 2 era de estado conyugal divorciado al momento de contraer el matrimonio deberá aportar además de lo mencionado: Sentencia Literal del divorcio y firme del matrimonio anterior si fue por vía judicial o el Acta de divorcio si se realizó en una notaría o el Certificado de divorcio de ese matrimonio anterior obtenido desde las NOTAS AL MARGEN DEL NACIMIENTO relativas al estado civil del progenitor divorciado, actual y todo legalizado por el MINREX.<br> <strong>En caso:</strong> que uno de los 2 era de estado conyugal viudo/a al momento de contraer el matrimonio deberá aportar además de lo mencionado: Certificado de vigencia del matrimonio anterior ya que traerá la fecha en que se disuelve ese matrimonio por causa de la muerte de su cónyuge, actual y todo legalizado por el MINREX.";
                break;
            case "Nació antes de que sus padres se casaran y posteriormente se divorciaron y se volvieron a casar con terceras personas":
                respuesta = "Debes presentar una Certificado de matrimonio con notas del estado conyugal de estos al casarse y la nota del divorcio o Certificado de vigencia del matrimonio + Certificado de estado conyugal de estos al casarse, actual y todo legalizado por el MINREX.<br> <strong>En caso:</strong> que uno de los 2 era de estado conyugal divorciado al momento de contraer el matrimonio deberá aportar además de lo mencionado: Sentencia Literal del divorcio y firme del matrimonio anterior si fue por vía judicial o el Acta de divorcio si se realizó en una notaría o el Certificado de divorcio de ese matrimonio anterior obtenido desde las NOTAS AL MARGEN DEL NACIMIENTO relativas al estado civil del progenitor divorciado, todo legalizado por el MINREX.<br> <strong>En caso:</strong> uno de los 2 era de estado conyugal viudo/a al momento de contraer el matrimonio deberá aportar además de lo mencionado: Certificado de vigencia del matrimonio anterior ya que traerá la fecha en que se disuelve ese matrimonio por causa de la muerte de su cónyuge, actual y todo legalizado por el MINREX.";
                break;
            case "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente sigue divorciado del primer matrimonio":
                respuesta = "Debes presentar Certificado de divorcio de ese matrimonio anterior obtenido desde las NOTAS AL MARGEN DEL NACIMIENTO relativas al estado civil del progenitor divorciado o Sentencia Literal del divorcio y firme del matrimonio anterior si fue por vía judicial o el Acta de divorcio si se realizó en una notaría y legalizado por el MINREX.";
                break;
            case "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente se volvieron a casar con terceras personas":
                respuesta = "Debes presentar Certificado de divorcio de ese matrimonio anterior obtenido desde las NOTAS AL MARGEN DEL NACIMIENTO relativas al estado civil del progenitor divorciado + Certificado de matrimonio posterior al nacimiento con notas del divorcio y del estado conyugal del divorciado al casarse o Sentencia Literal del divorcio y firme del matrimonio anterior si fue por vía judicial o el Acta de divorcio si se realizó en una notaría + Certificado de matrimonio posterior al nacimiento con notas del divorcio y del estado conyugal del divorciado al casarse, todo legalizado por el MINREX.";
                break;
            default:
                respuesta = "Lo siento, no se reconoce el estado civil del bisabuelo que has introducido.";
                break;
        }
    }

    if (estadoCivilAbuelos) {
        switch (estadoCivilAbuelos) {
            case "Progenitores casados por el consulado":
                respuesta += "Debes presentar Certificado español de matrimonio <br>Nota: En caso de que el matrimonio esté inscrito en el Registro Civil del Consulado General de España en La Habana, no es necesario que lo aporte, pero lo recomendamos que lleve una fotocopia del mismo.";
                break;
            case "Progenitores casados por el Registro Civil Cubano":
                respuesta += "Debes presentar el certificado de matrimonio cubano";
                break;
            case "Progenitores casados pero actualmente uno de ellos fallecido":
                respuesta = "Debes presentar una de estas variantes: certificado de vigencia del matrimonio, certificado de viudez del cónyuge viudo o viuda, certificado de matrimonio + certificado de defunción y legalizado por el MINREX.";
                break;
            case "Progenitores casados pero actualmente son divorciados":
                respuesta = "Debes presentar una de estas variantes: certificado de vigencia del matrimonioo certificado de matrimonio con nota del divorcio y legalizado por el MINREX.";
                break;
            case "Nació de padres aun solteros":
                respuesta = "Debes presentar Certificación de Fe de soltería en caso de que no hayan contraído nunca matrimonio por ambos progenitores,legalizado por el MINREX.";
                break;
            case "Nació de padres solteros pero uno/a de ellos ha fallecido":
                respuesta = "Debes presentar Certificación de Fe de soltería y Certificado de defunción,legalizado por el MINREX..";
                break;
            case "Nació antes de que sus padres se casaran entre ellos y siguen actualmente casados":
                respuesta = "Debes presentar Certificado de matrimonio con notas del estado conyugal de estos al casarse o Certificado de matrimonio + Certificado de estado conyugal al momento de contraer el matrimonio, legalizado por el MINREX.<br> <strong>En caso:</strong> que uno de los 2 era de estado conyugal divorciado al momento de contraer el matrimonio deberá aportar además de lo mencionado: Sentencia Literal del divorcio y firme del matrimonio anterior si fue por vía judicial o el Acta de divorcio si se realizó en una notaría o el Certificado de divorcio de ese matrimonio anterior obtenido desde las NOTAS AL MARGEN DEL NACIMIENTO relativas al estado civil del progenitor divorciado, actual y todo legalizado por el MINREX.<br> <strong>En caso:</strong> que uno de los 2 era de estado conyugal viudo/a al momento de contraer el matrimonio deberá aportar además de lo mencionado: Certificado de vigencia del matrimonio anterior ya que traerá la fecha en que se disuelve ese matrimonio por causa de la muerte de su cónyuge, actual y todo legalizado por el MINREX.";
                break;
            case "Nació antes de que sus padres se casaran y posteriormente se divorciaron y se volvieron a casar con terceras personas":
                respuesta = "Debes presentar una Certificado de matrimonio con notas del estado conyugal de estos al casarse y la nota del divorcio o Certificado de vigencia del matrimonio + Certificado de estado conyugal de estos al casarse, actual y todo legalizado por el MINREX.<br> <strong>En caso:</strong> que uno de los 2 era de estado conyugal divorciado al momento de contraer el matrimonio deberá aportar además de lo mencionado: Sentencia Literal del divorcio y firme del matrimonio anterior si fue por vía judicial o el Acta de divorcio si se realizó en una notaría o el Certificado de divorcio de ese matrimonio anterior obtenido desde las NOTAS AL MARGEN DEL NACIMIENTO relativas al estado civil del progenitor divorciado, todo legalizado por el MINREX.<br> <strong>En caso:</strong> uno de los 2 era de estado conyugal viudo/a al momento de contraer el matrimonio deberá aportar además de lo mencionado: Certificado de vigencia del matrimonio anterior ya que traerá la fecha en que se disuelve ese matrimonio por causa de la muerte de su cónyuge, actual y todo legalizado por el MINREX.";
                break;
            case "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente sigue divorciado del primer matrimonio":
                respuesta = "Debes presentar Certificado de divorcio de ese matrimonio anterior obtenido desde las NOTAS AL MARGEN DEL NACIMIENTO relativas al estado civil del progenitor divorciado o Sentencia Literal del divorcio y firme del matrimonio anterior si fue por vía judicial o el Acta de divorcio si se realizó en una notaría y legalizado por el MINREX.";
                break;
            case "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente se volvieron a casar con terceras personas":
                respuesta = "Debes presentar Certificado de divorcio de ese matrimonio anterior obtenido desde las NOTAS AL MARGEN DEL NACIMIENTO relativas al estado civil del progenitor divorciado + Certificado de matrimonio posterior al nacimiento con notas del divorcio y del estado conyugal del divorciado al casarse o Sentencia Literal del divorcio y firme del matrimonio anterior si fue por vía judicial o el Acta de divorcio si se realizó en una notaría + Certificado de matrimonio posterior al nacimiento con notas del divorcio y del estado conyugal del divorciado al casarse, todo legalizado por el MINREX.";
                break;
            default:
                respuesta += "Lo siento, no se reconoce el estado civil de los abuelos que has introducido.";
                break;
        }
    }

    if (estadoCivilPadres) {
        switch (estadoCivilPadres) {
            case "Progenitores casados por el consulado":
                respuesta += "Debes presentar Certificado español de matrimonio <br>Nota: En caso de que el matrimonio esté inscrito en el Registro Civil del Consulado General de España en La Habana, no es necesario que lo aporte, pero lo recomendamos que lleve una fotocopia del mismo.";
                break;
            case "Progenitores casados por el Registro Civil Cubano":
                respuesta += "Debes presentar el certificado de matrimonio cubano";
                break;
            case "Progenitores casados pero actualmente uno de ellos fallecido":
                respuesta = "Debes presentar una de estas variantes: certificado de vigencia del matrimonio, certificado de viudez del cónyuge viudo o viuda, certificado de matrimonio + certificado de defunción y legalizado por el MINREX.";
                break;
            case "Progenitores casados pero actualmente son divorciados":
                respuesta = "Debes presentar una de estas variantes: certificado de vigencia del matrimonioo certificado de matrimonio con nota del divorcio y legalizado por el MINREX.";
                break;
            case "Nació de padres aun solteros":
                respuesta = "Debes presentar Certificación de Fe de soltería en caso de que no hayan contraído nunca matrimonio por ambos progenitores,legalizado por el MINREX.";
                break;
            case "Nació de padres solteros pero uno/a de ellos ha fallecido":
                respuesta = "Debes presentar Certificación de Fe de soltería y Certificado de defunción,legalizado por el MINREX..";
                break;
            case "Nació antes de que sus padres se casaran entre ellos y siguen actualmente casados":
                respuesta = "Debes presentar Certificado de matrimonio con notas del estado conyugal de estos al casarse o Certificado de matrimonio + Certificado de estado conyugal al momento de contraer el matrimonio, legalizado por el MINREX.<br> <strong>En caso:</strong> que uno de los 2 era de estado conyugal divorciado al momento de contraer el matrimonio deberá aportar además de lo mencionado: Sentencia Literal del divorcio y firme del matrimonio anterior si fue por vía judicial o el Acta de divorcio si se realizó en una notaría o el Certificado de divorcio de ese matrimonio anterior obtenido desde las NOTAS AL MARGEN DEL NACIMIENTO relativas al estado civil del progenitor divorciado, actual y todo legalizado por el MINREX.<br> <strong>En caso:</strong> que uno de los 2 era de estado conyugal viudo/a al momento de contraer el matrimonio deberá aportar además de lo mencionado: Certificado de vigencia del matrimonio anterior ya que traerá la fecha en que se disuelve ese matrimonio por causa de la muerte de su cónyuge, actual y todo legalizado por el MINREX.";
                break;
            case "Nació antes de que sus padres se casaran y posteriormente se divorciaron y se volvieron a casar con terceras personas":
                respuesta = "Debes presentar una Certificado de matrimonio con notas del estado conyugal de estos al casarse y la nota del divorcio o Certificado de vigencia del matrimonio + Certificado de estado conyugal de estos al casarse, actual y todo legalizado por el MINREX.<br> <strong>En caso:</strong> que uno de los 2 era de estado conyugal divorciado al momento de contraer el matrimonio deberá aportar además de lo mencionado: Sentencia Literal del divorcio y firme del matrimonio anterior si fue por vía judicial o el Acta de divorcio si se realizó en una notaría o el Certificado de divorcio de ese matrimonio anterior obtenido desde las NOTAS AL MARGEN DEL NACIMIENTO relativas al estado civil del progenitor divorciado, todo legalizado por el MINREX.<br> <strong>En caso:</strong> uno de los 2 era de estado conyugal viudo/a al momento de contraer el matrimonio deberá aportar además de lo mencionado: Certificado de vigencia del matrimonio anterior ya que traerá la fecha en que se disuelve ese matrimonio por causa de la muerte de su cónyuge, actual y todo legalizado por el MINREX.";
                break;
            case "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente sigue divorciado del primer matrimonio":
                respuesta = "Debes presentar Certificado de divorcio de ese matrimonio anterior obtenido desde las NOTAS AL MARGEN DEL NACIMIENTO relativas al estado civil del progenitor divorciado o Sentencia Literal del divorcio y firme del matrimonio anterior si fue por vía judicial o el Acta de divorcio si se realizó en una notaría y legalizado por el MINREX.";
                break;
            case "Nació de progenitor/a divorciado/a de otra persona y nunca se casaron sus padres biológicos entre sí y actualmente se volvieron a casar con terceras personas":
                respuesta = "Debes presentar Certificado de divorcio de ese matrimonio anterior obtenido desde las NOTAS AL MARGEN DEL NACIMIENTO relativas al estado civil del progenitor divorciado + Certificado de matrimonio posterior al nacimiento con notas del divorcio y del estado conyugal del divorciado al casarse o Sentencia Literal del divorcio y firme del matrimonio anterior si fue por vía judicial o el Acta de divorcio si se realizó en una notaría + Certificado de matrimonio posterior al nacimiento con notas del divorcio y del estado conyugal del divorciado al casarse, todo legalizado por el MINREX.";
                break;
            default:
                respuesta += "Lo siento, no se reconoce el estado civil de los padres que has introducido.";
                break;
        }
    }

    return respuesta;
}


function mostrarResultado(respuestas) {
    let elegible = false;
    // Obtener el valor de correoElectronico desde las respuestas recibidas
    let correoElectronico;

    console.log("Respuestas recibidas:", respuestas);
    // Capturar la información de respuestas en una nueva variable
    const respuestasCapturadas = respuestas;



    const regex = /^[A-Z0-9]{13}$/;

    const aceptaCondiciones = confirm("Para ver el resultado, debe aceptar los Términos Y Condiciones lea atentamente:\n\n1. El servicio incluirá una evaluación detallada de las condiciones requeridas para obtener la ciudadanía española por un valor de 100 MN.\n\n2. La responsabilidad por los datos correctos proporcionados es de la parte del usuario, así evitamos malentendidos futuros entre ustedes y nosotros.\n\n3. El usuario siempre será responsable de los datos proporcionados, nosotros simplemente realizamos una valoración basada en los datos que usted nos administra, sin tener ninguna responsabilidad por eventuales errores o desviaciones de la información.\n\n4. El interesado deberás estar en perfecta salud mental e integral para poder llenar el formulario.\n\n5. Tener más de 18 años.\n\n6. La agencia no se hace responsable de malos entendidos o situaciones que no estén contempladas en estos términos y condiciones, siempre y cuando se hayan cumplido con todas las leyes y regulaciones aplicables. En caso de conflicto o controversia, ambas partes se comprometen a buscar una solución amistosa y a cooperar plenamente con las autoridades competentes en caso de ser necesario.");


    if (aceptaCondiciones) {
        const metodoPago = prompt("Haga una transferencia de 100 MN a esta cuenta: 9200-1299-7101-5751 e introduzca el Nro. Transaccion aqui para comprobarlo:");

        if (aceptaCondiciones) {
            correoElectronico = prompt("Por favor, ingrese su correo electrónico:");

            if (!correoElectronico || correoElectronico.trim() === "") {
                console.log("Debe ingresar un correo electrónico válido.");
                encuestaDiv.innerHTML = `<h2>ERROR</h2><p>Debe ingresar un correo electrónico válido.</p>`;
                return;
            }

            respuestas["correoElectronico"] = correoElectronico;
            if (metodoPago && regex.test(metodoPago)) {
                // console.log("Simulación de comprobación del método de pago...");
                // Obtener la referencia al elemento que contiene el spinner
                const spinner = document.querySelector('.spinner-border');
                // Mostrar el spinner quitando el atributo "hidden" por 5 segundos
                spinner.removeAttribute('hidden');
                setTimeout(() => {
                    // Ocultar el spinner nuevamente después de 5 segundos
                    spinner.setAttribute('hidden', '');
                }, 5000);

                setTimeout(function () {
                    if (Math.random() < 1.0) { // Simula una tasa de aprobación del 100%
                        if (respuestas.parentesco === "Es mi bisabuelo" &&
                            respuestas.renuncia_ciudadania === "Sí" &&
                            respuestas.antes_despues === "Sí" &&
                            (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                            respuestas.estado_fisico === "Vivo" &&
                            (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                            respuestas.estado_fisico_mp === "Vivo") {
                            elegible = true;
                            console.log("El usuario es elegible para la ciudadanía española (Bisnieto_1-Anexo III)");


                            const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                            const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                            console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                            const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                            const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                            console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                            const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                            const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                            console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);


                            encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_1</h2><p><strong>Eres elegible para solicitar la ciudadanía española por Anexo III después que su progenitor se presente por Anexo I.</strong></p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Original de la certificación literal española de nacimiento del padre o de la madre de los solicitantes mayores de edad que opten a la nacionalidad española, al haberse reconocido a sus progenitores la nacionalidad española de origen en virtud del derecho de opción de acuerdo a la Ley de Memoria Democrática de 2022 o la Ley de Memoria Histórica de 2007.<br>
                            Nota 1: Si el nacimiento del progenitor/a consta inscrito en el Registro Civil del Consulado General de España en La Habana, no es necesario que lo aporte, pero lo recomendamos que lleve una fotocopia del mismo.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            <li>Referente al Estado civil de los progenitores al momento de su nacimiento:<br> ${respuestaPadres}</li>
                            </ol>
                            <div>`;
                            // FIN BISNIETO 1----------------
                        } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                            respuestas.renuncia_ciudadania === "Sí" &&
                            respuestas.antes_despues === "Sí" &&
                            (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                            respuestas.estado_fisico === "Vivo" &&
                            (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                            respuestas.estado_fisico_mp === "Muerto") {
                            elegible = true;
                            console.log("El usuario no es elegible para la ciudadanía española pero su Abuelo si por Anexo I (Bisnieto_2)");

                            const estadoCivilAbuelos = respuestas.estado_civil_de_los_abuelos;
                            const estadoCivilPadres = respuestas.estado_civil_de_los_padres;
                            const estadoCivilBisabuelo = respuestas.estado_civil_del_bisabuelo;

                            // Verificar si los valores de las variables son los esperados
                            console.log("Estado civil de los abuelos: ", estadoCivilAbuelos);
                            console.log("Estado civil de los padres: ", estadoCivilPadres);
                            console.log("Estado civil del bisabuelo: ", estadoCivilBisabuelo);

                            const respuestaPorEstadoCivil = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, estadoCivilPadres,
                                estadoCivilBisabuelo);

                            // Acceder a los valores del estado civil por separado
                            const estadoCivilAbuelosSeparado = respuestaPorEstadoCivil.abuelos;
                            const estadoCivilPadresSeparado = respuestaPorEstadoCivil.padres;
                            const estadoCivilBisabueloSeparado = respuestaPorEstadoCivil.bisabuelo;

                            encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_2</h2><strong><p>El usuario no es elegible para la ciudadanía española pero su Abuelo si por Anexo I</p></strong><p>A continuación, te indicamos los documentos que necesitarás para que su Abuelo/a presente su solicitud:</p></p>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Original de la certificación literal de nacimiento española de su padre o madre del solicitante, que originariamente hubiera sido español/a.<br>
                            <strong>Nota:</strong> Si el nacimiento del progenitor/a consta inscrito en el Registro Civil del Consulado General de España en La Habana, no es necesario que lo aporte, pero lo recomendamos que lleve una fotocopia del mismo.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            <li>Referente al Estado civil de los progenitores al momento de su nacimiento:<br>
                                 Abuelos: ${estadoCivilAbuelosSeparado}<br>
                                Padres: ${estadoCivilPadresSeparado}<br>
                                Bisabuelo: ${estadoCivilBisabueloSeparado}
                            </li>
                            </ol>
                            <div>`;
                            // FIN BISNIETO 2----------------
                        } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                            respuestas.renuncia_ciudadania === "Sí" &&
                            respuestas.antes_despues === "Sí" &&
                            (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                            respuestas.estado_fisico === "Muerto" &&
                            (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                            respuestas.estado_fisico_mp === "Vivo") {
                            elegible = true;
                            console.log("El usuario es elegible para la ciudadanía española (Bisnieto_3-Anexo III)");
                            encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_3</h2><p>Eres elegible para solicitar la ciudadanía española por Anexo III después que su progenitor se presente por Anexo I.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><ul><li>Certificado de nacimiento</li><li>Certificado de antecedentes penales</li><li>Certificado de matrimonio (si corresponde)</li><li>Documento que acredite la relación de parentesco con el ciudadano español (por ejemplo, certificado de nacimiento del bisabuelo)</li><li>Certificado de renuncia a la ciudadanía anterior</li><li>Formulario de solicitud de nacionalidad española</li></ul>`;
                            // FIN BISNIETO 3----------------
                        } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                            respuestas.renuncia_ciudadania === "Sí" &&
                            respuestas.antes_despues === "No" &&
                            (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                            respuestas.estado_fisico === "Vivo" &&
                            (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                            respuestas.estado_fisico_mp === "Vivo") {
                            elegible = true;
                            console.log("El usuario es elegible para la ciudadanía española por Anexo I o Anexo III (Bisnieto_5)");
                            encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_5</h2><p>Eres elegible para solicitar la ciudadanía española  por Anexo I o Anexo III.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><ul><li>Certificado de nacimiento</li><li>Certificado de antecedentes penales</li><li>Certificado de matrimonio (si corresponde)</li><li>Documento que acredite la relación de parentesco con el ciudadano español (por ejemplo, certificado de nacimiento del bisabuelo)</li><li>Certificado de renuncia a la ciudadanía anterior</li><li>Formulario de solicitud de nacionalidad española</li></ul>`;
                            // FIN BISNIETO 5----------------
                        } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                            respuestas.renuncia_ciudadania === "Sí" &&
                            respuestas.antes_despues === "No" &&
                            (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                            respuestas.estado_fisico === "Vivo" &&
                            (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                            respuestas.estado_fisico_mp === "Muerto") {
                            elegible = true;
                            console.log("El usuario es elegible para la ciudadanía española solo por Anexo I (Bisnieto_6)");
                            encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_6</h2><p>Eres elegible para solicitar la ciudadanía española solo por Anexo I.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><ul><li>Certificado de nacimiento</li><li>Certificado de antecedentes penales</li><li>Certificado de matrimonio (si corresponde)</li><li>Documento que acredite la relación de parentesco con el ciudadano español (por ejemplo, certificado de nacimiento del bisabuelo)</li><li>Certificado de renuncia a la ciudadanía anterior</li><li>Formulario de solicitud de nacionalidad española</li></ul>`;
                            // FIN BISNIETO 6----------------
                        } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                            respuestas.renuncia_ciudadania === "Sí" &&
                            respuestas.antes_despues === "No" &&
                            (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                            respuestas.estado_fisico === "Muerto" &&
                            (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                            respuestas.estado_fisico_mp === "Vivo") {
                            elegible = true;
                            console.log("El usuario es elegible para la ciudadanía española por Anexo I o por Anexo III(Bisnieto_7)");
                            encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_7</h2><p>Eres elegible para solicitar la ciudadanía española por Anexo I o por Anexo III.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><ul><li>Certificado de nacimiento</li><li>Certificado de antecedentes penales</li><li>Certificado de matrimonio (si corresponde)</li><li>Documento que acredite la relación de parentesco con el ciudadano español (por ejemplo, certificado de nacimiento del bisabuelo)</li><li>Certificado de renuncia a la ciudadanía anterior</li><li>Formulario de solicitud de nacionalidad española</li></ul>`;
                            // FIN BISNIETO 7----------------
                        } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                            respuestas.renuncia_ciudadania === "Sí" &&
                            respuestas.antes_despues === "No" &&
                            (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                            respuestas.estado_fisico === "Muerto" &&
                            (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                            respuestas.estado_fisico_mp === "Muerto") {
                            elegible = true;
                            console.log("El usuario es elegible para la ciudadanía española solo por Anexo I (Bisnieto_8)");
                            encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_8</h2><p>Eres elegible para solicitar la ciudadanía española solo por Anexo I.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><ul><li>Certificado de nacimiento</li><li>Certificado de antecedentes penales</li><li>Certificado de matrimonio (si corresponde)</li><li>Documento que acredite la relación de parentesco con el ciudadano español (por ejemplo, certificado de nacimiento del bisabuelo)</li><li>Certificado de renuncia a la ciudadanía anterior</li><li>Formulario de solicitud de nacionalidad española</li></ul>`;
                            // FIN BISNIETO 8----------------
                        } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                            respuestas.renuncia_ciudadania === "No" &&
                            (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                            respuestas.estado_fisico === "Vivo" &&
                            (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                            respuestas.estado_fisico_mp === "Vivo") {
                            elegible = true;
                            console.log("El usuario es elegible para la ciudadanía española por Anexo I o Anexo III (Bisnieto_9)");
                            encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_9</h2><p>Eres elegible para solicitar la ciudadanía española por Anexo I o Anexo III.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><ul><li>Certificado de nacimiento</li><li>Certificado de antecedentes penales</li><li>Certificado de matrimonio (si corresponde)</li><li>Documento que acredite la relación de parentesco con el ciudadano español (por ejemplo, certificado de nacimiento del bisabuelo)</li><li>Certificado de renuncia a la ciudadanía anterior</li><li>Formulario de solicitud de nacionalidad española</li></ul>`;
                            // FIN BISNIETO 9----------------
                        } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                            respuestas.renuncia_ciudadania === "No" &&
                            (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                            respuestas.estado_fisico === "Vivo" &&
                            (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                            respuestas.estado_fisico_mp === "Muerto") {
                            elegible = true;
                            console.log("El usuario es elegible para la ciudadanía española por Anexo I o Anexo III (Bisnieto_10)");
                            encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_10</h2><p>Eres elegible para solicitar la ciudadanía española solo por Anexo I.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><ul><li>Certificado de nacimiento</li><li>Certificado de antecedentes penales</li><li>Certificado de matrimonio (si corresponde)</li><li>Documento que acredite la relación de parentesco con el ciudadano español (por ejemplo, certificado de nacimiento del bisabuelo)</li><li>Certificado de renuncia a la ciudadanía anterior</li><li>Formulario de solicitud de nacionalidad española</li></ul>`;
                            // FIN BISNIETO 10----------------
                        } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                            respuestas.renuncia_ciudadania === "No" &&
                            (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                            respuestas.estado_fisico === "Muerto" &&
                            (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                            respuestas.estado_fisico_mp === "Vivo") {
                            elegible = true;
                            console.log("El usuario es elegible para la ciudadanía española por Anexo I o Anexo III (Bisnieto_11)");
                            encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_11</h2><p>Eres elegible para solicitar la ciudadanía española por Anexo I o Anexo III.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><ul><li>Certificado de nacimiento</li><li>Certificado de antecedentes penales</li><li>Certificado de matrimonio (si corresponde)</li><li>Documento que acredite la relación de parentesco con el ciudadano español (por ejemplo, certificado de nacimiento del bisabuelo)</li><li>Certificado de renuncia a la ciudadanía anterior</li><li>Formulario de solicitud de nacionalidad española</li></ul>`;
                            // FIN BISNIETO 11----------------
                        } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                            respuestas.renuncia_ciudadania === "No" &&
                            (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                            respuestas.estado_fisico === "Muerto" &&
                            (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                            respuestas.estado_fisico_mp === "Muerto") {
                            elegible = true;
                            console.log("El usuario es elegible para la ciudadanía española solo por Anexo I (Bisnieto_12)");
                            encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_12</h2><p>Eres elegible para solicitar la ciudadanía española solo por Anexo I.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><ul><li>Certificado de nacimiento</li><li>Certificado de antecedentes penales</li><li>Certificado de matrimonio (si corresponde)</li><li>Documento que acredite la relación de parentesco con el ciudadano español (por ejemplo, certificado de nacimiento del bisabuelo)</li><li>Certificado de renuncia a la ciudadanía anterior</li><li>Formulario de solicitud de nacionalidad española</li></ul>`;
                            // FIN BISNIETO 12----------------

                            //-INICIO DE BISABUELA------------
                        } else if (respuestas.parentesco === "Es mi bisabuela" &&
                            respuestas.se_casa === "Cubano" &&
                            respuestas.antes_despues_hijos_bisabuela === "Sí" &&
                            (respuestas.quien_hijo_bisabuela.includes("Mi abuelo") || respuestas.quien_hijo_bisabuela.includes("Mi abuela")) &&
                            respuestas.estado_fisico === "Vivo" &&
                            (quien_nieto_bisabuela.includes("Mi padre") || quien_nieto_bisabuela.includes("Mi madre")) &&
                            estado_fisico_nieto_bisabuela === "Vivo") {
                            elegible = true;
                            console.log("El usuario es elegible para la ciudadanía española (Bisnieto_de Bisabuela 1-Anexo III)");
                            encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_de Bisabuela 1-Anexo III</h2><p>Eres elegible para solicitar la ciudadanía española por Anexo III después que su progenitor se presente por Anexo I.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><ul><li>Certificado de nacimiento</li><li>Certificado de antecedentes penales</li><li>Certificado de matrimonio (si corresponde)</li><li>Documento que acredite la relación de parentesco con el ciudadano español (por ejemplo, certificado de nacimiento del bisabuelo)</li><li>Certificado de renuncia a la ciudadanía anterior</li><li>Formulario de solicitud de nacionalidad española</li></ul>`;
                            // FIN BISNIETO 1/BISABUELA----------------
                        }

                        else {
                            console.log("El usuario NO es elegible para la ciudadanía española");
                            encuestaDiv.innerHTML = `<h2>Resultado</h2><p>No eres elegible para solicitar la ciudadanía española.</p>`;
                        }
                    } else {
                        console.log("El método de pago no fue aprobado.");
                        encuestaDiv.innerHTML = `<h2>Resultado</h2><p>Lo sentimos, su Nro. Transacción no es correcto. Por favor, inténtelo de nuevo.</p>`;
                    }
                }, 5000); // Espera 5 segundos para simular la comprobación del método de pago
            } else {
                console.log("Debe introducir Nro. Transacción Correcto.");
                encuestaDiv.innerHTML = `<h2>ERROR</h2><p>Debe introducir Nro. Transacción Correcto.</p>`;
            }
        } else {
            console.log("Debe aceptar las condiciones para ver el resultado.");
            encuestaDiv.innerHTML = `<h2>Resultado</h2><p>Debe aceptar las condiciones para ver el resultado.</p>`;
        }
    }
}


function refrescarEncuesta() {
    claveActual = "bienvenida";
    mostrarPregunta();
    document.getElementById("siguiente").style.display = "inline";
    document.getElementById("atras").style.display = "none";
    document.getElementById("resultado").style.display = "none";
}

mostrarPregunta();
