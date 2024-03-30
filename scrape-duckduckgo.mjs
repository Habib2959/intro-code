import puppeteer from "puppeteer";

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		userDataDir: "temporary",
	});
	const page = await browser.newPage();

	// Navigate the duckduckgo.com
	await page.goto("https://duckduckgo.com/", {
		waitUntil: "networkidle2",
		timeout: 60000,
	});

	// Search for "habib2959 github" and take a screenshot
	await page.waitForSelector("#searchbox_input");
	await page.type("#searchbox_input", "habib2959 github", { delay: 100 });
	await page.click("button[type=submit]");
	await page.waitForSelector("[data-testid='result-extras-url-link']");
	await page.screenshot({ path: "habib_github.png" });

	// close the browser
	await browser.close();
})();
