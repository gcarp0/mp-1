        function readText() {
            let text = document.getElementById("box1").value;
            alert(text)
        }
        

        function Doadd() {

            let text1 = Number(document.getElementById("box1").value);
            let text2 = Number(document.getElementById("box2").value);
            var answer = text1 +text2;
            if (answer < 0){
                document.getElementById("box3").style.color = "red";
            }
            else{
                document.getElementById("box3").style.color = "white";
            }
            document.getElementById('box3').value = answer;
        }
        
        function Dosub() {

            let text1 = Number(document.getElementById("box1").value);
            let text2 = Number(document.getElementById("box2").value);
            var answer2 = text1 - text2;
            if (answer2 < 0){
                document.getElementById("box3").style.color = "red";
            }
            else{
                document.getElementById("box3").style.color = "white";
            }
            document.getElementById('box3').value = answer2;
            
        }
        
        function Dodiv() {

            let text1 = Number(document.getElementById("box1").value);
            let text2 = Number(document.getElementById("box2").value);
            var answer3 = text1 / text2;
            if (answer3 < 0){
                document.getElementById("box3").style.color = "red";
            }
            else{
                document.getElementById("box3").style.color = "white";
            }
            document.getElementById('box3').value = answer3;
            
        }
        
        function Domult() {

            let text1 = Number(document.getElementById("box1").value);
            let text2 = Number(document.getElementById("box2").value);
            var answer4 = text1 * text2;
            if (answer4 < 0){
                document.getElementById("box3").style.color = "red";
            }
            else{
                document.getElementById("box3").style.color = "white";
            }
            document.getElementById('box3').value = answer4;
            
            
        }
        
        function Dopower() {
            let text1 = Number(document.getElementById("box1").value);
            let text2 = Number(document.getElementById("box2").value);
            
            var answer5 = 1;
            
            for (count = 0; count < text2; count = count+1) {
                answer5 = answer5*text1;
            
            }
             if (answer5 < 0){
                document.getElementById("box3").style.color = "red";
            }
            else{
                document.getElementById("box3").style.color = "white";
            }
            document.getElementById('box3').value = answer5;
            
        }

        function Doclear() {
            document.getElementById('box1').value = "";
            document.getElementById('box2').value = "";
            document.getElementById('box3').value = "";
        }