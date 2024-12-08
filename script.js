var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Validation: Check if any required field is empty
    if (!nameElement.value || !emailElement.value || !phoneElement.value || !educationElement.value || !experienceElement.value || !skillsElement.value) {
        alert("Please fill all fields before submitting.");
        return;
    }
    var name = nameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var education = educationElement.value;
    var experience = experienceElement.value;
    var skills = skillsElement.value;
    // Resume content ka output generate karte hain with editable fields
    var resumeOutput = "\n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> <span contenteditable=\"true\" id=\"editable-name\">".concat(name, "</span></p>\n        <p><strong>Email:</strong> <span contenteditable=\"true\" id=\"editable-email\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"true\" id=\"editable-phone\">").concat(phone, "</span></p>\n\n        <h3>Education</h3>\n        <p contenteditable=\"true\" id=\"editable-education\">").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p contenteditable=\"true\" id=\"editable-experience\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p contenteditable=\"true\" id=\"editable-skills\">").concat(skills, "</p>\n        \n        <button onclick=\"saveResume()\">Save Resume</button>\n    ");
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error('The resume output element is missing');
    }
});
// Save function to store the edited resume data
function saveResume() {
    var _a, _b, _c, _d, _e, _f;
    var editableName = (_a = document.getElementById('editable-name')) === null || _a === void 0 ? void 0 : _a.innerText;
    var editableEmail = (_b = document.getElementById('editable-email')) === null || _b === void 0 ? void 0 : _b.innerText;
    var editablePhone = (_c = document.getElementById('editable-phone')) === null || _c === void 0 ? void 0 : _c.innerText;
    var editableEducation = (_d = document.getElementById('editable-education')) === null || _d === void 0 ? void 0 : _d.innerText;
    var editableExperience = (_e = document.getElementById('editable-experience')) === null || _e === void 0 ? void 0 : _e.innerText;
    var editableSkills = (_f = document.getElementById('editable-skills')) === null || _f === void 0 ? void 0 : _f.innerText;
    if (editableName && editableEmail && editablePhone && editableEducation && editableExperience && editableSkills) {
        console.log("Saved Data:");
        console.log({
            name: editableName,
            email: editableEmail,
            phone: editablePhone,
            education: editableEducation,
            experience: editableExperience,
            skills: editableSkills
        });
    }
    else {
        alert("Some fields are empty, please fill them before saving.");
    }
}
var shareableLink = document.getElementById("shareable-link");
shareableLink === null || shareableLink === void 0 ? void 0 : shareableLink.addEventListener("click", function () {
});
var downloadpdf = document.getElementById("downloadpdf");
downloadpdf === null || downloadpdf === void 0 ? void 0 : downloadpdf.addEventListener("click", function () {
    window.print();
});
