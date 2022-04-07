export default function handler(req, res) {
  res.status(200).json(
{
  "tab_code": "1",
  "tab_jp": "観測値",
  "cat01_code": "F2407",
  "cat01_jp": "F2407_雇用者数（常雇）",
  "area_code": "13000",
  "area_jp": "東京都",
  "time_code": "2005100000",
  "time_jp": "2005年度",
  "unit": "人",
  "value": "3887426",
  "annotation": null,
  "jiscode": "13",
  "td_name": "東京都",
  "td_et": "Tokyo",
  "td_sq": "s13",
  "short_name": "東京",
  "value_max": "3887426",
  "value_min": "191824",
  "value_all_max": "4067876",
  "value_all_min": "191824",
  "allPro": "9.57",
  "areaPro": "95.34",
  "mean": "864201",
  "median": "498154",
  "mean_dif": "3023225",
  "median_dif": "3389272",
  "rank": "1",
  "logo_url": "tokyo_symbol.png",
  "time4": "2005",
  "last_dif": "-180000",
  "last_pro": "-4.44",
  "title": "雇用者数（常雇）",
  "title_full": "雇用者数（常雇）",
  "title_link": "雇用者数（常雇）",
  "title_txt": "雇用者数（常雇）",
  "unit2": "人",
  "additional1": "割合",
  "additionalUnit1": "%",
  "footer1": "平均 864,201 人<br>全国 40,617,427 人",
  "sum1": "全国では40,617,427人で、平均は864,201人です。",
  "metainfo1": null,
  "rank_id": "1",
  "time_list1": [
    {
      "value": 2000
    },
    {
      "value": 2005
    }
  ],
  "time_min1": "2000",
  "time_max1": "2005",
  "rank123_pre": ["東京都", "神奈川県", "大阪府", "徳島県", "高知県", "鳥取県"],
  "rank123_val": [3887426, 3059586, 2646417, 228093, 217055, 191824],
  "rank123_img": ["tokyo_symbol.png", "kanagawa_kensho.png", "osaka_fusho.png", "tokushima_kensho.png", "kochi_kensho.png", "tottori_kensho.png"]
}
);
}
