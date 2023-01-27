import players from '../../utils/datasets/players';
console.log(players);

export default function handler(req, res) {
  res.status(200).json({ players });
}
