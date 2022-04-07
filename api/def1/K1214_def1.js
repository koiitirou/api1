export default function handler(req, res) {
  res.status(200).json(
{
  "tab_code": "1",
  "tab_jp": "観測値",
  "cat01_code": "K1214",
  "cat01_jp": "K1214_救急出場件数（転院搬送）",
  "area_code": "13000",
  "area_jp": "東京都",
  "time_code": "2007100000",
  "time_jp": "2007年度",
  "unit": "件",
  "value": "36667",
  "annotation": null,
  "jiscode": "13",
  "td_name": "東京都",
  "td_et": "Tokyo",
  "td_sq": "s13",
  "short_name": "東京",
  "value_max": "36667",
  "value_min": "2409",
  "value_all_max": "36667",
  "value_all_min": "2316",
  "allPro": "7.97",
  "areaPro": "100",
  "mean": "9794",
  "median": "6569",
  "mean_dif": "26873",
  "median_dif": "30098",
  "rank": "1",
  "logo_url": "tokyo_symbol.png",
  "time4": "2007",
  "last_dif": "780",
  "last_pro": "2.17",
  "title": "救急出場件数（転院搬送）",
  "title_full": "救急出場件数（転院搬送）",
  "title_link": "救急出場件数（転院搬送）",
  "title_txt": "救急出場件数（転院搬送）",
  "unit2": "件",
  "additional1": "割合",
  "additionalUnit1": "%",
  "footer1": "平均 9,794 件<br>全国 460,300 件",
  "sum1": "全国では460,300件で、平均は9,794件です。",
  "metainfo1": null,
  "rank_id": "1",
  "time_list1": [
    {
      "value": 2006
    },
    {
      "value": 2007
    }
  ],
  "time_min1": "2006",
  "time_max1": "2007",
  "rank123_pre": ["東京都", "北海道", "大阪府", "福井県", "山梨県", "鳥取県"],
  "rank123_val": [36667, 27770, 27192, 2655, 2514, 2409],
  "rank123_img": ["tokyo_symbol.png", "hokkaido_dousho.png", "osaka_fusho.png", "fukui_kensho.png", "yamanashi_kensho.png", "tottori_kensho.png"]
}
);
}
