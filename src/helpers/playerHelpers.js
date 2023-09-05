export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};

export const addWinsToPlayers = (playerDataArray, matchData) => {
  // recieving two args, players and matches data
  return playerDataArray.map((player) => {
    // return a playerAr.. .map
    // map functions mean we are returning an array
    // Whatever we're doing we're returning a list of many items
    // we're recieving players in array so we want to calc how many wins per player

    // the .map is iterating through, then for each player (line 17)

    // calculating the number of wins in the MatchData
    // count how many wins per each player and create obj containing wins for player

    const currentWins = matchData.reduce((accumulator, match) => {
      // executing calculator, one single value, the value is a number which is the times a player has won
      // this is a very convinient way using reduce
      // the reduce function is a function that at the very end the purpose is to have one single output (one number, string, obj, etc)
      // the goal of the reduce function is to recieving as an output one individual value

      // in this case we're calling it currentWins because we want one value, so we actually iterate in line 18

      // match data (also an array)
      // Considering accumulator value / each iterated value
      // in that specific match we're applying something to accumulator
      // in match data in line 32 (if conditional statement)

      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        // if winner is the same as player.gamerTag for this current match we return the accumulator +1
        return (accumulator += 1);
      } else {
        return accumulator;
      }
    }, 0);
    // the first arg of the reduce is the function, the second argument is the accumulator's starting value, in this case it's calculating amount of wins after we've done calculator in line 43

    // Assigns the value to the wins key
    player.wins = currentWins;
    // there's then a new property called wins and it's equalled to the calculator
    // each player will now contain a new property called wins and you can now have the property inside each player then you'll have an array of all the players with new win property

    // if there are no wins the accumulator value starts at 0 so the key is assigned 0 for the value

    return player;
  });
};
