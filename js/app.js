
var edu_btn_times = 0

var edu_time_section_num = 3


$(document).ready(function () {

  window.scrollTo(0,1);

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },

  })
  
  edu_btn_times = 0

});



var kang_title = $("<h2>Kang Ming Senior High</h2>")
var cheng_title = $("<h2>National Cheng Kung University</h2>")
var future_title = $("<h2>Future......</h2>")
var third_title = $("<h2>Kang Ming Senior High</h2>")
var default_title = $("<h2>Page Not Constructed !!</h2>")
var kang_content = $("<p>Hello world 0!</p>")
var cheng_content = $("<p>Hello world 1!</p>")
var future_content = $("<p>Hello world 2!</p>")
var string3 = $("<p>Hello world 3!</p>")
var default_content = $("<p>Hello world d!</p>")



function switch_time_section(){

  edu_btn_times ++;

    $("#senior_high_content, #college_content, #future_content, #tag3, #default_content").remove();
    $("#senior_high_title, #college_title, #future_title, #tag3, #default_title").remove();
    switch(edu_btn_times%edu_time_section_num){
        case 0:
        //exp-title change
          $(".edu-title").append(kang_title);
          kang_title.attr('id','senior_high_title');
        //exp-content change
          $(".edu-exp").append(kang_content);
          kang_content.attr('id', 'senior_high_content');
          break;
        case 1:
          $(".edu-title").append(cheng_title);
          cheng_title.attr('id','college_title');        
          $(".edu-exp").append(cheng_content);
          cheng_content.attr('id', 'college_content');
          break;
        case 2:
          $(".edu-title").append(future_title);
          future_title.attr('id','future_title');
          $(".edu-exp").append(future_content);
          future_content.attr('id', 'future_content');
          break;
        case 3:
          $("#edu-exp").append(string3);
          string3.attr('id', 'tag3');
          break;
        default:
          $(".edu-title").append(default_title);
          default_title.attr('id','default_title');
          $("#edu-exp").append(default_content);
          default_content.attr('id', 'default_content');
          break;
    }
}

function wordpress_link(){
    window.open('https://chenishi.wordpress.com/','Chen\'s Silver Adventure',config="toolbar=no, location=no, menubar=no, status=no")
}

function github_link(){
    window.open('https://github.com/chenIshi','Chen, YI-XI',config="toolbar=no, location=no, menubar=no, status=no")
}