export default function handler(req, res) {
  res.status(200).json(
{
  "tab_code": "1",
  "tab_jp": "観測値",
  "cat01_code": "H5105",
  "cat01_jp": "H5105_電力需要量",
  "area_code": "13000",
  "area_jp": "東京都",
  "time_code": "2019100000",
  "time_jp": "2019年度",
  "unit": "ＭＷｈ",
  "value": "77114677",
  "annotation": null,
  "jiscode": "13",
  "td_name": "東京都",
  "td_et": "Tokyo",
  "td_sq": "s13",
  "short_name": "東京",
  "value_max": "77114677",
  "value_min": "3565176",
  "value_all_max": "78692409",
  "value_all_min": "3565176",
  "allPro": "9.22",
  "areaPro": "97.9",
  "mean": "17788000",
  "median": "11669876",
  "mean_dif": "59326677",
  "median_dif": "65444801",
  "rank": "1",
  "logo_url": "tokyo_symbol.png",
  "time4": "2019",
  "last_dif": "-1080000",
  "last_pro": "-1.39",
  "title": "電力需要量",
  "title_full": "電力需要量",
  "title_link": "電力需要量",
  "title_txt": "電力需要量",
  "unit2": "MWh",
  "additional1": "割合",
  "additionalUnit1": "%",
  "footer1": "平均 17,788,000 MWh<br>全国 836,038,426 MWh",
  "sum1": "全国では836,038,426MWhで、平均は17,788,000MWhです。",
  "metainfo1": "",
  "rank_id": "1",
  "time_list1": [
    {
      "value": 2016
    },
    {
      "value": 2017
    },
    {
      "value": 2018
    },
    {
      "value": 2019
    }
  ],
  "time_min1": "2016",
  "time_max1": "2019",
  "rank123_pre": ["東京都", "愛知県", "大阪府", "島根県", "高知県", "鳥取県"],
  "rank123_val": [77114677, 58425030, 54738277, 5190268, 4041826, 3565176],
  "rank123_img": ["tokyo_symbol.png", "aichi_kensho.png", "osaka_fusho.png", "shimane_kensho.png", "kochi_kensho.png", "tottori_kensho.png"]
}
);
}
