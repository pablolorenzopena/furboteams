export default function handler(req, res) {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

  console.log(req.body);

const randomValue = (list) => {
  return list[Math.floor(Math.random() * list.length)]
}

const filter = (list, type) => {
  return list.filter((item)=> {
    if (item.posiciones.indexOf(type) !== -1) {
      return item;
    }
  });
}


const players =  [
  {
    id: 1,
    nombre: 'Chato',
    apodo: 'Chato',
    posiciones: ['POR'],
    stats: {
      attack: 0,
      deffense: 20
    }
  },
  {
    id: 2,
    nombre: 'Jose Manuel',
    apodo: 'Jose',
    posiciones: ['DEF'],
    stats: {
      attack: 20,
      deffense: 80
    }
  },
  {
    id: 3,
    nombre: 'Manuel',
    apodo: 'Manuel',
    posiciones: ['DEF'],
    stats: {
      attack: 30,
      deffense: 70
    }
  },
  {
    id: 4,
    nombre: 'JAIME',
    apodo: 'JAIME',
    posiciones: ['DEF'],
    stats: {
      attack: 0,
      deffense: 20
    }
  },
  {
    id: 5,
    nombre: 'RAFA',
    apodo: 'RAFA',
    posiciones: ['DEF'],
    stats: {
      attack: 30,
      deffense: 70
    }
  },
  {
    id: 6,
    nombre: 'Duran',
    apodo: 'Duran',
    posiciones: ['DEF'],
    stats: {
      attack: 40,
      deffense: 60
    }
  },
  {
    id: 7,
    nombre: 'Antonio',
    apodo: 'Antonio',
    posiciones: ['MID'],
    stats: {
      attack: 60,
      deffense: 40
    }
  },
  {
    id: 8,
    nombre: 'Pablo',
    apodo: 'Pablo',
    posiciones: ['DEF'],
    stats: {
      attack: 20,
      deffense: 80
    }
  },
  {
    id: 9,
    nombre: 'Cristian',
    apodo: 'Cristian',
    posiciones: ['DEF'],
    stats: {
      attack: 50,
      deffense: 50
    }
  },
  {
    id: 10,
    nombre: 'Oscar',
    apodo: 'Oscar',
    posiciones: ['DEF'],
    stats: {
      attack: 40,
      deffense: 60
    }
  },
  {
    id: 11,
    nombre: 'Alex',
    apodo: 'Alex',
    posiciones: ['MID'],
    stats: {
      attack: 50,
      deffense: 50
    }
  },
  {
    id: 12,
    nombre: 'Luis',
    apodo: 'Luis',
    posiciones: ['MID'],
    stats: {
      attack: 60,
      deffense: 40
    }
  },
  {
    id: 13,
    nombre: 'Jesusma',
    apodo: 'Jesusma',
    posiciones: ['DEL'],
    stats: {
      attack: 80,
      deffense: 20
    }
  },
  {
    id: 14,
    nombre: 'Juanma',
    apodo: 'Juanma',
    posiciones: ['DEL'],
    stats: {
      attack: 70,
      deffense: 30
    }
  },
  {
    id: 15,
    nombre: 'Fernando',
    apodo: 'Fernando',
    posiciones: ['MID'],
    stats: {
      attack: 40,
      deffense: 60
    }
  },
  {
    id: 16,
    nombre: 'Dani',
    apodo: 'Dani',
    posiciones: ['DEL'],
    stats: {
      attack: 80,
      deffense: 20
    }
  },
  {
    id: 17,
    nombre: 'Padilla',
    apodo: 'Padilla',
    posiciones: ['DEL'],
    stats: {
      attack: 80,
      deffense: 20
    }
  },
  {
    id: 19,
    nombre: 'Diego',
    apodo: 'Diego',
    posiciones: ['DEL'],
    stats: {
      attack: 80,
      deffense: 20
    }
  },
  {
    id: 18,
    nombre: 'Raul',
    apodo: 'Raul',
    posiciones: ['ARB'],
    stats: {
      attack: 20,
      deffense: 80
    }
  }
]


const match = {
  date: null,
  convocados: JSON.parse(req.body),
  teams: {
    red: [],
    blue: []
  },
  config: {
    pair: true
  }
}



//players.map((player) => {match.convocados.push(player)});

console.log(match.convocados);
// FIRST CHECK IF IT IS PAIR OR NOT
if (match.convocados.length % 2) {
  console.log("SOMOS IMPARES");
  match.config.pair = false;
}
const goalkeepers = filter(match.convocados, 'POR');
match.config.keepersCount = goalkeepers.length; 
const deffenses = filter(match.convocados, 'DEF');
const middles = filter(match.convocados, 'MID');
const attackers = filter(match.convocados, 'DEL');




    console.log("IMPAR PLAYER, IMPART PORTERO");
    let counter = 0;
    while(goalkeepers.length) {
      
      const playerIndex = Math.floor(Math.random()*goalkeepers.length)
      const selectedPlayer = goalkeepers.splice(playerIndex, 1)[0];
      console.log(selectedPlayer);
      if (counter % 2 === 0) {
        match.teams.red.push(selectedPlayer);
      } else {
        match.teams.blue.push(selectedPlayer);
      }
      counter += 1;
    }
    while(deffenses.length) {
      
      const playerIndex = Math.floor(Math.random()*deffenses.length)
      const selectedPlayer = deffenses.splice(playerIndex, 1)[0];
      console.log(selectedPlayer);
      if (counter % 2 === 0) {
        match.teams.red.push(selectedPlayer);
      } else {
        match.teams.blue.push(selectedPlayer);
      }
      counter += 1;
    }

    while(middles.length) {
      const playerIndex = Math.floor(Math.random()*middles.length)
      const selectedPlayer = middles.splice(playerIndex, 1)[0];
      console.log(selectedPlayer);
      if (counter % 2 === 0) {
        match.teams.red.push(selectedPlayer);
      } else {
        match.teams.blue.push(selectedPlayer);
      }
      counter += 1;
    }
    console.log("ataquers");
    while(attackers.length) {
      const playerIndex = Math.floor(Math.random()*attackers.length)
      const selectedPlayer = attackers.splice(playerIndex, 1)[0];
      console.log(selectedPlayer);
      if (counter % 2 === 0) {
        match.teams.red.push(selectedPlayer);
      } else {
        match.teams.blue.push(selectedPlayer);
      }
      counter += 1;
    }
    
  
/* console.log("################################");
console.log(goalkeepers.length);
goalkeepers
console.log(goalkeepers.length);
console.log(deffenses.length);
console.log(attackers.length); */
// Number of GoalKeepers

console.log("------------------------------------------");

console.log(match.teams);

console.log("------------------------------------------");

/* let blueAttackScore =  0;
let blueDeffenseScore = 0; 
match.teams.blue.map(player => {
  blueAttackScore += player.stats.attack;
  blueDeffenseScore += player.stats.deffense;
});

let redAttackScore =  0;
let redDeffenseScore = 0; 
match.teams.red.map(player => {
  redAttackScore += player.stats.attack;
  redDeffenseScore += player.stats.deffense;
});


console.log("BLUE ATTACK:", blueAttackScore);
console.log("BLUE DEFFENSE:", blueDeffenseScore);
console.log(match.teams.blue);

console.log("RED ATTACK:", redAttackScore);
console.log("RED DEFENSE:", redDeffenseScore);
console.log(match.teams.red); */



  res.status(200).json({ match });
}


