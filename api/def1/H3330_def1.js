export default function handler(req, res) {
  res.status(200).json(
{
  "tab_code": "1",
  "tab_jp": "観測値",
  "cat01_code": "H3330",
  "cat01_jp": "H3330_同居世帯人員",
  "area_code": "13000",
  "area_jp": "東京都",
  "time_code": "2018100000",
  "time_jp": "2018年度",
  "unit": "人",
  "value": "81900",
  "annotation": null,
  "jiscode": "13",
  "td_name": "東京都",
  "td_et": "Tokyo",
  "td_sq": "s13",
  "short_name": "東京",
  "value_max": "81900",
  "value_min": "2000",
  "value_all_max": "104100",
  "value_all_min": "1000",
  "allPro": "12.75",
  "areaPro": "78.47",
  "mean": "13666",
  "median": "7600",
  "mean_dif": "68234",
  "median_dif": "74300",
  "rank": "1",
  "logo_url": "tokyo_symbol.png",
  "time4": "2018",
  "last_dif": "8700",
  "last_pro": "11.89",
  "title": "同居世帯人員",
  "title_full": "同居世帯人員",
  "title_link": "同居世帯人員",
  "title_txt": "同居世帯人員",
  "unit2": "人",
  "additional1": "割合",
  "additionalUnit1": "%",
  "footer1": "平均 13,666 人<br>全国 642,300 人",
  "sum1": "全国では642,300人で、平均は13,666人です。",
  "metainfo1": "",
  "rank_id": "1",
  "time_list1": [
    {
      "value": 2003
    },
    {
      "value": 2008
    },
    {
      "value": 2013
    },
    {
      "value": 2018
    }
  ],
  "time_min1": "2003",
  "time_max1": "2018",
  "rank123_pre": ["東京都", "神奈川県", "埼玉県", "徳島県", "福井県", "島根県"],
  "rank123_val": [81900, 65800, 44000, 2200, 2100, 2000],
  "rank123_img": ["tokyo_symbol.png", "kanagawa_kensho.png", "saitama_kensho.png", "tokushima_kensho.png", "fukui_kensho.png", "shimane_kensho.png"]
}
);
}
