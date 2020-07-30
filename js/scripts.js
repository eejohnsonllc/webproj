import { projects } from '/projects.js'
$(document).ready(function () {





  $('#slideshow').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

    // adding grid of cards
    let $grid = $("#grid")

    projects.map(function(pro) {

      let $card = $(`<div class="column is-one-third-desktop is-full-mobile aos-init aos-animate">
      <div class="card-image">
        <figure class="image is-4by3">
          <a href=${pro.link} target="_blank"><img src="${pro.projectimg}" alt=""></a>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">${pro.projectname}</p>
          </div>
        </div>
    
        <div class="content">
        ${pro.projctdescription} 
          
        </div>

        </div>
        <div class="tags"></div>
        </div>
      </div>
    </div>`)

    let $tags = $card.find('.tags')
        pro.projectkeywords.map(function(word) {
            let $tag = $('<span class="tag"></span>').html(word)
            $tags.append($tag)
        })

  
  
  
    $grid.append($card)
  })


    // let numOfRows = 2
    // let numOfCols = 3
    // for (let i = 0; i < numOfRows; i++) {
    //     // let $row = $(`<div class="columns is-variable is-3">`)
    //     for (let j = 0; j < numOfCols; j++) {
    //         let $card = $(`<div class="column is-one-third-desktop is-full-mobile aos-init aos-animate">
    //     <div class="card-image">
    //       <figure class="image is-4by3">
    //         <img src="./pictures/pro1.gif" alt="Placeholder image">
    //       </figure>
    //     </div>
    //     <div class="card-content">
    //       <div class="media">
    //         <div class="media-content">
    //           <p class="title is-4">John Smith</p>
    //           <p class="subtitle is-6">@johnsmith</p>
    //         </div>
    //       </div>
      
    //       <div class="content">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //         Phasellus nec iaculis mauris. <a>@bulmaio</a>.
    //         <a href="#">#css</a> <a href="#">#responsive</a>
    //         <br>
    //         <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    //       </div>
    //     </div>
    //   </div>`)

    //         $grid.append($card)


    //     }
    //     // $grid.append($row)




    // }




})