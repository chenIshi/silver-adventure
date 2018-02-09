
var edu_btn_times = 0

var edu_time_section_num = 3


$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },

  })
  edu_btn_times = 0

});




var kang_content = $("<b>Hello world 0!</b>")
var cheng_content = $("<b>Hello world 1!</b>")
var future_content = $("<b>Hello world 2!</b>")
var string3 = $("<b>Hello world 3!</b>")
var default_content = $("<b>Hello world d!</b>")



function switch_time_section(){

    $("#senior_high, #college, #future, #tag3, #default").remove();
    switch(edu_btn_times%edu_time_section_num){
        case 0:
          $(".edu-exp").append(kang_content);
          kang_content.attr('id', 'senior_high');
          break;
        case 1:
          $(".edu-exp").append(cheng_content);
          cheng_content.attr('id', 'college');
          break;
        case 2:
          $(".edu-exp").append(future_content);
          future_content.attr('id', 'future');
          break;
        case 3:
          $("#edu-exp").append(string3);
          string3.attr('id', 'tag3');
          break;
        default:
          $("#edu-exp").append(default_content);
          default_content.attr('id', 'default');
          break;
    }
    edu_btn_times ++;
}


