/** @format */

import { AlertActionSettingType, AlertActionType, AlertComparator, AlertConditionType, AlertFilterType, AlertInterval, AlertTargetType } from "./enums";

export type IActionSetting = {
  type: AlertActionSettingType;
  value: string;
};

export type IAlertAction = {
  type: AlertActionType;
  actionSettings: IActionSetting[];
};

export type IAlertTarget = {
  type: AlertTargetType;
  value: string;
};

export type IAlertFilter = {
  type: AlertFilterType;
  comparator: AlertComparator;
  value: string;
};

export type IAlertCondition = {
  type: AlertConditionType;
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

/**
 * Represents the payload required to create an alert.
 */
export type ICreateAlertPayload = Omit<IAlert, "identifier" | "planIdentifier" | "hiddenApplicationCount" | "customSubjectLine">;

/**
 * Represents the payload required to update an alert.
 */
export type IUpdateAlertPayload = Omit<IAlert, "identifier" | "planIdentifier" | "hiddenApplicationCount" | "customSubjectLine">;
