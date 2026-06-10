# Asset Recovery Notes

This project is maintained in the clean standalone folder:

```text
C:\Users\lexmi\Documents\4th-gen-racing
```

The FilippoMassaRacing.com project at `C:\Users\lexmi\Documents\New project` was not used or modified.

## Dynasty Asset Normalization

The approved historical images were found in a misspelled local folder:

```text
public/images/dinasty/
```

They were moved into the correct folder structure:

- `public/images/dynasty/adriano/`
- `public/images/dynasty/ademaro/`
- `public/images/dynasty/emanuele/`

The empty wrong `public/images/dinasty/` folder and its empty child folders were removed after the move.

## Current Image Counts

- Adriano Massa: 11 images
- Ademaro Massa: 11 images
- Emanuele Ademaro Massa: 30 images

## Rename Map

The full old-to-new filename map is documented here:

```text
docs/image-rename-map.md
```

## Site Data

The site data now references the normalized folders:

- Adriano page and archive group use `public/images/dynasty/adriano/`
- Ademaro page and archive group use `public/images/dynasty/ademaro/`
- Emanuele Ademaro Massa page and archive group use `public/images/dynasty/emanuele/`

The file originally named `ademaro-18-rain-race-6.png` was normalized to:

```text
public/images/dynasty/ademaro/ademaro-01.png
```

It remains in the Ademaro page/archive only.

## Notes

No images were visually edited, generated, cropped, compressed, recolored, or altered.

No visible image captions were added. Alt text remains in the data.

## Verification

`npm run build` passed after normalization.

Static checks passed:

- Rendered image references: no missing files.
- Internal links: no unmatched local routes.
- Required route files: present.
- Direct image tags: alt text present.
- Visible caption/figcaption search in `src`: no matches.
- Incorrect name spelling search in `src`: no matches.
- Wrong image folders `dinasty` and `ademar`: not present.
