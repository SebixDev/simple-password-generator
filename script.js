document.querySelector("#generate").addEventListener("click", function() {
            var password = generatePassword(12);
           document.querySelector("#Password").innerHTML = password;
        });

        function generatePassword(count) {
            var generatedPassword = "";
            var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
            for (let i = 0; i < count; i++) {
                var index = zufallszahl(chars.length);
                generatedPassword += chars[index];
                
            }
            return generatedPassword;
        }

        function zufallszahl(max) {
            return Math.floor(Math.random() * max);
        }