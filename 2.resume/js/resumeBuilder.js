// source of json data

var bio = {
  name: "Glene Ou",
  role: "FullStack Web Developer",
  contacts: {
    mobile: "+1 7607336789",
    email: "glennou2@gmail.com",
    github: "https://github.com/GlennOu66304",
    location: "Washington, D.C.",
    twitter: "@glennou66304",
  },
  skills: ["HTML", "CSS", "JavaScript", "jQuery", "Git", "Gulp", "Bootstrap"],
  welcomeMessage: "Thanks For Visiting My Profle",
  biopic: "images/profile-photo.jpg",
};

var education = {
  schools: [
    {
      name: "Guangdong Open University",
      location: "Guangzhou,China",
      degree: "College",
      majors: ["e-commerce"],
      dates: "December 2017 -- Janauary 2021",
      url: "http://www.gdrtvu.edu.cn/",
    },
  ],
  onlineCourses: [
    {
      title: "Front End Web Developer",
      school: "Udacity",
      dates: "December 2017 -- Janauary 2018",
      url: "https://www.udacity.com/",
    },
  ],
};

var work = {
  jobs: [
    {
      employer: "GlennTechLab",
      title: "Founder&CTO",
      dates: "April 2022 -- Now",
      description:
        "Managing the complete software development process from conception to deployment",

      location: "Beijing China",
    },
    {
      employer: "Upwork",
      title: "Freelance Web developer",
      dates: "April 2017 -- April 2022",
      description:
        "Working with clients to develop the overall look and design of a website",
      location: "Beijing China",
    },
  ],
};

var projects = {
  workDemo: [
    {
      title: "Welcome to the DJ Party",
      dates: "December 2016- February 2017",
      description: "Welcome to the DJ Party Find the hotest Dj event",
      images: ["images/dj-events.png"],
    },
    {
      title: "mixiufourm",
      dates: "July 2017 - Septermber 2017",
      description:
        "a place where all developer can chat and share their idea, recent worked on side project",
      images: ["images/mixiufourm.png"],
    },
  ],
};

// utilize the jquery to append the data from bove to insert html block into the html page
// html code snipate from helper.js, apply it into the resumeBuilder.js, then finally inster to index.html

// bio cotent
bio.display = function () {
  if (bio) {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(
      formattedName,
      formattedRole,
      formattedBioPic,
      formattedMessage
    );
  }
  if (bio.contacts) {
    var fortmattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var fortmattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var fortmattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var fortmattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(
      fortmattedMobile,
      fortmattedEmail,
      fortmattedGithub,
      fortmattedTwitter
    );
    $("#footerContacts").append(
      fortmattedMobile,
      fortmattedEmail,
      fortmattedGithub,
      fortmattedTwitter
    );
  }
  if (bio.skills) {
    $("#header").append(HTMLskillsStart);
    // console.log(bio.skills)
    var formattedSkills = [];
    for (item in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[item]);
      formattedSkills.push(formattedSkill);
    }

    // console.log(formattedSkills)
    $("#skills").append(formattedSkills);
  }
};

bio.display();

// work experiences
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

// project content
function projectHtmlData() {
  for (item in projects.workDemo) {
    // insert a project contaner div
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace(
      "%data%",
      projects.workDemo[item].title
    );

    var formattedDates = HTMLprojectDates.replace(
      "%data%",
      projects.workDemo[item].dates
    );

    var formattedDescription = HTMLprojectDescription.replace(
      "%data%",
      projects.workDemo[item].description
    );

    var imgsInArray = projects.workDemo[item].images;
    var formattedImgs = [];
    // console.log(formattedimgs)
    for (item in imgsInArray) {
      var formattedimg = HTMLprojectImage.replace("%data%", imgsInArray[item]);
      formattedImgs.push(formattedimg);
      // console.log(formattedimg);
      // console.log(item);
    }

    // console.log(
    //   formattedTitle,
    //   formattedDates,
    //   formattedDescription,
    //   formattedImgs
    // );

    $(".project-entry:last").append(
      formattedTitle,
      formattedDates,
      formattedDescription
    );
    $(".project-entry:last").append(formattedImgs);
    // console.log(formattedTitle, formattedDates, formattedDescription);
  }
}

projectHtmlData();
// projects.display();

// education
education.display = function () {
  for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
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

    //插入网页
    $(".education-entry:last").append(
      formattedNameDegree,
      formattedDates,
      formattedMajors,
      formattedLocation
    );
  }

  for (var i = 0; i < education.onlineCourses.length; i++) {
    $(".education-entry:last").append(HTMLonlineClasses);

    //专业和学校名称
    var formattedTitle = HTMLonlineTitle.replace(
      "%data%",
      education.onlineCourses[i].title
    );
    var formattedSchool = HTMLonlineSchool.replace(
      "%data%",
      education.onlineCourses[i].school
    );
    var formattedTitleSchool = formattedTitle + formattedSchool;
    //日期
    var formattedDates = HTMLonlineDates.replace(
      "%data%",
      education.onlineCourses[i].dates
    );
    //网址
    var formattedUrl = HTMLonlineURL.replace(
      "%data%",
      education.onlineCourses[i].url
    );

    //插入网页
    $(".education-entry:last").append(
      formattedTitleSchool,
      formattedDates,
      formattedUrl
    );
  }
};

education.display();

// where I lived
// 检测点击坐标
$(document).click(function (loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

// Map display
$("#main").append(internationalizeButton);

//添加高德地图到 mapDiv 上，使得简历拥有地图
$("#mapDiv").append(googleMap);
