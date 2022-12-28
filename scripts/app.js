
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
    } 

    //  buttonTab[0].addEventListener('click', () => {
    //     if(!contentTab[0].classList.contains('active')) {
    //         contentTab.forEach(element => {
    //         element.classList.remove('active');
    //         })
    //         contentTab[0].classList.add('active')
    //         }
    //     })
    //     buttonTab[1].addEventListener('click', () => {
    //         if(!contentTab[1].classList.contains('active')) {
    //             contentTab.forEach(element => {
    //             element.classList.remove('active');
    //             })
    //             contentTab[1].classList.add('active')
    //             }
    //         })
    //         buttonTab[2].addEventListener('click', () => {
    //             if(!contentTab[2].classList.contains('active')) {
    //                 contentTab.forEach(element => {
    //                 element.classList.remove('active');
    //                 })
    //                 contentTab[2].classList.add('active')
    //                 }
    //             })
    //             buttonTab[3].addEventListener('click', () => {
    //                 if(!contentTab[3].classList.contains('active')) {
    //                     contentTab.forEach(element => {
    //                     element.classList.remove('active');
    //                     })
    //                     contentTab[3].classList.add('active')
    //                     }
    //                 })
    //                 buttonTab[4].addEventListener('click', () => {
    //                     if(!contentTab[4].classList.contains('active')) {
    //                         contentTab.forEach(element => {
    //                         element.classList.remove('active');
    //                         })
    //                         contentTab[4].classList.add('active')
    //                         }
    //                     })
    //                     buttonTab[5].addEventListener('click', () => {
    //                         if(!contentTab[5].classList.contains('active')) {
    //                             contentTab.forEach(element => {
    //                             element.classList.remove('active');
    //                             })
    //                             contentTab[5].classList.add('active')
    //                             }
    //                         })
    //                         buttonTab[6].addEventListener('click', () => {
    //                             if(!contentTab[6].classList.contains('active')) {
    //                                 contentTab.forEach(element => {
    //                                 element.classList.remove('active');
    //                                 })
    //                                 contentTab[6].classList.add('active')
    //                                 }
    //                             })
}
