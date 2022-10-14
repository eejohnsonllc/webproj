import {
  projects
} from '/projects_project_page.js'
$(document).ready(function () {

  var removeActive = () => {
    $('li').each(function () {
      $(this).removeClass('is-active');
    });
  }

  $('li').on('click', (e) => {
    var tabName = (e.currentTarget.id);
    removeActive();
    console.log(tabName)
    $('#' + tabName).addClass('is-active');
    $('#' + tabName + '-content').removeClass('hidden');
    check_active()
  });


  let check_active = function () {
    let $selected_tab = $('li.is-active')[0].id
    console.log($selected_tab)

    if ($selected_tab == 'all-tab') {
      $columns.empty()
      projects.map(function (pro) {
        let $temp_card = $(`<div class="column is-4">
                <div class="card is-shady">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="${pro.projectimg}" alt="Placeholder image" class="modal-button" data-target="modal-image2">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="card-inner-content">
                      <h4>${pro.projectname}</h4>
                      <p>${pro.projctdescription}</p>
                      <button class="button is-link is-light"><a href="${pro.link}">See More</a></button>
                    </div>
                  </div>
                </div>
              </div>`)

        // console.log(pro)
        if ('tool_link' in pro){
                  console.log(pro)
                  let $additional_button=$(`<button class="button is-info is-light"><a href="${pro.tool_link}">Use This Tool</a></button>`)
                  $temp_card.find('.card-inner-content').append($additional_button)
                }

            $temp_card.appendTo($columns).fadeIn(300)
      })
    } else {

      let $filtered_cards = projects.filter(proj => proj.tab.includes($selected_tab));

      console.log($filtered_cards)
      // $columns.fadeOut()
      $columns.empty()
      // $columns.findAll('.column').map(column => column.fadeOut())
      $filtered_cards.map(function (pro) {
        let $temp_card = $(`<div class="column is-4">
            <div class="card is-shady">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="${pro.projectimg}" alt="Placeholder image" class="modal-button" data-target="modal-image2">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>${pro.projectname}</h4>
                  <p>${pro.projctdescription}</p>
                  <button class="button is-link is-light"><a href="${pro.link}">See More</a></button>
                </div>
              </div>
            </div>
          </div>`)
        // console.log(pro)
        if ('tool_link' in pro){
            console.log(pro)
            let $additional_button=$(`<button class="button is-info is-light"><a href="${pro.tool_link}">Use This Tool</a></button>`)
            $temp_card.find('.card-inner-content').append($additional_button)
          }
        $temp_card.appendTo($columns).fadeIn(300)
        // $columns.fadeIn()
      })
    }
  }

  let $columns = $('#cards-columns')


  check_active()





})