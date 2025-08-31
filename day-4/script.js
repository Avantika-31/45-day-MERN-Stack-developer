let skills = [
    { name: "HTML", proficiency: "Intermediate" },
    { name: "CSS", proficiency: "Intermediate" },
    { name: "JavaScript", proficiency: "Beginner" }
];
function renderSkills() {
    const list = document.getElementById("skills-list");
    list.innerHTML = "";

    const skillStrings = skills.map(skill => `${skill.name} (${skill.proficiency})`);

    console.log(skillStrings);

    skillStrings.forEach(skillStr => {
        const li = document.createElement("li");
        li.textContent = skillStr;
        list.appendChild(li);
    });
}

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
    nameInput.value = ""; 
    renderSkills();
}
document.getElementById("add-skill-btn").addEventListener("click", addSkill);
renderSkills();
