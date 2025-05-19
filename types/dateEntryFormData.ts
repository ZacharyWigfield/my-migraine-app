export type DateEntryFormData = {
  flareup: string;
  severity: string;
  diet: string[];
  exerciseIntensity: string;
  exerciseHours: number;
  screentime: number;
  sleep: number;
  weather: string[];
  stressLevel: string;
  caffeine: string;
  alcohol: string;
  tobacco: string;
  notes: string;
};

export type NormalizedDateEntry = {
  flareup: string;
  severity: number;
  diet: string[];
  exerciseIntensity: string;
  exerciseHours: number;
  screentime: number;
  sleep: number;
  weather: string[];
  stressLevel: string;
  caffeine: string;
  alcohol: string;
  tobacco: string;
  notes: string;
};

function normalizeFormData(data: DateEntryFormData): NormalizedDateEntry {
  return {
    ...data,
    severity: parseInt(data.severity, 10),
  };
}