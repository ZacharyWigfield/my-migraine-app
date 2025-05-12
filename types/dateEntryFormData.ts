export type DateEntryFormData = {
    date: Date;
    flareup: boolean;
    severity: string;
    diet: string[];
    exerciseIntensity: string;
    exerciseHours: string;
    screentime: string;
    weather: string[];
    stressLevel: string;
    caffeine: boolean;
    alcohol: boolean;
    tobacco: boolean;
    sleep: string;
    notes: string;
  };

  export type NormalizedDateEntry = {
    date: Date;
    flareup: boolean;
    severity: number;
    diet: string[];
    exerciseIntensity: string;
    exerciseHours: number;
    screentime: number;
    weather: string[];
    stressLevel: string;
    caffeine: boolean;
    alcohol: boolean;
    tobacco: boolean;
    sleep: number;
    notes: string;
  };

  function normalizeFormData(data: DateEntryFormData): NormalizedDateEntry {
    return {
      ...data,
      severity: parseInt(data.severity, 10),
      exerciseHours: parseInt(data.exerciseHours, 10),
      screentime: parseInt(data.screentime, 10),
      sleep: parseInt(data.sleep, 10),
    };
  }