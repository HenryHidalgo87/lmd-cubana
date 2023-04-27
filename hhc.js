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
            "Abuelo": "abu_renuncia_ciudadania",
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
            "No": "estado_civil_del_bisabuelo"
        },
        anterior: "parentesco"
    },
    antes_despues: {
        pregunta: "¿Antes de nacer sus hijos?",
        opciones: ["Sí", "No"],
        siguiente: {
            "Sí": "estado_civil_del_bisabuelo",
            "No": "estado_civil_del_bisabuelo"
        },
        anterior: ["renuncia_ciudadania"]
    },
    //-------Estado civil al momento de nacer sus hijo:----
    estado_civil_del_bisabuelo: {
        pregunta: "Que estado civil tenía el  al momento del nacimiento de su hijo/a:",
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
        pregunta: "¿Quién es hijo de su bisabuelo/a?",
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
        pregunta: "Que estado civil tenía el abuelo/a al momento del nacimiento de sus hijos:",
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
        pregunta: "¿Quién es hijo de mi abuelo/a?",
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
            "Español": "estado_civil_del_bisabuelo",
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
    },
    //----ABUELO--------------------------------------------------------------------------------------------
    abu_renuncia_ciudadania: {
        pregunta: "¿Su abuelo renunció a la ciudadanía española?",
        opciones: ["Sí", "No"],
        siguiente: {
            "Sí": "abu_antes_despues",
            "No": "estado_fisico"
        },
        anterior: "parentesco"
    },
    abu_antes_despues: {
        pregunta: "¿Antes de nacer sus hijos?",
        opciones: ["Sí", "No"],
        siguiente: {
            "Sí": "estado_fisico",
            "No": "estado_fisico"
        },
        anterior: ["abu_renuncia_ciudadania"]
    },
    // ABUELO FIN----------------------------------------------
    // INICIO ABUELA-------------------------------------------
    abu_se_casa: {
        pregunta: "Su abuela se caso con:",
        opciones: ["Español", "Cubano"],
        siguiente: {
            "Español": "estado_fisico",
            "Cubano": "abu_antes_despues_hijos"
        },
        anterior: ["parentesco"]
    },
    abu_antes_despues_hijos: {
        pregunta: "¿Antes de nacer su hijo/a?",
        opciones: ["Sí", "No"],
        siguiente: {
            "Sí": "estado_fisico",
            "No": "estado_fisico"
        },
        anterior: ["abu_se_casa"]
    },

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

        // Actualizar la pregunta actual Esatdo Civil Bisabuelo
        if (claveActual === "estado_civil_del_bisabuelo") {
            if (respuestas["parentesco"] === "Es mi bisabuelo") {
                preguntas[claveActual].pregunta = "Que estado civil tenía el bisabuelo al momento del nacimiento de sus hijos:";
            } else if (respuestas["parentesco"] === "Es mi bisabuela") {
                preguntas[claveActual].pregunta = "Que estado civil tenía la bisabuela al momento del nacimiento de sus hijos:";
            } //else {
            //preguntas[claveActual].pregunta = "Que estado civil tenía el/la " + parentesco + " al momento de su nacimiento:";
            //}
        }
        // Actualizar la pregunta actual quien hijo.
        if (claveActual === "quien_hijo") {
            if (respuestas["parentesco"] === "Es mi bisabuelo") {
                preguntas[claveActual].pregunta = "¿Quién es hijo de su bisabuelo?";
            } else if (respuestas["parentesco"] === "Es mi bisabuela") {
                preguntas[claveActual].pregunta = "¿Quién el hijo de su bisabuela?";
            }
        }
        // Actualizar la pregunta actual estado fisico.
        if (claveActual === "estado_fisico") {
            if (respuestas["quien_hijo"] === "Mi abuelo") {
                preguntas[claveActual].pregunta = "Qué estado físico tiene su abuelo en la actualidad:";
            } else if (respuestas["quien_hijo"] === "Mi abuela") {
                preguntas[claveActual].pregunta = "Qué estado físico tiene su abuela en la actualidad:";
            }
        }
        // Actualizar la pregunta actual Esatdo Civil de los abuelos.
        if (claveActual === "estado_civil_de_los_abuelos") {
            if (respuestas["quien_hijo"] === "Mi abuelo") {
                preguntas[claveActual].pregunta = "Que estado civil tenía el abuelo al momento del nacimiento de sus hijos:";
            } else if (respuestas["quien_hijo"] === "Mi abuela") {
                preguntas[claveActual].pregunta = "Que estado civil tenía la abuela al momento del nacimiento de sus hijos:";
            }
        }
        // Actualizar la pregunta actual quien hijo de abuelos
        if (claveActual === "quien_hijo_abu") {
            if (respuestas["quien_hijo"] === "Mi abuelo") {
                preguntas[claveActual].pregunta = "¿Quién es hijo de su abuelo?";
            } else if (respuestas["quien_hijo"] === "Mi abuela") {
                preguntas[claveActual].pregunta = "¿Quién es hijo de su abuela?";
            }
        }
        // Actualizar la pregunta actual estado fisico.
        if (claveActual === "estado_fisico_mp") {
            if (respuestas["quien_hijo_abu"] === "Mi padre") {
                preguntas[claveActual].pregunta = "Qué estado físico tiene su padre en la actualidad:";
            } else if (respuestas["quien_hijo_abu"] === "Mi madre") {
                preguntas[claveActual].pregunta = "Qué estado físico tiene su madre en la actualidad:";
            }
        }


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
                respuesta = "Debes presentar una de estas variantes: certificado de vigencia del matrimonio o certificado de matrimonio con nota del divorcio y legalizado por el MINREX.";
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
                respuesta = "Debes presentar una de estas variantes: certificado de vigencia del matrimonio o certificado de matrimonio con nota del divorcio y legalizado por el MINREX.";
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
                respuesta = "Debes presentar una de estas variantes: certificado de vigencia del matrimonio o certificado de matrimonio con nota del divorcio y legalizado por el MINREX.";
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
    //let correoElectronico;

    console.log("Respuestas recibidas:", respuestas);
    // Capturar la información de respuestas en una nueva variable
    const respuestasCapturadas = respuestas;



    const regex = /^[A-Z0-9]{13}$/;

    const aceptaCondiciones = confirm("Para ver el resultado, debe aceptar los Términos Y Condiciones lea atentamente:\n\n1. El servicio incluirá una evaluación detallada de las condiciones requeridas para obtener la ciudadanía española por un valor de 100 MN.\n\n2. La responsabilidad por los datos correctos proporcionados es de la parte del usuario, así evitamos malentendidos futuros entre ustedes y nosotros.\n\n3. El usuario siempre será responsable de los datos proporcionados, nosotros simplemente realizamos una valoración basada en los datos que usted nos administra, sin tener ninguna responsabilidad por eventuales errores o desviaciones de la información.\n\n4. El interesado deberás estar en perfecta salud mental e integral para poder llenar el formulario.\n\n5. Tener más de 18 años.\n\n6. La agencia no se hace responsable de malos entendidos o situaciones que no estén contempladas en estos términos y condiciones, siempre y cuando se hayan cumplido con todas las leyes y regulaciones aplicables. En caso de conflicto o controversia, ambas partes se comprometen a buscar una solución amistosa y a cooperar plenamente con las autoridades competentes en caso de ser necesario.");


    if (aceptaCondiciones) {
        const metodoPago = prompt("Haga una transferencia de 100 MN a esta cuenta: 9200-1299-7101-5751 e introduzca el Nro. Transaccion aqui para comprobarlo:");

        //if (aceptaCondiciones) {
        //correoElectronico = prompt("Por favor, ingrese su correo electrónico:");

        // if (!correoElectronico || correoElectronico.trim() === "") {
        //     console.log("Debe ingresar un correo electrónico válido.");
        //     encuestaDiv.innerHTML = `<h2>ERROR</h2><p>Debe ingresar un correo electrónico válido.</p>`;
        //     return;
        // }

        // respuestas["correoElectronico"] = correoElectronico;
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

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        //--ANEXO III----------
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_1</h2><p><strong>Eres elegible para solicitar la ciudadanía española por Anexo III después que su ${soloPadres} se presente por Anexo I.</strong></p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo III, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Fotocopia de la certificación literal española de nacimiento de su ${soloPadres}, al haberse reconocido la nacionalidad española de origen en virtud del derecho de opción de acuerdo a la Ley de Memoria Democrática de 2022 o la Ley de Memoria Histórica de 2007.<br>
                            <strong>Nota 1:</strong> Si su ${soloPadres} se presentó y usted no quiere esperar a sus datos registrales entonces presentar fotocopia del resguardo del mismo a cambio.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            <li>Referente al Estado civil de los progenitores al momento de su nacimiento:<br> ${respuestaPadres}</li>
                            </ol>
                            <div>`;
                        // FIN BISNIETO 1----------------
                        // INICIO BISNIETO 2-------------
                    } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                        respuestas.renuncia_ciudadania === "Sí" &&
                        respuestas.antes_despues === "Sí" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Vivo" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Muerto") {
                        elegible = true;
                        console.log("El usuario no es elegible para la ciudadanía española pero su Abuelo si por Anexo I (Bisnieto_2)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);


                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_2</h2><p><strong>Usted no es elegible para la ciudadanía española pero su ${soloAbuelo} si por Anexo I.</strong></p><p>A continuación, te indicamos los documentos que necesitarás para que su ${soloAbuelo} pueda presentar su solicitud:</p>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo} y legalizado en el MINREX.</li>
                            <li>Original de la certificación literal de nacimiento española del progenitor de su ${soloAbuelo}, que originariamente hubiera sido español/a.
                            </li>
                            <li>Original y copia del carnet de identidad de su ${soloAbuelo}.</li>
                            <li>Referente al Estado civil de los progenitores de su ${soloAbuelo} al momento del nacimiento:<br> ${respuestaBisabuelo}.</li>
                            </ol>
                            <div>`;
                        // FIN BISNIETO 2----------------
                        // INICIO BISNIETO 3 ------------
                    } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                        respuestas.renuncia_ciudadania === "Sí" &&
                        respuestas.antes_despues === "Sí" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Muerto" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Vivo") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española (Bisnieto_3-Anexo III)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        //--ANEXO III----------
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_3</h2><p><strong>Eres elegible para solicitar la ciudadanía española por Anexo III después que su ${soloPadres} se presente por Anexo I.</strong></p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo III, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Fotocopia de la certificación literal española de nacimiento de su ${soloPadres}, al haberse reconocido la nacionalidad española de origen en virtud del derecho de opción de acuerdo a la Ley de Memoria Democrática de 2022 o la Ley de Memoria Histórica de 2007.<br>
                            <strong>Nota 1:</strong> Si su ${soloPadres} se presentó y usted no quiere esperar a sus datos registrales entonces presentar fotocopia del resguardo del mismo a cambio.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            <li>Referente al Estado civil de los progenitores al momento de su nacimiento:<br> ${respuestaPadres}</li>
                            </ol>
                            <div>`;

                        // FIN BISNIETO 3----------------
                        // INICIO BISNIETO 5 ------------
                    } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                        respuestas.renuncia_ciudadania === "Sí" &&
                        respuestas.antes_despues === "No" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Vivo" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Vivo") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española por Anexo I o Anexo III (Bisnieto_5)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        // ANEXO I y ANEXO III
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_5</h2><p><strong>Eres elegible para solicitar la ciudadanía española  por Anexo I o Anexo III</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br>
                            <strong>Nota:</strong> si presentas por Anexo I estos son los documentos relacionados:<br> 
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*- Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*- Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            <li>Referente al Estado civil de tus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            </ol><hr>
                            <div>
                            <h3 class="text-center">ANEXO III</h3><br>
                            <strong>Nota:</strong> si presenta por Anexo III estos son los documentos relacionados:<br>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo III, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Fotocopia de la certificación literal española de nacimiento de su ${soloPadres}, al haberse reconocido la nacionalidad española de origen en virtud del derecho de opción de acuerdo a la Ley de Memoria Democrática de 2022 o la Ley de Memoria Histórica de 2007.<br>
                            <strong>Nota 1:</strong> Si su ${soloPadres} se presentó y usted no quiere esperar a sus datos registrales entonces presentar fotocopia del resguardo del mismo a cambio.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            <li>Referente al Estado civil de los progenitores al momento de su nacimiento:<br> ${respuestaPadres}</li>
                            </ol>
                            <div>`;
                        // FIN BISNIETO 5----------------
                        // INICIO BISNIET 6 -------------
                    } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                        respuestas.renuncia_ciudadania === "Sí" &&
                        respuestas.antes_despues === "No" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Vivo" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Muerto") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española solo por Anexo I (Bisnieto_6)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        // ANEXO I
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_6</h2><strong><p>Eres elegible para solicitar la ciudadanía española solo por Anexo I.</p></strong><br>
                            <p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Certificado de defunción de su ${soloPadres}.</li>
                            <li>Referente al Estado civil de tus progenitores al momento de su nacimiento: ${respuestaPadres}</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol>
                            <div>`;
                        // FIN BISNIETO 6----------------
                        // INICIO BISNIETO 7 ------------
                    } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                        respuestas.renuncia_ciudadania === "Sí" &&
                        respuestas.antes_despues === "No" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Muerto" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Vivo") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española por Anexo I o por Anexo III(Bisnieto_7)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        // ANEXO I y ANEXO III
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_7</h2><p><strong>Eres elegible para solicitar la ciudadanía española  por Anexo I o Anexo III</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br>
                            <strong>Nota:</strong> si presentas por Anexo I estos son los documentos relacionados:<br> 
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Referente al Estado civil de sus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            <li>Certificación de defunción de su ${soloAbuelo} </li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol></div><br><hr>
                            <div>
                            <h3 class="text-center">ANEXO III</h3>
                            <strong>Nota:</strong> si presenta por Anexo III estos son los documentos relacionados:<br>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo III, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Fotocopia de la certificación literal española de nacimiento de su ${soloPadres}, al haberse reconocido la nacionalidad española de origen en virtud del derecho de opción de acuerdo a la Ley de Memoria Democrática de 2022 o la Ley de Memoria Histórica de 2007.<br>
                            <strong>Nota 1:</strong> Si su ${soloPadres} se presentó y usted no quiere esperar a sus datos registrales entonces presentar fotocopia del resguardo del mismo a cambio.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            <li>Referente al Estado civil de los progenitores al momento de su nacimiento:<br> ${respuestaPadres}</li>
                            </ol>
                            <div>`;
                        // FIN BISNIETO 7----------------
                        // INICIO BISNIETO 8 ------------
                    } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                        respuestas.renuncia_ciudadania === "Sí" &&
                        respuestas.antes_despues === "No" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Muerto" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Muerto") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española solo por Anexo I (Bisnieto_8)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        // ANEXO I
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_8</h2><p><strong>Eres elegible para solicitar la ciudadanía española  solo por Anexo I.</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br>
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Referente al Estado civil de sus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            <li>Certificación de defunción de su ${soloAbuelo} </li>
                            <li>Certificación de defunción de su ${soloPadres} </li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol></div><br>`;
                        // FIN BISNIETO 8----------------
                        // INICIO NISNIETO 9 ------------
                    } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                        respuestas.renuncia_ciudadania === "No" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Vivo" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Vivo") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española por Anexo I o Anexo III (Bisnieto_9)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);
                        //ANEXO I y ANEXO III
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_9</h2><p><strong>Eres elegible para solicitar la ciudadanía española  por Anexo I o Anexo III</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br>
                            <strong>Nota:</strong> si presentas por Anexo I estos son los documentos relacionados:<br> 
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Referente al Estado civil de sus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol></div><br>
                            <div>
                            <h3 class="text-center">ANEXO III</h3>
                            <strong>Nota:</strong> si presenta por Anexo III estos son los documentos relacionados:<br>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo III, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Fotocopia de la certificación literal española de nacimiento de su ${soloPadres}, al haberse reconocido la nacionalidad española de origen en virtud del derecho de opción de acuerdo a la Ley de Memoria Democrática de 2022 o la Ley de Memoria Histórica de 2007.<br>
                            <strong>Nota 1:</strong> Si su ${soloPadres} se presentó y usted no quiere esperar a sus datos registrales entonces presentar fotocopia del resguardo del mismo a cambio.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            <li>Referente al Estado civil de los progenitores al momento de su nacimiento:<br> ${respuestaPadres}</li>
                            </ol>
                            <div>`;
                        // FIN BISNIETO 9----------------
                        // INICIO BISNIETO 10 -----------
                    } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                        respuestas.renuncia_ciudadania === "No" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Vivo" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Muerto") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española por Anexo I o (Bisnieto_10)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        // ANEXO I-Defuncion 
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_10</h2><p>Eres elegible para solicitar la ciudadanía española solo por Anexo I.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br>
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Referente al Estado civil de sus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            <li>Certificación de defunción de su ${soloPadres}.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol></div><br>`;
                        // FIN BISNIETO 10----------------
                        // INICIO BISNIETO 11 ------------
                    } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                        respuestas.renuncia_ciudadania === "No" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Muerto" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Vivo") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española por Anexo I o Anexo III (Bisnieto_11)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        // ANEXO I y ANEXO III
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_11</h2><p><strong>Eres elegible para solicitar la ciudadanía española  por Anexo I o Anexo III</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br>
                            <strong>Nota:</strong> si presentas por Anexo I estos son los documentos relacionados:<br> 
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Referente al Estado civil de sus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            <li>Certificación de defunción de su ${soloAbuelo} </li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol></div><br><hr>
                            <div>
                            <h3 class="text-center">ANEXO III</h3>
                            <strong>Nota:</strong> si presenta por Anexo III estos son los documentos relacionados:<br>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo III, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Fotocopia de la certificación literal española de nacimiento de su ${soloPadres}, al haberse reconocido la nacionalidad española de origen en virtud del derecho de opción de acuerdo a la Ley de Memoria Democrática de 2022 o la Ley de Memoria Histórica de 2007.<br>
                            <strong>Nota 1:</strong> Si su ${soloPadres} se presentó y usted no quiere esperar a sus datos registrales entonces presentar fotocopia del resguardo del mismo a cambio.</li>
                            <li>Referente al Estado civil de los progenitores al momento de su nacimiento:<br> ${respuestaPadres}</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol>
                            <div>`;
                        // FIN BISNIETO 11----------------
                        // INICIO BISNIETO 12-------------
                    } else if (respuestas.parentesco === "Es mi bisabuelo" &&
                        respuestas.renuncia_ciudadania === "No" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Muerto" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Muerto") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española solo por Anexo I (Bisnieto_12)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        // ANEXO I
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_12</h2><p><strong>Eres elegible para solicitar la ciudadanía española  solo por Anexo I.</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br>
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Referente al Estado civil de sus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            <li>Certificación de defunción de su ${soloAbuelo} </li>
                            <li>Certificación de defunción de su ${soloPadres} </li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol></div><br>`;
                        // FIN BISNIETO 12----------------


                        //-INICIO DE BISABUELA------------
                    } else if (respuestas.parentesco === "Es mi bisabuela" &&
                        respuestas.se_casa === "Cubano" &&
                        respuestas.antes_despues_hijos_bisabuela === "Sí" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Vivo" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Vivo") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española (Bisnieto_de Bisabuela 1-Anexo III)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        //--ANEXO III----------
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_Bisabuela_1</h2><p><strong>Eres elegible para solicitar la ciudadanía española por Anexo III después que su ${soloPadres} se presente por Anexo I.</strong></p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo III, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Fotocopia de la certificación literal española de nacimiento de su ${soloPadres}, al haberse reconocido la nacionalidad española de origen en virtud del derecho de opción de acuerdo a la Ley de Memoria Democrática de 2022 o la Ley de Memoria Histórica de 2007.<br>
                            <strong>Nota 1:</strong> Si su ${soloPadres} se presentó y usted no quiere esperar a sus datos registrales entonces presentar fotocopia del resguardo del mismo a cambio.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            <li>Referente al Estado civil de los progenitores al momento de su nacimiento:<br> ${respuestaPadres}</li>
                            </ol>
                            <div>`;
                        //1----------------BISABUELA--1--------------
                        // INICIO BISNIETO BISABUELA 2 --------------
                    } else if (respuestas.parentesco === "Es mi bisabuela" &&
                        respuestas.se_casa === "Cubano" &&
                        respuestas.antes_despues_hijos_bisabuela === "Sí" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Vivo" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Muerto") {
                        elegible = true;
                        console.log("El usuario no es elegible para la ciudadanía española pero su Abuelo si por Anexo I (Bisnieto_Bisabuela_2)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_Bisabuela_2</h2><p><strong>Usted no es elegible para la ciudadanía española pero su ${soloAbuelo} si por Anexo I.</strong></p><p>A continuación, te indicamos los documentos que necesitarás para que su ${soloAbuelo} pueda presentar su solicitud:</p>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo} y legalizado en el MINREX.</li>
                            <li>Original de la certificación literal de nacimiento española del progenitor de su ${soloAbuelo}, que originariamente hubiera sido español/a.
                            </li>
                            <li>Original y copia del carnet de identidad de su ${soloAbuelo}.</li>
                            <li>Referente al Estado civil de los progenitores de su ${soloAbuelo} al momento del nacimiento:<br> ${respuestaBisabuelo}.</li>
                            </ol>
                            <div>`;
                        //--FIN BISNIETO_BISABUELA_2-----------
                        // INICIO BISNIETO BISABUELA 3 --------

                    } else if (respuestas.parentesco === "Es mi bisabuela" &&
                        respuestas.se_casa === "Cubano" &&
                        respuestas.antes_despues_hijos_bisabuela === "Sí" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Muerto" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Vivo") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española (Bisnieto_Bisabuela_3-Anexo III)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        //--ANEXO III----------
                        encuestaDiv.innerHTML = `<h2>Bisnieto_Bisabuela_3</h2><p><strong>Eres elegible para solicitar la ciudadanía española por Anexo III después que su ${soloPadres} se presente por Anexo I.</strong></p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo III, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Fotocopia de la certificación literal española de nacimiento de su ${soloPadres}, al haberse reconocido la nacionalidad española de origen en virtud del derecho de opción de acuerdo a la Ley de Memoria Democrática de 2022 o la Ley de Memoria Histórica de 2007.<br>
                            <strong>Nota 1:</strong> Si su ${soloPadres} se presentó y usted no quiere esperar a sus datos registrales entonces presentar fotocopia del resguardo del mismo a cambio.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            <li>Referente al Estado civil de los progenitores al momento de su nacimiento:<br> ${respuestaPadres}</li>
                            </ol>
                            <div>`;
                        //--FIN BISNIETO_BISABUELA_3-----------
                        // INICIO BISNIETO BISABUELA 5 --------

                    } else if (respuestas.parentesco === "Es mi bisabuela" &&
                        respuestas.se_casa === "Cubano" &&
                        respuestas.antes_despues_hijos_bisabuela === "No" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Vivo" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Vivo") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española (Bisnieto_Bisabuela_5-Anexo III) por Anexo I o Anexo III");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        // ANEXO I y ANEXO III
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_Bisabuela_5</h2><p><strong>Eres elegible para solicitar la ciudadanía española  por Anexo I o Anexo III</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br>
                            <strong>Nota:</strong> si presentas por Anexo I estos son los documentos relacionados:<br> 
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>2-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            <li>Referente al Estado civil de tus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            </ol><hr>
                            <div>
                            <h3 class="text-center">ANEXO III</h3><br>
                            <strong>Nota:</strong> si presenta por Anexo III estos son los documentos relacionados:<br>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo III, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Fotocopia de la certificación literal española de nacimiento de su ${soloPadres}, al haberse reconocido la nacionalidad española de origen en virtud del derecho de opción de acuerdo a la Ley de Memoria Democrática de 2022 o la Ley de Memoria Histórica de 2007.<br>
                            <strong>Nota 1:</strong> Si su ${soloPadres} se presentó y usted no quiere esperar a sus datos registrales entonces presentar fotocopia del resguardo del mismo a cambio.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            <li>Referente al Estado civil de los progenitores al momento de su nacimiento:<br> ${respuestaPadres}</li>
                            </ol>
                            <div>`;

                        //--FIN BISNIETO_BISABUELA_5-----------
                        // INICIO BISNIETO BISABUELA 6---------
                    } else if (respuestas.parentesco === "Es mi bisabuela" &&
                        respuestas.se_casa === "Cubano" &&
                        respuestas.antes_despues_hijos_bisabuela === "No" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Vivo" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Muerto") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española solo por Anexo I (Bisnieto_Bisabuela_6-Anexo I");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        // ANEXO I
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_Bisabuela_6</h2><strong><p>Eres elegible para solicitar la ciudadanía española solo por Anexo I.</p></strong><br>
                            <p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Certificado de defunción de su ${soloPadres}.</li>
                            <li>Referente al Estado civil de tus progenitores al momento de su nacimiento: ${respuestaPadres}</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol>
                            <div>`;
                        // FIN BISNIETO_BISABUELA 6-------------
                        // INICIO BISNIETO BISABUELA 7 ---------

                    } else if (respuestas.parentesco === "Es mi bisabuela" &&
                        respuestas.se_casa === "Cubano" &&
                        respuestas.antes_despues_hijos_bisabuela === "No" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Muerto" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Vivo") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española por Anexo I o por Anexo III(Bisnieto_Bisabuela_7)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        // ANEXO I y ANEXO III
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_Bisabuela_7</h2><p><strong>Eres elegible para solicitar la ciudadanía española  por Anexo I o Anexo III</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br>
                            <strong>Nota:</strong> si presentas por Anexo I estos son los documentos relacionados:<br> 
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Referente al Estado civil de sus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            <li>Certificación de defunción de su ${soloAbuelo} </li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol></div><br><hr>
                            <div>
                            <h3 class="text-center">ANEXO III</h3>
                            <strong>Nota:</strong> si presenta por Anexo III estos son los documentos relacionados:<br>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo III, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Fotocopia de la certificación literal española de nacimiento de su ${soloPadres}, al haberse reconocido la nacionalidad española de origen en virtud del derecho de opción de acuerdo a la Ley de Memoria Democrática de 2022 o la Ley de Memoria Histórica de 2007.<br>
                            <strong>Nota 1:</strong> Si su ${soloPadres} se presentó y usted no quiere esperar a sus datos registrales entonces presentar fotocopia del resguardo del mismo a cambio.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            <li>Referente al Estado civil de los progenitores al momento de su nacimiento:<br> ${respuestaPadres}</li>
                            </ol>
                            <div>`;
                        // FIN BISNIETO 7----------------
                        // INICIO BISNIETO BISABUELA 8 --

                    } else if (respuestas.parentesco === "Es mi bisabuela" &&
                        respuestas.se_casa === "Cubano" &&
                        respuestas.antes_despues_hijos_bisabuela === "No" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Muerto" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Muerto") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española solo por Anexo I (Bisnieto_Bisabuela_8)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        // ANEXO I
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_Bisabuela_8</h2><p><strong>Eres elegible para solicitar la ciudadanía española  solo por Anexo I.</strong></p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br>
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Referente al Estado civil de sus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            <li>Certificación de defunción de su ${soloAbuelo} </li>
                            <li>Certificación de defunción de su ${soloPadres} </li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol></div><br>`;
                        // FIN BISNIETO BISABUELA_8------------
                        // INICIO BISNIETO BISABUELA 9 --------

                    } else if (respuestas.parentesco === "Es mi bisabuela" &&
                        respuestas.se_casa === "Español" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Vivo" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Vivo") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española por Anexo I o Anexo III (Bisnieto_Bisabuela_9)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_Bisabuela_9</h2><p><strong>Eres elegible para solicitar la ciudadanía española  por Anexo I o Anexo III</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br>
                            <strong>Nota:</strong> si presentas por Anexo I estos son los documentos relacionados:<br> 
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Referente al Estado civil de sus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol></div><br>
                            <div>
                            <h3 class="text-center">ANEXO III</h3>
                            <strong>Nota:</strong> si presenta por Anexo III estos son los documentos relacionados:<br>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo III, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Fotocopia de la certificación literal española de nacimiento de su ${soloPadres}, al haberse reconocido la nacionalidad española de origen en virtud del derecho de opción de acuerdo a la Ley de Memoria Democrática de 2022 o la Ley de Memoria Histórica de 2007.<br>
                            <strong>Nota 1:</strong> Si su ${soloPadres} se presentó y usted no quiere esperar a sus datos registrales entonces presentar fotocopia del resguardo del mismo a cambio.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            <li>Referente al Estado civil de los progenitores al momento de su nacimiento:<br> ${respuestaPadres}</li>
                            </ol>
                            <div>`;
                        // FIN BISNIETO 9----------------
                        // INICIO BISNIETO BISABUELA 10 --
                    } else if (respuestas.parentesco === "Es mi bisabuela" &&
                        respuestas.se_casa === "Español" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Vivo" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Muerto") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española por Anexo I o Anexo III (Bisnieto_Bisabuela_10)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        // ANEXO I-Defuncion 
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_Bisabuela_10</h2><p>Eres elegible para solicitar la ciudadanía española solo por Anexo I.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br>
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Referente al Estado civil de sus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            <li>Certificación de defunción de su ${soloPadres}.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol></div><br>`;
                        // FIN BISNIETO BISABUELA 10----------
                        // INICIO BISNIETO BISABUELA 11 ------
                    } else if (respuestas.parentesco === "Es mi bisabuela" &&
                        respuestas.se_casa === "Español" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Muerto" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Vivo") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española por Anexo I o Anexo III (Bisnieto_Bisabuela_11)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        // ANEXO I y ANEXO III
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_Bisabuela_11</h2><p><strong>Eres elegible para solicitar la ciudadanía española  por Anexo I o Anexo III</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br>
                            <strong>Nota:</strong> si presentas por Anexo I estos son los documentos relacionados:<br> 
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Referente al Estado civil de sus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            <li>Certificación de defunción de su ${soloAbuelo} </li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol></div><br><hr>
                            <div>
                            <h3 class="text-center">ANEXO III</h3>
                            <strong>Nota:</strong> si presenta por Anexo III estos son los documentos relacionados:<br>
                            <div class="text-left">
                            <ol id="requisitos" class="text-left">
                            <li class="text-left">Anexo III, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Fotocopia de la certificación literal española de nacimiento de su ${soloPadres}, al haberse reconocido la nacionalidad española de origen en virtud del derecho de opción de acuerdo a la Ley de Memoria Democrática de 2022 o la Ley de Memoria Histórica de 2007.<br>
                            <strong>Nota 1:</strong> Si su ${soloPadres} se presentó y usted no quiere esperar a sus datos registrales entonces presentar fotocopia del resguardo del mismo a cambio.</li>
                            <li>Referente al Estado civil de los progenitores al momento de su nacimiento:<br> ${respuestaPadres}</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol>
                            <div>`;
                        // FIN BISNIETO_BISABUELA_11----------
                        // INICIO BISNIETO BISABUELA 12 ------
                    } else if (respuestas.parentesco === "Es mi bisabuela" &&
                        respuestas.se_casa === "Español" &&
                        (respuestas.quien_hijo.includes("Mi abuelo") || respuestas.quien_hijo.includes("Mi abuela")) &&
                        respuestas.estado_fisico === "Muerto" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Muerto") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española solo por Anexo I (Bisnieto_Bisabuela_12)");

                        // -----------------------Progenitores -------------------------------------------------------------------
                        // (progenitorBisabuelo)
                        const progenitorBisabuelo = respuestasCapturadas.parentesco;
                        const soloBisabuelo = progenitorBisabuelo.split(" ")[2];
                        //console.log(soloBisabuelo); // Imprime "bisabuelo"
                        console.log(`La respuesta cual es el parentesco es:${soloBisabuelo}`);

                        // (progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.quien_hijo;
                        const soloAbuelo = progenitorAbuelo.split(" ")[1];
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles------------------------------------------------------------------
                        const estadoCivilBisabuelo = respuestasCapturadas.estado_civil_del_bisabuelo;
                        const respuestaBisabuelo = obtenerRespuestaPorEstadoCivil(null, null, estadoCivilBisabuelo);
                        // console.log(`La respuesta para el estado civil del bisabuelo/a es: ${respuestaBisabuelo}`);

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        // console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        //console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        // ANEXO I
                        encuestaDiv.innerHTML = `<h2>Resultado: Bisnieto_Bisabuela_12</h2><p><strong>Eres elegible para solicitar la ciudadanía española  solo por Anexo I.</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br>
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloAbuelo}, que originariamente es nacido/a español/a aunque su nacimiento haya sido en Cuba.
                            </li>
                            <li>Referente al Estado civil de su ${soloBisabuelo} al momento del nacimiento de tu ${soloAbuelo}: ${respuestaBisabuelo}.</li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>También debes pedir al registro de inmigración y extranjería de su municipio que radica en las unidades del carnet de identidad o directamente a Emigración estos documentos:<br> 
                            <p>*-	Certifico de registro de extranjero de su bisabuelo.</p>
                            <p>*-	Certifico de registro de ciudadanía de su bisabuelo.</p>
                            </li>
                            <li>Referente al Estado civil de sus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            <li>Certificación de defunción de su ${soloAbuelo} </li>
                            <li>Certificación de defunción de su ${soloPadres} </li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol></div>`;
                        // FIN BISNIETO_BISABUELA 12-------
                        // INICIO ABUELO---NIETO 1---------
                    } else if (respuestas.parentesco === "Abuelo" &&
                        respuestas.abu_renuncia_ciudadania === "Sí" &&
                        respuestas.abu_antes_despues === "Sí" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Vivo") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española Anexo I (Nieto_2: Abuelo)");

                        // -----------------------Progenitores -------------------------------------------------------------------

                        //(progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.parentesco;
                        const soloAbuelo = progenitorAbuelo;
                        console.log(soloAbuelo); // Imprime "Abuelo"
                        //console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        //console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles----------------------------------------------------------------

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        //console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        //console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        encuestaDiv.innerHTML = `<h2>Resultado: Nieto_1: Abuelo</h2><p><strong>Eres elegible para solicitar la ciudadanía española  por Anexo I</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                            <h3 class="text-center">ANEXO I</h3><br> 
                            <div>
                            <ol id="requisitos" class="text-left">
                            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                            <li>Original de la certificación literal de nacimiento española de su abuelo, que originariamente hubiera sido español/a.
                            </li>
                            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                            <li>Referente al Estado civil de tus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                            <li>Original y copia del carnet de identidad del interesado/a.</li>
                            </ol><hr>
                            <div>`;
                        // INICIO ABUELO---NIETO 2------
                    } else if (respuestas.parentesco === "Abuelo" &&
                        respuestas.abu_renuncia_ciudadania === "Sí" &&
                        respuestas.abu_antes_despues === "Sí" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Muerto") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española Anexo I (Nieto_1: Abuelo -)");

                        // -----------------------Progenitores -------------------------------------------------------------------

                        //(progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.parentesco;
                        const soloAbuelo = progenitorAbuelo;
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        //console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        //console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles----------------------------------------------------------------

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        //console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        //console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        encuestaDiv.innerHTML = `<h2>Resultado: Nieto_2: Abuelo</h2><p><strong>Eres elegible para solicitar la ciudadanía española  por Anexo I</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                        <h3 class="text-center">ANEXO I</h3><br> 
                        <div>
                        <ol id="requisitos" class="text-left">
                        <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                        <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                        <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                        <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                        <li>Original de la certificación literal de nacimiento española de su abuelo, que originariamente hubiera sido español/a.
                        </li>
                        <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                        <li>Referente al Estado civil de tus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                        <li>Certificación de defunción de su ${soloPadres} </li>
                        <li>Original y copia del carnet de identidad del interesado/a.</li>
                        </ol><hr>
                        <div>`;
                        // INICIO ABUELO---NIETO 3-------

                    } else if (respuestas.parentesco === "Abuelo" &&
                        respuestas.abu_renuncia_ciudadania === "Sí" &&
                        respuestas.abu_antes_despues === "No" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Vivo") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española Anexo I (Nieto_3: Abuelo)");

                        // -----------------------Progenitores -------------------------------------------------------------------

                        //(progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.parentesco;
                        const soloAbuelo = progenitorAbuelo;
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        //console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        //console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles----------------------------------------------------------------

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        //console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        //console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        encuestaDiv.innerHTML = `<h2>Resultado: Nieto_3: Abuelo</h2><p><strong>Eres elegible para solicitar la ciudadanía española  por Anexo I</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                    <h3 class="text-center">ANEXO I</h3><br> 
                    <div>
                    <ol id="requisitos" class="text-left">
                    <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                    <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                    <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                    <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                    <li>Original de la certificación literal de nacimiento española de su abuelo, que originariamente hubiera sido español/a.
                    </li>
                    <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                    <li>Referente al Estado civil de tus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                    <li>Original y copia del carnet de identidad del interesado/a.</li>
                    </ol><hr>
                    <div>`;

                        // INICIO ABUELO---NIETO 4-------
                    } else if (respuestas.parentesco === "Abuelo" &&
                        respuestas.abu_renuncia_ciudadania === "Sí" &&
                        respuestas.abu_antes_despues === "No" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Muerto") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española Anexo I (Nieto_4: Abuelo)");

                        // -----------------------Progenitores -------------------------------------------------------------------

                        //(progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.parentesco;
                        const soloAbuelo = progenitorAbuelo;
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        //console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        //console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles----------------------------------------------------------------

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        //console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        //console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        encuestaDiv.innerHTML = `<h2>Resultado: Nieto_4: Abuelo</h2><p><strong>Eres elegible para solicitar la ciudadanía española  por Anexo I</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
                <h3 class="text-center">ANEXO I</h3><br> 
                <div>
                <ol id="requisitos" class="text-left">
                <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
                <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
                <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
                <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
                <li>Original de la certificación literal de nacimiento española de su abuelo, que originariamente hubiera sido español/a.
                </li>
                <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
                <li>Referente al Estado civil de tus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
                <li>Certificación de defunción de su ${soloPadres} </li>
                <li>Original y copia del carnet de identidad del interesado/a.</li>
                </ol><hr>
                <div>`;

                        // INICIO ABUELO---NIETO 5-------
                    } else if (respuestas.parentesco === "Abuelo" &&
                        respuestas.abu_renuncia_ciudadania === "No" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Vivo") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española Anexo I (Nieto_5: Abuelo)");

                        // -----------------------Progenitores -------------------------------------------------------------------

                        //(progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.parentesco;
                        const soloAbuelo = progenitorAbuelo;
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        //console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        //console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles----------------------------------------------------------------

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        //console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        //console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        encuestaDiv.innerHTML = `<h2>Resultado: Nieto_5: Abuelo</h2><p><strong>Eres elegible para solicitar la ciudadanía española  por Anexo I</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
            <h3 class="text-center">ANEXO I</h3><br> 
            <div>
            <ol id="requisitos" class="text-left">
            <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
            <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
            <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
            <li>Original de la certificación literal de nacimiento española de su abuelo, que originariamente hubiera sido español/a.
            </li>
            <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
            <li>Referente al Estado civil de tus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
            <li>Original y copia del carnet de identidad del interesado/a.</li>
            </ol><hr>
            <div>`;

                        // INICIO ABUELO NIETO 6
                    } else if (respuestas.parentesco === "Abuelo" &&
                        respuestas.abu_renuncia_ciudadania === "No" &&
                        (respuestas.quien_hijo_abu.includes("Mi padre") || respuestas.quien_hijo_abu.includes("Mi madre")) &&
                        respuestas.estado_fisico_mp === "Muerto") {
                        elegible = true;
                        console.log("El usuario es elegible para la ciudadanía española Anexo I (Nieto_6: Abuelo)");

                        // -----------------------Progenitores -------------------------------------------------------------------

                        //(progenitorAbuelos)
                        const progenitorAbuelo = respuestasCapturadas.parentesco;
                        const soloAbuelo = progenitorAbuelo;
                        //console.log(soloAbuelo); // Imprime "Abuelo"
                        //console.log(`La respuesta quien es el hijo del bisabuelo/a es:${soloAbuelo}`);

                        // (progenitorPadres)
                        const progenitorPadres = respuestasCapturadas.quien_hijo_abu;
                        const soloPadres = progenitorPadres.split(" ")[1];
                        //console.log(soloPadres); // Imprime "Abuelo"
                        //console.log(`La respuesta quien es el hijo del abuelo/a es:${soloPadres}`); // Imprime "Padres"

                        // Estados-Civiles----------------------------------------------------------------

                        const estadoCivilAbuelos = respuestasCapturadas.estado_civil_de_los_abuelos;
                        const respuestaAbuelos = obtenerRespuestaPorEstadoCivil(estadoCivilAbuelos, null, null);
                        //console.log(`La respuesta para el estado civil de los abuelos es: ${respuestaAbuelos}`);

                        const estadoCivilPadres = respuestasCapturadas.estado_civil_de_los_padres;
                        const respuestaPadres = obtenerRespuestaPorEstadoCivil(null, estadoCivilPadres, null);
                        //console.log(`La respuesta para el estado civil de los padres es: ${respuestaPadres}`);

                        encuestaDiv.innerHTML = `<h2>Resultado: Nieto_6: Abuelo</h2><p><strong>Eres elegible para solicitar la ciudadanía española  por Anexo I</strong>.</p><p>A continuación, te indicamos los documentos que necesitarás para presentar tu solicitud:</p><br>
        <h3 class="text-center">ANEXO I</h3><br> 
        <div>
        <ol id="requisitos" class="text-left">
        <li>Anexo I, debidamente cumplimentado y firmado (Original y Copia).</li>
        <li>Hoja de declaración de datos, debidamente cumplimentada y firmada.</li>
        <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano del interesado/a y legalizado en el MINREX.</li>
        <li>Certificado extracto de nacimiento expedido por el Registro Civil cubano de su ${soloPadres} y legalizado en el MINREX.</li>
        <li>Original de la certificación literal de nacimiento española de su abuelo, que originariamente hubiera sido español/a.
        </li>
        <li>Referente al Estado civil de su ${soloAbuelo} al momento del nacimiento de tu ${soloPadres}: ${respuestaAbuelos}.</li>
        <li>Referente al Estado civil de tus progenitores al momento de su nacimiento: ${respuestaPadres}.</li>
        <li>Certificación de defunción de su ${soloPadres} </li>
        <li>Original y copia del carnet de identidad del interesado/a.</li>
        </ol><hr>
        <div>`;
                    }


                    else {
                        console.log("El usuario NO es elegible para la ciudadanía española");
                        encuestaDiv.innerHTML = `<h2>Resultado</h2><p>No eres elegible para solicitar la ciudadanía española por la leyes vigentes.</p>`;
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
        //}
    }
}

// Define una expresión regular que verifique si el valor ingresado por el usuario tiene el formato de un correo electrónico válido
const regexEmail = /\S+@\S+\.\S+/;

// Define una función que se ejecute cuando el usuario haga clic en "Aceptar" en el cuadro de diálogo emergente
function aceptarDialogo() {
    // Obtiene el valor ingresado por el usuario
    const email = prompt("Ingresa tu correo electrónico:");

    // Verifica si el valor ingresado es un correo electrónico válido
    if (regexEmail.test(email)) {
        // Oculta el cuadro de diálogo emergente
        //document.querySelector(".cuadro-dialogo").style.display = "none";
    } else {
        // Si el valor ingresado no es un correo electrónico válido, muestra un mensaje de error y vuelve a pedir el correo electrónico
        alert("Por favor ingresa un correo electrónico válido.");
        aceptarDialogo();
    }
}

// Inicia la función para mostrar el cuadro de diálogo emergente
aceptarDialogo();

// const correosElectronico = [];

// function guardarCorreoValor(valor) {
//     respuestas.correoElectronico = valor;
//     correosElectronico.push(valor); // agregamos el correo al array
//     console.log(`El correo electrónico ingresado es: ${valor}`);
// }

// const correoElectronico = prompt("Por favor, ingrese su correo electrónico:");
// guardarCorreoValor(correoElectronico);

// // aquí puedes utilizar el array correosElectronico para mostrar una lista de los correos ingresados
// console.log(correosElectronico);

function refrescarEncuesta() {
    const correoElectronico = prompt("Por favor, ingrese su correo electrónico:");
    claveActual = "bienvenida";
    mostrarPregunta();
    document.getElementById("siguiente").style.display = "inline";
    document.getElementById("atras").style.display = "inline";
    document.getElementById("resultado").style.display = "none";
    // aquí puedes utilizar el valor de correoElectronico como lo necesites
}

mostrarPregunta();
