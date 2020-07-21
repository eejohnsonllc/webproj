$(document).ready(function () {

    // adding grid of cards
    $grid = $("#grid")
    let numOfRows = 2
    let numOfCols = 3
    for (let i = 0; i < numOfRows; i++) {
        // let $row = $(`<div class="columns is-variable is-3">`)
        for (let j = 0; j < numOfCols; j++) {
            let $card = $(`<div class="column is-one-third">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>
      
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>`)

            $grid.append($card)


        }
        // $grid.append($row)




    }




})