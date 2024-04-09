var data = [
	{
        jobName: "Community Outreach Coordinator",
        jobLocation: "Remote",
        careerType: "Policy & Advocacy",
        jobType: "Full-Time-Contractor",
        descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future.",
        jobAppDescrip: "jobs/communityOutreachCoordinator.html"
	},
	{
        jobName: "Sustainability Program Manager",
        jobLocation: "New York City, NY",
        careerType: "Project Management",
        jobType: "Full-Time-Contractor",
        descrip: "We are searching for a capable Sustainability Program Manager to oversee and implement our environmental initiatives. This involves crafting and executing diverse sustainability strategies, evaluating and reducing The Green Place's environmental footprint, and ensuring compliance with regulations.",
        jobAppDescrip: "jobs/sustainabilityProgramManager.html"
	},
	{
        jobName: "Environmental Education Specialist",
        jobLocation: "New York City, NY",
        careerType: "Policy & Advocacy",
        jobType: "Internship",
        descrip: "We are looking for an enthusiastic individual to take on the role of Environmental Education Specialist. This position entails creating and executing educational programs aimed at raising awareness about environmental issues and advocating for sustainable practices.",
        jobAppDescrip: "jobs/environmentalEducationSpecialist.html"
	},
	{
        jobName: "Sustainable Systems Analyst",
        jobLocation: "Napa, CA",
        careerType: "Research and Development",
        jobType: "Full-Time-Contractor",
        descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future.",
        jobAppDescrip: "jobs/sustainableSystemsAnalyst.html"
	},
	{
        jobName: "Sr. Data Analytics Engineer",
        jobLocation: "Remote",
        careerType: "Engineering",
        jobType: "Permanent Full-Time",
        descrip: "We are seeking a hands-on, self-motivated Data Analytics Engineer to own our data analytics pipeline for one of our fastest growing businesses. In this role, you will be responsible for collecting and modeling data through the deployment of modern cloud tools, and turning that data into insights through the building of dashboards and reports. ",
        jobAppDescrip: "jobs/dataAnalyticsEngineer.html"
	},
	{
        jobName: "Sr. Software Engineer",
        jobLocation: "Remote",
        careerType: "Engineering",
        jobType: "Permanent Full-Time",
        descrip: "We are looking for a team member to help implement new data pipelines, expand our growing data infrastructure, and lead the development of new on-site capabilities across multiple domains.  If you live and breathe web development, love coming up with creative technical solutions, and are excited to join a small agile team, this role is a perfect opportunity for you.",
        jobAppDescrip: "jobs/softwareEngineer.html"
	}
];

var products = "",
    jobNames = "",
    jobLocations = "",
    careerTypes = "",
    jobTypes = "",
    descrips = "",
    jobAppDescrips = "";


for (var i = 0; i < data.length; i++) {
	var jobName = data[i].jobName
        jobLocation = data[i].jobLocation,
        careerType = data[i].careerType,
        jobType = data[i].jobType,
        descrip = data[i].descrip,
        jobAppDescrip = data[i].jobAppDescrip;

	//create product cards
	products +=
        "<div class='jobCard product' data-jobName='" +
        jobName +
        "' data-jobLocation='" +
        jobLocation +
        "' data-careerType='" +
        careerType +
        "' data-jobType='" +
        jobType +
        "'><div class='openJob row'><div class='col-sm-8'><a href='" +
        jobAppDescrip +
        "'><h1>" +
        jobName +
        "</h1></a><p>" +
        descrip +
        "</p><div class='tags row'> <div class='location col-sm-6'><i class='fa-solid fa-location-dot fa-xl'></i><h3>" +
        jobLocation +
        "</h3></div> <div class='workType col-sm-6'> <i class='fa-solid fa-briefcase fa-xl'></i><h3>" +
        jobType +
        "</h3></div></div></div> <div class=' col-sm-4 categoryContainer'> <div class='jobCategory'> <h3>" +
        careerType + 
        "</h3></div></div></div></div>";

	//create dropdown of locations
    if (
        jobLocations.indexOf("<option value='" + jobLocation + "'>" + jobLocation + "</option>") == -1
    ) {
        jobLocations += "<option value='" + jobLocation + "'>" + jobLocation + "</option>";
    }

    //create dropdown of career types
    if (
        careerTypes.indexOf("<option value='" + careerType + "'>" + careerType + "</option>") == -1
    ) {
        careerTypes += "<option value='" + careerType + "'>" + careerType + "</option>";
    }

    //create dropdown of job types
    if (
        jobTypes.indexOf("<option value='" + jobType + "'>" + jobType + "</option>") == -1
    ) {
        jobTypes += "<option value='" + jobType + "'>" + jobType + "</option>";
    }
}

$("#products").html(products);
$(".filter-careerType").append(careerTypes);
$(".filter-jobLocation").append(jobLocations);
$(".filter-jobType").append(jobTypes);

var filtersObject = {};

//on filter change
$(".filter").on("change", function () {
	var filterName = $(this).data("filter"),
		filterVal = $(this).val();

	if (filterVal == "") {
		delete filtersObject[filterName];
	} else {
		filtersObject[filterName] = filterVal;
	}

	var filters = "";

	for (var key in filtersObject) {
		if (filtersObject.hasOwnProperty(key)) {
			filters += "[data-" + key + "='" + filtersObject[key] + "']";
		}
	}

	if (filters == "") {
		$(".product").show();
	} else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}
});

//on search form submit
$("#search-form").submit(function (e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".product").hide();
	$(".product").each(function () {
		var jobName = $(this).data("jobName").toLowerCase(),
			jobLocation = $(this).data("jobLocation").toLowerCase(),
			jobType = $(this).data("jobType").toLowerCase(),
            careerType = $(this).data("careerType").toLowerCase();
		if (
			jobName.indexOf(query) > -1 ||
			jobLocation.indexOf(query) > -1 ||
			jobType.indexOf(query) > -1 ||
            careerType.indexOf(query) > -1
		) {
			$(this).show();
		}
	});
});









const dropContainer = document.getElementById("dropcontainer");
const fileInput = document.getElementById("resume");

dropContainer.addEventListener("dragover", e => {
  e.preventDefault();
}, false);

dropContainer.addEventListener("dragenter", () => {
  dropContainer.classList.add("drag-active");
});

dropContainer.addEventListener("dragleave", () => {
  dropContainer.classList.remove("drag-active");
});

dropContainer.addEventListener("drop", e => {
  e.preventDefault();
  dropContainer.classList.remove("drag-active");
  fileInput.files = e.dataTransfer.files;
});



const dropContainer2 = document.getElementById("dropcontainer2");
const fileInput2 = document.getElementById("cletter");

dropContainer2.addEventListener("dragover", e => {
  e.preventDefault();
}, false);

dropContainer2.addEventListener("dragenter", () => {
  dropContainer2.classList.add("drag-active");
});

dropContainer2.addEventListener("dragleave", () => {
  dropContainer2.classList.remove("drag-active");
});

dropContainer2.addEventListener("drop", e => {
  e.preventDefault();
  dropContainer2.classList.remove("drag-active");
  fileInput2.files = e.dataTransfer.files;
});


function submitJob(){
  location.href="congrats.html";
}

function openCareers(){
    location.href="../careers.html";
  }
