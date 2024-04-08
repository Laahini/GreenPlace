var data = [
{
    name: "Community Outreach CoordinatorGibson",
    location: "Remote",
    careerType: "Policy & Advocacy",
    jobType: "Full-Time Contractor",
    descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future."
},
{
    name: "Community Outreach CoordinatorGibson",
    location: "Remote",
    careerType: "Policy & Advocacy",
    jobType: "Full-Time Contractor",
    descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future."
},
{
    name: "Community Outreach CoordinatorGibson",
    location: "Remote",
    careerType: "Policy & Advocacy",
    jobType: "Full-Time Contractor",
    descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future."
},
{
    name: "Community Outreach CoordinatorGibson",
    location: "Remote",
    careerType: "Policy & Advocacy",
    jobType: "Full-Time Contractor",
    descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future."
},
{
    name: "Community Outreach CoordinatorGibson",
    location: "Remote",
    careerType: "Policy & Advocacy",
    jobType: "Full-Time Contractor",
    descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future."
},
{
    name: "Community Outreach CoordinatorGibson",
    location: "Remote",
    careerType: "Policy & Advocacy",
    jobType: "Full-Time Contractor",
    descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future."
},
{
    name: "Community Outreach CoordinatorGibson",
    location: "Remote",
    careerType: "Policy & Advocacy",
    jobType: "Full-Time Contractor",
    descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future."
},
{
    name: "Community Outreach CoordinatorGibson",
    location: "Remote",
    careerType: "Policy & Advocacy",
    jobType: "Full-Time Contractor",
    descrip: "The candidate should have excellent communication skills and a fervor for encouraging community participation in environmental initiatives. Assuming the role of Community Outreach Coordinator means playing a vital part in The Green Place's mission by engaging with communities, promoting a shared sense of responsibility, and encouraging positive change toward a more sustainable future."
}
];

var products = "",
names = "",
locations = "",
careerTypes = "",
jobTypes = "",
descrips = "";

for (var i = 0; i < data.length; i++) {
var name = data[i].name,
    location = data[i].location,
    careerType = data[i].careerType,
    jobType = data[i].jobType,
    descrip = data[i].descrip;

//create product cards
products +=
    "<div class='col-sm-4 product' data-make='" +
    make +
    "' data-model='" +
    model +
    "' data-type='" +
    type +
    "' data-price='" +
    rawPrice +
    "'><div class='product-inner text-center'><img src='" +
    image +
    "'><br />Make: " +
    make +
    "<br />Model: " +
    model +
    "<br />Type: " +
    type +
    "<br />Price: " +
    price +
    "</div></div>";

//create dropdown of makes
if (
    makes.indexOf("<option value='" + make + "'>" + make + "</option>") == -1
) {
    makes += "<option value='" + make + "'>" + make + "</option>";
}

//create dropdown of models
if (
    models.indexOf("<option value='" + model + "'>" + model + "</option>") == -1
) {
    models += "<option value='" + model + "'>" + model + "</option>";
}

//create dropdown of types
if (
    types.indexOf("<option value='" + type + "'>" + type + "</option>") == -1
) {
    types += "<option value='" + type + "'>" + type + "</option>";
}
}

$("#products").html(products);
$(".filter-make").append(makes);
$(".filter-model").append(models);
$(".filter-type").append(types);

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
    var make = $(this).data("make").toLowerCase(),
        model = $(this).data("model").toLowerCase(),
        type = $(this).data("type").toLowerCase();

    if (
        make.indexOf(query) > -1 ||
        model.indexOf(query) > -1 ||
        type.indexOf(query) > -1
    ) {
        $(this).show();
    }
});
});
