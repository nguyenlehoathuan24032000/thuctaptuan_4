let languages = document.querySelectorAll('.language');
let projects = document.querySelectorAll('.mission-item');


// languages
for(let i = 0 ; i < languages.length ; i++){
    languages[i].addEventListener("click",function(){
        languages[i].classList.add("active");
        for(let j = 0 ; j < languages.length ; j++){
            if ( languages[i] !== languages [j]){
                languages[j].classList.remove("active");
            }
        }
    })
}

// projects
for(let i = 0 ; i < projects.length ; i++){
    projects[i].addEventListener("click",function(){
        projects[i].classList.add("active");
        for(let j = 0 ; j < projects.length ; j++){
            if ( projects[i] !== projects[j]){
                projects[j].classList.remove("active");
            }
        }
    })
}