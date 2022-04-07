export default function handler(req, res) {
  res.status(200).json(
{
  "tab_code": "1",
  "tab_jp": "観測値",
  "cat01_code": "B3102",
  "cat01_jp": "B3102_植生自然度2（構成比）",
  "area_code": "8000",
  "area_jp": "茨城県",
  "time_code": "1997100000",
  "time_jp": "1997年度",
  "unit": "％",
  "value": "49",
  "annotation": null,
  "jiscode": "08",
  "td_name": "茨城県",
  "td_et": "Ibaraki",
  "td_sq": "s08",
  "short_name": "茨城",
  "value_max": "49",
  "value_min": "6.8",
  "value_all_max": "49",
  "value_all_min": "6.7",
  "allPro": "232.23",
  "areaPro": "100",
  "mean": "21.6",
  "median": "20.5",
  "mean_dif": "27.4",
  "median_dif": "28.5",
  "rank": "1",
  "logo_url": "ibaraki_kensho.png",
  "time4": "1997",
  "last_dif": "0.3",
  "last_pro": "0.62",
  "title": "植生自然度2（構成比）",
  "title_full": "植生自然度2（構成比）",
  "title_link": "植生自然度2",
  "title_txt": "植生自然度2（構成比）",
  "unit2": "%",
  "additional1": "平均との差",
  "additionalUnit1": "%",
  "footer1": "平均 22 %",
  "sum1": "平均は22%です。",
  "metainfo1": "",
  "rank_id": "1",
  "time_list1": [
    {
      "value": 1988
    },
    {
      "value": 1992
    },
    {
      "value": 1997
    }
  ],
  "time_min1": "1988",
  "time_max1": "1997",
  "rank123_pre": ["茨城県", "千葉県", "埼玉県", "高知県", "山梨県", "和歌山県"],
  "rank123_val": [49, 46.3, 39, 8.9, 6.9, 6.8],
  "rank123_img": ["ibaraki_kensho.png", "chiba_kensho.png", "saitama_kensho.png", "kochi_kensho.png", "yamanashi_kensho.png", "wakayama_kensho.png"]
}
);
}
