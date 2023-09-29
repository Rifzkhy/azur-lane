# Azur Lane Ship Girl Information Scraper

![Shinano](https://i.imgur.com/PgPhVEc.png)

<div align="center">
<img alt="Discord" src="https://img.shields.io/discord/1047444508176023572?style=for-the-badge&color=%23e3e3e3&logo=discord&&logoColor=%23e3e3e3">
  <img alt="npm" src="https://img.shields.io/npm/dt/%40rifzkhy%2Fazur-lane?style=for-the-badge&color=%23e3e3e3">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/rifzkhy/azur-lane?style=for-the-badge&color=%23e3e3e3">
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/rifzkhy/azur-lane?style=for-the-badge&color=%23e3e3e3">
  <img alt="GitHub" src="https://img.shields.io/github/license/rifzkhy/azur-lane?style=for-the-badge&color=%23e3e3e3">
</div>

### The picture above is only an illustration 

This Node.js module allows you to scrape Azur Lane ship girl information from [Azurlane Wiki](https://azurlane.koumakan.jp/).

## Installation

You can install this module using npm:

```bash
npm install @rifzkhy/azur-lane
```

## Example
Here's an example of how to use this module in your Node.js code:
```javascript
const azurlane = require("./index.js");

const shipname = "shinano";

azurlane(shipname)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Output
The azurlane function returns detailed information about the specified ship girl. Here's an example of the output structure:
```javascript
{
  banner: 'https://azurlane.netojuu.com/images/4/42/ShinanoBanner.png',
  skin: 'https://azurlane.netojuu.com/images/2/2f/ShinanoShipyardIcon.png',
  chibi: 'https://azurlane.netojuu.com/images/5/5f/ShinanoChibi.png',
  faction: 'https://azurlane.netojuu.com/images/thumb/e/e5/Jp_1.png/326px-Jp_1.png',
  category: 'https://azurlane.netojuu.com/images/thumb/6/61/CV_img0.png/49px-CV_img0.png',
  voice: 'https://azurlane.netojuu.com/images/7/7f/Shinano_TitleScreenJP.ogg',
  name: 'Shinano',
  title: 'IJN Shinano',
  info: {
    rarity: 'Ultra Rare ★★★★★★',
    construction: '05:15:00',
    class: 'Yamato',
    faction: 'Sakura Empire',
    category: 'Aircraft Carrier',
    voice: 'Mamiko Noto',
    illustrator: '侑了个侑',
    drop: "Available in Limited Construction during the Dreamwaker's Butterfly event"
  },
  techpoint: {
    collection: '26',
    maxlimitbreak: '52',
    level120: '39',
    total: '117'
  },
  limitbreak: {
    first: 'Slot 2 Planes +1 / Dive Bomber Efficiency +5% / Can Equip Dive Bombers/Torpedo Bombers in the Fighters slot',
    second: 'Hangar Capacity +1 / Slot 3 Planes +2 / Torpedo Bomber Efficiency +10%',
    third: 'All Aircraft +1 / All Plane Efficiency +5%'
  },
  skills: {
    skill1: {
      icon: 'https://azurlane.netojuu.com/images/d/d8/Skill_13580.png',
      name: "Hope's Tempest",
      description: "3s after the battle starts: launches a Saiun recon flight. When this ship launches an Airstrike: launches an additional Lv.1 (Lv.10) Shiden Kai 2, Ryuusei, Shinano launches all three airstrikes Saiun airstrike. Saiuns do not attack, but decrease the FP, TRP, AVIIngame doesn't mention this, and AA of one random enemy (humanoids prioritized) by 3% and increase the damage they take by 3% until the battle ends. This debuff can stack up 
to three times."
    },
    skill2: {
      icon: 'https://azurlane.netojuu.com/images/8/8b/Skill_13590.png',
      name: "Dreamwaker's Bow[Operation Siren]",
      description: "Every 15s: fires a Lv.1 (Lv.10) special barrage. During the 1st and 2nd battles this ship fights in during a sortie: increases this 
ship's AVI by 5% (15%). When the fleet this ship is NOT in starts its 3rd, 4th, or 5th battles of a sortie, launches a Lv.1 (Lv.10) airstrike (DMG is based on the skill's level) 15s after the battle starts. [Operation Siren] Every 15s: fires a Lv.1 (Lv.10) special barrage. During the 1st and 2nd battles this ship fights in during a sortie: increases this ship's AVI by 5% (15%). When a fleet this ship is NOT in starts its 3rd or 4th battles of a sortie: fires a Lv.1 (Lv.10) barrage (DMG is based on the skill's level) 15s after the battle starts. [This skill's sortie battle counter resets when moving to a new area or changing your formation within Operation Siren.]"
    },
    skill3: {
      icon: 'https://azurlane.netojuu.com/images/2/20/Skill_13600.png',
      name: 'Protector of the New Moon',
      description: "While this ship is afloat: increases the FP, EVA, and ASW of your DDs by 5% (15%). If the fleet this ship is in contains 3 (or more) Sakura Empire ships: decreases this ship's DMG taken from Main Guns and Aircraft by 10% (20%) and increases AVI and Accuracy by 5% (15%) for all your Sakura Empire CVs and CVLsIn-game only mentions CVs, but IJN CVLs are also affected by this buff."
    },
    skill4: { icon: undefined, name: undefined, description: undefined },
    skill5: { icon: undefined, name: undefined, description: undefined },
    skill6: { icon: undefined, name: undefined, description: undefined }
  }
}
```
This output provides comprehensive information about the specified ship girl's attributes, skills, and more.

Feel free to customize and use this module to retrieve Azur Lane ship girl information for your applications.

I've improved the formatting and provided a more detailed explanation of the module and its output. You can replace the placeholder text with actual information as needed.