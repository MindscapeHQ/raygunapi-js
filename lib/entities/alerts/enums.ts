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
  InteractionNextPaintAverage = "InteractionNextPaintAverage",
  LoadTimeP75 = "LoadTimeP75",
  FirstContentfulPaintP75 = "FirstContentfulPaintP75",
  LargestContentfulPaintP75 = "LargestContentfulPaintP75",
  FirstInputDelayP75 = "FirstInputDelayP75",
  CumulativeLayoutShiftP75 = "CumulativeLayoutShiftP75",
  InteractionNextPaintP75 = "InteractionNextPaintP75"
}

export enum AlertActionType {
  User = "User",
  Integration = "Integration",
}

export enum AlertActionSettingType {
  UserId = "UserId",
  IntegrationId = "IntegrationId",
  SlackChannelId = "SlackChannelId",
  MicrosoftTeamsChannelId = "MicrosoftTeamsChannelId",
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
  DoesNotEqual = "DoesNotEqual",
  DoesNotContain = "DoesNotContain"
}
