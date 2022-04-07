export default function handler(req, res) {
  res.status(200).json(
{
  "tab_code": "1",
  "tab_jp": "観測値",
  "cat01_code": "I1602",
  "cat01_jp": "I1602_健康寿命（女）",
  "area_code": "23000",
  "area_jp": "愛知県",
  "time_code": "2016100000",
  "time_jp": "2016年度",
  "unit": "年",
  "value": "76.32",
  "annotation": null,
  "jiscode": "23",
  "td_name": "愛知県",
  "td_et": "Aichi",
  "td_sq": "s23",
  "short_name": "愛知",
  "value_max": "76.32",
  "value_min": "73.62",
  "value_all_max": "76.32",
  "value_all_min": "72.37",
  "allPro": "102.05",
  "areaPro": "100",
  "mean": "74.9",
  "median": "75.1",
  "mean_dif": "1.42",
  "median_dif": "1.22",
  "rank": "1",
  "logo_url": "aichi_kensho.png",
  "time4": "2016",
  "last_dif": "1.67",
  "last_pro": "2.24",
  "title": "健康寿命（女）",
  "title_full": "健康寿命（女）",
  "title_link": "健康寿命（女）",
  "title_txt": "健康寿命（女）",
  "unit2": "年",
  "additional1": "平均との差",
  "additionalUnit1": "年",
  "footer1": "平均 75 年",
  "sum1": "平均は75年です。",
  "metainfo1": null,
  "rank_id": "1",
  "time_list1": [
    {
      "value": 2010
    },
    {
      "value": 2013
    },
    {
      "value": 2016
    }
  ],
  "time_min1": "2010",
  "time_max1": "2016",
  "rank123_pre": ["愛知県", "三重県", "山梨県", "北海道", "広島県", "熊本県"],
  "rank123_val": [76.32, 76.3, 76.22, 73.77, 73.62, "NA"],
  "rank123_img": ["aichi_kensho.png", "mie_kensho.png", "yamanashi_kensho.png", "hokkaido_dousho.png", "hiroshima_kensho.png", "kumamoto_kensho.png"]
}
);
}
