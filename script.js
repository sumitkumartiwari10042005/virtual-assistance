let btn = document.querySelector("#btn");
        let content = document.querySelector("#content");
        
        function speak(text) {
            let utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1;
            utterance.pitch = 1;
            utterance.volume = 1;
            utterance.lang = "en-US";
            window.speechSynthesis.speak(utterance);
        }
        
        function wishMe() {
            let day = new Date();
            let hours = day.getHours();
            if (hours >= 4 && hours < 12) {
                speak("Good Morning!");
            } else if (hours >= 12 && hours < 16) {
                speak("Good Afternoon!");
            } else {
                speak("Good Evening!");
            }
        }
        
        window.addEventListener('load', wishMe);
        
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        let recognition = new SpeechRecognition();
        
        recognition.onresult = (event) => {
            let currentIndex = event.resultIndex;
            let transcript = event.results[currentIndex][0].transcript;
            content.innerText = transcript;
            takeCommand(transcript.toLowerCase());
        };
        
        btn.addEventListener("click", () => {
            recognition.start();
        });
        
        function takeCommand(message) {
            if (message.includes("hello") || message.includes("hey")) {
                speak("Hello! How can I assist you?");
            } else if (message.includes("who are you")) {
                speak("I am Scroll your virtual assistant.");
            }else if (message.includes("what can you do for me")) {
                    speak("I can assist you in your work.");
            } else if (message.includes("open google")) {
                speak("Opening Google...");
                window.open("https://google.com/", "_blank");
            } else if (message.includes("open youtube")) {
                speak("Opening youtube...");
                window.open("https://youtube.com/", "_blank"); 
            } else if (message.includes("open netflix")) {
                speak("Opening netflix...");
                window.open("https://netflix.com/", "_blank"); 
            }else if(message.includes("open instagram")){
                speak("opening instagram...")
                window.open("https://instagram.com/","_blank")
            }else if(message.includes("open calculator")){
                    speak("opening calculator..")
                    window.open("calculator://")
            }else if (message.includes("time")) {
                let time = new Date().toLocaleTimeString();
                speak(`The time is ${time}`);
            } else if (message.includes("date")) {
                let date = new Date().toLocaleDateString();
                speak(`Today's date is ${date}`);
            } else{
                let finalText="this is what i found on internet regarding" + message.replace("Scroll","")
                speak(finalText)
                window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
            }
           // else {
             //   speak("I did not understand that. Please try again.");
            //}
        }
