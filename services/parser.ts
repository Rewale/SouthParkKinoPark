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