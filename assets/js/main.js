//Function show list
const displayListMovies = function (list = 'showing') {
    let elmtComingSoon = document.getElementById('movies__list__comingsoon');
    let elmtShowing = document.getElementById('movies__list__showing');
    if(list ==='comingsoon'){
        elmtComingSoon.style.display = 'block';
        document.getElementById('h2-commingsoon').style.color = '#fa5238';
        document.getElementById('h2-showing').style.color = '#000000';
        elmtShowing.style.display = 'none'
    } else {
        elmtComingSoon.style.display = 'none';
        elmtShowing.style.display = 'block'
        document.getElementById('h2-showing').style.color = '#fa5238';
        document.getElementById('h2-commingsoon').style.color = '#000000';
    }
}
//Function show or hidden list theater and show time
const displayShowtime = function (theater, name) {
    let elmShowtime = document.getElementById(`theaters-content-showtime-${theater}-${name}`);
    let elmItemTheaterID = document.getElementById(`theaters-content-${theater}-${name}`);
    let elmItemTheaterClass = document.querySelectorAll('.theaters__content__detail > div')
    let elmClass = document.querySelectorAll('.theaters__content__showtime__item');

   for (let i = 0; i < elmClass.length ; i++) {
        let item = elmClass[i].id;
       elmClass[i].style.display = 'none' ;

        if( item === elmShowtime.id) {
            elmShowtime.style.display = 'block';
        }
    }
    for (let j = 0; j < elmItemTheaterClass.length; j++) {
        elmItemTheaterClass[j].style.opacity = '0.5';
        if (elmItemTheaterClass[j].id === elmItemTheaterID.id) {
            elmItemTheaterClass[j].style.opacity = '1';
        }
    }
}
const displayTheater = function (theater) {
    let elmTheaterContent = document.getElementById(`theaters-content-${theater}`)
    let img = document.querySelectorAll('.theaters__list img');
    for (let i = 0; i < img.length ; i++) {
        img[i].style.opacity = '0.5';
        if(img[i].id === theater) {
            img[i].style.opacity = '1';

        }
    }
    let elmTheater = document.querySelectorAll('.theaters__content');
    for (let i = 0; i < elmTheater.length ; i++) {
        elmTheater[i].style.display = 'none';
        if (elmTheater[i].id === elmTheaterContent.id) {
            elmTheater[i].style.display = 'block';
            document.getElementById(`theaters-content-showtime-${theater}-1`).style.display = 'block'
        }
    }


}

//Function Display tab blog
const displayTabBlog = function (type) {
    var listTabItem = document.querySelectorAll('.blog__content > div');
    var h3 = document.querySelectorAll('.blog__list > h3');
    var tabItem = document.getElementById(`blog__content__${type}`);
    for (let i = 0; i < listTabItem.length; i++) {
        listTabItem[i].style.display = 'none';
        h3[i].style.removeProperty('transform');
        h3[i].style.removeProperty('color');
        if(listTabItem[i].id === tabItem.id){
            listTabItem[i].style.display = 'block';
            document.getElementById(`h3-${type}`).style.color = '#fa5238'
            document.getElementById(`h3-${type}`).style.transform = 'scale(1.2, 1.2)'
        }
    }
}