const n = x => Math.floor(Math.random() * x); // Random number gen with the number cap as a parameter x

// Generates prefix, first name, middle name/nickname, last name, suffix
function nameGen() {
    let pre, suf, first, last, nick;
    const prefix = [
        'God Emperor ',
        'Padishah Emperor ',
        'Ser ',
        'Lord ',
        'Duke ',
        'Emperor ',
        'Earl ',
        'Baron ',
        'Count ',
        'Viscount ',
        'St. ',
        'Lil ',
        'Hodor ',
        'Lady ',
        'Duchess ',
        'Empress ',
        'Queen ',
        'Baroness ',
        'Countess ',
        'Viscountess '
    ];

    const suffix = [
        ' Jr.',
        ' Sr.',
        ' IX',
        ' VI',
        ' Ph.D.',
        ' M.D.',
        ' Hodor'
    ];
    if (n(20) === 19) {
        pre = prefix[n(prefix.length)];
    } else {
        pre = '';
    }
    if (n(10) === 9) {
        suf = suffix[n(suffix.length)];
    } else {
        suf = '';
    }

    const firstName = [
        'Lionel',
        'Varys',
        'Bob',
        'Johnny',
        'Paul',
        'Leto',
        'Ghanima',
        'Alia',
        'Vladmir',
        'Samwell',
        'Ahmed',
        'Daniel',
        'Adam',
        'Mikkel',
        'Mikken',
        'Gendry',
        'Craster',
        'Jonas',
        'Mikasa',
        'Grisha',
        'Ymir',
        'Bartosz',
        'Cristiano',
        'Levi',
        'Gregory',
        'Aaron',
        'Brianna',
        'Elizabeth',
        'Emma',
        'Gabrielle',
        'Jake',
        'Jayden',
        'Kevin',
        'Koustubha',
        'Kyle',
        'Mahek',
        'Matthew',
        'Owen',
        'Sophia',
        'Sunay',
        'Viacheslav',
        'Walder',
        'Hodor',
        'Lelouch',
        'Youssef',
        'Muhammad',
        'Malcolm',
        'Malik',
        'Trevor',
        'Daniyal',
        'Pranshu',
        'Ann',
        'Arman',
        'Rohan',
        'Trevor',
        'Samay',
        'Nunnally',
        'Suzaku',
        'Migi',
        'Shinichi',
        'Mamoru'
    ];
    first = firstName[n(firstName.length)];

    const lastName = [
        'Harkonnen',
        'Tiedemann',
        'Atreides',
        'Messi',
        'Ronaldo',
        'Ackerman',
        'Stark',
        'Clegane',
        'Kilgore',
        'Mathew',
        'Nisenson',
        'Pinto',
        'Bootnik',
        'Reznik',
        'Kozlovsky',
        'Tarantola',
        'Cherichello',
        'Yau',
        'Piccinich',
        'Kolla',
        'Rabkin',
        'Mahesh',
        'Passantino',
        'Chiu',
        'Antushevich',
        'Bhatt',
        'Kostenko',
        'Frey',
        'Hodor',
        'Lamperogue',
        'Ali',
        'X',
        'Little',
        'Shabazz',
        'Barrett',
        'Ahmed',
        'Agarwal',
        'Alex',
        'Ananikyan',
        'Banoor',
        'Barrett',
        'Benowitz',
        'Kururugi',
        'Izumi',
        'Uda'
    ];
    last = lastName[n(lastName.length)];

    const nickName = [
        ' “The Hound” ',
        ' “Littlefinger” ',
        ' “The Undertaker” ',
        ' De ',
        ' Vi ',
        ' ibn ',
        ' bin ',
        ' of the Knife ',
        ' “Blackfish” ',
        ' “Hodor” ',
        ' Mohamed ',
        ' el-',
        ' “Rohirrim” ',
        ' “D.J.” '
    ];
    if (n(20) === 19) {
        nick = `${nickName[n(nickName.length)]}`;
    } else {
        nick = ' ';
    }
    const name = pre + first + nick + last + suf;
    return name;
};

function positionGen() { // Generates Super Team forward positions
    const positionArray = [
        'Hazardous Material Recovery Operator',
        'Assault Operator',
        'Stealth Operator',
        'Demolitions Operator',
        'Medical Operator'
    ];
    const position = positionArray[n(positionArray.length)];
    return position;
};

function antiPositionGen() { // Generates Anti Team forward positions
    const positionArray = [
        'Demolitions Operator',
        'Decoy Assault Operator' // Work in progress
    ];
    const position = positionArray[n(positionArray.length)];
    return position;
};

function positionSkillsGen() { // Generates forward skills
    const skillsArray = [
        'Deft',
        'Tough',
        'Fortuitous',
        'Strong',
        'Stalwart'
    ]
    const skill1 = skillsArray[n(skillsArray.length)];
    let newArray = skillsArray.filter(item => item !== skill1);

    const skill2 = newArray[n(newArray.length)];
    newArray = newArray.filter(item => item !== skill2);

    const skill3 = newArray[n(newArray.length)];

    return [skill1, skill2, skill3];
};

function supportGen() { // Generates Super Team support positions
    const supportArray = [
        'Drone Operator',
        'Information Broker Contact',
        'Demolitions Advisor',
        'Hazardous Material Identifification Operator'
    ];
    const support = supportArray[n(supportArray.length)];
    return support;
};

function antiSupportGen() { // Generates Anti Team support positions
    const supportArray = [
        'Drone Operator',
        'Information Broker Contact',
        'Demolitions Advisor',
        'Hazardous Material Identifification Operator'
    ];
    const support = supportArray[n(positionArray.length)];
    return position;
};

function supportSkillsGen() { // Generates support skills
    const skillsArray = [
        'Clairvoyant',
        'Strategic',
        'Precise',
        'Keen',
        'Insightful'
    ]
    const skill1 = skillsArray[n(skillsArray.length)];
    let newArray = skillsArray.filter(item => item !== skill1);

    const skill2 = newArray[n(newArray.length)];
    newArray = newArray.filter(item => item !== skill2);

    const skill3 = newArray[n(newArray.length)];

    return [skill1, skill2, skill3];
};

function quipGen() {
    const quipArray = [
        `Thinks ${teamMembers[n(teamMembers.length)].name} is hot.`,
        `Drinks apple cider cold.`,
        `Thinks almonds are overrated.`,
        `Trusts ${teamMembers[n(teamMembers.length)].name}.`,
        `Believes in ghosts.`,
        `Is secretly a superhero.`,
        `Wears socks with sandals.`,
        `Is afraid of clowns.`,
        `Has a pet iguana named Spike.`,
        `Can recite pi to 100 digits.`,
        `Likes pineapple on pizza.`,
        `Has a fear of heights.`,
        `Thinks ${teamMembers[n(teamMembers.length)].name} is the smartest person alive.`,
        `Didn't eat an apple once.`,
        `Believes that unicorns are real.`,
        `Sleeps with a nightlight.`,
        `Once ate a whole pizza by alone.`,
        `Wears mismatched socks on purpose.`,
        `Is terrified of spiders.`,
        `Operates at 0.0008334 OPS.`,
        `Thinks ${teamMembers[n(teamMembers.length)].name} is hilarious.`,
        `Once met a celebrity.`,
        `Always carries a lucky charm.`,
        `Believes in fairies.`,
        `Can play the piano by ear.`,
        `Is always 30 minutes late.`,
        `Has a signature dance move.`,
        `Has a fear of flying.`,
        `Was an elementary school kickball champion.`,
        `Thinks ${teamMembers[n(teamMembers.length)].name} is suspicious.`,
        `Enjoys playing board games.`,
        `Is a coffee connoisseur.`,
        `Enjoys people watching.`,
        `Accidentally broke ${teamMembers[n(teamMembers.length)].name}'s humerus due to excessive blunt trauma to the ulmar nerve.`,
        `Is afraid of the dark.`,
        `Thinks ${teamMembers[n(teamMembers.length)].name} is suspicious.`,
        `Is an adrenaline junkie.`,
        `Loves solving cold cases. Always ends up with ${teamMembers[n(teamMembers.length)].name} as the prime suspect.`,
        `Rat licker.`,
        `Claimed to have alien hand syndrome after being seen "self-harrsing" by ${teamMembers[n(teamMembers.length)].name}.`,
        `Calls right hand "Migi".`,
        `Calls neck and lower jaw "Jaw".`
        
    ];
    const quip = quipArray[n(quipArray.length)];
    return quip;
}


const teamMembers =  [
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    }
];

const antiTeamMembers =  [
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    }
];

teamMembers.forEach((member, index) => {
    member.name = nameGen();
    switch (index) {
        case 0:
        case 1:
        case 2:
            member.position = positionGen();
            member.skills = positionSkillsGen();
            member.category = 'Forward';
            break;
        case 3:
        case 4:
            member.position = supportGen();
            member.skills = supportSkillsGen();
            member.category = 'Support';
            break;
        case 5:
        case 6:
        case 7:
            member.category = 'Defender';
            break;
        case 8:
            member.category = 'Specialist';
            break;
    }
});

antiTeamMembers.forEach((member, index) => {
    member.name = nameGen();
    switch (index) {
        case 0:
        case 1:
        case 2:
            member.position = positionGen();
            member.skills = positionSkillsGen();
            member.category = 'Forward';
            break;
        case 3:
        case 4:
            member.position = supportGen();
            member.skills = supportSkillsGen();
            member.category = 'Support';
        case 5:
        case 6:
        case 7:
            member.category = 'Defender';
        case 8:
            member.category = 'Specialist';
    }
});

teamMembers.forEach((member) => {
    member.biography = quipGen();
});

antiTeamMembers.forEach((antiMember, index) => {
    let antiName = () => antiMember.name = nameGen();
    let antiPos = () => antiMember.position = nameGen();
    let antiSkill = () => antiMember.name = nameGen();
});

function generateTeamCards(team, teamID) {
    const teamCardsContainer = document.getElementById(teamID);

    team.forEach((member, index) => {
        const card = document.createElement('div');
        card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'mb-3'); // Use Bootstrap classes for responsiveness

        let borderColor;

        switch (member.category.toLowerCase()) {
            case 'forward':
                borderColor = '#ffc107';
                break;
            case 'support':
                borderColor = '#28a745';
                break;
            case 'defender':
                borderColor = '#007bff';
                break;
            case 'specialist':
                borderColor = '#dc3545';
                break;
            default:
                borderColor = '#6c757d';
        };

        card.style.borderColor = borderColor;

        const skillsList = member.skills.map(skill => `<li>${skill}</li>`).join('');
        card.innerHTML = `
            <div class="card" style="border-color: ${borderColor};">
                <div class="card-header">${member.name}</div>
                <div class="card-body">
                    <p><strong>Position:</strong> ${member.position}</p>
                    <p><strong>Skills:</strong>
                        <ul>
                            ${skillsList}
                        </ul>
                    </p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                    <p><strong>Biography:</strong> ${member.biography}</p>
                </div>
            </div>
        `;

        teamCardsContainer.appendChild(card);
    });
};

window.onload = () => {
    generateTeamCards(teamMembers, 'teamCards');
    generateTeamCards(antiTeamMembers, 'antiTeamCards');
};