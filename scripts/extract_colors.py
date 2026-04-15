from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:5175"

selectors_to_check = {
    "/": {
        "body_bg": "body",
        "navbar_bg": "nav",
        "logo": "nav a[href='/']",
        "cta_button_primary": "a[href*='download'], button:has-text('DOWNLOAD')",
        "hero_heading": "h1",
        "hero_accent_word": "h1 span",
    },
    "/features": {
        "body_bg": "body",
        "hero_heading": "h1",
        "cta_button": "a:has-text('START YOUR FREE TRIAL'), a:has-text('DOWNLOAD')",
    },
    "/pricing": {
        "body_bg": "body",
        "pro_card_cta": "button:has-text('UNLOCK PRO MASTERY'), a:has-text('UNLOCK PRO MASTERY')",
        "free_card_cta": "button:has-text('CONTINUE FOR FREE'), a:has-text('CONTINUE FOR FREE')",
        "pro_title": "text=PRO",
    },
    "/faq": {
        "body_bg": "body",
        "heading_accent": "h1 span",
    },
}

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1920, "height": 1080})

    for path, elements in selectors_to_check.items():
        url = BASE_URL + path
        page.goto(url, wait_until="networkidle", timeout=30000)
        print(f"\n=== {path} ===")

        for name, selector in elements.items():
            try:
                el = page.query_selector(selector)
                if el:
                    bg = el.evaluate("e => getComputedStyle(e).backgroundColor")
                    color = el.evaluate("e => getComputedStyle(e).color")
                    bg_img = el.evaluate("e => getComputedStyle(e).backgroundImage")
                    border = el.evaluate("e => getComputedStyle(e).borderColor")
                    font_style = el.evaluate("e => getComputedStyle(e).fontStyle")
                    print(f"  {name}:")
                    print(f"    color: {color}")
                    print(f"    background: {bg}")
                    if bg_img and bg_img != "none":
                        print(f"    background-image: {bg_img}")
                    if border:
                        print(f"    border-color: {border}")
                    if font_style:
                        print(f"    font-style: {font_style}")
                else:
                    print(f"  {name}: ELEMENT NOT FOUND ({selector})")
            except Exception as e:
                print(f"  {name}: ERROR - {e}")

    browser.close()
