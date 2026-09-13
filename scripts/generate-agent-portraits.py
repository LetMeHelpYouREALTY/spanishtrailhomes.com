#!/usr/bin/env python3
"""Create unique Dr. Jan Duffy portrait files for SEO/GEO/AEO image indexing.

Each output is a new PNG (unique pixels, filename, and on-image caption) derived
from the supplied headshot. Faces are not regenerated — only crop, canvas,
background, ring, and caption change.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFont

SOURCE = Path("/home/ubuntu/.cursor/projects/workspace/assets/641fcd46-8e27-4b4f-bca1-536cd591ade5.png")
OUT_DIR = Path("/workspace/public/images/spanish-trail")

VARIANTS = [
    {
        "id": "agent-duffy-canonical",
        "bg": (232, 245, 216),
        "ring": (190, 153, 86),
        "caption_bg": (15, 43, 30),
        "caption": "Dr. Jan Duffy",
        "sub": "Spanish Trail Homes realtor · Las Vegas 89113",
        "zoom": 1.0,
        "offset": (0, 0),
        "warmth": 1.0,
        "size": (900, 900),
    },
    {
        "id": "agent-duffy-header",
        "bg": (255, 255, 255),
        "ring": (15, 43, 30),
        "caption_bg": (15, 43, 30),
        "caption": "",
        "sub": "",
        "zoom": 1.02,
        "offset": (0, 0),
        "warmth": 1.04,
        "size": (640, 640),
        "no_caption": True,
    },
    {
        "id": "agent-duffy-footer",
        "bg": (53, 41, 34),
        "ring": (190, 153, 86),
        "caption_bg": (62, 48, 40),
        "caption": "Dr. Jan Duffy · BHHS Nevada",
        "sub": "5050 Spanish Trail Ln, Las Vegas, NV 89113",
        "zoom": 1.02,
        "offset": (0, 4),
        "warmth": 0.96,
        "size": (800, 800),
    },
    {
        "id": "agent-duffy-about",
        "bg": (248, 245, 239),
        "ring": (190, 153, 86),
        "caption_bg": (15, 43, 30),
        "caption": "Meet Dr. Jan Duffy",
        "sub": "Spanish Trail luxury realtor · License S.0197614.LLC",
        "zoom": 1.08,
        "offset": (0, 12),
        "warmth": 1.08,
        "size": (900, 1080),
    },
    {
        "id": "agent-duffy-contact-call",
        "bg": (15, 43, 30),
        "ring": (246, 234, 215),
        "caption_bg": (190, 153, 86),
        "caption": "Call Dr. Jan Duffy",
        "sub": "(702) 766-3299 · Spanish Trail home tours",
        "zoom": 1.12,
        "offset": (18, 6),
        "warmth": 1.04,
        "size": (900, 900),
    },
    {
        "id": "agent-duffy-buyers",
        "bg": (238, 242, 239),
        "ring": (15, 43, 30),
        "caption_bg": (15, 43, 30),
        "caption": "Buyer representation",
        "sub": "Dr. Jan Duffy · Spanish Trail homes, Las Vegas",
        "zoom": 1.04,
        "offset": (-8, 10),
        "warmth": 1.02,
        "size": (880, 880),
    },
    {
        "id": "agent-duffy-sellers",
        "bg": (249, 244, 235),
        "ring": (111, 82, 55),
        "caption_bg": (55, 41, 32),
        "caption": "Seller representation",
        "sub": "List your Spanish Trail home with Dr. Jan Duffy",
        "zoom": 1.05,
        "offset": (6, 14),
        "warmth": 1.1,
        "size": (880, 1000),
    },
    {
        "id": "agent-duffy-listings",
        "bg": (249, 244, 235),
        "ring": (190, 153, 86),
        "caption_bg": (15, 43, 30),
        "caption": "Showing Spanish Trail listings",
        "sub": "Live inventory inside the 89113 guard gates",
        "zoom": 1.03,
        "offset": (0, 2),
        "warmth": 1.0,
        "size": (860, 860),
    },
    {
        "id": "agent-duffy-tour",
        "bg": (253, 249, 243),
        "ring": (15, 43, 30),
        "caption_bg": (15, 43, 30),
        "caption": "Book a private tour",
        "sub": "Dr. Jan Duffy · 30-minute Spanish Trail showing",
        "zoom": 1.1,
        "offset": (-10, 8),
        "warmth": 1.06,
        "size": (840, 840),
    },
    {
        "id": "agent-duffy-golf",
        "bg": (15, 43, 30),
        "ring": (190, 153, 86),
        "caption_bg": (31, 61, 46),
        "caption": "Golf-course homes realtor",
        "sub": "Spanish Trail private 27-hole course · 89113",
        "zoom": 1.07,
        "offset": (4, 16),
        "warmth": 0.94,
        "size": (900, 960),
    },
    {
        "id": "agent-duffy-neighborhoods",
        "bg": (232, 221, 208),
        "ring": (15, 43, 30),
        "caption_bg": (45, 35, 24),
        "caption": "11-neighborhood matching",
        "sub": "Dr. Jan Duffy maps Spanish Trail enclaves",
        "zoom": 1.01,
        "offset": (0, -4),
        "warmth": 1.07,
        "size": (860, 920),
    },
    {
        "id": "agent-duffy-relocation",
        "bg": (236, 244, 248),
        "ring": (15, 43, 30),
        "caption_bg": (15, 43, 30),
        "caption": "Out-of-state buyers",
        "sub": "Remote tours of Spanish Trail homes, Las Vegas",
        "zoom": 1.09,
        "offset": (12, 4),
        "warmth": 0.98,
        "size": (880, 880),
    },
    {
        "id": "agent-duffy-reviews",
        "bg": (255, 252, 245),
        "ring": (190, 153, 86),
        "caption_bg": (146, 64, 14),
        "caption": "Google reviews",
        "sub": "Work with Dr. Jan Duffy at Spanish Trail Homes",
        "zoom": 1.0,
        "offset": (0, 10),
        "warmth": 1.12,
        "size": (820, 820),
    },
    {
        "id": "agent-duffy-awards",
        "bg": (15, 43, 30),
        "ring": (212, 175, 55),
        "caption_bg": (212, 175, 55),
        "caption": "Award-winning Spanish Trail realtor",
        "sub": "BHHS Nevada Properties · Dr. Jan Duffy",
        "zoom": 1.06,
        "offset": (0, 8),
        "warmth": 1.03,
        "size": (900, 1040),
    },
    {
        "id": "agent-duffy-media",
        "bg": (255, 255, 255),
        "ring": (190, 153, 86),
        "caption_bg": (31, 42, 36),
        "caption": "Press headshot",
        "sub": "Dr. Jan Duffy · Spanish Trail Homes, Las Vegas",
        "zoom": 1.0,
        "offset": (0, 0),
        "warmth": 1.0,
        "size": (900, 900),
    },
    {
        "id": "agent-duffy-services",
        "bg": (248, 245, 239),
        "ring": (15, 43, 30),
        "caption_bg": (15, 43, 30),
        "caption": "Realtor services",
        "sub": "Buy, sell, and tour Spanish Trail homes only",
        "zoom": 1.04,
        "offset": (-6, 6),
        "warmth": 1.05,
        "size": (860, 900),
    },
    {
        "id": "agent-duffy-market",
        "bg": (241, 236, 226),
        "ring": (111, 82, 55),
        "caption_bg": (31, 42, 36),
        "caption": "Spanish Trail market advisor",
        "sub": "Live 89113 pricing and inventory with Dr. Duffy",
        "zoom": 1.08,
        "offset": (8, 12),
        "warmth": 0.97,
        "size": (880, 940),
    },
    {
        "id": "agent-duffy-club",
        "bg": (15, 43, 30),
        "ring": (248, 245, 239),
        "caption_bg": (15, 43, 30),
        "caption": "Club-community realtor",
        "sub": "Homes beside Spanish Trail Country Club",
        "zoom": 1.05,
        "offset": (0, 14),
        "warmth": 0.92,
        "size": (900, 900),
    },
]


def font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for path in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf",
    ):
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def framed_portrait(src: Image.Image, diameter: int, zoom: float, offset: tuple[int, int], warmth: float) -> Image.Image:
    work = src.convert("RGBA")
    target = int(diameter * zoom)
    scaled = work.resize((target, target), Image.Resampling.LANCZOS)
    if warmth != 1.0:
        scaled = ImageEnhance.Color(scaled).enhance(warmth)
        scaled = ImageEnhance.Brightness(scaled).enhance(0.98 + (warmth - 1) * 0.15)
    canvas = Image.new("RGBA", (diameter, diameter), (0, 0, 0, 0))
    x = (diameter - scaled.width) // 2 + offset[0]
    y = (diameter - scaled.height) // 2 + offset[1]
    canvas.paste(scaled, (x, y), scaled)
    return canvas


def compose(variant: dict, source: Image.Image) -> Image.Image:
    width, height = variant["size"]
    image = Image.new("RGB", (width, height), variant["bg"])
    draw = ImageDraw.Draw(image)

    caption_h = 0 if variant.get("no_caption") else (128 if height >= 900 else 112)
    available = height - caption_h - (24 if variant.get("no_caption") else 56)
    diameter = min(width - 80, available)
    portrait = framed_portrait(source, diameter, variant["zoom"], variant["offset"], variant["warmth"])

    ring_pad = 14
    ring_d = diameter + ring_pad * 2
    cx = width // 2
    cy = 32 + ring_d // 2
    ring_bbox = (cx - ring_d // 2, cy - ring_d // 2, cx + ring_d // 2, cy + ring_d // 2)
    draw.ellipse(ring_bbox, outline=variant["ring"], width=10)

    px = cx - diameter // 2
    py = cy - diameter // 2
    image.paste(portrait, (px, py), portrait)

    if caption_h:
        draw.rectangle((0, height - caption_h, width, height), fill=variant["caption_bg"])
        title_font = font(30)
        sub_font = font(20)
        title = variant["caption"]
        sub = variant["sub"]
        tw = draw.textbbox((0, 0), title, font=title_font)
        sw = draw.textbbox((0, 0), sub, font=sub_font)
        title_color = (248, 245, 239)
        sub_color = (236, 220, 186)
        draw.text(((width - (tw[2] - tw[0])) / 2, height - caption_h + 28), title, font=title_font, fill=title_color)
        draw.text(((width - (sw[2] - sw[0])) / 2, height - caption_h + 72), sub, font=sub_font, fill=sub_color)
    return image


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    source = Image.open(SOURCE)
    for variant in VARIANTS:
        image = compose(variant, source)
        dest = OUT_DIR / f"{variant['id']}.png"
        image.save(dest, format="PNG", optimize=True)
        print(f"wrote {dest.name} {image.size}")


if __name__ == "__main__":
    main()
