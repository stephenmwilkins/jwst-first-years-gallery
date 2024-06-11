
import PIL
from PIL import Image, ImageOps, ImageEnhance
import glob

PIL.Image.MAX_IMAGE_PIXELS = 933120000

for infile in glob.glob('original_images/*'):

    f = infile.split('/')[-1]
    im = Image.open(infile)

    print(f, im.size)

    thumb = ImageOps.fit(im, (180, 180), bleed=0.0, centering=(0.5, 0.5))
    thumb.save(f'thumb/{f}')

    # thumbg = ImageEnhance.Color(thumb).enhance(0.2)
    # thumbg.save(f'thumbg/{f}')

    main = ImageOps.fit(im, (1080, 1080), bleed=0.0, centering=(0.5, 0.5))
    main.save(f'main/{f}')