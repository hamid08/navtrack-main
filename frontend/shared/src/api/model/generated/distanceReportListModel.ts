/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Navtrack.Api, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
 * OpenAPI spec version: 1.0
 */
import type { DistanceReportItemModel } from './distanceReportItemModel';

export interface DistanceReportListModel {
  items: DistanceReportItemModel[];
  readonly totalDistance: number;
  readonly totalDuration: number;
}
