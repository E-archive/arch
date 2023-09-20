/*
*/
let links = document.querySelectorAll('.menu .filier a '),
    main = document.querySelector('.main')
let Liste = {
    'IG' : {
                'S1' : 'Link1',
                'S2' : 'Links2',
                'S3' : 'Links2',
            },
    'RT' : {
                'S1' : 'https://drive.google.com/drive/folders/1iW_KEQNFlSCLFdgf4jSIKr2aLNGyD4Zw?usp=sharing',
                'S2' : 'https://drive.google.com/drive/folders/1iW_KEQNFlSCLFdgf4jSIKr2aLNGyD4Zw?usp=sharing',
                'S3' : 'https://drive.google.com/drive/folders/1ru5SAwAfgLjZgbrFfJ9bCmgvGmj6Ee27?usp=sharing',
                'S4' : 'https://drive.google.com/drive/folders/1pRPwZ_h8_DS4yeFFZ5dnJ6uwoErMo0rG?usp=sharing',
            },
    'DI' : {
                'S1' : 'Link1',
                'S2' : 'Links2',
                'S3' : 'Links2',
            }
}

links.forEach(link=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        if(Liste[link.attributes.href.value] && !link.classList.contains('active')){
            main.innerHTML    ='';
            for (let i = 0; i<6; i++) {
                let Semestre = 'S'+(i+1);
                let linkSemestre = Liste[link.attributes.href.value];
            let Html = `<div class="box f-center f-wrap">
                                <h3><a href="${linkSemestre[Semestre]}" target="_blank">S${i+1}</a></h3>
                        </div>`
            main.innerHTML+=Html
            }
        }
        links.forEach(l => { l.classList.remove('active'); });
        link.classList.add('active');
        
    })
})