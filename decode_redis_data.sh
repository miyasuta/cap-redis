#!/bin/bash

# Redisからデータを取得してBase64デコード
compressed_data=''
echo $compressed_data | base64 --decode > compressed_data.gz

# Gzip解凍
gzip -d -c compressed_data.gz > decompressed_data.txt

# エスケープされたJSON文字列を読み込み、正しいJSON形式に変換して保存
escaped_json=$(cat decompressed_data.txt)
echo $escaped_json | jq -r . > decompressed_data.json

# 正しいJSON形式のデータを表示
cat decompressed_data.json

# 一時ファイルを削除
rm compressed_data.gz decompressed_data.txt