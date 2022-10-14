/** @format **/

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
  LoadTimeP75 = "LoadTimeP75",
  FirstContentfulPaintP75 = "FirstContentfulPaintP75",
  LargestContentfulPaintP75 = "LargestContentfulPaintP75",
  FirstInputDelayP75 = "FirstInputDelayP75",
  CumulativeLayoutShiftP75 = "CumulativeLayoutShiftP75",
  LoadTimeP50 = "LoadTimeP50",
  FirstContentfulPaintP50 = "FirstContentfulPaintP50",
  LargestContentfulPaintP50 = "LargestContentfulPaintP50",
  FirstInputDelayP50 = "FirstInputDelayP50",
  CumulativeLayoutShiftP50 = "CumulativeLayoutShiftP50",
  LoadTimeP90 = "LoadTimeP90",
  FirstContentfulPaintP90 = "FirstContentfulPaintP90",
  LargestContentfulPaintP90 = "LargestContentfulPaintP90",
  FirstInputDelayP90 = "FirstInputDelayP90",
  CumulativeLayoutShiftP90 = "CumulativeLayoutShiftP90",
  LoadTimeP99 = "LoadTimeP99",
  FirstContentfulPaintP99 = "FirstContentfulPaintP99",
  LargestContentfulPaintP99 = "LargestContentfulPaintP99",
  FirstInputDelayP99 = "FirstInputDelayP99",
  CumulativeLayoutShiftP99 = "CumulativeLayoutShiftP99",
}

export enum AlertActionType {
  User = "User",
  Integration = "Integration",
}

export enum AlertActionSettingType {
  UserId = "UserId",
  IntegrationId = "IntegrationId",
  SlackChannelId = "SlackChannelId"
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
