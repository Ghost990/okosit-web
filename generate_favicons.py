import os
import sys
from PIL import Image, ImageOps
from pathlib import Path

def create_favicon_variants(source_path, output_dir='public/assets'):
    """
    Generate favicon variants from a source image.
    
    Args:
        source_path (str): Path to the source favicon image
        output_dir (str): Directory to save the generated favicons
    """
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    try:
        # Open the source image
        with Image.open(source_path) as img:
            # Convert to RGBA if not already
            if img.mode != 'RGBA':
                img = img.convert('RGBA')
            
            # Create a white background for the favicon.ico
            bg = Image.new('RGBA', img.size, (255, 255, 255, 255))
            bg.paste(img, mask=img.split()[3])  # 3 is the alpha channel
            
            # Save as favicon.ico (32x32)
            ico_path = os.path.join(output_dir, 'favicon.ico')
            bg.resize((32, 32)).save(ico_path, format='ICO', sizes=[(32, 32)])
            print(f"Created: {ico_path}")
            
            # Save the original as favicon.png if it's not the source
            if not source_path.endswith('favicon.png'):
                png_path = os.path.join(output_dir, 'favicon.png')
                img.save(png_path, 'PNG')
                print(f"Created: {png_path}")
            
            # Create SVG (simple version using the original image)
            svg_path = os.path.join(output_dir, 'icon.svg')
            with open(svg_path, 'w') as f:
                f.write(f'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
 <image width="512" height="512" href="{os.path.basename(source_path)}"/>
</svg>''')
            print(f"Created: {svg_path}")
            
            # Generate iOS touch icon (180x180)
            apple_touch_path = os.path.join(output_dir, 'apple-touch-icon.png')
            img.resize((180, 180)).save(apple_touch_path, 'PNG')
            print(f"Created: {apple_touch_path}")
            
            # Generate PWA icons
            sizes = [192, 512]
            for size in sizes:
                # Regular icon
                icon_path = os.path.join(output_dir, f'icon-{size}x{size}.png')
                img.resize((size, size)).save(icon_path, 'PNG')
                print(f"Created: {icon_path}")
                
                # Maskable icon (with padding for safe area)
                maskable_size = int(size * 0.8)  # 80% of the size for safe area
                maskable_icon = Image.new('RGBA', (size, size), (0, 0, 0, 0))
                resized_img = img.resize((maskable_size, maskable_size))
                position = ((size - maskable_size) // 2, (size - maskable_size) // 2)
                maskable_icon.paste(resized_img, position)
                
                maskable_path = os.path.join(output_dir, f'icon-maskable-{size}x{size}.png')
                maskable_icon.save(maskable_path, 'PNG')
                print(f"Created: {maskable_path}")
            
            print("\nAll favicon variants have been generated successfully!")
            
    except Exception as e:
        print(f"Error: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    # Get the source image path from command line or use default
    if len(sys.argv) > 1:
        source_image = sys.argv[1]
    else:
        # Default to favicon.png in the same directory if no argument is provided
        source_image = os.path.join('public', 'assets', 'favicon.png')
    
    # Check if source image exists
    if not os.path.exists(source_image):
        print(f"Error: Source image not found at {source_image}")
        print("Please provide the path to your favicon image as an argument.")
        print(f"Example: python {os.path.basename(__file__)} path/to/your/icon.png")
        sys.exit(1)
    
    # Set the output directory to be next to the source image if no output directory is specified
    output_dir = os.path.join(os.path.dirname(source_image), '..')
    output_dir = os.path.normpath(os.path.join(output_dir, 'assets'))
    
    create_favicon_variants(source_image, output_dir)
