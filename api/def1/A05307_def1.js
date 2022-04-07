export default function handler(req, res) {
  res.status(200).json(
{
  "tab_code": "1",
  "tab_jp": "観測値",
  "cat01_code": "A05307",
  "cat01_jp": "A05307_転入超過率",
  "area_code": "13000",
  "area_jp": "東京都",
  "time_code": "2019100000",
  "time_jp": "2019年度",
  "unit": "％",
  "value": "0.6",
  "annotation": null,
  "jiscode": "13",
  "td_name": "東京都",
  "td_et": "Tokyo",
  "td_sq": "s13",
  "short_name": "東京",
  "value_max": "0.6",
  "value_min": "-0.55",
  "value_all_max": "0.62",
  "value_all_min": "-0.55",
  "allPro": "-6.6",
  "areaPro": "98.29",
  "mean": "-0.193",
  "median": "-0.26",
  "mean_dif": "0.793",
  "median_dif": "0.86",
  "rank": "1",
  "logo_url": "tokyo_symbol.png",
  "time4": "2019",
  "last_dif": "0.02",
  "last_pro": "3.45",
  "title": "転入超過率",
  "title_full": "転入超過率",
  "title_link": "転入超過率",
  "title_txt": "転入超過率",
  "unit2": "%",
  "additional1": "平均との差",
  "additionalUnit1": "%",
  "footer1": "平均 -0 %",
  "sum1": "平均は-0%です。",
  "metainfo1": "",
  "rank_id": "1",
  "time_list1": [
    {
      "value": 2014
    },
    {
      "value": 2015
    },
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
  "time_min1": "2014",
  "time_max1": "2019",
  "rank123_pre": ["東京都", "埼玉県", "神奈川県", "徳島県", "青森県", "長崎県"],
  "rank123_val": [0.6, 0.36, 0.32, -0.46, -0.49, -0.55],
  "rank123_img": ["tokyo_symbol.png", "saitama_kensho.png", "kanagawa_kensho.png", "tokushima_kensho.png", "aomori_kensho.png", "nagasaki_kensho.png"]
}
);
}
