from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:5175"
SCREENSHOTS_DIR = "/Users/fdipietro/Projects/lolai/lolsensei-web/screenshots"

pages = [
    ("homepage", "/"),
    ("features", "/features"),
    ("faq", "/faq"),
    ("pricing", "/pricing"),
]

viewports = [
    ("desktop", 1920, 1080),
    ("mobile", 375, 812),
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    for page_name, path in pages:
        for vp_name, w, h in viewports:
            page = browser.new_page(viewport={"width": w, "height": h})
            url = BASE_URL + path
            page.goto(url, wait_until="networkidle", timeout=30000)
            # Above the fold
            fname_atf = f"{SCREENSHOTS_DIR}/{page_name}_{vp_name}_above_fold.png"
            page.screenshot(path=fname_atf, full_page=False)
            # Full page
            fname_full = f"{SCREENSHOTS_DIR}/{page_name}_{vp_name}_full.png"
            page.screenshot(path=fname_full, full_page=True)
            print(f"Captured: {page_name} / {vp_name}")
            page.close()
    browser.close()
    print("Done.")
