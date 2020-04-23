import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import "./back-to-top.scss"

const BackToTop = () => {
  var offset = 250;
  var duration = 300;


  return (
    <a href="#" className="back-to-top btn" tooltip="Back to top">
      <KeyboardArrowUpIcon />
    </a>
  );
}

export default BackToTop;

function initBackToTop() {


  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(duration);
    } else {
      $('.back-to-top').fadeOut(duration);
    }
  });

  $('.back-to-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  });
}