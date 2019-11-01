$(document).ready(function () {

    $("#speak-out").on("click", function(){
        $(this).addClass('listner-activated');
        if (annyang) {
            // Let's define our first command. First the text we expect, and then the function it should call
            var commands = {
    
                'good morning': function () {
                    alert('Hey Good morning');
                },
                
                'show me notification': function () {
                   // voiceCommandStatus();
                   openCharm();
                }
                ,
                'show me my network': function () {
                    createGraph();
                }
                ,
                'top five anomalous nodes': function () {
                    alert('Its working anomalous');
                }
    
            };
    
            // Add our commands to annyang
            annyang.addCommands(commands);
            
            setInterval(function(){
                console.log('isListening()',annyang.isListening());
            },1000)
            

            
            // Start listening. You can call this here, or attach this call to an event, button, etc.
            annyang.start({
                 continuous: false
            });


            annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
                console.log(userSaid); // sample output: 'hello'
                $("#write-command").val(userSaid);
                //console.log(commandText); // sample output: 'hello (there)'
                //console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
              });
        } else {
            alert('Issue with MIC');
        }
    });
    
});