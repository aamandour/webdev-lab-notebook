$(document).ready(function () {
  const url = "https://anapioficeandfire.com/api/books/";
  const $app = $("#books"); // jQuery object
  const $loading = $("#loading");

  $app.css("paddingLeft", 0);

  function addBookToDOM(item) {
    let $element = $("<div>").css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px",
    });
    let $title = $("<h4>").text(item.name);
    let $author = $("<p>").text(`by ${item.authors[0]}`);
    let $published = $("<p>").text(item.released.substr(0, 4));
    let $pages = $("<p>").text(`${item.numberOfPages} pages`);

    $element.append($title, $author, $published, $pages);
    $app.append($element);
  }

  function fetchData(url) {
    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      success: function (data) {
        $.each(data, function (index, item) {
          addBookToDOM(item);
        });
      },
      error: function (error) {
        console.log(error);
        let $li = $("<li>").text("An error occurred. Please try again.");
        $app.append($li);
      },
      complete: function () {
        $loading.remove(); //  instead of  removeChild
      },
    });
  }

  fetchData(url);
});
