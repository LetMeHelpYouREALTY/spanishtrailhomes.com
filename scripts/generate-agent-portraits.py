#!/usr/bin/env python3
"""Build unique Dr. Jan Duffy portrait files from the circular gold headshot.

Outputs are square PNGs of the supplied circle (no caption bars, no extra rings,
no off-center crops). Uniqueness for Google comes from color grade plus a
corner tint Google indexes but CSS rounded-full clips.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance

ROOT = Path(__file__).resolve().parent.parent
SOURCE = Path(__file__).resolve().parent / "assets" / "duffy-circle-source.jpg"
OUT_DIR = ROOT / "public" / "images" / "spanish-trail"
SIZE = 900

# Subtle grades so her face stays true; corners get a unique tint for file uniqueness.
VARIANTS = [
    {"id": "duffy-circle-canonical", "warmth": 1.00, "contrast": 1.00, "brightness": 1.00, "corner": (255, 255, 255)},
    {"id": "duffy-circle-header", "warmth": 1.03, "contrast": 1.02, "brightness": 1.01, "corner": (248, 245, 239)},
    {"id": "duffy-circle-footer", "warmth": 0.97, "contrast": 1.04, "brightness": 0.99, "corner": (53, 41, 34)},
    {"id": "duffy-circle-about", "warmth": 1.06, "contrast": 1.03, "brightness": 1.02, "corner": (249, 244, 235)},
    {"id": "duffy-circle-contact-call", "warmth": 1.02, "contrast": 1.05, "brightness": 1.00, "corner": (15, 43, 30)},
    {"id": "duffy-circle-buyers", "warmth": 1.04, "contrast": 1.01, "brightness": 1.02, "corner": (238, 242, 239)},
    {"id": "duffy-circle-sellers", "warmth": 1.08, "contrast": 1.02, "brightness": 1.01, "corner": (249, 244, 235)},
    {"id": "duffy-circle-listings", "warmth": 0.99, "contrast": 1.03, "brightness": 1.00, "corner": (249, 244, 235)},
    {"id": "duffy-circle-tour", "warmth": 1.05, "contrast": 1.02, "brightness": 1.03, "corner": (253, 249, 243)},
    {"id": "duffy-circle-golf", "warmth": 0.94, "contrast": 1.04, "brightness": 0.98, "corner": (15, 43, 30)},
    {"id": "duffy-circle-neighborhoods", "warmth": 1.07, "contrast": 1.01, "brightness": 1.01, "corner": (232, 221, 208)},
    {"id": "duffy-circle-relocation", "warmth": 0.98, "contrast": 1.02, "brightness": 1.02, "corner": (236, 244, 248)},
    {"id": "duffy-circle-reviews", "warmth": 1.10, "contrast": 1.03, "brightness": 1.02, "corner": (255, 252, 245)},
    {"id": "duffy-circle-awards", "warmth": 1.03, "contrast": 1.06, "brightness": 0.99, "corner": (15, 43, 30)},
    {"id": "duffy-circle-media", "warmth": 1.00, "contrast": 1.04, "brightness": 1.01, "corner": (255, 255, 255)},
    {"id": "duffy-circle-services", "warmth": 1.05, "contrast": 1.02, "brightness": 1.00, "corner": (248, 245, 239)},
    {"id": "duffy-circle-market", "warmth": 0.96, "contrast": 1.03, "brightness": 0.99, "corner": (241, 236, 226)},
    {"id": "duffy-circle-club", "warmth": 0.93, "contrast": 1.05, "brightness": 0.98, "corner": (15, 43, 30)},
]


def grade(image: Image.Image, warmth: float, contrast: float, brightness: float) -> Image.Image:
    work = image.convert("RGB")
    work = ImageEnhance.Color(work).enhance(warmth)
    work = ImageEnhance.Contrast(work).enhance(contrast)
    work = ImageEnhance.Brightness(work).enhance(brightness)
    return work


def tint_corners(image: Image.Image, color: tuple[int, int, int]) -> Image.Image:
    """Paint unique pixels only in the square's corners (outside the inscribed circle)."""
    work = image.copy()
    draw = ImageDraw.Draw(work)
    w, h = work.size
    pad = 18
    draw.rectangle((0, 0, pad, pad), fill=color)
    draw.rectangle((w - pad, 0, w, pad), fill=color)
    draw.rectangle((0, h - pad, pad, h), fill=color)
    draw.rectangle((w - pad, h - pad, w, h), fill=color)
    return work


def compose(variant: dict, source: Image.Image) -> Image.Image:
    portrait = source.resize((SIZE, SIZE), Image.Resampling.LANCZOS)
    portrait = grade(portrait, variant["warmth"], variant["contrast"], variant["brightness"])
    return tint_corners(portrait, variant["corner"])


def main() -> None:
    if not SOURCE.exists():
        raise FileNotFoundError(f"Missing portrait source: {SOURCE}")
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    source = Image.open(SOURCE)
    for variant in VARIANTS:
        image = compose(variant, source)
        dest = OUT_DIR / f"{variant['id']}.png"
        image.save(dest, format="PNG", optimize=True)
        print(f"wrote {dest.name} {image.size}")


if __name__ == "__main__":
    main()
