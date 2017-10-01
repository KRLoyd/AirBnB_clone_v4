$(function () {
  // Serve API content for places_search
  let myDict = {};
  $.ajax({
  type: "POST",
  url:"http://0.0.0.0:5001/api/v1/places_search/",
  data: JSON.stringify(myDict),
  success: function (result) {
    console.log(result);
  },
  dataType: 'json',
  contentType: 'application/json',
});

  // Serve API content for api_status
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    console.log(data);
    console.log(data['status']);
    if (data['status'] === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

  // checkbox and display amenities
  let dict = {};
  $('input').change(function () {
    if (this.checked) {
      dict[($(this).attr('data-id'))] = $(this).attr('data-name');
    } else {
      delete dict[$(this).attr('data-id')];
    }
    let arr = '';
    let separator = '';
    for (let i in dict) {
      console.log(i);
      arr += separator;
      arr += dict[i];
      separator = ', ';
    }
    $('div.amenities h4').text(arr);
  });
});
