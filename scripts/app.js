let button = document.querySelector('button');

button.addEventListener('click', function clicButton(){
    let body = document.querySelector("body");
    
    if (body.classList.contains('dark')) {
        button.innerHTML="";
        let buttonContentLight = document.createTextNode('Mode sombre');
        button.appendChild(buttonContentLight);
        body.classList.remove('dark');
    }else{ 
        button.innerHTML="";
        let buttonContentDark = document.createTextNode('Mode clair');
        button.appendChild(buttonContentDark);
        body.classList.add('dark');
    }    
});

