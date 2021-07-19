export const HAND_AND_FOOT_RULES =
    [{title: 'Goal', subRules: ['Be the first to get rid of your hand and foot by creating melds of 3 cards or more.', 'A meld must have 3 cards of the same number, or a pair and a wild card (Joker or 2), or 3 wild cards.']},
  {title: 'Deal', subRules: ['2 players deal 11 cards for each player.', 'Attempt to grab the exact amount of cards needed for a bonus.', 'Place the extra cards in the middle as a draw pile.', 'The player to the left of the dealers goes first.']},
  {title: 'Play', subRules: ['The first player draws 2 cards.', 'Following players can choose to draw the top 2 from the deck, or they can draw the top 5 from the discard pile without looking at the cards underneath the top.', 'If your team has not laid down yet, you can lay melds as long as you meet the scoring requirements based on your teams\' score.', 'If your team has laid down, you can add to existing melds or start new ones.', 'When you are done with your turn, discard one card.']},
  {title: 'Books', subRules: ['When a meld reaches 7 cards, it is considered a book.', 'If a book has no wild cards, it is considered "clean" and this is indicated by placing a red card on the top.', 'If a book contains wild cards (max 3), it is considered "dirty" and is indicated by placing a black card on top.', 'A wild book contains only wild cards and is indicated by placing any wild card on top.']},
  {title: 'Going Out', subRules: ['When you are in your foot, you can only go out when your team has a clean and dirty book.', 'You must discard to go out.']}];

export const GIN_RUMMY_RULES =
    [{title: 'Goal', subRules: ['Collect a hand where most or all of your cards can be combined into sets and runs and the point value of the remaining cards is low.', 'A run or sequence consists of three or more cards of the same suit in consecutive order, such as ♣4, ♣5, ♣6 or ♥7, ♥8, ♥9, ♥10, ♥J.', 'A set or group is three or four cards of the same rank, such as ♥7, ♣7, ♠7.']},
      {title: 'Card Values', subRules: ['Face Cards (K, Q, J) - 10 points.', 'Ace (always low) - 1 point.', 'Number Cards - value of their number.']},
      {title: 'Deal', subRules: ['Draw cards to see who deals first - lowest card deals first.', 'Loser of previous hand deals games there after.', 'Each player is dealt 10 cards and the top card of the stock is turned over.']},
      {title: 'Play', subRules: ['Begin your turn by taking one card from either the top of the stock pile or the top card on the discard pile.', 'Discard one card to end your turn', 'The first turn is slightly different - If the non dealer does not want the card that was flipped up, the dealer has the option to take that card and go first. If the dealer doesn\'t want it, the non dealer continues their turn.']},
      {title: 'Knocking', subRules: ['When you have less than 10 points in your deadwood, you can knock (indicated by placing your discard face down.', 'Knocking with no deadwood is called going gin and earns a bonus.', 'The opponent of the player who knocked lays their matched cards out and can lay off their cards if their opponent did not go gin.']},
      {title: 'Scoring', subRules: ['Each player counts their deadwood. If the knocker\'s count is lower, the knocker scores the difference.', 'If the knocker did not go gin, and the counts are equal or the knocker\'s count is greater, the knocker has been undercut. the non-knocking player gets the difference and a 10 point bonus.', 'If a player goes gin, they get a 20 point bonus plus the opponents deadwood count.', 'The game continues until one player\'s cumulative score reaches 100 points or more. This player then receives an additional bonus of 100 points. If the loser failed to score anything at all during the game, then the winner\'s bonus is 200 points rather than 100.', 'Each player adds a further 20 points for each hand they won. This is called the line bonus or box bonus. These additional points cannot be counted as part of the 100 needed to win the game.', 'The player with the highest score wins']}];

export const DATA = [
  {
    col1: 'Hello',
    col2: 'World',
  },
  {
    col1: 'react-table',
    col2: 'rocks',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
];

export const COLUMNS = [
  {
    Header: 'Column 1',
    accessor: 'col1', // accessor is the "key" in the data
  },
  {
    Header: 'Column 2',
    accessor: 'col2',
  },
];