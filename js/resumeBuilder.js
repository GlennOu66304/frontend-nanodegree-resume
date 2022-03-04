var bio = {
  name: "Glenn Ou",
  role: "Full Stack Developer",
  welcomeMessage:
    "I'm currently working as a Full Stack Developer in the Beijing China. I love solving problems and providing solutions that save people time and money and help their day to day lives. Thanks for stopping by!",
  biopic: "images/Logo.png",

  contacts: {
    // "mobile": "+1 7607336789",
    email: "glenou@yahoo.com",
    github: "@GlennOu66304",
    twitter: "@Glenn53152781",
    location: "Beijing China",
  },
  skills: [
    "HTML CSS",
    "Git Gulp Bootstrap",
    "Javascript jQuery",
    "Vue React ",
    "Node.js Mongodb",
    "Web development",
    "Data analysis",
  ],
};

var work = {
  jobs: [
    {
      employer: "Web3 Research Lab",
      title: "Founder",
      dates: "April 2017 - Present ",
      description:
        "I built this small Web3 Research Lab to do the  research about Web3 Project 5 years ago as a side project, this lab also focus the Website build, SEO, etc.",
      location: "Chaoyang  District, Beijing, China",
    },
    {
      employer: "DiDi Global",
      title: "Customer Support Specialist",
      dates: "Aug 2018 - May 2019",
      description:
        "Onboarded and supported Di Di rideshare English speaking customers in Mainland China educating customers with applications functions and features via chat, email and telephony unified communications;Liaison between English speaking Di Di customers and Chinese Di Di Drivers to interpret for all customer conflict resolution and coordination;Main point of contact for all emergency services with Di Di English speaking customers;Spearheaded all Di Di Customer escalations in both English and Mandarin working with customer safety personnel and operation managers for quick response and resolutions;Also, supported Australian and New Zealander driver bases with localized communication with local Chinese Di Di customers",
      location: "Haidian District, Beijing, China",
    },
  ],
};

var projects = {
  projects: [
    {
      title: "HTML5 Canvas Game",
      dates: "December 2016 - December 2017 ",
      description:
        "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer Nanodegree.",
      images: ["images/Game.png"],
    },
    {
      title: "Digital Resume",
      dates: "July 2017 - August 2017",
      description:
        "Using HTML, CSS, JavaScript jQuery to build an digital resume.",
      images: ["images/Resume.png"],
    },
  ],
};

var education = {
  schools: [
    {
      name: "Guangdong Open University",
      location: "Guangdong,China",
      degree: "Associates",
      majors: ["e-Commerce Business,"],
      dates: "July 2018 - January 2021",
      url: "https://www.gwu.edu",
    },
  ],
};

var Courses = {
  onlineCourses: [
    {
      title: "Front End Developer",
      school: "Udacity",
      dates: "July 2017 - August 2018",
      url: "https://www.linkedin.com/school/udacity/",
    },

    {
      title: "Python Data Sciences",
      school: "DataCamp",
      dates: "July 2019 - August 2020",
      url: "https://www.linkedin.com/school/datacamp/",
    },
    {
      title: "Data Sciences",
      school: "ViaX Online Education",
      dates: "July 2019 - August 2020",
      url: "https://www.linkedin.com/company/viaxacademics/",
    },
  
  ],
};

//bio part

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

//name,role,welcomemessage,biopic insert
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedBioPic);
$("#header").append(formattedMessage);

//contact infomation replace

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(
  HTMLlocation.replace("%data%", bio.contacts.location)
);

// top and foot contacts
for (i in formattedContactInfo) {
  $("#topContacts").append(formattedContactInfo[i]);
  $("#footerContacts").append(formattedContactInfo[i]);
}

// skill part
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  for (i in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  }
}

work.display = function () {
  for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace(
      "%data%",
      work.jobs[i].employer
    );
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    var formattedLocation = HTMLworkLocation.replace(
      "%data%",
      work.jobs[i].location
    );
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    var formattedDescription = HTMLworkDescription.replace(
      "%data%",
      work.jobs[i].description
    );
    $(".work-entry:last").append(
      formattedEmployerTitle,
      formattedLocation,
      formattedDates,
      formattedDescription
    );
  }
};
work.display();

projects.display = function () {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace(
      "%data%",
      projects.projects[i].title
    );
    var formattedDates = HTMLprojectDates.replace(
      "%data%",
      projects.projects[i].dates
    );
    var formattedDescription = HTMLprojectDescription.replace(
      "%data%",
      projects.projects[i].description
    );

    $(".project-entry:last").append(
      formattedTitle,
      formattedDates,
      formattedDescription
    );

    projects.projects[i].images.forEach(function (imgUrl) {
      $(".project-entry:last").append(
        HTMLprojectImage.replace("%data%", imgUrl)
      );
    });
  }
};

projects.display();

//education part
education.display = function () {
  //university part
  $("#education").append(HTMLschoolStart);
  // console.log(HTMLschoolStart)
  for (var i = 0; i < education.schools.length; i++) {
    //学校和学位名称
    var formattedName = HTMLschoolName.replace(
      "%data%",
      education.schools[i].name
    );
    var formattedDegree = HTMLschoolDegree.replace(
      "%data%",
      education.schools[i].degree
    );
    var formattedNameDegree = formattedName + formattedDegree;
    //日期
    var formattedDates = HTMLschoolDates.replace(
      "%data%",
      education.schools[i].dates
    );
    //专业
    var formattedMajors = HTMLschoolMajor.replace(
      "%data%",
      education.schools[i].majors
    );
    //地点
    var formattedLocation = HTMLschoolLocation.replace(
      "%data%",
      education.schools[i].location
    );

    //插入学校和学位名称,日期,专业,地点
    $(".education-entry:last").append(
      formattedNameDegree,
      formattedDates,
      formattedMajors,
      formattedLocation
    );
  }
};
education.display();

//Online Course Part
//Course this name is from the var Courses
Courses.display = function () {
  $("#onlineClass").append(HTMLonlineCoursesStart);
  console.log(HTMLonlineCoursesStart);
  // online course part
  for (var i = 0; i < Courses.onlineCourses.length; i++) {
    //专业和学校名称
    var formattedTitle = HTMLonlineTitle.replace(
      "%data%",
      Courses.onlineCourses[i].title
    );
    var formattedSchool = HTMLonlineSchool.replace(
      "%data%",
      Courses.onlineCourses[i].school
    );
    var formattedTitleSchool = formattedTitle + formattedSchool;
    //日期
    var formattedDates = HTMLonlineDates.replace(
      "%data%",
      Courses.onlineCourses[i].dates
    );
    //网址
    var formattedUrl = HTMLonlineURL.replace(
      "%data%",
      Courses.onlineCourses[i].url
    );

    //插入学校和学位名称,日期,专业,地点
    $(".onlineCourse-entry:last").append(
      formattedTitleSchool,
      formattedDates,
      formattedUrl
    );
  }
};

Courses.display();

// 检测点击坐标
$(document).click(function (loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

//国际化名称按钮
$("#main").append(internationalizeButton);

//添加高德地图到 mapDiv 上，使得简历拥有地图
$("#mapDiv").append(googleMap);
