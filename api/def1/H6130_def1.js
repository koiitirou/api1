export default function handler(req, res) {
  res.status(200).json(
{
  "tab_code": "1",
  "tab_jp": "観測値",
  "cat01_code": "H6130",
  "cat01_jp": "H6130_小売店数",
  "area_code": "13000",
  "area_jp": "東京都",
  "time_code": "2016100000",
  "time_jp": "2016年度",
  "unit": "事業所",
  "value": "95501",
  "annotation": null,
  "jiscode": "13",
  "td_name": "東京都",
  "td_et": "Tokyo",
  "td_sq": "s13",
  "short_name": "東京",
  "value_max": "95501",
  "value_min": "5325",
  "value_all_max": "107627",
  "value_all_min": "5325",
  "allPro": "9.72",
  "areaPro": "88.15",
  "mean": "20901",
  "median": "15252",
  "mean_dif": "74600",
  "median_dif": "80249",
  "rank": "1",
  "logo_url": "tokyo_symbol.png",
  "time4": "2016",
  "last_dif": "-4790",
  "last_pro": "-4.78",
  "title": "小売店数",
  "title_full": "小売店数",
  "title_link": "小売店数",
  "title_txt": "小売店数",
  "unit2": "事業所",
  "additional1": "割合",
  "additionalUnit1": "%",
  "footer1": "平均 20,901 事業所<br>全国 982,368 事業所",
  "sum1": "全国では982,368事業所で、平均は20,901事業所です。",
  "metainfo1": "",
  "rank_id": "1",
  "time_list1": [
    {
      "value": 2009
    },
    {
      "value": 2011
    },
    {
      "value": 2014
    },
    {
      "value": 2016
    }
  ],
  "time_min1": "2009",
  "time_max1": "2016",
  "rank123_pre": ["東京都", "大阪府", "愛知県", "徳島県", "島根県", "鳥取県"],
  "rank123_val": [95501, 62883, 51577, 7411, 7374, 5325],
  "rank123_img": ["tokyo_symbol.png", "osaka_fusho.png", "aichi_kensho.png", "tokushima_kensho.png", "shimane_kensho.png", "tottori_kensho.png"]
}
);
}
