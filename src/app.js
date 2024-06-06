let pronoun = ["the", "our", "a"];
let adj = ["energetic", "playful", "mighty", "ancient"];
let noun = ["wizard", "warrior", "thief", "magician"];
let extensions = ["com", "net", "to", "gov", "us", "io"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let y = 0; y < noun.length; y++) {
      for (let e = 0; e < extensions.length; e++) {
        console.log(`${pronoun[i]}${adj[j]}${noun[y]}.${extensions[e]}`);
      }
    }
  }
}
