Client logos go here.

Filenames must match the `id` of each client in `content/clients.ts`:

  greysell.png              global-tourist-centre.png
  foam-home.png             upl.png
  wevaad.png                ups.png
  homoeocare.png            nirmal-seeds.png
  banzai-hospitality.png    eastman.png
  swal.png                  macksofy.png

Any file that is missing falls back to the client's name as text, so the site
never shows a broken image. Add a file and rebuild — nothing else to change.

PNG with a transparent background works best; the grid renders every logo at a
fixed 44px height with `object-contain`, so aspect ratio never distorts.
