import parse from "node-html-parser";


export default async function ParseSeasons(): Promise<SeasonModel[]> {
  const url = "https://sp.freehat.cc/"
  const response = await fetch(url);
  const html = await response.text()
  const root = parse(html)
  const seasons_li = root.querySelectorAll("#serial-ep > li")
  return seasons_li.map((value, index, array) => {

    const num = Number(value.textContent)
    const url = value.getElementsByTagName('a')[0].getAttribute('href') || ""

    const episode: SeasonModel = {
      num: num,
      url: url
    }
    return episode

  })
}

export async function ParseSeries(seasonUrl: string): Promise<EpisodeModel[]> {
  const response = await fetch(seasonUrl);
  const html = await response.text()
  const root = parse(html)
  const series_table_block = root.querySelector(".ep_blocks_table")
  if (series_table_block === null)
    return []
  const series_table = series_table_block.querySelectorAll('.ep_block_center')

  return series_table.map((value) => {
    const url = value.getElementsByTagName('a')[0].getAttribute('href') || ""
    const imageUrl = value.getElementsByTagName('img')[0].getAttribute('src')
    const name = value.querySelector('.episode-name')?.textContent.trim() || ""
    const episode_num = Number(value.querySelector('.episode-num')
      ?.getElementsByTagName('span')[1].textContent)
    const season_num = Number(value.querySelector('.episode-num')
      ?.getElementsByTagName('span')[0].textContent)

    const series: EpisodeModel = {
      season: season_num,
      episode: episode_num,
      html_url: url,
      name: name,
      preview_url: "https://sp.freehat.cc" + imageUrl,
      video_url: undefined,
    }
    return series
  })
}

// Парсит url самого видео в формате mp4 или m3u8
export async function ParseVideoUrl(episodeHtmlUrl: string): Promise<string> {
  const response = await fetch(episodeHtmlUrl)
  const html = await response.text()
  const root = parse(html)
  const scriptJsonText = root.querySelector('script[type="application/ld+json"]')?.textContent;
  if (scriptJsonText == undefined) {
    throw new Error("Не удалось спарсить m3u8 файл")
  }
  const json = JSON.parse(scriptJsonText)
  return json['contentUrl']
}