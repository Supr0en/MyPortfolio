const skills = [ 'JavaScript', 'TypeScript', 'React', 'React Native', 'NodeJs', 'express', 'HTML', 'CSS', 'tailwind' , 'MySQL' ];

var outputElement = document.getElementById('languages');

for (var i = 0; i < skills.length; i++) {
    var skill = skills[i];

    var paragraph = document.createElement('span');
    paragraph.className = 'inline-block bg-primary text-secondary px-2 m-1 rounded-lg whitespace-prewrap hover:opacity-70 hover:cursor-pointer';
    paragraph.textContent = skill;

    outputElement.appendChild(paragraph);
}