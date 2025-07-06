export default function getHeroesHealthStatus(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}
