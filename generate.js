const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "public", "metadata");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const baseImageURL = "https://raw.githubusercontent.com/SHAHCoinvip/shah-nft-metadata/main/public/images/";
const externalBaseURL = "https://shah.vip/nft/";

const names = [
  "Shah of Flames", "Crown of Eternity", "Orb of Mithra", "Golden Revolution", "Thronebreaker",
  "Fire of Zarvan", "Lionheart Legacy", "The Gilded One", "Eternal Dawn", "Star of Susa",
  "Ancestral Crown", "Sword of Justice", "Imperial Ashes", "Shadow of the Throne", "Sacred Flame",
  "Heir of Gold", "Whisper of the Crown", "Oracle’s Crest", "Sovereign Blade", "Light of Kings",
  "Voice of Faravahar", "Chains of Glory", "Phoenix Sigil", "Temple of Gold", "Fatebound Seal",
  "Zeal of the Empire", "Flameforged Emblem", "Lion’s Roar", "Legacy of Resistance", "Warden of Thrones",
  "The Forbidden Jewel", "Power of the Eternal", "Cosmic Dominion", "Golden Eclipse", "The Last Monarch",
  "Royal Mandate", "Sunfire Crown", "Crest of Unity", "Echo of Kings", "Golden Serpent",
  "The Divine Token", "Shimmer of the Past", "Royal Architect", "Orbital Throne", "The Gilded Prophet",
  "Banner of Legacy", "Jewel of Anahita", "Chalice of Truth", "Blood of Kings", "Crowned Star",
  "Noblefire", "Flame of Freedom", "The Hidden Heir", "Iron Will, Golden Soul", "Trident of Titans",
  "Soulbound Crown", "The Empress’s Guard", "Zodiac Sovereign", "Ember of Rebellion", "Rise of Mithra",
  "Warlord's Halo", "Thronewalker", "Crimson Kingdom", "Path of Sages", "Eye of Royalty",
  "The Pure Flame", "Shahblade", "The Forgotten Flame", "Dust of Dynasties", "Beacon of Persia",
  "The Untamed Sigil", "Age of the Phoenix", "Firebound Warden", "Ruler of Light", "Kingmaker’s Jewel",
  "The Final Monarch", "Sacred Resistance", "Flamewalker", "Ring of Regeneration", "Lightforged Sigil",
  "Blade of Ancestry", "Flame of Zartosht", "Beacon of Nobility", "Ironclad Flame", "Cosmic Throne",
  "The Radiant Reign", "Emissary of Flame", "Sigil of the Seven", "Banner of the Bold", "The Shah’s Oath",
  "Celestial Dominion", "Flame of Hope", "Herald of Light", "Legacy Unchained", "Crystal Empire",
  "The Phoenix Crown", "Gilded Monarch", "Vow of Gold", "Emberlight Oracle", "Glory of the Lions"
];

const descriptions = names.map(name => {
  return `This SHAH GOLD NFT, titled "${name}", embodies royal strength, ancient mystery, and modern defiance. Grants enhanced staking power and exclusive access in the SHAH ecosystem.`;
});

const symbols = ["Flame", "Crown", "Lion", "Orb", "Sword", "Star"];

for (let i = 0; i < 100; i++) {
  const tier = i >= 90 ? "Legendary" : i >= 60 ? "Rare" : "Common";
  const boost = tier === "Legendary" ? "20%" : tier === "Rare" ? "15%" : "10%";
  const symbol = symbols[i % symbols.length];

  const metadata = {
    name: `SHAH GOLD #${i + 1} – ${names[i]}`,
    description: descriptions[i],
    image: `${baseImageURL}${i + 1}.jpg`,
    external_url: `${externalBaseURL}${i + 1}`,
    attributes: [
      { trait_type: "Tier", value: tier },
      { trait_type: "Boost", value: boost },
      { trait_type: "Symbol", value: symbol }
    ]
  };

  fs.writeFileSync(path.join(outputDir, `${i + 1}.json`), JSON.stringify(metadata, null, 2));
  console.log(`✅ Created metadata: ${i + 1}.json`);
}

console.log("\n🎉 All metadata files generated in /public/metadata/");
