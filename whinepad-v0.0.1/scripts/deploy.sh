# 以前のバージョンのクリーンアップ
rm -rf __deployme
mkdir __deployme

# ビルド
sh scripts/build.sh

# ミニファイ
ugilify -s bundle.js -o __deployme/bundle.js
cssshrink bundle.css > __deployme/bundle.css

# HTMLと画像のコピー
cp index.html __deployme/index.html
cp -r images/ __deployme/images/

# done
date; echo;
