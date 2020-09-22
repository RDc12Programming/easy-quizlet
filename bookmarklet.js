/* * * * * * * * * * * *
 *  Quizlet, by RDc12  *
 * * * * * * * * * * * */

// v0.1, last updated 9/22/20

var href = window.location.href.split("/"); href = href[href.length-1]

if(window.location.href.includes("quizlet.com")) {
  switch(href) {
    case "flashcards": flashcards(); break
    case "write":      write();      break
    case "spell":      spell();      break
    case "test":       test();       break
    case "match":      match();      break
    case "micromatch": micromatch(); break
    case "gravity":    gravity();    break
    case "learn":      learn();      break
    default: // unsupported gamemode
      createAlert("Unsupported Game", "Please try another gamemode", '<button class="UIButton" id="OKbutton" type="button"><span class="UIButton-wrapper"><span>OK</span></span></button>');
      getId("OKbutton").addEventListener("click", function() {
        document.getElementById("customMessageContainer").remove();
      }
  }
}

function flascards () {
  createAlert("Flashcards", "This does nothing :)", "button goes here")
}
function write () {
  createAlert("Write", "Just let it run", "button goes here")
}
function spell () {
  createAlert("Spell", "This one is broken atm :/", "button goes here")
}
function test () {
  createAlert("Test", "Right click to show or hide answers", "button goes here")
}
function match () {
  createAlert("Match", "Pick a time and then finish the questions", "button and time input go here")
}
function micromatch () {
  createAlert("Micromatch", "Pick a time and let it go", "button and time input")
}
function gravity () {
  createAlert("Gravity", "Just hold space", "button goes here")
}
function learn () {
  createAlert("Learn", "Just let it run", "button goes here")
}
                                         
function createAlert(title, message, button) {
  var html = '<div class="UIModal is-white is-open" id="customMessageContainer" role="document" tabindex="-1"> <div class="UIModal-box"> <div class="UIModalHeader"> <div class="UIModalHeader-wrapper"> <span class="UIModalHeader-close"> <div class="UIModalHeader-closeIconButton"> <span class="UIIconButton"> <button class="UIButton UIButton--inverted" type="button" id="customCloseButton" onclick="document.getElementById(&quot;customMessageContainer&quot;).remove();"> <span class="UIButton-wrapper"> <svg class="UIIcon UIIcon--x-thin"> <noscript></noscript> <use xlink:href="#x-thin"></use> <noscript></noscript> </svg> </span> </button> </span> </div> </span> <div class="UIModalHeader-childrenWrapper"> <h3 class="UIHeading UIHeading--three"><span id="customTitle">LorenxoSploit</span></h3> </div> </div> </div> <div class="UIModalBody"> <div class="UIDiv SetPageEmbedModal-content"> <div> <p class="UIParagraph"><span id="customMessage"><h2>' + title + '</h2><br><br>' + message + '<br><br>' + button + '</span></p></div></div></div></div></div>';
  var j = document.createElement('div').innerHTML = html
  document.body.appendChild(j)
}
