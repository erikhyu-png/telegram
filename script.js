// Troque pelo link do seu canal, grupo ou bot do Telegram.
const TELEGRAM_URL = "https://t.me/SEU_CANAL";

const telegramLink = document.querySelector("#telegram-link");
if (telegramLink && TELEGRAM_URL !== "https://t.me/SEU_CANAL") {
  telegramLink.href = TELEGRAM_URL;
}
