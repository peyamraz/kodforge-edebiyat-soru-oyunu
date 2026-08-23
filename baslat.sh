#!/bin/sh
# KodForge baslatici — uygulamayi varsayilan tarayicida acar.
DIR="$(cd "$(dirname "$0")" && pwd)"
echo ""
echo "  KodForge uygulamasi baslatiliyor..."
echo "  Bu bir WEB uygulamasidir (HTML + CSS + JS); Flutter ya da npm gerekmez."
echo ""
if command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$DIR/web/index.html"
elif command -v open >/dev/null 2>&1; then
  open "$DIR/web/index.html"
else
  echo "  Tarayici bulunamadi: $DIR/web/index.html dosyasini elle ac."
fi
