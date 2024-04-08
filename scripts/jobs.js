var data = [
	{
        jobName: "Community Outreach Coordinator",
        jobLocation: "Remote",
        careerType: "Policy",
        jobType: "Full-Time-Contractor",
        descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future.",
        jobAppDescrip: "jobs/communityOutreachCoordinator.html"
	},
	{
        jobName: "Community Outreach Coordinator",
        jobLocation: "Remote",
        careerType: "Policy",
        jobType: "Full-Time-Contractor",
        descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future.",
        jobAppDescrip: "jobs/communityOutreachCoordinator.html"
	},
	{
        jobName: "Community Outreach Coordinator",
        jobLocation: "Remote",
        careerType: "Policy",
        jobType: "Part-Time-Contractor",
        descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future.",
        jobAppDescrip: "jobs/communityOutreachCoordinator.html"
	},
	{
        jobName: "Community Outreach Coordinator",
        jobLocation: "Remote",
        careerType: "Advocacy",
        jobType: "Full-Time-Contractor",
        descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future.",
        jobAppDescrip: "jobs/communityOutreachCoordinator.html"
	},
	{
        jobName: "Community Outreach Coordinator",
        jobLocation: "Remote",
        careerType: "Advocacy",
        jobType: "Full-Time-Contractor",
        descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future.",
        jobAppDescrip: "jobs/communityOutreachCoordinator.html"
	},
	{
        jobLocation: "Remote",
        careerType: "Policy",
        jobType: "Full-Time-Contractor",
        descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future.",
        jobAppDescrip: "jobs/communityOutreachCoordinator.html"
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