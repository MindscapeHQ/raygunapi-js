/** @format */

export enum AlertInterval {
  None = "None",
  OneMinute = "OneMinute",
  FiveMinutes = "FiveMinutes",
  TenMinutes = "TenMinutes",
  ThirtyMinutes = "ThirtyMinutes",
}

export enum AlertConditionType {
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

export enum AlertActionType {
  User = "User",
}

export enum AlertActionSettingType {
  UserId = "UserId",
}

export enum AlertTargetType {
  Applications = "Applications",
}

export enum AlertFilterType {
  ErrorMessage = "ErrorMessage",
  Tags = "Tags",
  Version = "Version",
  EventUri = "EventUri",
  EventCountry = "EventCountry",
  EventPlatform = "EventPlatform",
  Deployment = "Deployment",
}

export enum AlertComparator {
  Equals = "Equals",
  Contains = "Contains",
}
