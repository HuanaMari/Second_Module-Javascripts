function main() {
  // Your solution starts here...
  console.log("Marija Kuzmanoska");

  var body = $('body');
  var master = $('<div>').attr('class', 'master');
  var firstName = $('<div>').attr('class', 'firstName').text('First Name');
  var nameInput = $('<input type=text>').attr('class', 'nameInput');
  var lastName = $('<div>').attr('class', 'lastName').text('Last Name');
  var lastNInput = $('<input type=text>').attr('class', 'lastNInput');
  var mobile = $('<div>').attr('class', 'mobile').text('Mobile Number');
  var mobileInput = $('<input type=text>').attr('class', 'mobileInput');
  var index = $('<div>').attr('class', 'index').text('Index');
  var indexInput = $('<input type=text>').attr('class', 'indexInput');
  var brake = $('<br/>')
  var submit = $('<button/>').attr('class', 'submit').text('Submit');
  var reset = $('<button/>').attr('class', 'reset').text('Reset');

  master.append(firstName)
  master.append(nameInput)
  master.append(lastName)
  master.append(lastNInput)
  master.append(mobile)
  master.append(mobileInput)
  master.append(index)
  master.append(indexInput)
  master.append(brake);
  master.append(submit)
  master.append(reset)
  body.append(master);


  var results = $('<div>').attr('class', 'results');
  $('.submit').on('click', () => {
    var name = $('<div>').attr('class', 'name').text($('.nameInput').val());
    var lastName = $('<div>').attr('class', 'name').text($('.lastNInput').val());
    var mobile = $('<div>').attr('class', 'name').text($('.mobileInput').val());
    var index = $('<div>').attr('class', 'name').text($('.indexInput').val());

    $('input').val(' ')
    results.append(name)
    results.append(lastName)
    results.append(mobile)
    results.append(index)
    body.append(results);

  })

  $('.reset').on('click', () => {
    $('input').val(' ');
    $('.results').html(' ')
  })



}

main();
