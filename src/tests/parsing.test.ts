import ParseSeasons, {ParseVideoUrl, ParseSeries} from "../services/parser";

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
  expect(episodes.length).toBeGreaterThan(0)

  for (const episode of episodes) {
    expect(episode.name).not.toBeNull()
    expect(episode.episode).toBeGreaterThan(0)
    expect(episode.season).toBeGreaterThan(0)
    expect(episode.preview_url).toMatch(new RegExp(".jpg$"))
    expect(episode.html_url).not.toBeNull()
  }
});

test('parse m3u8 url', async () =>{

  const url = "https://sp.freehat.cc/episode/316/"
  const m3u8Url = await ParseVideoUrl(url)
  expect(m3u8Url).toMatch(new RegExp(".m3u8$"))
})
test('parse mp4 url', async () =>{

  const url = "https://sp.freehat.cc/episode/101/"
  const m3u8Url = await ParseVideoUrl(url)
  expect(m3u8Url).toMatch(new RegExp(".mp4$"))
})
