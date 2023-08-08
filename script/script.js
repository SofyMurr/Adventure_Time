document.addEventListener('DOMContentLoaded', ()=> {
    document.querySelector('.paralax-wrapper').classList.add('active');
});

var scrollItems = document.querySelectorAll('#animation');

window.addEventListener('scroll', () => {
for(var i =0; i <= scrollItems.length; i++){
    var element = scrollItems[i];
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if(position < windowHeight){
        element.classList.add('animation-class');
    }
    else{
        element.classList.remove('animation-class');
    }
}

});


  
    
    
    
       
    
    
      
