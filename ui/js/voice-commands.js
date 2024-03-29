$(document).ready(function () {

    $("#speak-out").on("click", function () {
        responsiveVoice.speak('Welcome, How Can I help You?');
		$(this).addClass('listner-activated');
        if (annyang) {
            // Let's define our first command. First the text we expect, and then the function it should call
            var commands = {
                'show me notification': function () {
                    responsiveVoice.speak('OK');
                }
                ,
                'show me my network': function () {
                    responsiveVoice.speak('OK');
					createLiveView();
                },
                'what has changed in my network': function () {
                    responsiveVoice.speak('OK');
					createGraphDiff()
                },
                'show me anomaly': function () {
                    responsiveVoice.speak('OK');
					createLiveView();
                    setTimeout(function () {
                        document.getElementById("searchGraph").value = 'anomaly';
                        $("#btnSearchGraph").click();
                    }, 2000);

                },
                'stop listening': function () {
                    responsiveVoice.speak('Good Bye');
					annyang.abort();
                    $('.btn-voice').removeClass('listner-activated');
                }
            };

            // Add our commands to annyang
            annyang.addCommands(commands);


            // Start listening. You can call this here, or attach this call to an event, button, etc.
            annyang.start({
                continuous: false
            });


            annyang.addCallback('resultMatch', function (userSaid, commandText, phrases) {
                console.log(userSaid); // sample output: 'hello'
                $("#write-command").val(userSaid);
            });
        } else {
            alert('Issue with MIC');
        }
    });

});
