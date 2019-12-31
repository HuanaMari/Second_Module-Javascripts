function main() {
  let students = getPopulatedListOfStudents();
  console.log(students);

  var body = $('body');
  var mainDiv = $('<div>').attr('class', 'mainDiv');
  var yearButton = $('<div>').attr('class', 'yearButton');
  for (var i = 0; i < 4; i++) {
    yearButton.append($('<button/>').attr('class', 'year-' + [i + 1]).text('Year' + [i + 1]));
  }
  $(yearButton).on('click', (event) => {
    var yearClass = $(event.target).attr('class');
    var splitYearClass = yearClass.split('-')
    var classYear = parseInt(splitYearClass[1]);
    $('body').html(' ');
    for (var i = 0; i < students.length; i++) {
      if (classYear === students[i].currentStudyYear) {
        var classDiv = $('<div>').attr('class', 'ClassDiv-' + i);
        var classSId = $('<div>').attr('class', 'info-' + i).text('Index : ' + students[i].index);
        var classSName = $('<div>').attr('class', 'info-' + i).text('First name : ' + students[i].firstName);
        var classSLastname = $('<div>').attr('class', 'info-' + i).text('LastName : ' + students[i].lastName);
        var classSYear = $('<div>').attr('class', 'info-' + i).text('Study year : ' + students[i].currentStudyYear);
        $(classDiv).append(classSId)
        $(classDiv).append(classSName)
        $(classDiv).append(classSLastname)
        $(classDiv).append(classSYear)
        $(body).append(classDiv)
        $('<br>');
        $(body).append($('<br>'));
      }
    }
  });
  $(body).append(yearButton)
  for (var i = 0; i < students.length; i++) {
    var rootDiv = $('<div>').attr('class', 'rootDiv-' + i);
    var studentId = $('<span>').attr('class', 'info-' + i).text(students[i].index + ' - ');
    var studentName = $('<span>').attr('class', 'info-' + i).text(students[i].firstName + ' - ');
    var studentLastname = $('<span>').attr('class', 'info-' + i).text(students[i].lastName);
    $(rootDiv).append(studentId)
    $(rootDiv).append(studentName)
    $(rootDiv).append(studentLastname)
    $(mainDiv).append(rootDiv)
  }
  $(body).append(mainDiv)
  
  $('span').on('click', (event) => {
    $('body').html(' ');
    var index = $(event.target).attr('class');
    var splitIndex = index.split('-');
    var clicked = splitIndex[1]
    var clickedStudent = $('<div>').attr('class', 'clickedStudent');
    var clickedId = $('<div>').attr('class', 'info').text('Index : ' + students[clicked].index)
    var clickedName = $('<div>').attr('class', 'info').text('First name : ' + students[clicked].firstName)
    var clickedSurName = $('<div>').attr('class', 'info').text('LastName : ' + students[clicked].lastName)
    var clickedGrades = $('<div>').attr('class', 'info').text('Students grades :')
    var clickedYear = $('<div>').attr('class', 'info').text('Study year : ' + students[clicked].currentStudyYear)
    $(clickedGrades).one('click', () => {
      for (index = 0; index < students[clicked].grades.length; index++) {
        var gradesToShow = $('<li>').attr('class', 'info').text(students[clicked].grades[index])
        clickedGrades.append(gradesToShow)
      }
    })
    var clickedStudentGrades = 0
    for (index = 0; index < students[clicked].grades.length; index++) {
      clickedStudentGrades = clickedStudentGrades + students[clicked].grades[index];
    }
    var averageGrades = clickedStudentGrades / students[clicked].grades.length;
    var avgG = $('<div>').attr('class', 'info').text('Average grade : ' + Math.floor(averageGrades));
    $(clickedStudent).append(clickedId)
    $(clickedStudent).append(clickedName)
    $(clickedStudent).append(clickedSurName)
    $(clickedStudent).append(clickedGrades)
    $(clickedStudent).append(clickedYear)
    $(clickedStudent).append(avgG)
    $(body).append(clickedStudent)
  });
  var inputSearch = $('<input type=text>').attr('class', 'inputSearch');
  var btnSearch = $('<button>').attr('class', 'inputSearch').text('Search');
  $('<br>');
  $(body).append($('<br>'));
  $(body).prepend(btnSearch)
  $(body).prepend(inputSearch)
  $(btnSearch).on('click', () => {
    var indexToSearch = parseInt($('input').val());
    for (var i = 0; i < students.length; i++) {
      if (students[i].index === indexToSearch) {
        $('.mainDiv').html('');
        var sStudent = $('<div>').attr('class', 'thatStudent-' + i);
        var searchedId = $('<div>').attr('class', 'info-' + i).text('Index No : ' + students[i].index);
        var searchedName = $('<div>').attr('class', 'info-' + i).text('First Name : ' + students[i].firstName);
        var searchedLastname = $('<div>').attr('class', 'info-' + i).text('Last Name : ' + students[i].lastName);
        var searchedGrades = $('<div>').attr('class', 'info').text('Students grades : ↓')
        var searhedYear = $('<div>').attr('class', 'info').text('Study year : ' + students[i].currentStudyYear)
        $(searchedGrades).one('click', () => {
          for (var i = 0; i < students[i].grades.length; i++) {
            var gradesOfSearched = $('<li>').attr('class', 'gradesOfSearched').text(students[i].grades[i])
            searchedGrades.append(gradesOfSearched)
          }
        });
        var searchedStudentGrades = 0
        for (var index = 0; index < students[i].grades.length; index++) {
          searchedStudentGrades = searchedStudentGrades + students[i].grades[index];
        }
        var searchedAverageGrades = searchedStudentGrades / students[i].grades.length;
        var SAvgG = $('<div>').attr('class', 'info').text('Average grade : ' + Math.floor(searchedAverageGrades));
        $(sStudent).append(searchedId)
        $(sStudent).append(searchedName)
        $(sStudent).append(searchedLastname)
        $(sStudent).append(searhedYear)
        $(sStudent).append(searchedGrades)
        $(sStudent).append(SAvgG)
        $(body).append(sStudent)
      }
    }
  });
}
main();