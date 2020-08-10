
var bio = {
  "name": "Glen Ou",
"role": "Web Developer",
"contacts":
{
"mobile": "18513763652",
"email": "2738328919@qq.com",
"github": "https://github.com/Glenou",
"location": "Washington, D.C."
},
"skills": [
"HTML", "CSS", "JavaScript", "jQuery", "Git", "Gulp", "Bootstrap"
],
"welcomeMessage": "This is it!",
"biopic": "images/fry.jpg"
};

var education = {
"schools": [
{
"name": "XDF",
"location": "Beijing,China",
"degree": "English Spoken Leval 4",
"majors": ["English Spoken"],
"dates": '2017',
"url": "https://www.gwu.edu"
},
{
"name": "Beijing Waishi schools",
"location": "Beijing, China",
"degree": "BA",
"majors": ["Coffee Advance"],
"dates": '2016',
"url": "http://www.yit.edu.cn/"
}
],
"onlineCourses": [
{
"title": "Front End Web Developer",
"school": "Udacity",
"dates": '2017',
"url": "http://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-basic"
}
]
};

var work = {
"jobs": [
{
"employer": "Yiyun Technology Service and Consulting / IT Consulting / China (Remote)",
"title": "Web Development Intern",
"dates": "April 2016 - July 2016",
"description": "Develop web pages using HTML5 technologies",
"location": "shandong"

},
{
"employer": "DC Bilingual Public Charter School",
"title": "Volunteer",
"dates": "April 2017",
"description": "Leading Chinese Culture Club among students who are interested in Chinese culture",
"location": "hebei"

}]
};

var projects = {
"projects": [
{
"title": "Alipay",
"dates": "December 2016",
"description": "Interface design of application that takes a college graduate student's income and payout data to help the user identify their spending patterns, monitor the rate at which they are spending their income and encourage them to save.",
"images": [
"images/fry.jpg", "images/197x148.gif"
]
},
{
"title": "Electronic resume",
"dates": "July 2017",
"description": "Using HTML, CSS, JavaScript, Json and jQuery to build an electronic resume.",
"images": [
"images/fry.jpg", "images/197x148.gif"
]
}
]
};
bio.display = function(){
if(bio){
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio. welcomeMessage);
$("#header").append(formattedName,formattedRole,formattedBioPic,formattedMessage);
};
if(bio.contacts){
  var fortmattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile)
  var fortmattedEmail = HTMLemail.replace("%data%",bio.contacts.email)
  var fortmattedGithub = HTMLgithub.replace("%data%",bio.contacts.github)
  var fortmattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter)
  $("#topContacts").append(fortmattedMobile,fortmattedEmail,fortmattedGithub,fortmattedTwitter);
  $("#footerContacts").append(fortmattedMobile,fortmattedEmail,fortmattedGithub,fortmattedTwitter);

}
if(bio.skills){
$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills);
$("#skills").append(formattedSkill);
}
}
bio.display();


work.display = function(){
for (var i = 0; i < work.jobs.length; i++){
$("#workExperience").append(HTMLworkStart);

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;

var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
$(".work-entry:last").append(formattedEmployerTitle,formattedLocation,formattedDates,formattedDescription);
}
}
work.display();

projects.display = function(){
for (var i = 0; i < projects.projects.length; i++){
$("#projects").append(HTMLprojectStart);
var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
projects.projects[i].images.forEach(function(imgUrl){
    $(".project-entry:last").append(HTMLprojectImage.replace("%data%",imgUrl))
})
$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription,);
}
}
projects.display();
education.display = function(){
for (var i = 0; i < education.schools.length; i++){
				$("#education").append(HTMLschoolStart);
				//学校和学位名称
        var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
				var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
				var formattedNameDegree = formattedName + formattedDegree;
				//日期
				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
				//专业
				var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
				//地点
				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

				//插入网页
				$(".education-entry:last").append(formattedNameDegree,formattedDates,formattedMajors,formattedLocation);
			}

      for (var i = 0; i < education.onlineCourses.length; i++){
$(".education-entry:last").append(HTMLonlineClasses)

				//专业和学校名称
				var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
				var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
				var formattedTitleSchool = formattedTitle + formattedSchool;
				//日期
				var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				//网址
				var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

				//插入网页
				$(".education-entry:last").append(formattedTitleSchool,formattedDates,formattedUrl);
			}
    }
    education.display();
      // 检测点击坐标
      	$(document).click(function(loc) {
      		var x = loc.pageX;
      		var y = loc.pageY;

      		logClicks(x,y);
      	});


      	//国际化名称按钮
      	$("#main").append(internationalizeButton);

      	//添加高德地图到 mapDiv 上，使得简历拥有地图
      	$("#mapDiv").append(googleMap);
