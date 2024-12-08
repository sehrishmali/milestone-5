

document.getElementById("resumeForm")?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    // Validation: Check if any required field is empty
    if (!nameElement.value || !emailElement.value || !phoneElement.value || !educationElement.value || !experienceElement.value || !skillsElement.value) {
        alert("Please fill all fields before submitting.");
        return;
    }

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    

    // Resume content ka output generate karte hain with editable fields
    const resumeOutput = `
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> <span contenteditable="true" id="editable-name">${name}</span></p>
        <p><strong>Email:</strong> <span contenteditable="true" id="editable-email">${email}</span></p>
        <p><strong>Phone:</strong> <span contenteditable="true" id="editable-phone">${phone}</span></p>

        <h3>Education</h3>
        <p contenteditable="true" id="editable-education">${education}</p>

        <h3>Experience</h3>
        <p contenteditable="true" id="editable-experience">${experience}</p>

        <h3>Skills</h3>
        <p contenteditable="true" id="editable-skills">${skills}</p>
        
        <button onclick="saveResume()">Save Resume</button>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    } else {
        console.error('The resume output element is missing');
    }
});

// Save function to store the edited resume data
 function saveResume() {
    const editableName = document.getElementById('editable-name')?.innerText;
    const editableEmail = document.getElementById('editable-email')?.innerText;
    const editablePhone = document.getElementById('editable-phone')?.innerText;
    const editableEducation = document.getElementById('editable-education')?.innerText;
    const editableExperience = document.getElementById('editable-experience')?.innerText;
    const editableSkills = document.getElementById('editable-skills')?.innerText;

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
    } else {
        alert("Some fields are empty, please fill them before saving.");
    }
}

 const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement
 shareableLink?.addEventListener("click",()=>{

 })
 const downloadpdf = document.getElementById("downloadpdf") as HTMLButtonElement
 downloadpdf?.addEventListener("click",()=>{
    window.print()
    
 })