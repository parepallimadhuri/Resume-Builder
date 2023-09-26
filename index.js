$('document').ready(function(){
    $('#profile').click();
})

$('#profile').click(function () {

    $('#education').css("color", 'black');
    $('#profile').css("color", "red");
    $('#work').css("color", 'black');
    $('#skill').css("color", 'black');
    $('#project').css("color", 'black');
    $('#award').css("color", 'black');
    $('#personal-info').show();
    $('#education-info').hide();
    $('#work-info').hide();
    $('#skill-info').hide();
    $('#project-info').hide();
    $('#award-info').hide();
})

$('#education').click(function () {
    $('#education').css("color", 'red');
    $('#profile').css("color", "black");
    $('#work').css("color", 'black');
    $('#skill').css("color", 'black');
    $('#project').css("color", 'black');
    $('#award').css("color", 'black');
    $('#personal-info').hide();
    $('#education-info').show();
    $('#work-info').hide();
    $('#skill-info').hide();
    $('#project-info').hide();
    $('#award-info').hide();
})

$('#work').click(function () {
    $('#education').css("color", 'black');
    $('#profile').css("color", "black");
    $('#work').css("color", 'red');
    $('#skill').css("color", 'black');
    $('#project').css("color", 'black');
    $('#award').css("color", 'black');
    $('#work-info').show();
    $('#education-info').hide();
    $('#personal-info').hide();
    $('#skill-info').hide();
    $('#project-info').hide();
    $('#award-info').hide();
})

$('#skill').click(function () {
    $('#education').css("color", 'black');
    $('#profile').css("color", "black");
    $('#work').css("color", 'black');
    $('#skill').css("color", 'red');
    $('#project').css("color", 'black');
    $('#award').css("color", 'black');
    $('#skill-info').show();
    $('#education-info').hide();
    $('#personal-info').hide();
    $('#work-info').hide();
    $('#project-info').hide();
    $('#award-info').hide();

})

$('#project').click(function () {
    $('#education').css("color", 'black');
    $('#profile').css("color", "black");
    $('#work').css("color", 'black');
    $('#skill').css("color", 'black');
    $('#project').css("color", 'red');
    $('#award').css("color", 'black');
    $('#project-info').show();
    $('#education-info').hide();
    $('#personal-info').hide();
    $('#work-info').hide();
    $('#skill-info').hide();
    $('#award-info').hide();
})

$('#award').click(function () {
    $('#education').css("color", 'black');
    $('#profile').css("color", "black");
    $('#work').css("color", 'black');
    $('#skill').css("color", 'black');
    $('#project').css("color", 'black');
    $('#award').css("color", 'red');
    $('#award-info').show();
    $('#education-info').hide();
    $('#personal-info').hide();
    $('#work-info').hide();
    $('#project-info').hide();
    $('#skill-info').hide();

})

//user-profile
$('#user-name').change(function(){
   var name = $('#user-name').val();
    $('#resume-username').text(name);
})

$('#user-email').change(function(){
    var email = $('#user-email').val();
     $('#resume-user-email').text(email);
})

$('#user-phone').change(function(){
    var email = $('#user-phone').val();
     $('#resume-user-phone').text(email);
})

$('#user-location').change(function(){
    var loc = $('#user-location').val();
     $('#resume-user-location').text(loc);
})

$('#user-link').change(function(){
    var link = $('#user-link').val();
     $('#resume-user-link').text(link);
})

$('#skill-heading').change(function(){
    var title = $('#skill-heading').val();
     $('#resume-skill-heading').text(title);
     $('#resume-skill-heading').css('font-weight', 'bold');
})

//work-section
$('#company-name').change(function(){
    var name = $('#company-name').val();
     $('#resume-company-name').text(name);
 })

 $('#job-title').change(function(){
    var name = $('#job-title').val();
     $('#job-name').text(name);
 })

 $('#job-description').change(function(){
    var name = $('#job-description').val();
     $('#resume-job-des').text(name);
 })

 $('#start-date').change(function(){
    var name = $('#start-date').val();
     $('#resume-start-date').text(name);
 })

 $('#end-date').change(function(){
    var name = $('#end-date').val();
     $('#resume-end-date').text(name);
 })



function add_school(){
   $('#first_edu_content .edu_container').clone()
   .find('input').val('').end()
   .appendTo('#more_school');
}
function rm_school(){
    $('#more_school .edu_container').last().remove();
}


function add_job(){
    $('#first_work_content .work_container').clone()
    .find('input').val('').end()
    .appendTo('#more_work');
 }
 function rm_job(){
     $('#more_work .work_container').last().remove();
 }


 function add_skill(){
    $('#first_skill_content .skill_container').clone()
    .find('input').val('').end()
    .appendTo('#more_skill');
 }
 function rm_skill(){
     $('#more_skill .skill_container').last().remove();
 }


 function add_project(){
    $('#first_project_content .project_container').clone()
    .find('input').val('').end()
    .appendTo('#more_project');
 }
 function rm_project(){
     $('#more_project .project_container').last().remove();
 }

 function add_award(){
    $('#first_award_content .award_container').clone()
    .find('input').val('').end()
    .appendTo('#more_award');
 }
 function rm_award(){
     $('#more_award .award_container').last().remove();
 }
 function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
});
 document.getElementById("download").addEventListener("click",()=>{
     const resume = this.document.getElementById("resume");
     console.log(window);
     var opt = {
        margin:       0,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
     html2pdf().from(resume).set(opt).save();
 })