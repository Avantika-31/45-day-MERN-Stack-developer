  // Initial skill data
let skills = [
    { name: "HTML", proficiency: "Intermediate" },
    { name: "CSS", proficiency: "Intermediate" },
    { name: "JavaScript", proficiency: "Beginner" }
];

// Function to render skills
function renderSkills() {
    const list = document.getElementById("skills-list");
    list.innerHTML = "";

    // Transform skills -> ["HTML (Intermediate)", ...]
    const skillStrings = skills.map(skill => `${skill.name} (${skill.proficiency})`);

    console.log(skillStrings); // Debug in console

    skillStrings.forEach(skillStr => {
        const li = document.createElement("li");
        li.textContent = skillStr;
        list.appendChild(li);
    });
}

// Function to add new skill
function addSkill() {
    const nameInput = document.getElementById("skill-name");
    const proficiencySelect = document.getElementById("proficiency-level");

    const name = nameInput.value.trim();
    const proficiency = proficiencySelect.value;

    if (name === "") {
        alert("Please enter a skill name.");
        return;
    }

    skills.push({ name, proficiency });
    nameInput.value = ""; // Clear input
    renderSkills();
}

// Add event listener
document.getElementById("add-skill-btn").addEventListener("click", addSkill);

// Initial render
renderSkills();
