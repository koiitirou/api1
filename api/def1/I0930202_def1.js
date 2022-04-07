export default function handler(req, res) {
  res.status(200).json(
{
  "tab_code": "1",
  "tab_jp": "観測値",
  "cat01_code": "I0930202",
  "cat01_jp": "I0930202_一般病院常勤医師数（100病床当たり）",
  "area_code": "13000",
  "area_jp": "東京都",
  "time_code": "2017100000",
  "time_jp": "2017年度",
  "unit": "人",
  "value": "17.5",
  "annotation": null,
  "jiscode": "13",
  "td_name": "東京都",
  "td_et": "Tokyo",
  "td_sq": "s13",
  "short_name": "東京",
  "value_max": "17.5",
  "value_min": "7.7",
  "value_all_max": "17.5",
  "value_all_min": "7.7",
  "allPro": "137.8",
  "areaPro": "100",
  "mean": "12",
  "median": "12.2",
  "mean_dif": "5.5",
  "median_dif": "5.3",
  "rank": "1",
  "logo_url": "tokyo_symbol.png",
  "time4": "2017",
  "last_dif": null,
  "last_pro": null,
  "title": "一般病院常勤医師数（100病床当たり）",
  "title_full": "一般病院常勤医師数（100病床当たり）",
  "title_link": "一般病院常勤医師数（100病床当たり）",
  "title_txt": "一般病院常勤医師数（100病床当たり）",
  "unit2": "人",
  "additional1": "平均との差",
  "additionalUnit1": "人",
  "footer1": "平均 12 人",
  "sum1": "平均は12人です。",
  "metainfo1": null,
  "rank_id": "1",
  "time_list1": [
    {
      "value": 2017
    }
  ],
  "time_min1": "2017",
  "time_max1": "2017",
  "rank123_pre": ["東京都", "神奈川県", "栃木県", "宮崎県", "鹿児島県", "山口県"],
  "rank123_val": [17.5, 17.2, 14.9, 8.9, 8.5, 7.7],
  "rank123_img": ["tokyo_symbol.png", "kanagawa_kensho.png", "tochigi_kensho.png", "miyazaki_kensho.png", "kagoshima_symbol.png", "yamaguchi_kensho.png"]
}
);
}
