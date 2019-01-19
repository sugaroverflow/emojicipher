# emojicipher
Hide messages in emojis.

Demo at https://andri.io/emojicipher

I got the emojis and their order from http://unicode.org/emoji/charts/full-emoji-list.html (warning, huge page)


# Rules

You enter either letters with spaces [27 total] or emojis [1791 total] separated by spaces and get the equivalent of the opposite alphabet.

There will be around 2.27 letters for every emoji if there are 27 letters and 1791 emojis. It would be 2.0 if there were 729 emojis and 3.0 if there were 19683 emojis.

The emojis have to be separated by spaces, because some emojis consist of two or more characters and separating them is a nightmare.

I guess this is more an encoding than a cipher.

# How it works

This table should explain it pretty well:

![table](https://i.imgur.com/awl0zED.png)

# Examples

hello <=> `😀 💘 ⚫`

what is up <=> `😚 🖕🏿 💵 💬 🏜`

the quick brown fox jumps over the lazy dog <=> `🦇 🇦🇷 🤶🏽 🇯🇲 ♣ 🕹 🐪 🇳🇺 🤰🏽 🔲 🇲🇷 🇲🇱 🇸🇱 🇸🇬 🍑 ♐ 🏜 📺 🇨🇦`

send nudes <=> `😘 👨‍👩‍👦 👞 🏉 🏭`

# Credit

Adapted from [ndri/emojicipher](https://github.com/ndri/emojicipher)
