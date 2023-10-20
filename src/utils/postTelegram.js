export async function sendFormToTelegram(message) {
  const botToken = "6191222838:AAE4lVSd7euNWCa9MazuUtt_jI1wS3yRvEI";
  const chatId = "-4067620319";
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
    if (response.ok) {
      console.log("Form was send!");
      alert("Дякуємо! Форма успішно надіслана.");
    } else {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}
