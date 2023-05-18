const skills = [ 'JavaScript', 'TypeScript', 'React/React Native', 'NodeJs', 'express', 'HTML', 'CSS', 'SQL' ];

var outputElement = document.getElementById('languages');

for (var i = 0; i < skills.length; i++) {
    var skill = skills[i];

    var paragraph = document.createElement('span');
    paragraph.className = 'skill';
    paragraph.textContent = skill;

    outputElement.appendChild(paragraph);
}