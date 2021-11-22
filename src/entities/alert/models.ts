/** @format */

enum AlertInterval {
  None = "None",
  OneMinute = "OneMinute",
  FiveMinutes = "FiveMinutes",
  TenMinutes = "TenMinutes",
  ThirtyMinutes = "ThirtyMinutes",
}

enum ConditionType {
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

enum ActionType {
  User = "User",
}

enum TargetType {
  Applications = "Applications",
}

enum FilterType {
  ErrorMessage = "ErrorMessage",
  Tags = "Tags",
  Version = "Version",
  EventUri = "EventUri",
  EventCountry = "EventCountry",
  EventPlatform = "EventPlatform",
}

enum Comparator {
  Equals = "Equals",
  Contains = "Contains",
}

type IActionSetting = {
  type: ActionType;
  value: string;
};

type IAlertAction = {
  type: ActionType;
  actionSettings: IActionSetting[];
};

type IAlertTarget = {
  type: TargetType;
  value: string;
};

type IAlertFilter = {
  type: FilterType;
  comparator: Comparator;
  value: string;
};

type IAlertCondition = {
  type: ConditionType;
  interval: AlertInterval;
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
