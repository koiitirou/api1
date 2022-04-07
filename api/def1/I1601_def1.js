export default function handler(req, res) {
  res.status(200).json(
{
  "tab_code": "1",
  "tab_jp": "観測値",
  "cat01_code": "I1601",
  "cat01_jp": "I1601_健康寿命（男）",
  "area_code": "19000",
  "area_jp": "山梨県",
  "time_code": "2016100000",
  "time_jp": "2016年度",
  "unit": "年",
  "value": "73.21",
  "annotation": null,
  "jiscode": "19",
  "td_name": "山梨県",
  "td_et": "Yamanashi",
  "td_sq": "s19",
  "short_name": "山梨",
  "value_max": "73.21",
  "value_min": "71.21",
  "value_all_max": "73.21",
  "value_all_min": "68.95",
  "allPro": "101.48",
  "areaPro": "100",
  "mean": "72",
  "median": "72",
  "mean_dif": "1.21",
  "median_dif": "1.21",
  "rank": "1",
  "logo_url": "yamanashi_kensho.png",
  "time4": "2016",
  "last_dif": "0.69",
  "last_pro": "0.95",
  "title": "健康寿命（男）",
  "title_full": "健康寿命（男）",
  "title_link": "健康寿命（男）",
  "title_txt": "健康寿命（男）",
  "unit2": "年",
  "additional1": "平均との差",
  "additionalUnit1": "年",
  "footer1": "平均 72 年",
  "sum1": "平均は72年です。",
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
  "rank123_pre": ["山梨県", "埼玉県", "愛知県", "愛媛県", "秋田県", "熊本県"],
  "rank123_val": [73.21, 73.1, 73.06, 71.33, 71.21, "NA"],
  "rank123_img": ["yamanashi_kensho.png", "saitama_kensho.png", "aichi_kensho.png", "ehime_kenki.png", "akita_kensho.png", "kumamoto_kensho.png"]
}
);
}
