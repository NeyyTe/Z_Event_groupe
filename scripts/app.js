
if(document.querySelector('.tab-content')) {
    const buttonTab = document.querySelectorAll('.Tabs button')
    const contentTab = document.querySelectorAll('.tab-content div')
    
    for(let i = 0; i < 7; i++) {
        buttonTab[i].addEventListener('click', () => {
            if(!contentTab[i].classList.contains('active')) {
                contentTab.forEach(element => {
                    element.classList.remove('active');
               })
               contentTab[i].classList.add('active')
            }
        })
    }} 

    