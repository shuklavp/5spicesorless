import os
import sys
import glob
import subprocess
from PIL import Image

def process_illustrations():
    """Auto-converts sketches to transparent royal blue PNGs"""
    illustrations_dir = "public/illustrations"
    if not os.path.exists(illustrations_dir):
        return

    jpgs = glob.glob(f"{illustrations_dir}/*.jpg") + glob.glob(f"{illustrations_dir}/*.jpeg")
    for src in jpgs:
        base = os.path.splitext(src)[0]
        out_png = f"{base}.png"
        
        # If PNG doesn't exist or JPG is newer, generate clean transparent blue ink
        if not os.path.exists(out_png) or os.path.getmtime(src) > os.path.getmtime(out_png):
            print(f"🎨 Processing artwork: {src} -> {out_png}")
            try:
                img = Image.open(src).convert("RGB")
                width, height = img.size
                pixels = img.load()
                out_img = Image.new("RGBA", (width, height))
                out_pixels = out_img.load()

                ink_r, ink_g, ink_b = 28, 64, 148 # Signature Royal Blue

                for y in range(height):
                    for x in range(width):
                        r, g, b = pixels[x, y]
                        lum = 0.299 * r + 0.587 * g + 0.114 * b

                        if lum >= 220:
                            alpha = 0
                        elif lum <= 150:
                            alpha = 255
                        else:
                            alpha = int(((220.0 - lum) / 70.0) * 255.0)

                        out_pixels[x, y] = (ink_r, ink_g, ink_b, alpha)

                out_img.save(out_png, format="PNG")
                print(f"  ✓ Created transparent line sketch: {out_png}")
            except Exception as e:
                print(f"  ✗ Warning: Could not process {src}: {e}")

def check_editorial_rules():
    """Checks for accidental em-dashes in markdown files"""
    print("🔍 Checking editorial rules...")
    md_files = glob.glob("src/content/stories/*.md")
    warnings = 0
    for f in md_files:
        with open(f, "r", encoding="utf-8") as fh:
            text = fh.read()
        if "—" in text or "—" in text:
            print(f"  ⚠️ Warning: Found em-dash (—) in {f}. Consider using a comma or colon.")
            warnings += 1
    if warnings == 0:
        print("  ✓ Zero em-dashes detected.")

def git_publish():
    """Stages all changes and pushes to main"""
    print("🚀 Preparing deployment...")
    subprocess.run(["git", "add", "."], check=True)
    
    # Check status
    res = subprocess.run(["git", "status", "--porcelain"], capture_output=True, text=True)
    if not res.stdout.strip():
        print("✨ Working tree clean. Nothing new to deploy.")
        return

    commit_msg = sys.argv[1] if len(sys.argv) > 1 else "feat(content): publish updates via automated pipeline"
    print(f"📦 Committing: {commit_msg}")
    subprocess.run(["git", "commit", "-m", commit_msg], check=True)
    
    print("☁️ Pushing to GitHub (Cloudflare will build in ~45s)...")
    subprocess.run(["git", "push", "origin", "main"], check=True)
    print("🎉 Done! Live site will update momentarily.")

if __name__ == "__main__":
    process_illustrations()
    check_editorial_rules()
    git_publish()
