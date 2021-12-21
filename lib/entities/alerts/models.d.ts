/** @format */
import { AlertActionSettingType, AlertActionType, AlertComparator, AlertConditionType, AlertFilterType, AlertInterval, AlertTargetType } from "./enums";
export declare type IActionSetting = {
    type: AlertActionSettingType;
    value: string;
};
export declare type IAlertAction = {
    type: AlertActionType;
    actionSettings: IActionSetting[];
};
export declare type IAlertTarget = {
    type: AlertTargetType;
    value: string;
};
export declare type IAlertFilter = {
    type: AlertFilterType;
    comparator: AlertComparator;
    value: string;
};
export declare type IAlertCondition = {
    type: AlertConditionType;
    interval: AlertInterval;
    threshold: number;
    filters: IAlertFilter[];
};
/**
 * Represents an Alert object.
 */
export declare type IAlert = {
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
export declare type IAlertSummary = {
    identifier: string;
    name: string;
    isSubscribed: boolean;
};
/**
 * Represents the payload required to create an alert.
 */
export declare type ICreateAlertPayload = Omit<IAlert, "identifier" | "planIdentifier" | "hiddenApplicationCount" | "customSubjectLine">;
/**
 * Represents the payload required to update an alert.
 */
export declare type IUpdateAlertPayload = Omit<IAlert, "identifier" | "planIdentifier" | "hiddenApplicationCount" | "customSubjectLine">;
