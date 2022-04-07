export default function handler(req, res) {
  res.status(200).json(
{
  "tab_code": "1",
  "tab_jp": "観測値",
  "cat01_code": "A05309",
  "cat01_jp": "A05309_転出率",
  "area_code": "13000",
  "area_jp": "東京都",
  "time_code": "2019100000",
  "time_jp": "2019年度",
  "unit": "％",
  "value": "2.76",
  "annotation": null,
  "jiscode": "13",
  "td_name": "東京都",
  "td_et": "Tokyo",
  "td_sq": "s13",
  "short_name": "東京",
  "value_max": "2.76",
  "value_min": "1.11",
  "value_all_max": "2.77",
  "value_all_min": "1.05",
  "allPro": "135.29",
  "areaPro": "99.42",
  "mean": "1.92",
  "median": "1.92",
  "mean_dif": "0.84",
  "median_dif": "0.84",
  "rank": "1",
  "logo_url": "tokyo_symbol.png",
  "time4": "2019",
  "last_dif": "0.01",
  "last_pro": "0.36",
  "title": "転出率",
  "title_full": "転出率",
  "title_link": "転出率",
  "title_txt": "転出率",
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
  "rank123_pre": ["東京都", "千葉県", "京都府", "富山県", "新潟県", "北海道"],
  "rank123_val": [2.76, 2.49, 2.37, 1.53, 1.34, 1.11],
  "rank123_img": ["tokyo_symbol.png", "chiba_kensho.png", "kyoto_fusho.png", "toyama_kensho.png", "niigata_symbol.png", "hokkaido_dousho.png"]
}
);
}
