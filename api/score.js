export default async function handler(req, res) {
  const response = await fetch("https://allrounderscoreboard.onrender.com/score?id=105762");
  const data = await response.json();
  
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json(data);
}
