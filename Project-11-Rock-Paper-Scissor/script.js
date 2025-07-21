var computer_score = 0;
        var user_score = 0;
        var result_ref = document.getElementById("result");
        var choices_object = {
            'rock': {
                'rock': 'draw',
                'scissor': 'win',
                'paper': 'lose'
            },
            'scissor': {
                'rock': 'lose',
                'scissor': 'draw',
                'paper': 'win'
            },
            'paper': {
                'rock': 'win',
                'scissor': 'lose',
                'paper': 'draw'
            }
        };

        function checker(input) {
            var choices = ["rock", "paper", "scissor"];
            var num = Math.floor(Math.random() * 3);
            var computer_choice = choices[num];

            document.getElementById("comp_choice").innerHTML =
                "Computer chose <span>" + computer_choice.toUpperCase() + "</span>";

            document.getElementById("user_choice").innerHTML =
                "You chose <span>" + input.toUpperCase() + "</span>";

            var result = choices_object[input][computer_choice];

            if (result === 'win') {
                result_ref.style.backgroundColor = "#cefdce";
                result_ref.style.color = "#689f38";
                result_ref.innerHTML = "YOU WIN";
                user_score++;
            } else if (result === 'lose') {
                result_ref.style.backgroundColor = "#ffdde0";
                result_ref.style.color = "#d32f2f";
                result_ref.innerHTML = "YOU LOSE";
                computer_score++;
            } else {
                result_ref.style.backgroundColor = "#e5e5e5";
                result_ref.style.color = "#808080";
                result_ref.innerHTML = "DRAW";
            }

            document.getElementById("computer_score").innerHTML = computer_score;
            document.getElementById("user_score").innerHTML = user_score;
        }