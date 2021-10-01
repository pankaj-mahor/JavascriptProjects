const progress = document.querySelector('#progress')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;
// console.log(circles)


next.addEventListener('click' , function(){
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    // console.log(currentActive)  


    update();
})


prev.addEventListener('click' , function(){
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
        
    }
    // console.log(currentActive)
    
    update()
})


function update(){

    circles.forEach((circle , index)=>{
        if(index < currentActive){
            circle.classList.add('active')
            console.log(currentActive)
        }else{
            circle.classList.remove('active')
        }
    })


    const actives = document.querySelectorAll('.active');

   progress.style.width = (actives.length-1) / (circles.length -1) *100 + '%';



   if(currentActive === 1){
       prev.disabled =true
   }else if (currentActive === circles.length){
       next.disabled = true
   }
   else{
       prev.disabled = false;
       next.disabled = false;
   }
}