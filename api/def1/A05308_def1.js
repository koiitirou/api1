export default function handler(req, res) {
  res.status(200).json(
{
  "tab_code": "1",
  "tab_jp": "観測値",
  "cat01_code": "A05308",
  "cat01_jp": "A05308_転入率",
  "area_code": "13000",
  "area_jp": "東京都",
  "time_code": "2019100000",
  "time_jp": "2019年度",
  "unit": "％",
  "value": "3.35",
  "annotation": null,
  "jiscode": "13",
  "td_name": "東京都",
  "td_et": "Tokyo",
  "td_sq": "s13",
  "short_name": "東京",
  "value_max": "3.35",
  "value_min": "1",
  "value_all_max": "3.38",
  "value_all_min": "0.89",
  "allPro": "164.22",
  "areaPro": "98.8",
  "mean": "1.73",
  "median": "1.69",
  "mean_dif": "1.62",
  "median_dif": "1.66",
  "rank": "1",
  "logo_url": "tokyo_symbol.png",
  "time4": "2019",
  "last_dif": "0.02",
  "last_pro": "0.6",
  "title": "転入率",
  "title_full": "転入率",
  "title_link": "転入率",
  "title_txt": "転入率",
  "unit2": "%",
  "additional1": "平均との差",
  "additionalUnit1": "%",
  "footer1": "平均 2 %",
  "sum1": "平均は2%です。",
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
  "rank123_pre": ["東京都", "千葉県", "埼玉県", "秋田県", "新潟県", "北海道"],
  "rank123_val": [3.35, 2.64, 2.63, 1.16, 1.01, 1],
  "rank123_img": ["tokyo_symbol.png", "chiba_kensho.png", "saitama_kensho.png", "akita_kensho.png", "niigata_symbol.png", "hokkaido_dousho.png"]
}
);
}
