const request = require("request");
const cheerio = require("cheerio");

function searchCharacter(character) {
  return new Promise((resolve, reject) => {
    const source = `https://azurlane.koumakan.jp/w/index.php?search=${character}&title=Special%3ASearch&go=Go`;

    request(source, (error, response, html) => {
      if (error || response.statusCode !== 200) {
        reject(error);
        return;
      }

      const $ = cheerio.load(html);
      const shipSearch = $(".mw-search-results li:first-child div a");
      const searchCorrection = shipSearch.attr("href");

      if (searchCorrection) {
        const url = `https://azurlane.koumakan.jp${searchCorrection}`;
        request(url, (error, response, html) => {
          if (error || response.statusCode !== 200) {
            reject(error);
            return;
          }
          search(html, resolve, url);
        });
      } else {
        const url = `https://azurlane.koumakan.jp/w/index.php?search=${character}`;
        request(url, (error, response, html) => {
          if (error || response.statusCode !== 200) {
            reject(error);
            return;
          }
          search(html, resolve, url);
        });
      }
    });
  });
}

function search(html, resolve, url) {
  const $ = cheerio.load(html);
  const shipbannerSearch = $(".shipgirl-banner span a img");
  const banner = shipbannerSearch.attr("src") || ""; //! banner

  const shipskinSearch = $(".ship-card img");
  const skin = shipskinSearch.attr("src") || ""; //! skin

  const shipfactionSearch = $(".card-logo img");
  const faction = shipfactionSearch.attr("src") || ""; //! faction

  const shipcategorySearch = $(".card-class-stamp img");
  const category = shipcategorySearch.attr("src") || ""; //! category

  const shipvoiceSearch = $(".card-info-tbl .sm2_button");
  const voice = shipvoiceSearch.attr("href") || ""; //! voice

  const name = $(".mw-page-title-main").text().trim(); //! name

  const title = $(".card-headline span[lang=en]").text().trim(); //! title

  const galleryUrl = url + "/Gallery";

  request(galleryUrl, (error, response, html) => {
    if (error || response.statusCode !== 200) {
      reject(error);
      return;
    }

    const $gallery = cheerio.load(html);
    const shipchibiSearch = $gallery(".shipskin-chibi img");
    const chibi = shipchibiSearch.attr("src") || ""; //! chibi

    // TODO: ship information
    const shiprarity = $(".card-info-tbl tr:nth-child(2) td").text().trim(); //! rarity
    const shipconstruction = $(".card-info-tbl tr:nth-child(1) td")
      .text()
      .trim(); //! construction
    const shipclass = $(".card-info-tbl tr:nth-child(5) td")
      .text()
      .replace(/\n/g, "")
      .trim(); //! class
    const shipfaction = $(".card-info-tbl tr:nth-child(4) td").text().trim(); //! faction
    const shipcategory = $(".card-info-tbl tr:nth-child(3) td")
      .text()
      .replace(/\n|→  Guided-missile Destroyer/g, "")
      .trim(); //! category
    const shipvoice = $(".card-info-tbl tr:nth-child(6) td")
      .text()
      .replace(/Play/g, "")
      .trim(); //! voice
    const shipillustrator = $(".card-info-tbl tr:nth-child(7) td")
      .text()
      .trim(); //! illustrator
    const shipdrop = $(".drop-notes td").text().trim(); //! drop

    const info = {
      rarity: shiprarity,
      construction: shipconstruction,
      class: shipclass,
      faction: shipfaction,
      category: shipcategory,
      voice: shipvoice,
      illustrator: shipillustrator,
      drop: shipdrop,
    };

    // TODO: tech points
    const techcollection = $(".ship-fleettech tr:nth-child(2) td:nth-child(3)")
      .text()
      .trim(); //! collection
    const techmaxlimitbreak = $(
      ".ship-fleettech tr:nth-child(3) td:nth-child(3)"
    )
      .text()
      .trim(); //! maxlimitbreak
    const techlevel120 = $(".ship-fleettech tr:nth-child(4) td:nth-child(3)")
      .text()
      .trim(); //! level120
    const techtotal = $(".ship-fleettech tr:nth-child(2) td:nth-child(4)")
      .text()
      .trim(); //! total

    const techpoint = {
      collection: techcollection,
      maxlimitbreak: techmaxlimitbreak,
      level120: techlevel120,
      total: techtotal,
    };

    // TODO: limit break
    const firstlimitbreak = $(".ship-limit-break tr:nth-child(3) td")
      .text()
      .trim(); //! first
    const secondlimitbreak = $(".ship-limit-break tr:nth-child(4) td")
      .text()
      .trim(); //! second
    const thirdlimitbreak = $(".ship-limit-break tr:nth-child(5) td")
      .text()
      .trim(); //! third

    const limitbreak = {
      first: firstlimitbreak,
      second: secondlimitbreak,
      third: thirdlimitbreak,
    };

    // TODO: skills
    const skills = {};

    for (let i = 2; i <= 7; i++) {
      const shipskilliconSearch = $(
        ".ship-skills tr:nth-child(" + i + ") td img"
      );
      const skillicon = shipskilliconSearch.attr("src") || "";
      const skillname = $(".ship-skills tr:nth-child(" + i + ") td b")
        .text()
        .trim();
      const skilldescription = $(
        ".ship-skills tr:nth-child(" + i + ") td:last-child"
      )
        .text()
        .replace(/\(\) /g, "")
        .replace(/\.mw-parser-output.*?}/g, "")
        .replace(/body\..*?\s/g, "")
        .replace(/body:not\(.+?\):not\(.+?\)\s*/g, "")
        .replace(/ andIn-game[^;]*;/g, "")
        .replace(/\s+/g, " ")
        .replace(/↑[^.]*|\n/g, "")
        .trim();

      skills["skill" + (i - 1)] = {
        icon: skillicon,
        name: skillname,
        description: skilldescription,
      };
    }

    resolve({
      url,
      banner,
      skin,
      chibi,
      faction,
      category,
      voice,
      name,
      title,
      info,
      techpoint,
      limitbreak,
      skills,
    });
  });
}

module.exports = {
  searchCharacter,
};
