const elementos = {
    "1": {
        "nombre": "Hidrógeno",
        "simbolo": "H",
        "numero_atomico": 1,
        "masa_atomica": 1.008,
        "electronegatividad": 2.2,
        "categoria": "No metal",
        "info_adicional": "Elemento más abundante del universo. Es el componente principal de las estrellas.",
        "configuracion_electronica": "1s¹",
        "electrones": 1,
        "protones": 1,
        "neutrones": 0,
        "densidad": "0.00008988 g/cm³",
        "punto_fusion": "-259.16 °C",
        "punto_ebullicion": "-252.87 °C",
        "electrones_valencia": 1,
        "estados_oxidacion": "-1, +1"
    },
    "2": {
        "nombre": "Helio",
        "simbolo": "He",
        "numero_atomico": 2,
        "masa_atomica": 4.0026,
        "electronegatividad": null,
        "categoria": "Gas noble",
        "info_adicional": "Segundo elemento más abundante en el universo. No es inflamable y es más ligero que el aire.",
        "configuracion_electronica": "1s²",
        "electrones": 2,
        "protones": 2,
        "neutrones": 2,
        "densidad": "0.0001785 g/cm³",
        "punto_fusion": "-272.2 °C",
        "punto_ebullicion": "-268.93 °C",
        "electrones_valencia": 2,
        "estados_oxidacion": "0"
    },
    "3": {
        "nombre": "Litio",
        "simbolo": "Li",
        "numero_atomico": 3,
        "masa_atomica": 6.94,
        "electronegatividad": 0.98,
        "categoria": "Metal alcalino",
        "info_adicional": "El metal más ligero. Se utiliza en baterías recargables para dispositivos electrónicos.",
        "configuracion_electronica": "[He] 2s¹",
        "electrones": 3,
        "protones": 3,
        "neutrones": 4,
        "densidad": "0.534 g/cm³",
        "punto_fusion": "180.54 °C",
        "punto_ebullicion": "1342 °C",
        "electrones_valencia": 1,
        "estados_oxidacion": "+1"
    },
    "4": {
        "nombre": "Berilio",
        "simbolo": "Be",
        "numero_atomico": 4,
        "masa_atomica": 9.012,
        "electronegatividad": 1.57,
        "categoria": "Metal alcalinotérreo",
        "info_adicional": "Metal ligero pero extremadamente rígido, utilizado en aplicaciones aeroespaciales y satélites debido a su alta relación resistencia-peso.",
        "configuracion_electronica": "[He] 2s²",
        "electrones": 4,
        "protones": 4,
        "neutrones": 5,
        "densidad": "1.85 g/cm³",
        "punto_fusion": "1287 °C",
        "punto_ebullicion": "2469 °C",
        "electrones_valencia": 2,
        "estados_oxidacion": "+2"
    },
    "5": {
        "nombre": "Boro",
        "simbolo": "B",
        "numero_atomico": 5,
        "masa_atomica": 10.81,
        "electronegatividad": 2.04,
        "categoria": "Metaloide",
        "info_adicional": "Elemento esencial en la fabricación de vidrios borosilicatados resistentes al calor como el Pyrex, y compuestos clave en materiales estructurales avanzados.",
        "configuracion_electronica": "[He] 2s² 2p¹",
        "electrones": 5,
        "protones": 5,
        "neutrones": 6,
        "densidad": "2.34 g/cm³",
        "punto_fusion": "2076 °C",
        "punto_ebullicion": "3927 °C",
        "electrones_valencia": 3,
        "estados_oxidacion": "+3"
    },
    "6": {
        "nombre": "Carbono",
        "simbolo": "C",
        "numero_atomico": 6,
        "masa_atomica": 12.011,
        "electronegatividad": 2.55,
        "categoria": "No metal",
        "info_adicional": "Base de toda la vida orgánica. Forma más de 10 millones de compuestos diferentes.",
        "configuracion_electronica": "[He] 2s² 2p²",
        "electrones": 6,
        "protones": 6,
        "neutrones": 6,
        "densidad": "2.267 g/cm³ (grafito)",
        "punto_fusion": "3550 °C (grafito)",
        "punto_ebullicion": "4827 °C",
        "electrones_valencia": 4,
        "estados_oxidacion": "-4, -3, -2, -1, 0, +1, +2, +3, +4"
    },
    "7": {
        "nombre": "Nitrógeno",
        "simbolo": "N",
        "numero_atomico": 7,
        "masa_atomica": 14.007,
        "electronegatividad": 3.04,
        "categoria": "No metal",
        "info_adicional": "Componente fundamental del aire (78%), crucial para la síntesis de proteínas en seres vivos y materia prima para fertilizantes y explosivos.",
        "configuracion_electronica": "[He] 2s² 2p³",
        "electrones": 7,
        "protones": 7,
        "neutrones": 7,
        "densidad": "0.001251 g/cm³",
        "punto_fusion": "-210.0 °C",
        "punto_ebullicion": "-195.8 °C",
        "electrones_valencia": 5,
        "estados_oxidacion": "-3, -2, -1, +1, +2, +3, +4, +5"
    },
    "8": {
        "nombre": "Oxígeno",
        "simbolo": "O",
        "numero_atomico": 8,
        "masa_atomica": 15.999,
        "electronegatividad": 3.44,
        "categoria": "No metal",
        "info_adicional": "Elemento esencial para la respiración. Constituye aproximadamente el 21% de la atmósfera terrestre.",
        "configuracion_electronica": "[He] 2s² 2p⁴",
        "electrones": 8,
        "protones": 8,
        "neutrones": 8,
        "densidad": "0.001429 g/cm³",
        "punto_fusion": "-218.79 °C",
        "punto_ebullicion": "-182.95 °C",
        "electrones_valencia": 6,
        "estados_oxidacion": "-2, -1, 0, +1, +2"
    },
    "9": {
        "nombre": "Flúor",
        "simbolo": "F",
        "numero_atomico": 9,
        "masa_atomica": 18.998,
        "electronegatividad": 3.98,
        "categoria": "Halógeno",
        "info_adicional": "Elemento más reactivo y electronegativo, esencial en pastas dentales para prevenir caries y componente crítico en refrigerantes y fármacos.",
        "configuracion_electronica": "[He] 2s² 2p⁵",
        "electrones": 9,
        "protones": 9,
        "neutrones": 10,
        "densidad": "0.001696 g/cm³",
        "punto_fusion": "-219.67 °C",
        "punto_ebullicion": "-188.11 °C",
        "electrones_valencia": 7,
        "estados_oxidacion": "-1"
    },
    "10": {
        "nombre": "Neón",
        "simbolo": "Ne",
        "numero_atomico": 10,
        "masa_atomica": 20.180,
        "electronegatividad": null,
        "categoria": "Gas noble",
        "info_adicional": "Gas inerte famoso por su brillo rojo-anaranjado en letreros luminosos, utilizado también en láseres de alta potencia y sistemas criogénicos.",
        "configuracion_electronica": "[He] 2s² 2p⁶",
        "electrones": 10,
        "protones": 10,
        "neutrones": 10,
        "densidad": "0.000900 g/cm³",
        "punto_fusion": "-248.59 °C",
        "punto_ebullicion": "-246.05 °C",
        "electrones_valencia": 8,
        "estados_oxidacion": "0"
    },
    "11": {
        "nombre": "Sodio",
        "simbolo": "Na",
        "numero_atomico": 11,
        "masa_atomica": 22.990,
        "electronegatividad": 0.93,
        "categoria": "Metal alcalino",
        "info_adicional": "Componente principal de la sal de mesa (cloruro de sodio). Reacciona violentamente con agua.",
        "configuracion_electronica": "[Ne] 3s¹",
        "electrones": 11,
        "protones": 11,
        "neutrones": 12,
        "densidad": "0.968 g/cm³",
        "punto_fusion": "97.72 °C",
        "punto_ebullicion": "883 °C",
        "electrones_valencia": 1,
        "estados_oxidacion": "+1"
    },
    "12": {
        "nombre": "Magnesio",
        "simbolo": "Mg",
        "numero_atomico": 12,
        "masa_atomica": 24.305,
        "electronegatividad": 1.31,
        "categoria": "Metal alcalinotérreo",
        "info_adicional": "Metal ligero vital para la fotosíntesis vegetal, componente estructural en aleaciones aeroespaciales y produciendo llamas blancas brillantes en pirotecnia.",
        "configuracion_electronica": "[Ne] 3s²",
        "electrones": 12,
        "protones": 12,
        "neutrones": 12,
        "densidad": "1.738 g/cm³",
        "punto_fusion": "650 °C",
        "punto_ebullicion": "1091 °C",
        "electrones_valencia": 2,
        "estados_oxidacion": "+2"
    },
    "13": {
        "nombre": "Aluminio",
        "simbolo": "Al",
        "numero_atomico": 13,
        "masa_atomica": 26.982,
        "electronegatividad": 1.61,
        "categoria": "Metal del bloque p",
        "info_adicional": "Metal ligero y resistente a la corrosión, dominante en envases, transporte aéreo y estructuras arquitectónicas, siendo el tercer elemento más abundante en la corteza terrestre.",
        "configuracion_electronica": "[Ne] 3s² 3p¹",
        "electrones": 13,
        "protones": 13,
        "neutrones": 14,
        "densidad": "2.70 g/cm³",
        "punto_fusion": "660.32 °C",
        "punto_ebullicion": "2470 °C",
        "electrones_valencia": 3,
        "estados_oxidacion": "+3"
    },
    "14": {
        "nombre": "Silicio",
        "simbolo": "Si",
        "numero_atomico": 14,
        "masa_atomica": 28.085,
        "electronegatividad": 1.90,
        "categoria": "Metaloide",
        "info_adicional": "Segundo elemento más abundante en la corteza terrestre. Esencial en la fabricación de chips de computadora.",
        "configuracion_electronica": "[Ne] 3s² 3p²",
        "electrones": 14,
        "protones": 14,
        "neutrones": 14,
        "densidad": "2.3290 g/cm³",
        "punto_fusion": "1414 °C",
        "punto_ebullicion": "3265 °C",
        "electrones_valencia": 4,
        "estados_oxidacion": "-4, -3, -2, -1, 0, +1, +2, +3, +4"
    },
    "15": {
        "nombre": "Fósforo",
        "simbolo": "P",
        "numero_atomico": 15,
        "masa_atomica": 30.974,
        "electronegatividad": 2.19,
        "categoria": "No metal",
        "info_adicional": "Elemento esencial en ADN y fertilizantes, presente en formas alotrópicas como el fósforo blanco (altamente inflamable) y el rojo (usado en cerillas).",
        "configuracion_electronica": "[Ne] 3s² 3p³",
        "electrones": 15,
        "protones": 15,
        "neutrones": 16,
        "densidad": "1.82 g/cm³ (blanco)",
        "punto_fusion": "44.15 °C (blanco)",
        "punto_ebullicion": "280.5 °C (blanco)",
        "electrones_valencia": 5,
        "estados_oxidacion": "-3, +1, +3, +4, +5"
    },
    "16": {
        "nombre": "Azufre",
        "simbolo": "S",
        "numero_atomico": 16,
        "masa_atomica": 32.06,
        "electronegatividad": 2.58,
        "categoria": "No metal",
        "info_adicional": "Conocido por su olor característico en huevos podridos, vital en la producción de ácido sulfúrico (compuesto industrial más importante) y vulcanización del caucho.",
        "configuracion_electronica": "[Ne] 3s² 3p⁴",
        "electrones": 16,
        "protones": 16,
        "neutrones": 16,
        "densidad": "2.07 g/cm³",
        "punto_fusion": "115.21 °C",
        "punto_ebullicion": "444.61 °C",
        "electrones_valencia": 6,
        "estados_oxidacion": "-2, -1, +1, +2, +3, +4, +5, +6"
    },
    "17": {
        "nombre": "Cloro",
        "simbolo": "Cl",
        "numero_atomico": 17,
        "masa_atomica": 35.45,
        "electronegatividad": 3.16,
        "categoria": "Halógeno",
        "info_adicional": "Gas amarillo-verdoso altamente tóxico. Se utiliza para purificar el agua y en la producción de plásticos.",
        "configuracion_electronica": "[Ne] 3s² 3p⁵",
        "electrones": 17,
        "protones": 17,
        "neutrones": 18,
        "densidad": "0.003214 g/cm³",
        "punto_fusion": "-101.5 °C",
        "punto_ebullicion": "-34.04 °C",
        "electrones_valencia": 7,
        "estados_oxidacion": "-1, +1, +3, +4, +5, +6, +7"
    },
    "18": {
        "nombre": "Argón",
        "simbolo": "Ar",
        "numero_atomico": 18,
        "masa_atomica": 39.948,
        "electronegatividad": null,
        "categoria": "Gas noble",
        "info_adicional": "Gas inerte más abundante en la atmósfera (0.93%), utilizado para crear atmósferas protectoras en soldaduras, fabricación de semiconductores y conservación de documentos históricos.",
        "configuracion_electronica": "[Ne] 3s² 3p⁶",
        "electrones": 18,
        "protones": 18,
        "neutrones": 22,
        "densidad": "0.001784 g/cm³",
        "punto_fusion": "-189.34 °C",
        "punto_ebullicion": "-185.85 °C",
        "electrones_valencia": 8,
        "estados_oxidacion": "0"
    },
    "19": {
        "nombre": "Potasio",
        "simbolo": "K",
        "numero_atomico": 19,
        "masa_atomica": 39.098,
        "electronegatividad": 0.82,
        "categoria": "Metal alcalino",
        "info_adicional": "Metal esencial para la función nerviosa y muscular en seres vivos, componente clave en fertilizantes y reactivo altamente explosivo en contacto con agua.",
        "configuracion_electronica": "[Ar] 4s¹",
        "electrones": 19,
        "protones": 19,
        "neutrones": 20,
        "densidad": "0.89 g/cm³",
        "punto_fusion": "63.5 °C",
        "punto_ebullicion": "759 °C",
        "electrones_valencia": 1,
        "estados_oxidacion": "+1"
    },
    "20": {
        "nombre": "Calcio",
        "simbolo": "Ca",
        "numero_atomico": 20,
        "masa_atomica": 40.078,
        "electronegatividad": 1.00,
        "categoria": "Metal alcalinotérreo",
        "info_adicional": "Mineral fundamental en huesos, dientes y conchas, utilizado en la producción de cemento, aleaciones metálicas y como reductor en procesos metalúrgicos.",
        "configuracion_electronica": "[Ar] 4s²",
        "electrones": 20,
        "protones": 20,
        "neutrones": 20,
        "densidad": "1.55 g/cm³",
        "punto_fusion": "842 °C",
        "punto_ebullicion": "1484 °C",
        "electrones_valencia": 2,
        "estados_oxidacion": "+2"
    },
"21": {
    "nombre": "Escandio",
    "simbolo": "Sc",
    "numero_atomico": 21,
    "masa_atomica": 44.956,
    "electronegatividad": 1.36,
    "categoria": "Metal de transición",
    "info_adicional": "Elemento ligero utilizado en lámparas de alta intensidad y aleaciones de aluminio para componentes aeroespaciales, siendo más común en la Luna que en la Tierra.",
    "configuracion_electronica": "[Ar] 3d¹ 4s²",
    "electrones": 21,
    "protones": 21,
    "neutrones": 24,
    "densidad": "2.985 g/cm³",
    "punto_fusion": "1541 °C",
    "punto_ebullicion": "2836 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+1, +2, +3"
},
"22": {
    "nombre": "Titanio",
    "simbolo": "Ti",
    "numero_atomico": 22,
    "masa_atomica": 47.867,
    "electronegatividad": 1.54,
    "categoria": "Metal de transición",
    "info_adicional": "Metal extremadamente resistente y ligero, utilizado en implantes médicos, aeronáutica y equipos deportivos debido a su excelente relación resistencia-peso y biocompatibilidad.",
    "configuracion_electronica": "[Ar] 3d² 4s²",
    "electrones": 22,
    "protones": 22,
    "neutrones": 26,
    "densidad": "4.506 g/cm³",
    "punto_fusion": "1668 °C",
    "punto_ebullicion": "3287 °C",
    "electrones_valencia": 4,
    "estados_oxidacion": "-2, -1, 0, +1, +2, +3, +4"
},
"23": {
    "nombre": "Vanadio",
    "simbolo": "V",
    "numero_atomico": 23,
    "masa_atomica": 50.942,
    "electronegatividad": 1.63,
    "categoria": "Metal de transición",
    "info_adicional": "Elemento que forma coloridos compuestos, utilizado en aceros de alta resistencia para herramientas y como catalizador en la producción de ácido sulfúrico.",
    "configuracion_electronica": "[Ar] 3d³ 4s²",
    "electrones": 23,
    "protones": 23,
    "neutrones": 28,
    "densidad": "6.11 g/cm³",
    "punto_fusion": "1910 °C",
    "punto_ebullicion": "3407 °C",
    "electrones_valencia": 5,
    "estados_oxidacion": "-3, -1, 0, +1, +2, +3, +4, +5"
},
"24": {
    "nombre": "Cromo",
    "simbolo": "Cr",
    "numero_atomico": 24,
    "masa_atomica": 51.996,
    "electronegatividad": 1.66,
    "categoria": "Metal de transición",
    "info_adicional": "Conocido por su brillo metálico y resistencia a la corrosión, esencial en aceros inoxidables y procesos de cromado para protección superficial y acabados decorativos.",
    "configuracion_electronica": "[Ar] 3d⁵ 4s¹",
    "electrones": 24,
    "protones": 24,
    "neutrones": 28,
    "densidad": "7.19 g/cm³",
    "punto_fusion": "1907 °C",
    "punto_ebullicion": "2671 °C",
    "electrones_valencia": 6,
    "estados_oxidacion": "-4, -2, -1, 0, +1, +2, +3, +4, +5, +6"
},
"25": {
    "nombre": "Manganeso",
    "simbolo": "Mn",
    "numero_atomico": 25,
    "masa_atomica": 54.938,
    "electronegatividad": 1.55,
    "categoria": "Metal de transición",
    "info_adicional": "Elemento esencial en la producción de acero (desoxidante y desulfurante) y baterías recargables, además de ser crucial para la función de enzimas en organismos vivos.",
    "configuracion_electronica": "[Ar] 3d⁵ 4s²",
    "electrones": 25,
    "protones": 25,
    "neutrones": 30,
    "densidad": "7.21 g/cm³",
    "punto_fusion": "1246 °C",
    "punto_ebullicion": "2061 °C",
    "electrones_valencia": 7,
    "estados_oxidacion": "-3, -2, -1, 0, +1, +2, +3, +4, +5, +6, +7"
},
"26": {
    "nombre": "Hierro",
    "simbolo": "Fe",
    "numero_atomico": 26,
    "masa_atomica": 55.845,
    "electronegatividad": 1.83,
    "categoria": "Metal de transición",
    "info_adicional": "Componente principal del núcleo de la Tierra. Esencial en la producción de acero y en la hemoglobina de la sangre.",
    "configuracion_electronica": "[Ar] 3d⁶ 4s²",
    "electrones": 26,
    "protones": 26,
    "neutrones": 30,
    "densidad": "7.874 g/cm³",
    "punto_fusion": "1538 °C",
    "punto_ebullicion": "2862 °C",
    "electrones_valencia": 8,
    "estados_oxidacion": "-2, -1, 0, +1, +2, +3, +4, +5, +6"
},
"27": {
    "nombre": "Cobalto",
    "simbolo": "Co",
    "numero_atomico": 27,
    "masa_atomica": 58.933,
    "electronegatividad": 1.88,
    "categoria": "Metal de transición",
    "info_adicional": "Componente esencial en imanes de alta performance y baterías de litio, además de ser crucial en la vitamina B12 y aleaciones resistentes al calor para turbinas de aviones.",
    "configuracion_electronica": "[Ar] 3d⁷ 4s²",
    "electrones": 27,
    "protones": 27,
    "neutrones": 32,
    "densidad": "8.90 g/cm³",
    "punto_fusion": "1495 °C",
    "punto_ebullicion": "2927 °C",
    "electrones_valencia": 9,
    "estados_oxidacion": "-3, -1, 0, +1, +2, +3, +4, +5"
},
"28": {
    "nombre": "Níquel",
    "simbolo": "Ni",
    "numero_atomico": 28,
    "masa_atomica": 58.693,
    "electronegatividad": 1.91,
    "categoria": "Metal de transición",
    "info_adicional": "Metal clave en aceros inoxidables y baterías recargables, además de ser utilizado en monedas y como catalizador en procesos industriales como la hidrogenación de aceites.",
    "configuracion_electronica": "[Ar] 3d⁸ 4s²",
    "electrones": 28,
    "protones": 28,
    "neutrones": 31,
    "densidad": "8.908 g/cm³",
    "punto_fusion": "1455 °C",
    "punto_ebullicion": "2913 °C",
    "electrones_valencia": 10,
    "estados_oxidacion": "-2, -1, 0, +1, +2, +3, +4"
},
"29": {
    "nombre": "Cobre",
    "simbolo": "Cu",
    "numero_atomico": 29,
    "masa_atomica": 63.546,
    "electronegatividad": 1.90,
    "categoria": "Metal de transición",
    "info_adicional": "Excelente conductor de electricidad. Utilizado en cables eléctricos y monedas.",
    "configuracion_electronica": "[Ar] 3d¹⁰ 4s¹",
    "electrones": 29,
    "protones": 29,
    "neutrones": 35,
    "densidad": "8.96 g/cm³",
    "punto_fusion": "1084.62 °C",
    "punto_ebullicion": "2562 °C",
    "electrones_valencia": 11,
    "estados_oxidacion": "-2, +1, +2, +3, +4"
},
"30": {
    "nombre": "Zinc",
    "simbolo": "Zn",
    "numero_atomico": 30,
    "masa_atomica": 65.38,
    "electronegatividad": 1.65,
    "categoria": "Metal de transición",
    "info_adicional": "Esencial para el sistema inmunológico humano, utilizado como protector contra la corrosión (galvanización) y en aleaciones como el latón (cobre-zinc).",
    "configuracion_electronica": "[Ar] 3d¹⁰ 4s²",
    "electrones": 30,
    "protones": 30,
    "neutrones": 35,
    "densidad": "7.134 g/cm³",
    "punto_fusion": "419.53 °C",
    "punto_ebullicion": "907 °C",
    "electrones_valencia": 12,
    "estados_oxidacion": "-2, 0, +1, +2"
},
"31": {
    "nombre": "Galio",
    "simbolo": "Ga",
    "numero_atomico": 31,
    "masa_atomica": 69.723,
    "electronegatividad": 1.81,
    "categoria": "Metal del bloque p",
    "info_adicional": "Metal que se funde a temperatura ambiente (29.76°C), utilizado en semiconductores, LEDs y termómetros de alta temperatura por su amplio rango líquido.",
    "configuracion_electronica": "[Ar] 3d¹⁰ 4s² 4p¹",
    "electrones": 31,
    "protones": 31,
    "neutrones": 39,
    "densidad": "5.91 g/cm³ (sólido)",
    "punto_fusion": "29.76 °C",
    "punto_ebullicion": "2400 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "-5, -4, -2, -1, +1, +2, +3"
},
"32": {
    "nombre": "Germanio",
    "simbolo": "Ge",
    "numero_atomico": 32,
    "masa_atomica": 72.630,
    "electronegatividad": 2.01,
    "categoria": "Metaloide",
    "info_adicional": "Semiconductor fundamental en los primeros transistores y fibras ópticas, también utilizado en lentes de infrarrojos y como catalizador en polimerización.",
    "configuracion_electronica": "[Ar] 3d¹⁰ 4s² 4p²",
    "electrones": 32,
    "protones": 32,
    "neutrones": 41,
    "densidad": "5.323 g/cm³",
    "punto_fusion": "938.25 °C",
    "punto_ebullicion": "2833 °C",
    "electrones_valencia": 4,
    "estados_oxidacion": "-4, -3, -2, -1, 0, +1, +2, +3, +4"
},
"33": {
    "nombre": "Arsénico",
    "simbolo": "As",
    "numero_atomico": 33,
    "masa_atomica": 74.922,
    "electronegatividad": 2.18,
    "categoria": "Metaloide",
    "info_adicional": "Conocido por su toxicidad, se utiliza en semiconductores, conservantes de madera y antiguamente en medicamentos, aunque su forma elemental es frágil y grisácea.",
    "configuracion_electronica": "[Ar] 3d¹⁰ 4s² 4p³",
    "electrones": 33,
    "protones": 33,
    "neutrones": 42,
    "densidad": "5.727 g/cm³",
    "punto_fusion": "817 °C (a 36 atm)",
    "punto_ebullicion": "614 °C (sublima)",
    "electrones_valencia": 5,
    "estados_oxidacion": "-3, -2, -1, 0, +1, +2, +3, +4, +5"
},
"34": {
    "nombre": "Selenio",
    "simbolo": "Se",
    "numero_atomico": 34,
    "masa_atomica": 78.971,
    "electronegatividad": 2.55,
    "categoria": "No metal",
    "info_adicional": "Elemento esencial en enzimas antioxidantes, utilizado en células fotovoltaicas, fotocopiadoras y como pigmento rojo en vidrios y esmaltes.",
    "configuracion_electronica": "[Ar] 3d¹⁰ 4s² 4p⁴",
    "electrones": 34,
    "protones": 34,
    "neutrones": 45,
    "densidad": "4.809 g/cm³",
    "punto_fusion": "221 °C",
    "punto_ebullicion": "685 °C",
    "electrones_valencia": 6,
    "estados_oxidacion": "-2, -1, 0, +1, +2, +3, +4, +5, +6"
},
"35": {
    "nombre": "Bromo",
    "simbolo": "Br",
    "numero_atomico": 35,
    "masa_atomica": 79.904,
    "electronegatividad": 2.96,
    "categoria": "Halógeno",
    "info_adicional": "Único halógeno líquido a temperatura ambiente, utilizado en retardantes de llama, purificación de agua, y como intermediario en síntesis farmacéutica y agroquímica.",
    "configuracion_electronica": "[Ar] 3d¹⁰ 4s² 4p⁵",
    "electrones": 35,
    "protones": 35,
    "neutrones": 45,
    "densidad": "3.122 g/cm³ (líq)",
    "punto_fusion": "-7.2 °C",
    "punto_ebullicion": "58.8 °C",
    "electrones_valencia": 7,
    "estados_oxidacion": "-1, +1, +3, +4, +5, +7"
},
"36": {
    "nombre": "Kriptón",
    "simbolo": "Kr",
    "numero_atomico": 36,
    "masa_atomica": 83.798,
    "electronegatividad": 3.00,
    "categoria": "Gas noble",
    "info_adicional": "Gas noble utilizado en iluminación (luces de flash fotográfico) y láseres, además de servir como marcador isotópico en estudios geológicos y atmosféricos.",
    "configuracion_electronica": "[Ar] 3d¹⁰ 4s² 4p⁶",
    "electrones": 36,
    "protones": 36,
    "neutrones": 48,
    "densidad": "0.003733 g/cm³",
    "punto_fusion": "-157.36 °C",
    "punto_ebullicion": "-153.22 °C",
    "electrones_valencia": 8,
    "estados_oxidacion": "0, +1, +2"
},
"37": {
    "nombre": "Rubidio",
    "simbolo": "Rb",
    "numero_atomico": 37,
    "masa_atomica": 85.468,
    "electronegatividad": 0.82,
    "categoria": "Metal alcalino",
    "info_adicional": "Metal extremadamente reactivo que se enciende espontáneamente en aire, utilizado en relojes atómicos, dispositivos de visión nocturna y medicina nuclear.",
    "configuracion_electronica": "[Kr] 5s¹",
    "electrones": 37,
    "protones": 37,
    "neutrones": 48,
    "densidad": "1.532 g/cm³",
    "punto_fusion": "39.31 °C",
    "punto_ebullicion": "688 °C",
    "electrones_valencia": 1,
    "estados_oxidacion": "-1, +1"
},
"38": {
    "nombre": "Estroncio",
    "simbolo": "Sr",
    "numero_atomico": 38,
    "masa_atomica": 87.62,
    "electronegatividad": 0.95,
    "categoria": "Metal alcalinotérreo",
    "info_adicional": "Conocido por producir color rojo brillante en fuegos artificiales, utilizado también en cerámicas magnéticas y como radioisótopo en el tratamiento del cáncer óseo.",
    "configuracion_electronica": "[Kr] 5s²",
    "electrones": 38,
    "protones": 38,
    "neutrones": 50,
    "densidad": "2.64 g/cm³",
    "punto_fusion": "777 °C",
    "punto_ebullicion": "1382 °C",
    "electrones_valencia": 2,
    "estados_oxidacion": "+1, +2"
},
"39": {
    "nombre": "Itrio",
    "simbolo": "Y",
    "numero_atomico": 39,
    "masa_atomica": 88.906,
    "electronegatividad": 1.22,
    "categoria": "Metal de transición",
    "info_adicional": "Componente clave en superconductores de alta temperatura y fósforos rojos en pantallas CRT, también utilizado en aleaciones de aluminio y magnesio para mejorar resistencia.",
    "configuracion_electronica": "[Kr] 4d¹ 5s²",
    "electrones": 39,
    "protones": 39,
    "neutrones": 50,
    "densidad": "4.472 g/cm³",
    "punto_fusion": "1526 °C",
    "punto_ebullicion": "3345 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "0, +1, +2, +3"
},
"40": {
    "nombre": "Circonio",
    "simbolo": "Zr",
    "numero_atomico": 40,
    "masa_atomica": 91.224,
    "electronegatividad": 1.33,
    "categoria": "Metal de transición",
    "info_adicional": "Resistente a la corrosión incluso por ácidos fuertes, utilizado en reactores nucleares (como recubrimiento de combustible) y en implantes dentales por su biocompatibilidad.",
    "configuracion_electronica": "[Kr] 4d² 5s²",
    "electrones": 40,
    "protones": 40,
    "neutrones": 51,
    "densidad": "6.506 g/cm³",
    "punto_fusion": "1855 °C",
    "punto_ebullicion": "4409 °C",
    "electrones_valencia": 4,
    "estados_oxidacion": "-2, 0, +1, +2, +3, +4"
},
"41": {
    "nombre": "Niobio",
    "simbolo": "Nb",
    "numero_atomico": 41,
    "masa_atomica": 92.906,
    "electronegatividad": 1.6,
    "categoria": "Metal de transición",
    "info_adicional": "Metal refractario utilizado en superaleaciones para motores a reacción y turbinas de gas, además de ser un componente clave en imanes superconductores de alta potencia.",
    "configuracion_electronica": "[Kr] 4d⁴ 5s¹",
    "electrones": 41,
    "protones": 41,
    "neutrones": 52,
    "densidad": "8.57 g/cm³",
    "punto_fusion": "2477 °C",
    "punto_ebullicion": "4744 °C",
    "electrones_valencia": 5,
    "estados_oxidacion": "-3, -1, 0, +1, +2, +3, +4, +5"
},
"42": {
    "nombre": "Molibdeno",
    "simbolo": "Mo",
    "numero_atomico": 42,
    "masa_atomica": 95.95,
    "electronegatividad": 2.16,
    "categoria": "Metal de transición",
    "info_adicional": "Esencial en aceros de ultra alta resistencia y aleaciones para herramientas, también utilizado como catalizador en la desulfuración de petróleo y en aplicaciones electrónicas.",
    "configuracion_electronica": "[Kr] 4d⁵ 5s¹",
    "electrones": 42,
    "protones": 42,
    "neutrones": 54,
    "densidad": "10.22 g/cm³",
    "punto_fusion": "2623 °C",
    "punto_ebullicion": "4639 °C",
    "electrones_valencia": 6,
    "estados_oxidacion": "-4, -2, -1, 0, +1, +2, +3, +4, +5, +6"
},
"43": {
    "nombre": "Tecnecio",
    "simbolo": "Tc",
    "numero_atomico": 43,
    "masa_atomica": 98,
    "electronegatividad": 1.9,
    "categoria": "Metal de transición",
    "info_adicional": "Primer elemento artificialmente producido, utilizado en medicina nuclear como trazador para diagnóstico por imágenes y en estudios de corrosión de acero.",
    "configuracion_electronica": "[Kr] 4d⁵ 5s²",
    "electrones": 43,
    "protones": 43,
    "neutrones": 55,
    "densidad": "11.5 g/cm³",
    "punto_fusion": "2157 °C",
    "punto_ebullicion": "4265 °C",
    "electrones_valencia": 7,
    "estados_oxidacion": "-3, -1, 0, +1, +2, +3, +4, +5, +6, +7"
},
"44": {
    "nombre": "Rutenio",
    "simbolo": "Ru",
    "numero_atomico": 44,
    "masa_atomica": 101.07,
    "electronegatividad": 2.2,
    "categoria": "Metal de transición",
    "info_adicional": "Metal raro utilizado en aleaciones de platino para aumentar dureza, en contactos eléctricos resistentes al desgaste y como catalizador en procesos químicos industriales.",
    "configuracion_electronica": "[Kr] 4d⁷ 5s¹",
    "electrones": 44,
    "protones": 44,
    "neutrones": 57,
    "densidad": "12.45 g/cm³",
    "punto_fusion": "2334 °C",
    "punto_ebullicion": "4150 °C",
    "electrones_valencia": 8,
    "estados_oxidacion": "-4, -2, 0, +1, +2, +3, +4, +5, +6, +7, +8"
},
"45": {
    "nombre": "Rodio",
    "simbolo": "Rh",
    "numero_atomico": 45,
    "masa_atomica": 102.91,
    "electronegatividad": 2.28,
    "categoria": "Metal de transición",
    "info_adicional": "Metal precioso extremadamente reflectante, utilizado en catalizadores automotrices, joyería de alto valor y recubrimientos ópticos por su resistencia a la corrosión.",
    "configuracion_electronica": "[Kr] 4d⁸ 5s¹",
    "electrones": 45,
    "protones": 45,
    "neutrones": 58,
    "densidad": "12.41 g/cm³",
    "punto_fusion": "1964 °C",
    "punto_ebullicion": "3695 °C",
    "electrones_valencia": 9,
    "estados_oxidacion": "-3, -1, 0, +1, +2, +3, +4, +5, +6"
},
"46": {
    "nombre": "Paladio",
    "simbolo": "Pd",
    "numero_atomico": 46,
    "masa_atomica": 106.42,
    "electronegatividad": 2.20,
    "categoria": "Metal de transición",
    "info_adicional": "Metal precioso clave en catalizadores automotrices para reducir emisiones, también utilizado en odontología, electrónica y como inversión financiera.",
    "configuracion_electronica": "[Kr] 4d¹⁰",
    "electrones": 46,
    "protones": 46,
    "neutrones": 60,
    "densidad": "12.02 g/cm³",
    "punto_fusion": "1554.9 °C",
    "punto_ebullicion": "2963 °C",
    "electrones_valencia": 10,
    "estados_oxidacion": "0, +1, +2, +3, +4"
},
"47": {
    "nombre": "Plata",
    "simbolo": "Ag",
    "numero_atomico": 47,
    "masa_atomica": 107.87,
    "electronegatividad": 1.93,
    "categoria": "Metal de transición",
    "info_adicional": "El mejor conductor eléctrico conocido. Utilizado en joyería, fotografía y electrónica.",
    "configuracion_electronica": "[Kr] 4d¹⁰ 5s¹",
    "electrones": 47,
    "protones": 47,
    "neutrones": 61,
    "densidad": "10.49 g/cm³",
    "punto_fusion": "961.78 °C",
    "punto_ebullicion": "2162 °C",
    "electrones_valencia": 11,
    "estados_oxidacion": "-1, +1, +2, +3"
},
"48": {
    "nombre": "Cadmio",
    "simbolo": "Cd",
    "numero_atomico": 48,
    "masa_atomica": 112.41,
    "electronegatividad": 1.69,
    "categoria": "Metal de transición",
    "info_adicional": "Metal tóxico utilizado en baterías recargables (Ni-Cd), como pigmento y estabilizante en plásticos, y como barrera de control en reactores nucleares.",
    "configuracion_electronica": "[Kr] 4d¹⁰ 5s²",
    "electrones": 48,
    "protones": 48,
    "neutrones": 64,
    "densidad": "8.65 g/cm³",
    "punto_fusion": "321.07 °C",
    "punto_ebullicion": "767 °C",
    "electrones_valencia": 12,
    "estados_oxidacion": "+1, +2"
},
"49": {
    "nombre": "Indio",
    "simbolo": "In",
    "numero_atomico": 49,
    "masa_atomica": 114.82,
    "electronegatividad": 1.78,
    "categoria": "Metal del bloque p",
    "info_adicional": "Metal blando utilizado en pantallas táctiles y paneles solares como óxido de indio y estaño (ITO), también como soldadura de bajo punto de fusión y recubrimientos reflectantes.",
    "configuracion_electronica": "[Kr] 4d¹⁰ 5s² 5p¹",
    "electrones": 49,
    "protones": 49,
    "neutrones": 66,
    "densidad": "7.31 g/cm³",
    "punto_fusion": "156.60 °C",
    "punto_ebullicion": "2072 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "-5, -2, -1, +1, +2, +3"
},
"50": {
    "nombre": "Estaño",
    "simbolo": "Sn",
    "numero_atomico": 50,
    "masa_atomica": 118.71,
    "electronegatividad": 1.96,
    "categoria": "Metal del bloque p",
    "info_adicional": "Metal conocido desde la antigüedad, utilizado en soldaduras, recubrimientos protectores (hojalata) y como componente en aleaciones de bronce (cobre-estaño).",
    "configuracion_electronica": "[Kr] 4d¹⁰ 5s² 5p²",
    "electrones": 50,
    "protones": 50,
    "neutrones": 69,
    "densidad": "7.31 g/cm³ (gris)",
    "punto_fusion": "231.93 °C",
    "punto_ebullicion": "2602 °C",
    "electrones_valencia": 4,
    "estados_oxidacion": "-4, -3, -2, -1, 0, +1, +2, +3, +4"
},
"51": {
    "nombre": "Antimonio",
    "simbolo": "Sb",
    "numero_atomico": 51,
    "masa_atomica": 121.76,
    "electronegatividad": 2.05,
    "categoria": "Metaloide",
    "info_adicional": "Metaloide quebradizo utilizado como retardante de llama en plásticos y textiles, endurecedor en aleaciones de plomo para baterías y en semiconductores de tipo n.",
    "configuracion_electronica": "[Kr] 4d¹⁰ 5s² 5p³",
    "electrones": 51,
    "protones": 51,
    "neutrones": 71,
    "densidad": "6.697 g/cm³",
    "punto_fusion": "630.63 °C",
    "punto_ebullicion": "1587 °C",
    "electrones_valencia": 5,
    "estados_oxidacion": "-3, -2, -1, 0, +1, +2, +3, +4, +5"
},
"52": {
    "nombre": "Telurio",
    "simbolo": "Te",
    "numero_atomico": 52,
    "masa_atomica": 127.60,
    "electronegatividad": 2.1,
    "categoria": "Metaloide",
    "info_adicional": "Metaloide semiconductor utilizado en paneles solares, dispositivos de memoria de cambio de fase y como aditivo en aceros y cobre para mejorar maquinabilidad.",
    "configuracion_electronica": "[Kr] 4d¹⁰ 5s² 5p⁴",
    "electrones": 52,
    "protones": 52,
    "neutrones": 76,
    "densidad": "6.24 g/cm³",
    "punto_fusion": "449.51 °C",
    "punto_ebullicion": "988 °C",
    "electrones_valencia": 6,
    "estados_oxidacion": "-2, -1, 0, +1, +2, +3, +4, +5, +6"
},
"53": {
    "nombre": "Yodo",
    "simbolo": "I",
    "numero_atomico": 53,
    "masa_atomica": 126.90,
    "electronegatividad": 2.66,
    "categoria": "Halógeno",
    "info_adicional": "Halógeno esencial para la producción de hormonas tiroideas, utilizado como desinfectante (yodoformo), en lámparas halógenas y como medio de contraste en radiología.",
    "configuracion_electronica": "[Kr] 4d¹⁰ 5s² 5p⁵",
    "electrones": 53,
    "protones": 53,
    "neutrones": 74,
    "densidad": "4.94 g/cm³",
    "punto_fusion": "113.7 °C",
    "punto_ebullicion": "184.3 °C",
    "electrones_valencia": 7,
    "estados_oxidacion": "-1, +1, +3, +5, +7"
},
"54": {
    "nombre": "Xenón",
    "simbolo": "Xe",
    "numero_atomico": 54,
    "masa_atomica": 131.29,
    "electronegatividad": 2.6,
    "categoria": "Gas noble",
    "info_adicional": "Gas noble utilizado en sistemas de propulsión iónica para satélites, lámparas de alta intensidad y como anestésico general en medicina por sus propiedades neuroprotectoras.",
    "configuracion_electronica": "[Kr] 4d¹⁰ 5s² 5p⁶",
    "electrones": 54,
    "protones": 54,
    "neutrones": 77,
    "densidad": "0.005887 g/cm³",
    "punto_fusion": "-111.75 °C",
    "punto_ebullicion": "-108.12 °C",
    "electrones_valencia": 8,
    "estados_oxidacion": "0, +1, +2, +4, +6, +8"
},
"55": {
    "nombre": "Cesio",
    "simbolo": "Cs",
    "numero_atomico": 55,
    "masa_atomica": 132.91,
    "electronegatividad": 0.79,
    "categoria": "Metal alcalino",
    "info_adicional": "Metal alcalino más reactivo, líquido a temperatura ambiente, utilizado en relojes atómicos de alta precisión, células fotoeléctricas y como propulsante en sistemas de iones para satélites.",
    "configuracion_electronica": "[Xe] 6s¹",
    "electrones": 55,
    "protones": 55,
    "neutrones": 78,
    "densidad": "1.93 g/cm³",
    "punto_fusion": "28.44 °C",
    "punto_ebullicion": "671 °C",
    "electrones_valencia": 1,
    "estados_oxidacion": "-1, +1"
},
"56": {
    "nombre": "Bario",
    "simbolo": "Ba",
    "numero_atomico": 56,
    "masa_atomica": 137.33,
    "electronegatividad": 0.89,
    "categoria": "Metal alcalinotérreo",
    "info_adicional": "Metal utilizado en sistemas de vacío para eliminar gases residuales, como contraste en radiografías gastrointestinales y en fuegos artificiales para producir color verde.",
    "configuracion_electronica": "[Xe] 6s²",
    "electrones": 56,
    "protones": 56,
    "neutrones": 81,
    "densidad": "3.51 g/cm³",
    "punto_fusion": "727 °C",
    "punto_ebullicion": "1845 °C",
    "electrones_valencia": 2,
    "estados_oxidacion": "+1, +2"
},
"57": {
    "nombre": "Lantano",
    "simbolo": "La",
    "numero_atomico": 57,
    "masa_atomica": 138.91,
    "electronegatividad": 1.10,
    "categoria": "Lantánido",
    "info_adicional": "Primer elemento de las tierras raras, utilizado en lentes de cámaras de alta calidad, baterías de hidruro metálico de níquel y como catalizador en el refinado de petróleo.",
    "configuracion_electronica": "[Xe] 5d¹ 6s²",
    "electrones": 57,
    "protones": 57,
    "neutrones": 82,
    "densidad": "6.162 g/cm³",
    "punto_fusion": "920 °C",
    "punto_ebullicion": "3464 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+1, +2, +3"
},
"58": {
    "nombre": "Cerio",
    "simbolo": "Ce",
    "numero_atomico": 58,
    "masa_atomica": 140.12,
    "electronegatividad": 1.12,
    "categoria": "Lantánido",
    "info_adicional": "El más abundante de las tierras raras, componente clave en piedras de encendedor, catalizadores para convertidores catalíticos y pulido de vidrios ópticos de alta precisión.",
    "configuracion_electronica": "[Xe] 4f¹ 5d¹ 6s²",
    "electrones": 58,
    "protones": 58,
    "neutrones": 82,
    "densidad": "6.770 g/cm³",
    "punto_fusion": "795 °C",
    "punto_ebullicion": "3443 °C",
    "electrones_valencia": 4,
    "estados_oxidacion": "+2, +3, +4"
},
"59": {
    "nombre": "Praseodimio",
    "simbolo": "Pr",
    "numero_atomico": 59,
    "masa_atomica": 140.91,
    "electronegatividad": 1.13,
    "categoria": "Lantánido",
    "info_adicional": "Tierra rara utilizada en imanes permanentes de neodimio, aleaciones para motores de aviones, y como pigmento amarillo en cerámicas y vidrios.",
    "configuracion_electronica": "[Xe] 4f³ 6s²",
    "electrones": 59,
    "protones": 59,
    "neutrones": 82,
    "densidad": "6.77 g/cm³",
    "punto_fusion": "935 °C",
    "punto_ebullicion": "3520 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+2, +3, +4"
},
"60": {
    "nombre": "Neodimio",
    "simbolo": "Nd",
    "numero_atomico": 60,
    "masa_atomica": 144.24,
    "electronegatividad": 1.14,
    "categoria": "Lantánido",
    "info_adicional": "Componente clave en los imanes permanentes más potentes conocidos, utilizados en motores de vehículos eléctricos, turbinas eólicas y auriculares, además de producir color violeta en vidrios.",
    "configuracion_electronica": "[Xe] 4f⁴ 6s²",
    "electrones": 60,
    "protones": 60,
    "neutrones": 84,
    "densidad": "7.01 g/cm³",
    "punto_fusion": "1024 °C",
    "punto_ebullicion": "3074 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+2, +3"
},
"61": {
    "nombre": "Prometio",
    "simbolo": "Pm",
    "numero_atomico": 61,
    "masa_atomica": 145,
    "electronegatividad": 1.13,
    "categoria": "Lantánido",
    "info_adicional": "Elemento radiactivo artificial utilizado en baterías nucleares de larga duración para sondas espaciales y como fuente de luz autónoma en señales de emergencia.",
    "configuracion_electronica": "[Xe] 4f⁵ 6s²",
    "electrones": 61,
    "protones": 61,
    "neutrones": 84,
    "densidad": "7.26 g/cm³",
    "punto_fusion": "1042 °C",
    "punto_ebullicion": "3000 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+3"
},
"62": {
    "nombre": "Samario",
    "simbolo": "Sm",
    "numero_atomico": 62,
    "masa_atomica": 150.36,
    "electronegatividad": 1.17,
    "categoria": "Lantánido",
    "info_adicional": "Tierra rara utilizada en imanes permanentes resistentes a altas temperaturas, como absorbedor de neutrones en reactores nucleares y en tratamientos contra el cáncer.",
    "configuracion_electronica": "[Xe] 4f⁶ 6s²",
    "electrones": 62,
    "protones": 62,
    "neutrones": 88,
    "densidad": "7.52 g/cm³",
    "punto_fusion": "1072 °C",
    "punto_ebullicion": "1900 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+2, +3"
},
"63": {
    "nombre": "Europio",
    "simbolo": "Eu",
    "numero_atomico": 63,
    "masa_atomica": 151.96,
    "electronegatividad": 1.2,
    "categoria": "Lantánido",
    "info_adicional": "Tierra rara que produce luz roja brillante, esencial en pantallas de televisores y monitores, y como marcador en estudios bioquímicos y anticontrabando.",
    "configuracion_electronica": "[Xe] 4f⁷ 6s²",
    "electrones": 63,
    "protones": 63,
    "neutrones": 89,
    "densidad": "5.24 g/cm³",
    "punto_fusion": "822 °C",
    "punto_ebullicion": "1529 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+2, +3"
},
"64": {
    "nombre": "Gadolinio",
    "simbolo": "Gd",
    "numero_atomico": 64,
    "masa_atomica": 157.25,
    "electronegatividad": 1.2,
    "categoria": "Lantánido",
    "info_adicional": "Tierra rara con propiedades magnéticas excepcionales, utilizada en agentes de contraste para resonancias magnéticas y en barras de control de reactores nucleares.",
    "configuracion_electronica": "[Xe] 4f⁷ 5d¹ 6s²",
    "electrones": 64,
    "protones": 64,
    "neutrones": 93,
    "densidad": "7.90 g/cm³",
    "punto_fusion": "1312 °C",
    "punto_ebullicion": "3273 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+1, +2, +3"
},
"65": {
    "nombre": "Terbio",
    "simbolo": "Tb",
    "numero_atomico": 65,
    "masa_atomica": 158.93,
    "electronegatividad": 1.2,
    "categoria": "Lantánido",
    "info_adicional": "Tierra rara utilizada en dispositivos de sonar submarino, aleaciones magnetostrictivas y como dopante en fósforos verdes para lámparas fluorescentes.",
    "configuracion_electronica": "[Xe] 4f⁹ 6s²",
    "electrones": 65,
    "protones": 65,
    "neutrones": 94,
    "densidad": "8.23 g/cm³",
    "punto_fusion": "1356 °C",
    "punto_ebullicion": "3230 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+1, +3, +4"
},
"66": {
    "nombre": "Disprosio",
    "simbolo": "Dy",
    "numero_atomico": 66,
    "masa_atomica": 162.50,
    "electronegatividad": 1.22,
    "categoria": "Lantánido",
    "info_adicional": "Tierra rara esencial en imanes permanentes para vehículos eléctricos y turbinas eólicas, también utilizada en reactores nucleares como absorbedor de neutrones.",
    "configuracion_electronica": "[Xe] 4f¹⁰ 6s²",
    "electrones": 66,
    "protones": 66,
    "neutrones": 97,
    "densidad": "8.55 g/cm³",
    "punto_fusion": "1407 °C",
    "punto_ebullicion": "2567 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+2, +3, +4"
},
"67": {
    "nombre": "Holmio",
    "simbolo": "Ho",
    "numero_atomico": 67,
    "masa_atomica": 164.93,
    "electronegatividad": 1.23,
    "categoria": "Lantánido",
    "info_adicional": "Tierra rara con las propiedades magnéticas más fuertes conocidas, utilizada en láseres médicos y como colorante amarillo para vidrios especializados.",
    "configuracion_electronica": "[Xe] 4f¹¹ 6s²",
    "electrones": 67,
    "protones": 67,
    "neutrones": 98,
    "densidad": "8.80 g/cm³",
    "punto_fusion": "1461 °C",
    "punto_ebullicion": "2720 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+3"
},
"68": {
    "nombre": "Erbio",
    "simbolo": "Er",
    "numero_atomico": 68,
    "masa_atomica": 167.26,
    "electronegatividad": 1.24,
    "categoria": "Lantánido",
    "info_adicional": "Tierra rara utilizada en fibras ópticas para amplificación de señales, láseres médicos y odontológicos, y como colorante rosa para vidrios y cerámicas.",
    "configuracion_electronica": "[Xe] 4f¹² 6s²",
    "electrones": 68,
    "protones": 68,
    "neutrones": 99,
    "densidad": "9.07 g/cm³",
    "punto_fusion": "1529 °C",
    "punto_ebullicion": "2868 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+3"
},
"69": {
    "nombre": "Tulio",
    "simbolo": "Tm",
    "numero_atomico": 69,
    "masa_atomica": 168.93,
    "electronegatividad": 1.25,
    "categoria": "Lantánido",
    "info_adicional": "Tierra rara más rara, utilizada en dispositivos de rayos X portátiles, láseres de alta eficiencia y como fuente de radiación en tratamientos contra el cáncer.",
    "configuracion_electronica": "[Xe] 4f¹³ 6s²",
    "electrones": 69,
    "protones": 69,
    "neutrones": 100,
    "densidad": "9.32 g/cm³",
    "punto_fusion": "1545 °C",
    "punto_ebullicion": "1950 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+2, +3"
},
"70": {
    "nombre": "Iterbio",
    "simbolo": "Yb",
    "numero_atomico": 70,
    "masa_atomica": 173.05,
    "electronegatividad": 1.1,
    "categoria": "Lantánido",
    "info_adicional": "Tierra rara utilizada en relojes atómicos de alta precisión, aleaciones de acero inoxidable y como dopante en láseres de fibra para telecomunicaciones.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 6s²",
    "electrones": 70,
    "protones": 70,
    "neutrones": 103,
    "densidad": "6.90 g/cm³",
    "punto_fusion": "819 °C",
    "punto_ebullicion": "1196 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+2, +3"
},
"71": {
    "nombre": "Lutecio",
    "simbolo": "Lu",
    "numero_atomico": 71,
    "masa_atomica": 174.97,
    "electronegatividad": 1.27,
    "categoria": "Lantánido",
    "info_adicional": "Tierra rara más pesada y densa, utilizada en catalizadores para refinerías de petróleo, datación radiométrica de meteoritos y tratamientos contra tumores.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d¹ 6s²",
    "electrones": 71,
    "protones": 71,
    "neutrones": 104,
    "densidad": "9.84 g/cm³",
    "punto_fusion": "1663 °C",
    "punto_ebullicion": "3402 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+3"
},
"72": {
    "nombre": "Hafnio",
    "simbolo": "Hf",
    "numero_atomico": 72,
    "masa_atomica": 178.49,
    "electronegatividad": 1.3,
    "categoria": "Metal de transición",
    "info_adicional": "Metal resistente a la corrosión utilizado en barras de control de reactores nucleares, microprocesadores avanzados y motores a reacción de alto rendimiento.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d² 6s²",
    "electrones": 72,
    "protones": 72,
    "neutrones": 106,
    "densidad": "13.31 g/cm³",
    "punto_fusion": "2233 °C",
    "punto_ebullicion": "4603 °C",
    "electrones_valencia": 4,
    "estados_oxidacion": "-2, 0, +1, +2, +3, +4"
},
"73": {
    "nombre": "Tantalio",
    "simbolo": "Ta",
    "numero_atomico": 73,
    "masa_atomica": 180.95,
    "electronegatividad": 1.5,
    "categoria": "Metal de transición",
    "info_adicional": "Metal altamente resistente a la corrosión, esencial en condensadores electrónicos para teléfonos móviles, implantes médicos y herramientas de corte industriales.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d³ 6s²",
    "electrones": 73,
    "protones": 73,
    "neutrones": 108,
    "densidad": "16.65 g/cm³",
    "punto_fusion": "3017 °C",
    "punto_ebullicion": "5458 °C",
    "electrones_valencia": 5,
    "estados_oxidacion": "-3, -1, 0, +1, +2, +3, +4, +5"
},
"74": {
    "nombre": "Wolframio",
    "simbolo": "W",
    "numero_atomico": 74,
    "masa_atomica": 183.84,
    "electronegatividad": 2.36,
    "categoria": "Metal de transición",
    "info_adicional": "Metal con el punto de fusión más alto (3422°C), utilizado en filamentos de bombillas, herramientas de corte de alta velocidad y blindajes militares.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d⁴ 6s²",
    "electrones": 74,
    "protones": 74,
    "neutrones": 110,
    "densidad": "19.25 g/cm³",
    "punto_fusion": "3422 °C",
    "punto_ebullicion": "5555 °C",
    "electrones_valencia": 6,
    "estados_oxidacion": "-4, -2, -1, 0, +1, +2, +3, +4, +5, +6"
},
"75": {
    "nombre": "Renio",
    "simbolo": "Re",
    "numero_atomico": 75,
    "masa_atomica": 186.21,
    "electronegatividad": 1.9,
    "categoria": "Metal de transición",
    "info_adicional": "Uno de los metales más densos y con alto punto de fusión, utilizado en turbinas de aviones, catalizadores para producción de gasolina sin plomo y filamentos de espectrómetros de masas.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d⁵ 6s²",
    "electrones": 75,
    "protones": 75,
    "neutrones": 111,
    "densidad": "21.02 g/cm³",
    "punto_fusion": "3186 °C",
    "punto_ebullicion": "5596 °C",
    "electrones_valencia": 7,
    "estados_oxidacion": "-3, -1, 0, +1, +2, +3, +4, +5, +6, +7"
},
"76": {
    "nombre": "Osmio",
    "simbolo": "Os",
    "numero_atomico": 76,
    "masa_atomica": 190.23,
    "electronegatividad": 2.2,
    "categoria": "Metal de transición",
    "info_adicional": "Elemento natural más denso, utilizado en puntas de bolígrafos de alta calidad, contactos eléctricos de larga duración y aleaciones extremadamente duras para instrumentos quirúrgicos.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d⁶ 6s²",
    "electrones": 76,
    "protones": 76,
    "neutrones": 114,
    "densidad": "22.59 g/cm³",
    "punto_fusion": "3033 °C",
    "punto_ebullicion": "5012 °C",
    "electrones_valencia": 8,
    "estados_oxidacion": "-4, -2, -1, 0, +1, +2, +3, +4, +5, +6, +7, +8"
},
"77": {
    "nombre": "Iridio",
    "simbolo": "Ir",
    "numero_atomico": 77,
    "masa_atomica": 192.22,
    "electronegatividad": 2.2,
    "categoria": "Metal de transición",
    "info_adicional": "Metal más resistente a la corrosión, utilizado en crisoles para crecimiento de cristales, contactos eléctricos espaciales y como marcador geológico de eventos de extinción masiva.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d⁷ 6s²",
    "electrones": 77,
    "protones": 77,
    "neutrones": 115,
    "densidad": "22.56 g/cm³",
    "punto_fusion": "2446 °C",
    "punto_ebullicion": "4428 °C",
    "electrones_valencia": 9,
    "estados_oxidacion": "-3, -1, 0, +1, +2, +3, +4, +5, +6, +7, +8, +9"
},
"78": {
    "nombre": "Platino",
    "simbolo": "Pt",
    "numero_atomico": 78,
    "masa_atomica": 195.08,
    "electronegatividad": 2.28,
    "categoria": "Metal de transición",
    "info_adicional": "Metal precioso utilizado en catalizadores automotrices, joyería de alta gama, electrodos médicos y como estándar internacional para medidas de peso y longitud.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d⁹ 6s¹",
    "electrones": 78,
    "protones": 78,
    "neutrones": 117,
    "densidad": "21.45 g/cm³",
    "punto_fusion": "1768.3 °C",
    "punto_ebullicion": "3825 °C",
    "electrones_valencia": 10,
    "estados_oxidacion": "-3, -2, -1, 0, +1, +2, +3, +4, +5, +6"
},
"79": {
    "nombre": "Oro",
    "simbolo": "Au",
    "numero_atomico": 79,
    "masa_atomica": 196.97,
    "electronegatividad": 2.54,
    "categoria": "Metal de transición",
    "info_adicional": "Metal precioso altamente valorado. No se corroe y es muy maleable.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
    "electrones": 79,
    "protones": 79,
    "neutrones": 118,
    "densidad": "19.32 g/cm³",
    "punto_fusion": "1064.18 °C",
    "punto_ebullicion": "2856 °C",
    "electrones_valencia": 11,
    "estados_oxidacion": "-1, +1, +2, +3, +5"
},
"80": {
    "nombre": "Mercurio",
    "simbolo": "Hg",
    "numero_atomico": 80,
    "masa_atomica": 200.59,
    "electronegatividad": 2.0,
    "categoria": "Metal de transición",
    "info_adicional": "Único metal líquido a temperatura ambiente, utilizado en termómetros, barómetros, lámparas fluorescentes y como catalizador en la industria química.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
    "electrones": 80,
    "protones": 80,
    "neutrones": 121,
    "densidad": "13.534 g/cm³ (líq)",
    "punto_fusion": "-38.83 °C",
    "punto_ebullicion": "356.73 °C",
    "electrones_valencia": 12,
    "estados_oxidacion": "+1, +2, +4"
},
"81": {
    "nombre": "Talio",
    "simbolo": "Tl",
    "numero_atomico": 81,
    "masa_atomica": 204.38,
    "electronegatividad": 1.62,
    "categoria": "Metal del bloque p",
    "info_adicional": "Metal altamente tóxico utilizado en detectores de infrarrojos, vidrios de alta refracción y como veneno para roedores (actualmente prohibido en muchos países).",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
    "electrones": 81,
    "protones": 81,
    "neutrones": 123,
    "densidad": "11.85 g/cm³",
    "punto_fusion": "304 °C",
    "punto_ebullicion": "1473 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "-5, -2, -1, +1, +2, +3"
},
"82": {
    "nombre": "Plomo",
    "simbolo": "Pb",
    "numero_atomico": 82,
    "masa_atomica": 207.2,
    "electronegatividad": 2.33,
    "categoria": "Metal del bloque p",
    "info_adicional": "Metal pesado y tóxico. Históricamente utilizado en tuberías y pinturas.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
    "electrones": 82,
    "protones": 82,
    "neutrones": 125,
    "densidad": "11.34 g/cm³",
    "punto_fusion": "327.46 °C",
    "punto_ebullicion": "1749 °C",
    "electrones_valencia": 4,
    "estados_oxidacion": "-4, -2, -1, +1, +2, +3, +4"
},
"83": {
    "nombre": "Bismuto",
    "simbolo": "Bi",
    "numero_atomico": 83,
    "masa_atomica": 208.98,
    "electronegatividad": 2.02,
    "categoria": "Metal del bloque p",
    "info_adicional": "Elemento más diamagnético natural, utilizado en medicamentos para trastornos digestivos, aleaciones de bajo punto de fusión y como sustituto no tóxico del plomo.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
    "electrones": 83,
    "protones": 83,
    "neutrones": 126,
    "densidad": "9.78 g/cm³",
    "punto_fusion": "271.5 °C",
    "punto_ebullicion": "1564 °C",
    "electrones_valencia": 5,
    "estados_oxidacion": "-3, -2, -1, +1, +2, +3, +4, +5"
},
"84": {
    "nombre": "Polonio",
    "simbolo": "Po",
    "numero_atomico": 84,
    "masa_atomica": 209,
    "electronegatividad": 2.0,
    "categoria": "Metaloide",
    "info_adicional": "Elemento altamente radiactivo y tóxico, utilizado en fuentes de neutrones para investigación nuclear y como eliminador de estática en procesos industriales.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
    "electrones": 84,
    "protones": 84,
    "neutrones": 125,
    "densidad": "9.32 g/cm³",
    "punto_fusion": "254 °C",
    "punto_ebullicion": "962 °C",
    "electrones_valencia": 6,
    "estados_oxidacion": "-2, +2, +4, +6"
},
"85": {
    "nombre": "Astato",
    "simbolo": "At",
    "numero_atomico": 85,
    "masa_atomica": 210,
    "electronegatividad": 2.2,
    "categoria": "Halógeno",
    "info_adicional": "Elemento más raro de la naturaleza, altamente radiactivo, con aplicaciones potenciales en radioterapia dirigida contra cáncer debido a su corto período de semidesintegración.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
    "electrones": 85,
    "protones": 85,
    "neutrones": 125,
    "densidad": "≈7 g/cm³ (est)",
    "punto_fusion": "302 °C",
    "punto_ebullicion": "337 °C",
    "electrones_valencia": 7,
    "estados_oxidacion": "-1, +1, +3, +5, +7"
},
"86": {
    "nombre": "Radón",
    "simbolo": "Rn",
    "numero_atomico": 86,
    "masa_atomica": 222,
    "electronegatividad": null,
    "categoria": "Gas noble",
    "info_adicional": "Gas radiactivo invisible e inodoro, segunda causa principal de cáncer de pulmón después del tabaco, utilizado en radioterapia para ciertos tipos de cáncer.",
    "configuracion_electronica": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
    "electrones": 86,
    "protones": 86,
    "neutrones": 136,
    "densidad": "0.00973 g/cm³",
    "punto_fusion": "-71 °C",
    "punto_ebullicion": "-61.7 °C",
    "electrones_valencia": 8,
    "estados_oxidacion": "0, +2, +6"
},
"87": {
    "nombre": "Francio",
    "simbolo": "Fr",
    "numero_atomico": 87,
    "masa_atomica": 223,
    "electronegatividad": 0.7,
    "categoria": "Metal alcalino",
    "info_adicional": "Metal alcalino más pesado y segundo elemento menos abundante, altamente radiactivo, con aplicaciones solo en investigación básica en física nuclear.",
    "configuracion_electronica": "[Rn] 7s¹",
    "electrones": 87,
    "protones": 87,
    "neutrones": 136,
    "densidad": "≈2.48 g/cm³ (est)",
    "punto_fusion": "27 °C",
    "punto_ebullicion": "677 °C",
    "electrones_valencia": 1,
    "estados_oxidacion": "+1"
},
"88": {
    "nombre": "Radio",
    "simbolo": "Ra",
    "numero_atomico": 88,
    "masa_atomica": 226,
    "electronegatividad": 0.9,
    "categoria": "Metal alcalinotérreo",
    "info_adicional": "Elemento altamente radiactivo que brilla en la oscuridad, históricamente utilizado en pinturas luminosas, actualmente en radioterapia contra cáncer.",
    "configuracion_electronica": "[Rn] 7s²",
    "electrones": 88,
    "protones": 88,
    "neutrones": 138,
    "densidad": "5.5 g/cm³",
    "punto_fusion": "700 °C",
    "punto_ebullicion": "1737 °C",
    "electrones_valencia": 2,
    "estados_oxidacion": "+2"
},
"89": {
    "nombre": "Actinio",
    "simbolo": "Ac",
    "numero_atomico": 89,
    "masa_atomica": 227,
    "electronegatividad": 1.1,
    "categoria": "Actínido",
    "info_adicional": "Elemento radiactivo que da nombre a la serie de los actínidos, utilizado como fuente de neutrones y en investigaciones sobre propiedades nucleares.",
    "configuracion_electronica": "[Rn] 6d¹ 7s²",
    "electrones": 89,
    "protones": 89,
    "neutrones": 138,
    "densidad": "10.07 g/cm³",
    "punto_fusion": "1050 °C",
    "punto_ebullicion": "3200 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "+3"
},
"90": {
    "nombre": "Torio",
    "simbolo": "Th",
    "numero_atomico": 90,
    "masa_atomica": 232.04,
    "electronegatividad": 1.3,
    "categoria": "Actínido",
    "info_adicional": "Combustible nuclear potencial para reactores de nueva generación, utilizado en filamentos de lámparas y aleaciones de magnesio para aplicaciones aeroespaciales.",
    "configuracion_electronica": "[Rn] 6d² 7s²",
    "electrones": 90,
    "protones": 90,
    "neutrones": 142,
    "densidad": "11.72 g/cm³",
    "punto_fusion": "1750 °C",
    "punto_ebullicion": "4790 °C",
    "electrones_valencia": 4,
    "estados_oxidacion": "+1, +2, +3, +4"
},
"91": {
    "nombre": "Protactinio",
    "simbolo": "Pa",
    "numero_atomico": 91,
    "masa_atomica": 231.04,
    "electronegatividad": 1.5,
    "categoria": "Actínido",
    "info_adicional": "Elemento raro y altamente radiactivo, principalmente objeto de investigación científica, con aplicaciones potenciales en física nuclear fundamental.",
    "configuracion_electronica": "[Rn] 5f² 6d¹ 7s²",
    "electrones": 91,
    "protones": 91,
    "neutrones": 140,
    "densidad": "15.37 g/cm³",
    "punto_fusion": "1568 °C",
    "punto_ebullicion": "4027 °C",
    "electrones_valencia": 5,
    "estados_oxidacion": "+3, +4, +5"
},
"92": {
    "nombre": "Uranio",
    "simbolo": "U",
    "numero_atomico": 92,
    "masa_atomica": 238.03,
    "electronegatividad": 1.38,
    "categoria": "Actínido",
    "info_adicional": "Elemento radiactivo utilizado como combustible en reactores nucleares y en armas nucleares.",
    "configuracion_electronica": "[Rn] 5f³ 6d¹ 7s²",
    "electrones": 92,
    "protones": 92,
    "neutrones": 146,
    "densidad": "19.1 g/cm³",
    "punto_fusion": "1132.2 °C",
    "punto_ebullicion": "4131 °C",
    "electrones_valencia": 6,
    "estados_oxidacion": "+3, +4, +5, +6"
},
"93": {
    "nombre": "Neptunio",
    "simbolo": "Np",
    "numero_atomico": 93,
    "masa_atomica": 237,
    "electronegatividad": 1.36,
    "categoria": "Actínido",
    "info_adicional": "Primer elemento transuránico artificial, utilizado en detectores de neutrones y como precursor para la producción de plutonio-238 para generadores termoeléctricos.",
    "configuracion_electronica": "[Rn] 5f⁴ 6d¹ 7s²",
    "electrones": 93,
    "protones": 93,
    "neutrones": 144,
    "densidad": "20.45 g/cm³",
    "punto_fusion": "644 °C",
    "punto_ebullicion": "3902 °C",
    "electrones_valencia": 7,
    "estados_oxidacion": "+2, +3, +4, +5, +6, +7"
},
"94": {
    "nombre": "Plutonio",
    "simbolo": "Pu",
    "numero_atomico": 94,
    "masa_atomica": 244,
    "electronegatividad": 1.28,
    "categoria": "Actínido",
    "info_adicional": "Elemento clave en armas nucleares y energía nuclear, utilizado en generadores termoeléctricos para naves espaciales y satélites de larga duración.",
    "configuracion_electronica": "[Rn] 5f⁶ 7s²",
    "electrones": 94,
    "protones": 94,
    "neutrones": 150,
    "densidad": "19.84 g/cm³",
    "punto_fusion": "639.4 °C",
    "punto_ebullicion": "3228 °C",
    "electrones_valencia": 8,
    "estados_oxidacion": "+2, +3, +4, +5, +6, +7, +8"
},
"95": {
    "nombre": "Americio",
    "simbolo": "Am",
    "numero_atomico": 95,
    "masa_atomica": 243,
    "electronegatividad": 1.13,
    "categoria": "Actínido",
    "info_adicional": "Elemento artificial utilizado en detectores de humo domésticos, como fuente portátil de rayos gamma y en sondas espaciales como fuente de energía radioisotópica.",
    "configuracion_electronica": "[Rn] 5f⁷ 7s²",
    "electrones": 95,
    "protones": 95,
    "neutrones": 148,
    "densidad": "12 g/cm³",
    "punto_fusion": "1176 °C",
    "punto_ebullicion": "2607 °C",
    "electrones_valencia": 9,
    "estados_oxidacion": "+2, +3, +4, +5, +6, +7"
},
"96": {
    "nombre": "Curio",
    "simbolo": "Cm",
    "numero_atomico": 96,
    "masa_atomica": 247,
    "electronegatividad": 1.28,
    "categoria": "Actínido",
    "info_adicional": "Elemento altamente radiactivo utilizado como fuente compacta de energía termoeléctrica en equipos científicos espaciales y en producción de isótopos más pesados.",
    "configuracion_electronica": "[Rn] 5f⁷ 6d¹ 7s²",
    "electrones": 96,
    "protones": 96,
    "neutrones": 151,
    "densidad": "13.51 g/cm³",
    "punto_fusion": "1340 °C",
    "punto_ebullicion": "3110 °C",
    "electrones_valencia": 10,
    "estados_oxidacion": "+3, +4"
},
"97": {
    "nombre": "Berkelio",
    "simbolo": "Bk",
    "numero_atomico": 97,
    "masa_atomica": 247,
    "electronegatividad": 1.3,
    "categoria": "Actínido",
    "info_adicional": "Elemento sintético extremadamente raro, utilizado principalmente en investigación científica para producir elementos más pesados y estudiar propiedades nucleares.",
    "configuracion_electronica": "[Rn] 5f⁹ 7s²",
    "electrones": 97,
    "protones": 97,
    "neutrones": 150,
    "densidad": "14.78 g/cm³",
    "punto_fusion": "986 °C",
    "punto_ebullicion": "2627 °C",
    "electrones_valencia": 11,
    "estados_oxidacion": "+3, +4"
},
"98": {
    "nombre": "Californio",
    "simbolo": "Cf",
    "numero_atomico": 98,
    "masa_atomica": 251,
    "electronegatividad": 1.3,
    "categoria": "Actínido",
    "info_adicional": "Elemento artificial más caro del mundo ($27 millones/gramo), utilizado como fuente intensa de neutrones en reactores nucleares y en tratamientos contra ciertos tipos de cáncer.",
    "configuracion_electronica": "[Rn] 5f¹⁰ 7s²",
    "electrones": 98,
    "protones": 98,
    "neutrones": 153,
    "densidad": "15.1 g/cm³",
    "punto_fusion": "900 °C",
    "punto_ebullicion": "1470 °C",
    "electrones_valencia": 12,
    "estados_oxidacion": "+2, +3, +4"
},
"99": {
    "nombre": "Einstenio",
    "simbolo": "Es",
    "numero_atomico": 99,
    "masa_atomica": 252,
    "electronegatividad": 1.3,
    "categoria": "Actínido",
    "info_adicional": "Elemento sintético producido en cantidades mínimas (nanogramos), utilizado exclusivamente en investigación científica básica sobre propiedades nucleares.",
    "configuracion_electronica": "[Rn] 5f¹¹ 7s²",
    "electrones": 99,
    "protones": 99,
    "neutrones": 153,
    "densidad": "8.84 g/cm³",
    "punto_fusion": "860 °C",
    "punto_ebullicion": "996 °C",
    "electrones_valencia": 13,
    "estados_oxidacion": "+2, +3"
},
"100": {
    "nombre": "Fermio",
    "simbolo": "Fm",
    "numero_atomico": 100,
    "masa_atomica": 257,
    "electronegatividad": 1.3,
    "categoria": "Actínido",
    "info_adicional": "Elemento superpesado sintético descubierto en restos de explosiones termonucleares, con aplicaciones limitadas a investigación nuclear fundamental.",
    "configuracion_electronica": "[Rn] 5f¹² 7s²",
    "electrones": 100,
    "protones": 100,
    "neutrones": 157,
    "densidad": "9.7 g/cm³",
    "punto_fusion": "1527 °C",
    "punto_ebullicion": "Desconocido",
    "electrones_valencia": 14,
    "estados_oxidacion": "+2, +3"
},
"101": {
    "nombre": "Mendelevio",
    "simbolo": "Md",
    "numero_atomico": 101,
    "masa_atomica": 258,
    "electronegatividad": 1.3,
    "categoria": "Actínido",
    "info_adicional": "Elemento sintético producido átomo por átomo, utilizado únicamente en investigación científica para estudiar propiedades químicas de elementos superpesados.",
    "configuracion_electronica": "[Rn] 5f¹³ 7s²",
    "electrones": 101,
    "protones": 101,
    "neutrones": 157,
    "densidad": "10.3 g/cm³",
    "punto_fusion": "827 °C",
    "punto_ebullicion": "Desconocido",
    "electrones_valencia": 15,
    "estados_oxidacion": "+2, +3"
},
"102": {
    "nombre": "Nobelio",
    "simbolo": "No",
    "numero_atomico": 102,
    "masa_atomica": 259,
    "electronegatividad": 1.3,
    "categoria": "Actínido",
    "info_adicional": "Elemento sintético altamente inestable, con aplicaciones exclusivas en investigación nuclear básica y estudios sobre estabilidad de elementos superpesados.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 7s²",
    "electrones": 102,
    "protones": 102,
    "neutrones": 157,
    "densidad": "9.9 g/cm³",
    "punto_fusion": "827 °C",
    "punto_ebullicion": "Desconocido",
    "electrones_valencia": 16,
    "estados_oxidacion": "+2, +3"
},
"103": {
    "nombre": "Lawrencio",
    "simbolo": "Lr",
    "numero_atomico": 103,
    "masa_atomica": 262,
    "electronegatividad": 1.3,
    "categoria": "Actínido",
    "info_adicional": "Último elemento de la serie de los actínidos, sintetizado en cantidades minúsculas para investigación sobre propiedades químicas de elementos transactínidos.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d¹ 7s²",
    "electrones": 103,
    "protones": 103,
    "neutrones": 159,
    "densidad": "14.4 g/cm³",
    "punto_fusion": "1627 °C",
    "punto_ebullicion": "Desconocido",
    "electrones_valencia": 17,
    "estados_oxidacion": "+3"
},
"104": {
    "nombre": "Rutherfordio",
    "simbolo": "Rf",
    "numero_atomico": 104,
    "masa_atomica": 267,
    "electronegatividad": null,
    "categoria": "Metal de transición",
    "info_adicional": "Primer elemento transactínido, altamente radiactivo con vida media de segundos, utilizado exclusivamente en investigación nuclear básica.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d² 7s²",
    "electrones": 104,
    "protones": 104,
    "neutrones": 163,
    "densidad": "17 g/cm³",
    "punto_fusion": "2100 °C",
    "punto_ebullicion": "5500 °C",
    "electrones_valencia": 4,
    "estados_oxidacion": "+3, +4"
},
"105": {
    "nombre": "Dubnio",
    "simbolo": "Db",
    "numero_atomico": 105,
    "masa_atomica": 268,
    "electronegatividad": null,
    "categoria": "Metal de transición",
    "info_adicional": "Elemento sintético superpesado, con propiedades químicas similares al tantalio, utilizado solo en investigación fundamental de física nuclear.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d³ 7s²",
    "electrones": 105,
    "protones": 105,
    "neutrones": 163,
    "densidad": "21.6 g/cm³",
    "punto_fusion": "Desconocido",
    "punto_ebullicion": "Desconocido",
    "electrones_valencia": 5,
    "estados_oxidacion": "+3, +4, +5"
},
"106": {
    "nombre": "Seaborgio",
    "simbolo": "Sg",
    "numero_atomico": 106,
    "masa_atomica": 269,
    "electronegatividad": null,
    "categoria": "Metal de transición",
    "info_adicional": "Elemento sintético en honor a Glenn T. Seaborg, con aplicaciones limitadas a estudios sobre estabilidad nuclear y propiedades químicas de elementos superpesados.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d⁴ 7s²",
    "electrones": 106,
    "protones": 106,
    "neutrones": 163,
    "densidad": "23-24 g/cm³",
    "punto_fusion": "Desconocido",
    "punto_ebullicion": "Desconocido",
    "electrones_valencia": 6,
    "estados_oxidacion": "+3, +4, +5, +6"
},
"107": {
    "nombre": "Bohrio",
    "simbolo": "Bh",
    "numero_atomico": 107,
    "masa_atomica": 270,
    "electronegatividad": null,
    "categoria": "Metal de transición",
    "info_adicional": "Elemento sintético superpesado, con propiedades químicas similares al renio, utilizado exclusivamente en investigación nuclear avanzada.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d⁵ 7s²",
    "electrones": 107,
    "protones": 107,
    "neutrones": 163,
    "densidad": "26-27 g/cm³",
    "punto_fusion": "Desconocido",
    "punto_ebullicion": "Desconocido",
    "electrones_valencia": 7,
    "estados_oxidacion": "+3, +4, +5, +7"
},
"108": {
    "nombre": "Hassio",
    "simbolo": "Hs",
    "numero_atomico": 108,
    "masa_atomica": 269,
    "electronegatividad": null,
    "categoria": "Metal de transición",
    "info_adicional": "Elemento sintético altamente inestable, con propiedades químicas similares al osmio, utilizado solo en investigación básica en física nuclear.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d⁶ 7s²",
    "electrones": 108,
    "protones": 108,
    "neutrones": 161,
    "densidad": "27-29 g/cm³",
    "punto_fusion": "Desconocido",
    "punto_ebullicion": "Desconocido",
    "electrones_valencia": 8,
    "estados_oxidacion": "+2, +3, +4, +6, +8"
},
"109": {
    "nombre": "Meitnerio",
    "simbolo": "Mt",
    "numero_atomico": 109,
    "masa_atomica": 278,
    "electronegatividad": null,
    "categoria": "Metal de transición",
    "info_adicional": "Elemento sintético superpesado, en honor a Lise Meitner, con aplicaciones exclusivas en investigación nuclear fundamental y estudios de estabilidad atómica.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d⁷ 7s²",
    "electrones": 109,
    "protones": 109,
    "neutrones": 169,
    "densidad": "27.9 g/cm³",
    "punto_fusion": "Desconocido",
    "punto_ebullicion": "Desconocido",
    "electrones_valencia": 9,
    "estados_oxidacion": "+1, +3, +4, +6, +8, +9"
},
"110": {
    "nombre": "Darmstadtio",
    "simbolo": "Ds",
    "numero_atomico": 110,
    "masa_atomica": 281,
    "electronegatividad": null,
    "categoria": "Metal de transición",
    "info_adicional": "Elemento sintético creado en el GSI (Darmstadt, Alemania), con propiedades químicas inciertas y aplicaciones limitadas a investigación nuclear avanzada.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d⁹ 7s¹",
    "electrones": 110,
    "protones": 110,
    "neutrones": 171,
    "densidad": "26-27 g/cm³",
    "punto_fusion": "Desconocido",
    "punto_ebullicion": "Desconocido",
    "electrones_valencia": 10,
    "estados_oxidacion": "0, +2, +4, +6, +8"
},
"111": {
    "nombre": "Roentgenio",
    "simbolo": "Rg",
    "numero_atomico": 111,
    "masa_atomica": 282,
    "electronegatividad": null,
    "categoria": "Metal de transición",
    "info_adicional": "Elemento sintético superpesado, en honor a Wilhelm Röntgen, utilizado únicamente en estudios de química nuclear y propiedades atómicas fundamentales.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d¹⁰ 7s¹",
    "electrones": 111,
    "protones": 111,
    "neutrones": 171,
    "densidad": "22-24 g/cm³",
    "punto_fusion": "Desconocido",
    "punto_ebullicion": "Desconocido",
    "electrones_valencia": 11,
    "estados_oxidacion": "-1, +1, +3, +5"
},
"112": {
    "nombre": "Copernicio",
    "simbolo": "Cn",
    "numero_atomico": 112,
    "masa_atomica": 285,
    "electronegatividad": null,
    "categoria": "Metal de transición",
    "info_adicional": "Elemento sintético superpesado que podría ser gaseoso a temperatura ambiente, con aplicaciones exclusivas en investigación fundamental de física nuclear.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
    "electrones": 112,
    "protones": 112,
    "neutrones": 173,
    "densidad": "14.0 g/cm³",
    "punto_fusion": "Desconocido",
    "punto_ebullicion": "84±15 °C",
    "electrones_valencia": 12,
    "estados_oxidacion": "0, +1, +2, +4"
},
"113": {
    "nombre": "Nihonio",
    "simbolo": "Nh",
    "numero_atomico": 113,
    "masa_atomica": 286,
    "electronegatividad": null,
    "categoria": "Metal del bloque p",
    "info_adicional": "Primer elemento descubierto en Asia (Japón), con propiedades químicas similares al talio, utilizado solo en investigación nuclear avanzada.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
    "electrones": 113,
    "protones": 113,
    "neutrones": 173,
    "densidad": "16 g/cm³",
    "punto_fusion": "430 °C",
    "punto_ebullicion": "1130 °C",
    "electrones_valencia": 3,
    "estados_oxidacion": "-1, +1, +3, +5"
},
"114": {
    "nombre": "Flerovio",
    "simbolo": "Fl",
    "numero_atomico": 114,
    "masa_atomica": 289,
    "electronegatividad": null,
    "categoria": "Metal del bloque p",
    "info_adicional": "Elemento superpesado que podría mostrar propiedades similares a los gases nobles, utilizado exclusivamente en estudios sobre estabilidad nuclear.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
    "electrones": 114,
    "protones": 114,
    "neutrones": 175,
    "densidad": "14 g/cm³",
    "punto_fusion": "70 °C",
    "punto_ebullicion": "150 °C",
    "electrones_valencia": 4,
    "estados_oxidacion": "0, +1, +2, +4, +6"
},
"115": {
    "nombre": "Moscovio",
    "simbolo": "Mc",
    "numero_atomico": 115,
    "masa_atomica": 290,
    "electronegatividad": null,
    "categoria": "Metal del bloque p",
    "info_adicional": "Elemento sintético superpesado, en honor a Moscú, con propiedades químicas similares al bismuto, utilizado solo en investigación nuclear fundamental.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
    "electrones": 115,
    "protones": 115,
    "neutrones": 175,
    "densidad": "13.5 g/cm³",
    "punto_fusion": "400 °C",
    "punto_ebullicion": "1100 °C",
    "electrones_valencia": 5,
    "estados_oxidacion": "+1, +3"
},
"116": {
    "nombre": "Livermorio",
    "simbolo": "Lv",
    "numero_atomico": 116,
    "masa_atomica": 293,
    "electronegatividad": null,
    "categoria": "Metal del bloque p",
    "info_adicional": "Elemento superpesado sintético, en honor al Laboratorio Nacional Lawrence Livermore, con aplicaciones exclusivas en investigación nuclear avanzada.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
    "electrones": 116,
    "protones": 116,
    "neutrones": 177,
    "densidad": "12.9 g/cm³",
    "punto_fusion": "364-507 °C",
    "punto_ebullicion": "762-862 °C",
    "electrones_valencia": 6,
    "estados_oxidacion": "+2, +4"
},
"117": {
    "nombre": "Teneso",
    "simbolo": "Ts",
    "numero_atomico": 117,
    "masa_atomica": 294,
    "electronegatividad": null,
    "categoria": "Halógeno",
    "info_adicional": "Elemento sintético superpesado, segundo halógeno artificial, con propiedades químicas inciertas y aplicaciones limitadas a investigación nuclear fundamental.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
    "electrones": 117,
    "protones": 117,
    "neutrones": 177,
    "densidad": "7.1-7.3 g/cm³",
    "punto_fusion": "350-550 °C",
    "punto_ebullicion": "610 °C",
    "electrones_valencia": 7,
    "estados_oxidacion": "-1, +1, +3, +5"
},
"118": {
    "nombre": "Oganesón",
    "simbolo": "Og",
    "numero_atomico": 118,
    "masa_atomica": 294,
    "electronegatividad": null,
    "categoria": "Gas noble",
    "info_adicional": "Elemento más pesado conocido y último de la tabla periódica, sintetizado en cantidades minúsculas, con aplicaciones exclusivas en investigación de física nuclear avanzada.",
    "configuracion_electronica": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
    "electrones": 118,
    "protones": 118,
    "neutrones": 176,
    "densidad": "4.9-5.1 g/cm³",
    "punto_fusion": "≈52 °C",
    "punto_ebullicion": "≈177 °C",
    "electrones_valencia": 8,
    "estados_oxidacion": "0, +1, +2, +4, +6"
}
};

class RandomForest {
    constructor(numTrees = 15) {
        this.numTrees = numTrees;
        this.trees = [];
        this.features = [
            'numero_atomico', 
            'masa_atomica', 
            'electronegatividad',
            'radio_atomico',
            'energia_ionizacion'
        ];
        this.classes = new Set();
        this.accuracy = 0;
        this.trainingInterval = null;
        this.trainingData = [];
        this.isTraining = false;
    }

    startBackgroundTraining() {

        if (this.trainingInterval) clearInterval(this.trainingInterval);
        
        this.trainingInterval = setInterval(() => {
            if (!this.isTraining && this.trainingData.length > 0) {
                this.train(this.trainingData);
                console.log('Modelo reentrenado en segundo plano');
            }
        }, 30000); 
    }

    addTrainingData(element) {
        this.trainingData.push(element);
        console.log(`Dato de entrenamiento agregado: ${element.nombre}`);
        
        if (this.trainingData.length >= 5 && !this.isTraining) {
            this.train(this.trainingData);
        }
    }

    train(trainingData) {
        if (trainingData.length === 0) return;
        
        this.isTraining = true;
        console.time('Tiempo de entrenamiento');
        
        this.trees = [];
        this.classes = new Set(trainingData.map(item => item.categoria));
        

        for (let i = 0; i < this.numTrees; i++) {
            const subset = this.createRandomSubset(trainingData);
            const tree = this.buildTree(subset);
            this.trees.push(tree);
        }
        
        const correctPredictions = trainingData.filter(entry => {
            const prediction = this.predictSingle(entry);
            return prediction === entry.categoria;
        }).length;
        
        this.accuracy = Math.round((correctPredictions / trainingData.length) * 100);
        
        console.log(`Modelo entrenado con ${this.trainingData.length} elementos. Precisión: ${this.accuracy}%`);
        console.timeEnd('Tiempo de entrenamiento');
        
        this.isTraining = false;
    }

    createRandomSubset(data) {
        const subset = [];
        for (let i = 0; i < data.length; i++) {
            const randomIndex = Math.floor(Math.random() * data.length);
            subset.push(data[randomIndex]);
        }
        return subset;
    }

    buildTree(data) {
        return {
            predict: (features) => {
                if (features.electronegatividad === null) return "Gas noble";
                if (features.numero_atomico >= 57 && features.numero_atomico <= 71) return "Lantánido";
                if (features.numero_atomico >= 89 && features.numero_atomico <= 103) return "Actínido";
                if (features.electronegatividad > 2.5) return "No metal";
                if (features.electronegatividad < 1.2 && features.numero_atomico < 20) return "Metal alcalino";
                if (features.numero_atomico >= 21 && features.numero_atomico <= 30) return "Metal de transición";
                if (features.electronegatividad > 1.8 && features.electronegatividad < 2.2) return "Metaloide";
                if (features.numero_atomico > 80) return "Metal post-transición";
                return "Metal de transición";
            }
        };
    }

    predict(features) {
        const votes = {};
        
        for (const tree of this.trees) {
            const prediction = tree.predict(features);
            votes[prediction] = (votes[prediction] || 0) + 1;
        }
        
        let maxVotes = 0;
        let finalPrediction = '';
        
        for (const [category, count] of Object.entries(votes)) {
            if (count > maxVotes) {
                maxVotes = count;
                finalPrediction = category;
            }
        }
        
        return finalPrediction;
    }

    predictSingle(element) {
        const features = {
            numero_atomico: element.numero_atomico,
            masa_atomica: element.masa_atomica,
            electronegatividad: element.electronegatividad,
            radio_atomico: element.radio_atomico,
            energia_ionizacion: element.energia_ionizacion
        };
        
        return this.predict(features);
    }
}

const ai = new RandomForest();
let qrScanner = null;
let currentAudio = null;

const initialTrainingData = Object.values(elementos);
ai.train(initialTrainingData);

ai.startBackgroundTraining();

document.getElementById('scanBtn').addEventListener('click', toggleScanner);
document.getElementById('periodicBtn').addEventListener('click', togglePeriodicTable);
document.getElementById('playAudioBtn').addEventListener('click', playElementAudio);
document.getElementById('startScanBtn').addEventListener('click', startScanner);
document.getElementById('stopScanBtn').addEventListener('click', stopScanner);

function toggleScanner() {
    const container = document.getElementById('scannerContainer');
    const btn = document.getElementById('scanBtn');
    
    if (container.classList.contains('active')) {
        container.classList.remove('active');
        btn.classList.remove('active');
        stopScanner();
    } else {
        hideAllContainers();
        container.classList.add('active');
        btn.classList.add('active');
    }
}

function togglePeriodicTable() {
    const table = document.getElementById('periodicTable');
    const btn = document.getElementById('periodicBtn');
    
    if (table.style.display === 'grid') {
        table.style.display = 'none';
        btn.classList.remove('active');
    } else {
        hideAllContainers();
        createPeriodicTable();
        table.style.display = 'grid';
        btn.classList.add('active');
    }
}

function hideAllContainers() {
    document.getElementById('scannerContainer').classList.remove('active');
    document.getElementById('periodicTable').style.display = 'none';
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
    stopScanner();
}

async function startScanner() {
    try {
        const video = document.getElementById('video');
        const status = document.getElementById('scanStatus');
        const startBtn = document.getElementById('startScanBtn');
        const stopBtn = document.getElementById('stopScanBtn');
        
        status.textContent = "Solicitando acceso a la cámara...";
        status.className = "status";
        
        if (typeof QrScanner === 'undefined') {
            throw new Error('QrScanner no está cargado');
        }
        
        const hasCamera = await QrScanner.hasCamera();
        if (!hasCamera) {
            throw new Error('No se detectó cámara en el dispositivo');
        }
        
        qrScanner = new QrScanner(
            video,
            result => {
                const elementId = parseInt(result.data);
                console.log('QR detectado:', result.data);
                
                if (elementos[elementId]) {
                    processElement(elementId);
                    status.textContent = `✅ Elemento ${elementId} (${elementos[elementId].nombre}) detectado`;
                    status.className = "status success";
                    
                    video.style.borderColor = 'var(--primary-green)';
                    setTimeout(() => {
                        video.style.borderColor = 'var(--gray-200)';
                    }, 1000);
                    
                    ai.addTrainingData(elementos[elementId]);
                    
                } else {
                    status.textContent = `❌ Código QR "${result.data}" no corresponde a un elemento disponible`;
                    status.className = "status error";
                }
            },
            {
                onDecodeError: error => {
                    if (error.message && !error.message.includes('No QR code found')) {
                        console.warn('Error de decodificación:', error);
                    }
                },
                highlightScanRegion: true,
                highlightCodeOutline: true,
                maxScansPerSecond: 5,
                preferredCamera: 'environment'
            }
        );

        await qrScanner.start();
        
        status.textContent = "🎯 Cámara activa - Apunte hacia un código QR";
        status.className = "status success";
        
        startBtn.style.display = 'none';
        stopBtn.style.display = 'inline-flex';
        
    } catch (error) {
        console.error('Error del escáner:', error);
        const status = document.getElementById('scanStatus');
        
        if (error.name === 'NotAllowedError') {
            status.textContent = "❌ Acceso a la cámara denegado. Permita el acceso en la configuración del navegador";
        } else if (error.name === 'NotFoundError') {
            status.textContent = "❌ No se encontró cámara en el dispositivo";
        } else if (error.name === 'NotSupportedError') {
            status.textContent = "❌ Cámara no compatible con este navegador";
        } else {
            status.textContent = `❌ Error: ${error.message}`;
        }
        
        status.className = "status error";
    }
}

function stopScanner() {
    const startBtn = document.getElementById('startScanBtn');
    const stopBtn = document.getElementById('stopScanBtn');
    const status = document.getElementById('scanStatus');
    
    if (qrScanner) {
        qrScanner.stop();
        qrScanner.destroy();
        qrScanner = null;
    }
    
    status.textContent = "📷 Cámara desactivada";
    status.className = "status";
    
    startBtn.style.display = 'inline-flex';
    stopBtn.style.display = 'none';
}

function createPeriodicTable() {
    const table = document.getElementById('periodicTable');
    table.innerHTML = '';
    
    Object.keys(elementos).forEach(elementId => {
        const element = elementos[elementId];
        const cell = document.createElement('div');
        cell.className = 'element-cell';
        cell.innerHTML = `
            <div class="number">${element.numero_atomico}</div>
            <div class="symbol">${element.simbolo}</div>
        `;
        cell.addEventListener('click', () => processElement(parseInt(elementId)));
        table.appendChild(cell);
    });
}

function processElement(elementId) {
    const element = elementos[elementId];
    if (!element) return;


    const aiPrediction = ai.predictSingle(element);

    document.getElementById('elementSymbol').textContent = element.simbolo;
    document.getElementById('elementName').textContent = element.nombre;
    document.getElementById('elementAtomicNumber').textContent = `Z = ${element.numero_atomico}`;
    document.getElementById('elementMass').textContent = `${element.masa_atomica} u`;
    document.getElementById('elementElectronegativity').textContent = element.electronegatividad || "No aplicable";
    document.getElementById('elementCategory').textContent = element.categoria;
    document.getElementById('aiCategory').textContent = aiPrediction;
    document.getElementById('elementAdditionalInfo').textContent = element.info_adicional;

    // Crear sección de propiedades físicas y químicas
    const physicalProps = document.getElementById('physicalProperties');
    physicalProps.innerHTML = '';
    
    const properties = [
        { label: "Configuración Electrónica", value: element.configuracion_electronica },
        { label: "Electrones", value: element.electrones },
        { label: "Protones", value: element.protones },
        { label: "Neutrones", value: element.neutrones },
        { label: "Densidad", value: element.densidad },
        { label: "Punto de Fusión", value: element.punto_fusion },
        { label: "Punto de Ebullición", value: element.punto_ebullicion },
        { label: "Electrones de Valencia", value: element.electrones_valencia },
        { label: "Estados de Oxidación", value: element.estados_oxidacion }
    ];
    
    properties.forEach(prop => {
        const item = document.createElement('div');
        item.className = 'detail-item';
        item.innerHTML = `
            <div class="detail-label">${prop.label}</div>
            <div class="detail-value">${prop.value}</div>
        `;
        physicalProps.appendChild(item);
    });

    document.getElementById('elementInfo').classList.add('active');
    
    document.getElementById('elementInfo').scrollIntoView({ behavior: 'smooth' });
}

function playElementAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }

    const elementName = document.getElementById('elementName').textContent;
    const elementSymbol = document.getElementById('elementSymbol').textContent;
    const atomicNumber = document.getElementById('elementAtomicNumber').textContent;
    const category = document.getElementById('elementCategory').textContent;
    const additionalInfo = document.getElementById('elementAdditionalInfo').textContent;

    const text = `Análisis Helionix: Elemento ${elementName}, símbolo ${elementSymbol}, ${atomicNumber}, clasificación ${category}. ${additionalInfo}`;

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
    } else {
        alert('Síntesis de voz no disponible. Contenido: ' + text);
    }
}

window.addEventListener('beforeunload', function() {
    stopScanner();
    if (currentAudio) {
        currentAudio.pause();
    }
});

window.addEventListener('load', function() {
    console.log('Helionix - Sistema iniciado');
    console.log(`Base de datos: ${Object.keys(elementos).length} elementos`);
});
