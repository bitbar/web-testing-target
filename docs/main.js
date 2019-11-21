(function () {

  var submit_button = document.getElementById('submit_button');
  var result_element = document.getElementById('result_element');

  function submit_handler () {
    result_element.innerText = 'Bitbar';
    submit_button.innerText = 'Answered!';
    submit_button.style = 'background-color: rgb(127, 255, 0);';
  }

  submit_button.addEventListener('click', submit_handler);

})();
