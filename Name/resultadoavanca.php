<!DOCTYPE html>
<!--code by webdevtrick (webdevtrick.com) -->
<html>

<head>
	<meta charset=UTF-8" />
	
	<title>Resultado</title>
	
	<link rel="stylesheet" type="text/css" href="stylen.css" />
</head>

<body>
<div class = 'geral'>
    <div id="page-wrap">

		<h1 class ='titulo'>Result |</h1>
		<br><br><br>
        <?php
            error_reporting(E_ERROR | E_PARSE);
            $answer1 = $_POST['question-1-answers'];
            $answer2 = $_POST['question-2-answers'];
            $answer3 = $_POST['question-3-answers'];


            $totalCorrect = 0;
            
            if ($answer1 == "C") { $totalCorrect++; }
            if ($answer2 == "D") { $totalCorrect++; }
            if ($answer3 == "A") { $totalCorrect++; }
            
            echo "<div class ='result' id='results'>$totalCorrect / 3 correct</div>";   
        ?>
        <br><br><br><br>
	<form action="../New Home/index.html" method="post" id="quiz">
    <input class="submitbtn2"style='font-size:24px' type="submit" value="Voltar para o Menu"  />
    </form> 
	

</body>

</html>