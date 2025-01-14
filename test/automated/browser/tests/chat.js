async function interactiveChatTest(
  browser,
  page,
  newName,
  chatMessage,
  device
) {
  it('should have the chat input', async () => {
    await page.waitForSelector('#message-input');
  });

  it('should have the chat input enabled', async () => {
    const isDisabled = await page.evaluate(
      'document.querySelector("#message-input").getAttribute("disabled")'
    );
    expect(isDisabled).not.toBe('true');
  });

  it('should allow typing a chat message', async () => {
    await page.waitForSelector('#message-input');
    await page.evaluate(() => document.querySelector('#message-input').click());
    await page.waitForTimeout(1000);
    await page.focus('#message-input');
    await page.keyboard.type(chatMessage);
    page.keyboard.press('Enter');
  });
}

module.exports.interactiveChatTest = interactiveChatTest;
