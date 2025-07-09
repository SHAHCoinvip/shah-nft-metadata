const fs = require('fs');

for (let i = 1; i <= 100; i++) {
  const metadata = {
    name: `SHAH GOLD NFT #${i}`,
    description: `Exclusive SHAH GOLD NFT #${i} with access perks and staking boosts.`,
    image: `https://shahcoinvip.vercel.app/images/${i}.png`,
    attributes: [
      { trait_type: "Tier", value: "VIP" },
      { trait_type: "ID", value: `${i}` }
    ]
  };

  fs.writeFileSync(`public/metadata/${i}.json`, JSON.stringify(metadata, null, 2));
  fs.writeFileSync(`public/images/${i}.png`, ""); // Empty placeholder file
}

console.log("✅ 100 metadata and placeholder image files generated.");

