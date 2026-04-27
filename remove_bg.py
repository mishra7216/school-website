from PIL import Image

# Open the logo
img = Image.open("public/logo.png").convert("RGBA")
pixels = img.load()
width, height = img.size

tolerance = 30  # How close to white a pixel needs to be to get removed

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        # If all channels are close to 255 (white), make transparent
        if r > (255 - tolerance) and g > (255 - tolerance) and b > (255 - tolerance):
            pixels[x, y] = (r, g, b, 0)

img.save("public/logo.png", "PNG")
print("Done! White background removed from logo.png")
