let name = 'Keelan Gibb';
let career = 'IT / Cyber Security';
let decription = 'I am 21 years old. I was born in Alabama and currently live in California. I am in the Marine Corps serving as an ISR Systems Engineer.';
let interests = ['Video Games', 'Playing Guitar', 'Coding :)', 'Traveling', 'Hiking'];
let positions = {
    company: 'USMC',
    place: 'California',
    jobTitle: 'ISR Systems Engineer',
    billet: 'Systems Chief',
    decription: ['Provided Top Secret Satellite Communications to the Commanding General for the 1st Marine Division', 'Programmed Cisco switches', 'Provided system support to 1st Marine Division G-2', 'Managed and updated 150+ computers on a monthly basis', 'Configuring and managing 6 ESXI Servers running a Linux Operating System', 'In charge of security and creating accounts for Marines'],
    skillName: ['Playing Guitar', 'Configuring Cisco Switches', 'Active Directory', 'Configuring ESXI Servers', 'Configuring NAS', 'Subnetting networks', 'Satellite Communications', 'Handling Crypto keys'],
    coolSkills: ['BAM: Playing Guitar', 'BAM: Configuring ESXI Servers', 'BAM: Satellite Communications', 'BAM: Handling Crypto keys']
    
}
let myvar = positions.decription;
const nameUpper = name.toUpperCase();
console.log('Name:', nameUpper);
console.log('Career:', career);
console.log('Decription', decription);
console.log('\n-My Interests:');

for (var i = 0; i < interests.length; i++) {
    console.log('*', interests[i])
}

/* function displayPosition(a = positions.company, b = positions.jobTitle, c = positions.decription) {
    console.log('\n-My Previous Experience');
    console.log('Company:', a);
    console.log('Job Title:', b);
    for (var i = 0; i < c.length; i++) {
        console.log('*', c[i]);
    }
}
displayPosition() */

function displayPosition (companyName, jobTitle, decription) {
    console.log(`${companyName}, \n${jobTitle}, \n${decription}`)
}
console.log('\nMy Previous Experience:')
displayPosition(positions.company, positions.jobTitle, positions.decription)
console.log('\n-My Skills')

function displaySkills(skillName, isCool) {
    if (skillName == isCool, isCool == true) {  
        console.log(`*BAM: ${skillName}`)
    } else {
        console.log(`* ${skillName}`)           
    };
};

//let skillName = ['Playing Guitar', 'Configuring Cisco Switches', 'Active Directory', 'Configuring ESXI Servers', 'Configuring NAS', 'Subnetting networks', 'Satellite Communications', 'Handling Crypto keys']

displaySkills(positions.skillName[0], true);
displaySkills(positions.skillName[1], false);
displaySkills(positions.skillName[2], false);
displaySkills(positions.skillName[3], true);
displaySkills(positions.skillName[4], false);
displaySkills(positions.skillName[5], false);
displaySkills(positions.skillName[6], true);
displaySkills(positions.skillName[7], true);