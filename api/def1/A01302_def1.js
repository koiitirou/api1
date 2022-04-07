export default function handler(req, res) {
  res.status(200).json(
{
  "tab_code": "1",
  "tab_jp": "観測値",
  "cat01_code": "A01302",
  "cat01_jp": "A01302_昼夜間人口比率",
  "area_code": "13000",
  "area_jp": "東京都",
  "time_code": "2015100000",
  "time_jp": "2015年度",
  "unit": "％",
  "value": "117.8",
  "annotation": null,
  "jiscode": "13",
  "td_name": "東京都",
  "td_et": "Tokyo",
  "td_sq": "s13",
  "short_name": "東京",
  "value_max": "117.8",
  "value_min": "88.9",
  "value_all_max": "122",
  "value_all_min": "86.4",
  "allPro": "117.8",
  "areaPro": "88.2",
  "mean": "99.2",
  "median": "99.8",
  "mean_dif": "18.6",
  "median_dif": "18",
  "rank": "1",
  "logo_url": "tokyo_symbol.png",
  "time4": "2015",
  "last_dif": "-0.6",
  "last_pro": "-0.51",
  "title": "昼夜間人口比率",
  "title_full": "昼夜間人口比率",
  "title_link": "昼夜間人口比率",
  "title_txt": "昼夜間人口比率",
  "unit2": "%",
  "additional1": "平均との差",
  "additionalUnit1": "%",
  "footer1": "平均 99 %",
  "sum1": "平均は99%です。",
  "metainfo1": "",
  "rank_id": "1",
  "time_list1": [
    {
      "value": 2000
    },
    {
      "value": 2005
    },
    {
      "value": 2010
    },
    {
      "value": 2015
    }
  ],
  "time_min1": "2000",
  "time_max1": "2015",
  "rank123_pre": ["東京都", "大阪府", "京都府", "奈良県", "千葉県", "埼玉県"],
  "rank123_val": [117.8, 104.4, 101.8, 90, 89.7, 88.9],
  "rank123_img": ["tokyo_symbol.png", "osaka_fusho.png", "kyoto_fusho.png", "nara_kensho.png", "chiba_kensho.png", "saitama_kensho.png"]
}
);
}
