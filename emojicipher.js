var input = document.getElementById("input");
var output = document.getElementById("output");

var textalphabet = document.createElement("input");
var emojialphabet = document.createElement("input");

textalphabet.value = "abcdefghijklmnopqrstuvwxyz ";
emojialphabet.value =  "😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚 ☺ 🙂 🤗 🤔 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 🤓 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 😬 😰 😱 😳 😵 😡 😠 😇 🤠 🤡 🤥 😷 🤒 🤕 🤢 🤧 😈 👿 👹 👺 💀 ☠ 👻 👽 👾 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾 🙈 🙉 🙊 👦 👦🏻 👦🏼 👦🏽 👦🏾 👦🏿 👧 👧🏻 👧🏼 👧🏽 👧🏾 👧🏿 👨 👨🏻 👨🏼 👨🏽 👨🏾 👨🏿 👩 👩🏻 👩🏼 👩🏽 👩🏾 👩🏿 👴 👴🏻 👴🏼 👴🏽 👴🏾 👴🏿 👵 👵🏻 👵🏼 👵🏽 👵🏾 👵🏿 👶 👶🏻 👶🏼 👶🏽 👶🏾 👶🏿 👼 👼🏻 👼🏼 👼🏽 👼🏾 👼🏿 👮 👮🏻 👮🏼 👮🏽 👮🏾 👮🏿 🕵 🕵🏻 🕵🏼 🕵🏽 🕵🏾 🕵🏿 💂 💂🏻 💂🏼 💂🏽 💂🏾 💂🏿 👷 👷🏻 👷🏼 👷🏽 👷🏾 👷🏿 👳 👳🏻 👳🏼 👳🏽 👳🏾 👳🏿 👱 👱🏻 👱🏼 👱🏽 👱🏾 👱🏿 🎅 🎅🏻 🎅🏼 🎅🏽 🎅🏾 🎅🏿 🤶 🤶🏻 🤶🏼 🤶🏽 🤶🏾 🤶🏿 👸 👸🏻 👸🏼 👸🏽 👸🏾 👸🏿 🤴 🤴🏻 🤴🏼 🤴🏽 🤴🏾 🤴🏿 👰 👰🏻 👰🏼 👰🏽 👰🏾 👰🏿 🤵 🤵🏻 🤵🏼 🤵🏽 🤵🏾 🤵🏿 🤰 🤰🏻 🤰🏼 🤰🏽 🤰🏾 🤰🏿 👲 👲🏻 👲🏼 👲🏽 👲🏾 👲🏿 🙍 🙍🏻 🙍🏼 🙍🏽 🙍🏾 🙍🏿 🙎 🙎🏻 🙎🏼 🙎🏽 🙎🏾 🙎🏿 🙅 🙅🏻 🙅🏼 🙅🏽 🙅🏾 🙅🏿 🙆 🙆🏻 🙆🏼 🙆🏽 🙆🏾 🙆🏿 💁 💁🏻 💁🏼 💁🏽 💁🏾 💁🏿 🙋 🙋🏻 🙋🏼 🙋🏽 🙋🏾 🙋🏿 🙇 🙇🏻 🙇🏼 🙇🏽 🙇🏾 🙇🏿 🤦 🤦🏻 🤦🏼 🤦🏽 🤦🏾 🤦🏿 🤷 🤷🏻 🤷🏼 🤷🏽 🤷🏾 🤷🏿 💆 💆🏻 💆🏼 💆🏽 💆🏾 💆🏿 💇 💇🏻 💇🏼 💇🏽 💇🏾 💇🏿 🚶 🚶🏻 🚶🏼 🚶🏽 🚶🏾 🚶🏿 🏃 🏃🏻 🏃🏼 🏃🏽 🏃🏾 🏃🏿 💃 💃🏻 💃🏼 💃🏽 💃🏾 💃🏿 🕺 🕺🏻 🕺🏼 🕺🏽 🕺🏾 🕺🏿 👯 🕴 🗣 👤 👥 🤺 🏇 ⛷ 🏂 🏌 🏄 🏄🏻 🏄🏼 🏄🏽 🏄🏾 🏄🏿 🚣 🚣🏻 🚣🏼 🚣🏽 🚣🏾 🚣🏿 🏊 🏊🏻 🏊🏼 🏊🏽 🏊🏾 🏊🏿 ⛹ ⛹🏻 ⛹🏼 ⛹🏽 ⛹🏾 ⛹🏿 🏋 🏋🏻 🏋🏼 🏋🏽 🏋🏾 🏋🏿 🚴 🚴🏻 🚴🏼 🚴🏽 🚴🏾 🚴🏿 🚵 🚵🏻 🚵🏼 🚵🏽 🚵🏾 🚵🏿 🏎 🏍 🤸 🤸🏻 🤸🏼 🤸🏽 🤸🏾 🤸🏿 🤼 🤼🏻 🤼🏼 🤼🏽 🤼🏾 🤼🏿 🤽 🤽🏻 🤽🏼 🤽🏽 🤽🏾 🤽🏿 🤾 🤾🏻 🤾🏼 🤾🏽 🤾🏾 🤾🏿 🤹 🤹🏻 🤹🏼 🤹🏽 🤹🏾 🤹🏿 👫 👬 👭 💏 👩‍❤️‍💋‍👨 👨‍❤️‍💋‍👨 👩‍❤️‍💋‍👩 💑 👩‍❤️‍👨 👨‍❤️‍👨 👩‍❤️‍👩 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 🏻 🏼 🏽 🏾 🏿 💪 💪🏻 💪🏼 💪🏽 💪🏾 💪🏿 🤳 🤳🏻 🤳🏼 🤳🏽 🤳🏾 🤳🏿 👈 👈🏻 👈🏼 👈🏽 👈🏾 👈🏿 👉 👉🏻 👉🏼 👉🏽 👉🏾 👉🏿 ☝ ☝🏻 ☝🏼 ☝🏽 ☝🏾 ☝🏿 👆 👆🏻 👆🏼 👆🏽 👆🏾 👆🏿 🖕 🖕🏻 🖕🏼 🖕🏽 🖕🏾 🖕🏿 👇 👇🏻 👇🏼 👇🏽 👇🏾 👇🏿 ✌ ✌🏻 ✌🏼 ✌🏽 ✌🏾 ✌🏿 🤞 🤞🏻 🤞🏼 🤞🏽 🤞🏾 🤞🏿 🖖 🖖🏻 🖖🏼 🖖🏽 🖖🏾 🖖🏿 🤘 🤘🏻 🤘🏼 🤘🏽 🤘🏾 🤘🏿 🤙 🤙🏻 🤙🏼 🤙🏽 🤙🏾 🤙🏿 🖐 🖐🏻 🖐🏼 🖐🏽 🖐🏾 🖐🏿 ✋ ✋🏻 ✋🏼 ✋🏽 ✋🏾 ✋🏿 👌 👌🏻 👌🏼 👌🏽 👌🏾 👌🏿 👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿 👎 👎🏻 👎🏼 👎🏽 👎🏾 👎🏿 ✊ ✊🏻 ✊🏼 ✊🏽 ✊🏾 ✊🏿 👊 👊🏻 👊🏼 👊🏽 👊🏾 👊🏿 🤛 🤛🏻 🤛🏼 🤛🏽 🤛🏾 🤛🏿 🤜 🤜🏻 🤜🏼 🤜🏽 🤜🏾 🤜🏿 🤚 🤚🏻 🤚🏼 🤚🏽 🤚🏾 🤚🏿 👋 👋🏻 👋🏼 👋🏽 👋🏾 👋🏿 👏 👏🏻 👏🏼 👏🏽 👏🏾 👏🏿 ✍ ✍🏻 ✍🏼 ✍🏽 ✍🏾 ✍🏿 👐 👐🏻 👐🏼 👐🏽 👐🏾 👐🏿 🙌 🙌🏻 🙌🏼 🙌🏽 🙌🏾 🙌🏿 🙏 🙏🏻 🙏🏼 🙏🏽 🙏🏾 🙏🏿 🤝 🤝🏻 🤝🏼 🤝🏽 🤝🏾 🤝🏿 💅 💅🏻 💅🏼 💅🏽 💅🏾 💅🏿 👂 👂🏻 👂🏼 👂🏽 👂🏾 👂🏿 👃 👃🏻 👃🏼 👃🏽 👃🏾 👃🏿 👣 👀 👁 👁‍🗨 👅 👄 💋 💘 ❤ 💓 💔 💕 💖 💗 💙 💚 💛 💜 🖤 💝 💞 💟 ❣ 💌 💤 💢 💣 💥 💦 💨 💫 💬 🗨 🗯 💭 🕳 👓 🕶 👔 👕 👖 👗 👘 👙 👚 👛 👜 👝 🛍 🎒 👞 👟 👠 👡 👢 👑 👒 🎩 🎓 ⛑ 📿 💄 💍 💎 🐵 🐒 🦍 🐶 🐕 🐩 🐺 🦊 🐱 🐈 🦁 🐯 🐅 🐆 🐴 🐎 🦌 🦄 🐮 🐂 🐃 🐄 🐷 🐖 🐗 🐽 🐏 🐑 🐐 🐪 🐫 🐘 🦏 🐭 🐁 🐀 🐹 🐰 🐇 🐿 🦇 🐻 🐨 🐼 🐾 🦃 🐔 🐓 🐣 🐤 🐥 🐦 🐧 🕊 🦅 🦆 🦉 🐸 🐊 🐢 🦎 🐍 🐲 🐉 🐳 🐋 🐬 🐟 🐠 🐡 🦈 🐙 🐚 🦀 🦐 🦑 🦋 🐌 🐛 🐜 🐝 🐞 🕷 🕸 🦂 💐 🌸 💮 🏵 🌹 🥀 🌺 🌻 🌼 🌷 🌱 🌲 🌳 🌴 🌵 🌾 🌿 ☘ 🍀 🍁 🍂 🍃 🍇 🍈 🍉 🍊 🍋 🍌 🍍 🍎 🍏 🍐 🍑 🍒 🍓 🥝 🍅 🥑 🍆 🥔 🥕 🌽 🌶 🥒 🍄 🥜 🌰 🍞 🥐 🥖 🥞 🧀 🍖 🍗 🥓 🍔 🍟 🍕 🌭 🌮 🌯 🥙 🥚 🍳 🥘 🍲 🥗 🍿 🍱 🍘 🍙 🍚 🍛 🍜 🍝 🍠 🍢 🍣 🍤 🍥 🍡 🍦 🍧 🍨 🍩 🍪 🎂 🍰 🍫 🍬 🍭 🍮 🍯 🍼 🥛 ☕ 🍵 🍶 🍾 🍷 🍸 🍹 🍺 🍻 🥂 🥃 🍽 🍴 🥄 🔪 🏺 🌍 🌎 🌏 🌐 🗺 🗾 🏔 ⛰ 🌋 🗻 🏕 🏖 🏜 🏝 🏞 🏟 🏛 🏗 🏘 🏙 🏚 🏠 🏡 🏢 🏣 🏤 🏥 🏦 🏨 🏩 🏪 🏫 🏬 🏭 🏯 🏰 💒 🗼 🗽 ⛪ 🕌 🕍 ⛩ 🕋 ⛲ ⛺ 🌁 🌃 🌄 🌅 🌆 🌇 🌉 ♨ 🌌 🎠 🎡 🎢 💈 🎪 🎭 🖼 🎨 🎰 🚂 🚃 🚄 🚅 🚆 🚇 🚈 🚉 🚊 🚝 🚞 🚋 🚌 🚍 🚎 🚐 🚑 🚒 🚓 🚔 🚕 🚖 🚗 🚘 🚙 🚚 🚛 🚜 🚲 🛴 🛵 🚏 🛣 🛤 ⛽ 🚨 🚥 🚦 🚧 🛑 ⚓ ⛵ 🛶 🚤 🛳 ⛴ 🛥 🚢 ✈ 🛩 🛫 🛬 💺 🚁 🚟 🚠 🚡 🚀 🛰 🛎 🚪 🛌 🛏 🛋 🚽 🚿 🛀 🛀🏻 🛀🏼 🛀🏽 🛀🏾 🛀🏿 🛁 ⌛ ⏳ ⌚ ⏰ ⏱ ⏲ 🕰 🕛 🕧 🕐 🕜 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 🕙 🕥 🕚 🕦 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌙 🌚 🌛 🌜 🌡 ☀ 🌝 🌞 ⭐ 🌟 🌠 ☁ ⛅ ⛈ 🌤 🌥 🌦 🌧 🌨 🌩 🌪 🌫 🌬 🌀 🌈 🌂 ☂ ☔ ⛱ ⚡ ❄ ☃ ⛄ ☄ 🔥 💧 🌊 🎃 🎄 🎆 🎇 ✨ 🎈 🎉 🎊 🎋 🎍 🎎 🎏 🎐 🎑 🎀 🎁 🎗 🎟 🎫 🎖 🏆 🏅 🥇 🥈 🥉 ⚽ ⚾ 🏀 🏐 🏈 🏉 🎾 🎱 🎳 🏏 🏑 🏒 🏓 🏸 🥊 🥋 🥅 🎯 ⛳ ⛸ 🎣 🎽 🎿 🎮 🕹 🎲 ♠ ♥ ♦ ♣ 🃏 🀄 🎴 🔇 🔈 🔉 🔊 📢 📣 📯 🔔 🔕 🎼 🎵 🎶 🎙 🎚 🎛 🎤 🎧 📻 🎷 🎸 🎹 🎺 🎻 🥁 📱 📲 ☎ 📞 📟 📠 🔋 🔌 💻 🖥 🖨 ⌨ 🖱 🖲 💽 💾 💿 📀 🎥 🎞 📽 🎬 📺 📷 📸 📹 📼 🔍 🔎 🔬 🔭 📡 🕯 💡 🔦 🏮 📔 📕 📖 📗 📘 📙 📚 📓 📒 📃 📜 📄 📰 🗞 📑 🔖 🏷 💰 💴 💵 💶 💷 💸 💳 💹 💱 💲 ✉ 📧 📨 📩 📤 📥 📦 📫 📪 📬 📭 📮 🗳 ✏ ✒ 🖋 🖊 🖌 🖍 📝 💼 📁 📂 🗂 📅 📆 🗒 🗓 📇 📈 📉 📊 📋 📌 📍 📎 🖇 📏 📐 ✂ 🗃 🗄 🗑 🔒 🔓 🔏 🔐 🔑 🗝 🔨 ⛏ ⚒ 🛠 🗡 ⚔ 🔫 🏹 🛡 🔧 🔩 ⚙ 🗜 ⚗ ⚖ 🔗 ⛓ 💉 💊 🚬 ⚰ ⚱ 🗿 🛢 🔮 🛒 🏧 🚮 🚰 ♿ 🚹 🚺 🚻 🚼 🚾 🛂 🛃 🛄 🛅 ⚠ 🚸 ⛔ 🚫 🚳 🚭 🚯 🚱 🚷 📵 🔞 ☢ ☣ ⬆ ↗ ➡ ↘ ⬇ ↙ ⬅ ↖ ↕ ↔ ↩ ↪ ⤴ ⤵ 🔃 🔄 🔙 🔚 🔛 🔜 🔝 🛐 ⚛ 🕉 ✡ ☸ ☯ ✝ ☦ ☪ ☮ 🕎 🔯 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔀 🔁 🔂 ▶ ⏩ ⏭ ⏯ ◀ ⏪ ⏮ 🔼 ⏫ 🔽 ⏬ ⏸ ⏹ ⏺ ⏏ 🎦 🔅 🔆 📶 📳 📴 ♻ 📛 ⚜ 🔰 🔱 ⭕ ✅ ☑ ✔ ✖ ❌ ❎ ➕ ➖ ➗ ➰ ➿ 〽 ✳ ✴ ❇ ‼ ⁉ ❓ ❔ ❕ ❗ 〰 © ® ™ #️⃣ *️⃣ 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 💯 🔠 🔡 🔢 🔣 🔤 🅰 🆎 🅱 🆑 🆒 🆓 ℹ 🆔 Ⓜ 🆕 🆖 🅾 🆗 🅿 🆘 🆙 🆚 🈁 🈂 🈷 🈶 🈯 🉐 🈹 🈚 🈲 🉑 🈸 🈴 🈳 ㊗ ㊙ 🈺 🈵 ▪ ▫ ◻ ◼ ◽ ◾ ⬛ ⬜ 🔶 🔷 🔸 🔹 🔺 🔻 💠 🔘 🔲 🔳 ⚪ ⚫ 🔴 🔵 🏁 🚩 🎌 🏴 🏳 🇦🇨 🇦🇩 🇦🇪 🇦🇫 🇦🇬 🇦🇮 🇦🇱 🇦🇲 🇦🇴 🇦🇶 🇦🇷 🇦🇸 🇦🇹 🇦🇺 🇦🇼 🇦🇽 🇦🇿 🇧🇦 🇧🇧 🇧🇩 🇧🇪 🇧🇫 🇧🇬 🇧🇭 🇧🇮 🇧🇯 🇧🇱 🇧🇲 🇧🇳 🇧🇴 🇧🇶 🇧🇷 🇧🇸 🇧🇹 🇧🇻 🇧🇼 🇧🇾 🇧🇿 🇨🇦 🇨🇨 🇨🇩 🇨🇫 🇨🇬 🇨🇭 🇨🇮 🇨🇰 🇨🇱 🇨🇲 🇨🇳 🇨🇴 🇨🇵 🇨🇷 🇨🇺 🇨🇻 🇨🇼 🇨🇽 🇨🇾 🇨🇿 🇩🇪 🇩🇬 🇩🇯 🇩🇰 🇩🇲 🇩🇴 🇩🇿 🇪🇦 🇪🇨 🇪🇪 🇪🇬 🇪🇭 🇪🇷 🇪🇸 🇪🇹 🇪🇺 🇫🇮 🇫🇯 🇫🇰 🇫🇲 🇫🇴 🇫🇷 🇬🇦 🇬🇧 🇬🇩 🇬🇪 🇬🇫 🇬🇬 🇬🇭 🇬🇮 🇬🇱 🇬🇲 🇬🇳 🇬🇵 🇬🇶 🇬🇷 🇬🇸 🇬🇹 🇬🇺 🇬🇼 🇬🇾 🇭🇰 🇭🇲 🇭🇳 🇭🇷 🇭🇹 🇭🇺 🇮🇨 🇮🇩 🇮🇪 🇮🇱 🇮🇲 🇮🇳 🇮🇴 🇮🇶 🇮🇷 🇮🇸 🇮🇹 🇯🇪 🇯🇲 🇯🇴 🇯🇵 🇰🇪 🇰🇬 🇰🇭 🇰🇮 🇰🇲 🇰🇳 🇰🇵 🇰🇷 🇰🇼 🇰🇾 🇰🇿 🇱🇦 🇱🇧 🇱🇨 🇱🇮 🇱🇰 🇱🇷 🇱🇸 🇱🇹 🇱🇺 🇱🇻 🇱🇾 🇲🇦 🇲🇨 🇲🇩 🇲🇪 🇲🇫 🇲🇬 🇲🇭 🇲🇰 🇲🇱 🇲🇲 🇲🇳 🇲🇴 🇲🇵 🇲🇶 🇲🇷 🇲🇸 🇲🇹 🇲🇺 🇲🇻 🇲🇼 🇲🇽 🇲🇾 🇲🇿 🇳🇦 🇳🇨 🇳🇪 🇳🇫 🇳🇬 🇳🇮 🇳🇱 🇳🇴 🇳🇵 🇳🇷 🇳🇺 🇳🇿 🇴🇲 🇵🇦 🇵🇪 🇵🇫 🇵🇬 🇵🇭 🇵🇰 🇵🇱 🇵🇲 🇵🇳 🇵🇷 🇵🇸 🇵🇹 🇵🇼 🇵🇾 🇶🇦 🇷🇪 🇷🇴 🇷🇸 🇷🇺 🇷🇼 🇸🇦 🇸🇧 🇸🇨 🇸🇩 🇸🇪 🇸🇬 🇸🇭 🇸🇮 🇸🇯 🇸🇰 🇸🇱 🇸🇲 🇸🇳 🇸🇴 🇸🇷 🇸🇸 🇸🇹 🇸🇻 🇸🇽 🇸🇾 🇸🇿 🇹🇦 🇹🇨 🇹🇩 🇹🇫 🇹🇬 🇹🇭 🇹🇯 🇹🇰 🇹🇱 🇹🇲 🇹🇳 🇹🇴 🇹🇷 🇹🇹 🇹🇻 🇹🇼 🇹🇿 🇺🇦 🇺🇬 🇺🇲 🇺🇸 🇺🇾 🇺🇿 🇻🇦 🇻🇨 🇻🇪 🇻🇬 🇻🇮 🇻🇳 🇻🇺 🇼🇫 🇼🇸 🇽🇰 🇾🇪 🇾🇹 🇿🇦 🇿🇲 🇿🇼";

var alphabet1 = textalphabet.value.split("");
var alphabet2 = emojialphabet.value.split(" ");

// Function that returns the index of the word in all possible combinations
// of the given alphabet
var intify = function(string, alphabet) {
    var number = bigInt();
    for (var i = 0; i < string.length; i++) {
        number = number.add(bigInt(alphabet.length).pow(i));
    }

    var combinations = bigInt(alphabet.length).pow(string.length);
    for (var i = 0; i < string.length; i++) {
        var letter = string[i];
        combinations = combinations.divide(alphabet.length);
        letternumber = bigInt(alphabet.indexOf(letter)).times(combinations);
        number = number.add(letternumber);
    }
    return number;
}

// Function that turns the index into a word using the alphabet
var wordify = function(number, alphabet) {
    var out = [];
    while (true) {
        if (number.leq(alphabet.length)) {
            out.unshift(alphabet[number.minus(1)])
            break;
        }

        var loc = number.mod(alphabet.length);
        loc = loc.add(alphabet.length * loc.isZero());
        out.unshift(alphabet[loc - 1]);
        number = (number.minus(loc)).divide(alphabet.length);
    }
    return out;
}

// Functions for array.some()
var checkfirst = function(e) {
    return alphabet1.indexOf(e) === -1;
}
var checksecond = function(e) {
    return alphabet2.indexOf(e) === -1;
}

// This activates when the input textbox is used
var main = function() {
    var text = input.value.toLowerCase();
    text = text.split("");

    // Check whether the input is correct according to the first alphabet
    if (!(text.some(checkfirst))) {
        var integer = intify(text, alphabet1);
        output.innerHTML = wordify(integer, alphabet2).join(" ");
    } else {

        // Check the second alphabet
        var text = input.value.trim().split(" ");
        if (!(text.some(checksecond))) {
            var integer = intify(text, alphabet2);
            output.innerHTML = wordify(integer, alphabet1).join("");
        } else {
            output.innerHTML = "Invalid input";
        }
    }
}
main()
input.addEventListener("input", main);
