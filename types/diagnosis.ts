// 診断結果タイプ
export type DiagnosisType =
  | "めんどくさがり現実派タイプ"
  | "コスパ重視で少し動けるタイプ"
  | "支出インパクト大きめタイプ"
  | "ライトに始めるタイプ";

// 診断結果タイプのID（クエリパラメータ用）
export type DiagnosisTypeId =
  | "lazy"
  | "cost-effective"
  | "high-impact"
  | "light";

// カテゴリページのパス
export type CategoryPage = "poi-katsu" | "credit-card" | "investment";

// 診断結果タイプの情報
export interface DiagnosisTypeInfo {
  id: DiagnosisTypeId;
  label: DiagnosisType;
  page: CategoryPage;
}

// 診断結果タイプのマッピング
export const diagnosisTypes: Record<DiagnosisType, DiagnosisTypeInfo> = {
  めんどくさがり現実派タイプ: {
    id: "lazy",
    label: "めんどくさがり現実派タイプ",
    page: "credit-card",
  },
  コスパ重視で少し動けるタイプ: {
    id: "cost-effective",
    label: "コスパ重視で少し動けるタイプ",
    page: "poi-katsu",
  },
  支出インパクト大きめタイプ: {
    id: "high-impact",
    label: "支出インパクト大きめタイプ",
    page: "credit-card",
  },
  ライトに始めるタイプ: {
    id: "light",
    label: "ライトに始めるタイプ",
    page: "poi-katsu",
  },
};

// IDから診断結果タイプを取得
export function getDiagnosisTypeFromId(
  id: string | string[] | undefined
): DiagnosisType | null {
  if (!id || Array.isArray(id)) return null;
  const typeEntry = Object.values(diagnosisTypes).find(
    (type) => type.id === id
  );
  return typeEntry ? typeEntry.label : null;
}

// 診断結果タイプからIDを取得
export function getDiagnosisTypeId(type: DiagnosisType): DiagnosisTypeId {
  return diagnosisTypes[type].id;
}
