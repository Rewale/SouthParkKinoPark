import ParseSeasons from "../services/parser";

test('parse all seasons', async () => {
  const seasons = await ParseSeasons()
  expect(seasons.length).toBe(26)
  let firstSeason = seasons.reverse()[1];
  expect(firstSeason.num).toBe(1)
  expect(firstSeason.url).toBe("https://sp.freehat.cc/episode/season-1/")
});