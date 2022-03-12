function defaultTheme(){
    let links = document.getElementsByTagName("link");
    for (let i in links){
        let link = links[i];
        let e = link.href.includes("themes");
        if(e){
          links[i].href = "themes"
        }
}
}

// DARK THEMES
function darkToggle(){
  let toggle = document.getElementById("darkToggle");
  if(toggle.checked == true){
    function darkDefaultTheme(){
      let links = document.getElementsByTagName("link");
        for (let i in links){
            let link = links[i];
            let e = link.href.includes("themes");
            if(e){
              links[i].href = "css/localhost/themes/dark/default.css"
              
            }
        }
    }
    darkDefaultTheme();
  }
  else if(toggle.checked == false){
    function defaultTheme(){
      let links = document.getElementsByTagName("link");
      for (let i in links){
          let link = links[i];
          let e = link.href.includes("themes");
          if(e){
            links[i].href = "themes"
          }
  }
  }
   defaultTheme();
  }
  }



function darkHacker(){
  let links = document.getElementsByTagName("link");
    for (let i in links){
        let link = links[i];
        let e = link.href.includes("themes");
        if(e){
          links[i].href = "css/localhost/themes/dark/hacker.css"
          
        }
    }
}

function darkWriter(){
    let links = document.getElementsByTagName("link");
      for (let i in links){
          let link = links[i];
          let e = link.href.includes("themes");
          if(e){
            links[i].href = "css/localhost/themes/dark/writer.css"
            
          }
      }
}

function darkGameboy(){
  let links = document.getElementsByTagName("link");
    for (let i in links){
        let link = links[i];
        let e = link.href.includes("themes");
        if(e){
          links[i].href = "css/localhost/themes/dark/gameboy.css"
          
        }
    }
}

function darkGold(){
  let links = document.getElementsByTagName("link");
    for (let i in links){
        let link = links[i];
        let e = link.href.includes("themes");
        if(e){
          links[i].href = "css/localhost/themes/dark/gold.css"
          
        }
    }
}

// LIGHT THEMES

function lightCoffee(){
  let links = document.getElementsByTagName("link");
    for (let i in links){
        let link = links[i];
        let e = link.href.includes("themes");
        if(e){
          links[i].href = "css/localhost/themes/light/coffee.css"
          
        }
    }
}

function lightWriter(){
  let links = document.getElementsByTagName("link");
    for (let i in links){
        let link = links[i];
        let e = link.href.includes("themes");
        if(e){
          links[i].href = "css/localhost/themes/light/writer.css"
          
        }
    }
}


function lightVintage(){
  let links = document.getElementsByTagName("link");
    for (let i in links){
        let link = links[i];
        let e = link.href.includes("themes");
        if(e){
          links[i].href = "css/localhost/themes/light/vintage.css"
          
        }
    }
}

function lightOffice(){
  let links = document.getElementsByTagName("link");
    for (let i in links){
        let link = links[i];
        let e = link.href.includes("themes");
        if(e){
          links[i].href = "css/localhost/themes/light/office.css"
          
        }
    }
}


