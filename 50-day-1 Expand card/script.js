const cardPanels = document.querySelectorAll('.card-panel');
// console.log(cardPanels);


cardPanels.forEach((panel)=>{
    // console.log(panel);
    panel.addEventListener('click',()=>{
        removeActiveClass();
        panel.classList.add('active');
    })
})
function removeActiveClass(){
    cardPanels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}