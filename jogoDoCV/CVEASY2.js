var options = {
  solution: 			[[null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,	null,	null,	 'R',	 'H',	 'I',	 'N',	 'O',	 'C',    'E',    'R',    'O',    'S',   null,   null,   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	null,	null,	null,	null,    'L',   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,	null,	null,	 'G',	 'I',	 'R',	 'A',	 'F',	 'F',    'E',   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	null,	null,	null,	null,    'P',   null,   null,   null,   null,    'H',   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	 'M',	null,	null,	null,    'H',   null,   null,   null,    'D',    'O',    'G',   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	 'O',	null,	null,	null,    'A',   null,   null,    'C',   null,    'R',   null,   null,   null,   null,   null],
                           [null,	null,	null,	 'P',	 'E',	 'N',	 'G',	 'U',	 'I',    'N',   null,   null,    'A',   null,    'S',   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	 'K',	null,	null,	null,    'T',    'U',    'R',    'T',    'L',    'E',   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	 'Z',	 'E',	 'B',	 'R',	 'A',   null,   null,    'A',   null,    'I',   null,   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	 'Y',	null,	null,	null,   null,   null,    'B',   null,    'O',   null,   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,    'B',   null,    'N',   null,   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,    'I',   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	 'A',	 'L',	 'L',	 'I',    'G',    'A',    'T',    'O',    'R',   null,   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]],


       index: 				[[null,  null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,      1,   null,   null,   null,   null,   null,      2,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,      3,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,     10,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,      5,   null,   null,   null,   null,   null,   null,   null,      6,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,      7,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,    '8',   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,   null,   null,   null,   null,      9,   null,      4,   null,     11,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,     12,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,     13,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
                           [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]],

    questions_across: [	     "1. Animal grande que tem um chifre",
                             "3. Este animal tem um pesco??o muito longo",
                             "6. O melhor amigo do homem",
                             "8. Vive no frio e ginga",
                             "9. Movimento lento e tem uma concha",
                             "12. Animal listrado que se parece com um cavalo",
                             "13. Pode nadar debaixo d'??gua e andar em terra e tem uma grande mordida"],

    questions_down: [		    "2. Este animal tem uma tromba",
                            "4. Este animal gosta de comer cenouras",
                            "5. Este animal adora bananas",
                            "7. Alguns dizem que este animal tem nove vidas",
                            "10. Tem orelhas grandes e gosta de pular",
                            "11. Rei da floresta"]

};


cwp_nmsp.activateCWP(document.getElementById("myPuzzle"),false,options);