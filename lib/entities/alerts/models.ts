/** @format */

export enum IAlertInterval {
  None = "None",
  OneMinute = "OneMinute",
  FiveMinutes = "FiveMinutes",
  TenMinutes = "TenMinutes",
  ThirtyMinutes = "ThirtyMinutes",
}

export enum IAlertConditionType {
  NewErrorGroupsCount = "NewErrorGroupsCount",
  ReoccurredErrorGroupsCount = "ReoccurredErrorGroupsCount",
  ErrorInstanceCount = "ErrorInstanceCount",
  ErrorInstancesPerGroupCount = "ErrorInstancesPerGroupCount",
  LoadTimeAverage = "LoadTimeAverage",
  FirstContentfulPaintAverage = "FirstContentfulPaintAverage",
  LargestContentfulPaintAverage = "LargestContentfulPaintAverage",
  FirstInputDelayAverage = "FirstInputDelayAverage",
  CumulativeLayoutShiftAverage = "CumulativeLayoutShiftAverage",
}

export enum IAlertActionType {
  User = "User",
}

export enum IAlertTargetType {
  Applications = "Applications",
}

export enum IAlertFilterType {
  ErrorMessage = "ErrorMessage",
  Tags = "Tags",
  Version = "Version",
  EventUri = "EventUri",
  EventCountry = "EventCountry",
  EventPlatform = "EventPlatform",
}

export enum IAlertComparator {
  Equals = "Equals",
  Contains = "Contains",
}

export type IActionSetting = {
  type: IAlertActionType;
  value: string;
};

export type IAlertAction = {
  type: IAlertActionType;
  actionSettings: IActionSetting[];
};

export type IAlertTarget = {
  type: IAlertTargetType;
  value: string;
};

export type IAlertFilter = {
  type: IAlertFilterType;
  comparator: IAlertComparator;
  value: string;
};

export type IAlertCondition = {
  type: IAlertConditionType;
  interval: IAlertInterval;
  threshold: number;
  filters: IAlertFilter[];
};

/**
 * Represents an Alert object.
 */
export type IAlert = {
  identifier: string;
  planIdentifier: string;
  name: string;

  conditions: IAlertCondition[];
  targets: IAlertTarget[];
  actions: IAlertAction[];

  hiddenApplicationCount: number;
  customSubjectLine: string;
};

/**
 * Represents an Alert Summary object.
 */
export type IAlertSummary = {
  identifier: string;
  name: string;
  isSubscribed: boolean;
};
