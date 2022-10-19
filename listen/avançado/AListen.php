<!DOCTYPE html>

<head>
	<meta charset="UTF-8" />
	
	<title>Atividade Advanced Tranlate</title>
	<link rel="icon" href="https://img.a.transfermarkt.technology/portrait/header/225083-1598302373.jpg?lm=1">
	<link rel="stylesheet" type="text/css" href="../styleL.css" />
</head>

<body>
<div class = 'geral'>
    <a href="../../New Home/index.html"><img style = "position: absolute; left: 10px;  top: 10px;   " src="../../44913.png" alt="" width= "50px" height=  "50px"></a>
	<div id="page-wrap">

		<h1 class ='titulo'> Advanced <p>Listen & Answer </h1>
		
		<form action="Aresult.php" method="post" id="quiz">
            <br><br>
            <ol>
            
             <!-------------------------------------------------------Questao 1---------------------------------------------------------------------->   
             <div class="questao">
                    <img src="image/office.png" width="500" height="500"><br> 
                    <audio controls>
                    <source src = "audio/officeRules.mp3" type = "audio/mp3">
                    <source src = "audio/officeRules.mp3" type = "audio/mpeg">
                    </audio><br><br>
                    <h3>Seguir as regras é ...</h3>
                    <br>
                    <div>
                        <input type="radio" name="question-1-answers" id="question-1-answers-A" value="A" />
                        <label class = ''for="question-1-answers-A">A) Dispensável </label>
                    </div>
                    
                    <div>
                        <input type="radio" name="question-1-answers" id="question-1-answers-B" value="B" />
                        <label for="question-1-answers-B">B) Obrigatorio</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="question-1-answers" id="question-1-answers-C" value="C" />
                        <label for="question-1-answers-C">C) Opicional</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="question-1-answers" id="question-1-answers-D" value="D" />
                        <label for="question-1-answers-D">D) Arbitrário</label>
                    </div>
                </div>
                <!-------------------------------------------------------Questao 2---------------------------------------------------------------------->
                <div class="questao">
                    <img src="image/window2.png" width="500" height="500"><br> 
                    <audio controls>
                    <source src = "audio/renato.mp3" type = "audio/mp3">
                    <source src = "audio/renato.mp3" type = "audio/mpeg">
                    </audio><br><br>
                    <h3>Porque o Gato não consegue abrir a janela?</h3>
                    <br>
                    <div>
                        <input type="radio" name="question-2-answers" id="question-2-answers-A" value="A" />
                        <label for="question-2-answers-A">A) Está chovendo </label>
                    </div>
                    
                    <div>
                        <input type="radio" name="question-2-answers" id="question-2-answers-B" value="B" />
                        <label for="question-2-answers-B">B) A janela está quebrada</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="question-2-answers" id="question-2-answers-C" value="C" />
                        <label for="question-2-answers-C">C) A janela está fechada</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="question-2-answers" id="question-2-answers-D" value="D" />
                        <label for="question-2-answers-D">D) A janela está emperrada</label>
                    </div>
                </div>
                <!-------------------------------------------------------Questao 3---------------------------------------------------------------------->
                <div class="questao">
                    <img src="image/image.png" width="500" height="500"><br> 
                    <audio controls>
                    <source src = "audio/cara.mp3" type = "audio/mp3">
                    <source src = "audio/cara.mp3" type = "audio/mpeg">
                    </audio><br><br>
                    <h3>Você não deve endossar uma causa sem ...</h3>
                    <br>
                    <div>
                        <input type="radio" name="question-3-answers" id="question-3-answers-A" value="A" />
                        <label for="question-3-answers-A">A) Entende-la</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="question-3-answers" id="question-3-answers-B" value="B" />
                        <label for="question-3-answers-B">B) Lê-la</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="question-3-answers" id="question-3-answers-C" value="C" />
                        <label for="question-3-answers-C">C) Endosa-la</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="question-3-answers" id="question-3-answers-D" value="D" />
                        <label for="question-3-answers-D">D) Abri-la</label>
                    </div>
                </div>
            </ol>
            <input class="submitbtn2"style='font-size:24px' type="submit" value="Show Result"  />
		</form>
	
	</div>


</body>

</html>
