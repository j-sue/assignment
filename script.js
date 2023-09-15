var numberOfSoundButtons = document.querySelectorAll("button").length;
console.log(numberOfSoundButtons)

for (var i = 0; i < numberOfSoundButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonText = this.innerText;
        console.log(buttonText);

        switch (buttonText) {
            case "Fart":
                var Fart = new Audio ("sound/Fart.mp3");
                Fart.play();
                break;
            case "Grabe ba":
                var grabe = new Audio ("sound/Untitled_Project_V1.mp3");
            grabe.play();
            break;

            case "Choir":
                var choir = new Audio ("sound/Choirs From Heaven Sound Effect.mp3");
                choir.play();
                break;
                
            case "Female":
                var female = new Audio ("sound/UwU  Sound effect.mp3");
                female.play();
                break;
            
            case "Male":
                var male = new Audio ("sound/saying hello baby with natural deep voice.mp3");
                male.play();
                break;
              
            case "Baby":
                var baby = new Audio ("sound/Baby laughing sound funny video on copyright.mp3");
                baby.play();
                break;


            default:
            break;    

            // Add cases for other animals here
        }
    });
}