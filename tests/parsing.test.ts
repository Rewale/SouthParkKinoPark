import ParseSeasons, {ParseSeries} from "../services/parser";

test('parse all seasons', async () => {
  const seasons = await ParseSeasons()
  expect(seasons.length).toBe(26)
  let firstSeason = seasons.reverse()[1];
  expect(firstSeason.num).toBe(1)
  expect(firstSeason.url).toBe("https://sp.freehat.cc/episode/season-1/")
});
test('parse all series', async () => {
  const url = 'https://sp.freehat.cc/episode/season-1/'
  const episodes = await ParseSeries(url)
  expect(episodes?.length).toBe(13)

  const firstEpisode = episodes?.at(0)
  expect(firstEpisode?.name).toBe("Мамаша Картмана — грязная шлюха")
  expect(firstEpisode?.episode).toBe(13)
  expect(firstEpisode?.season).toBe(1)
  expect(firstEpisode?.preview_url).toBe("https://sp.freehat.cc/upload/iblock/79f/season113_big.jpg")
});
