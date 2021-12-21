/** @format */
export declare enum AlertInterval {
    None = "None",
    OneMinute = "OneMinute",
    FiveMinutes = "FiveMinutes",
    TenMinutes = "TenMinutes",
    ThirtyMinutes = "ThirtyMinutes"
}
export declare enum AlertConditionType {
    NewErrorGroupsCount = "NewErrorGroupsCount",
    ReoccurredErrorGroupsCount = "ReoccurredErrorGroupsCount",
    ErrorInstanceCount = "ErrorInstanceCount",
    ErrorInstancesPerGroupCount = "ErrorInstancesPerGroupCount",
    LoadTimeAverage = "LoadTimeAverage",
    FirstContentfulPaintAverage = "FirstContentfulPaintAverage",
    LargestContentfulPaintAverage = "LargestContentfulPaintAverage",
    FirstInputDelayAverage = "FirstInputDelayAverage",
    CumulativeLayoutShiftAverage = "CumulativeLayoutShiftAverage"
}
export declare enum AlertActionType {
    User = "User"
}
export declare enum AlertActionSettingType {
    UserId = "UserId"
}
export declare enum AlertTargetType {
    Applications = "Applications"
}
export declare enum AlertFilterType {
    ErrorMessage = "ErrorMessage",
    Tags = "Tags",
    Version = "Version",
    EventUri = "EventUri",
    EventCountry = "EventCountry",
    EventPlatform = "EventPlatform"
}
export declare enum AlertComparator {
    Equals = "Equals",
    Contains = "Contains"
}
