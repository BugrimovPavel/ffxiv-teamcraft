import { DataModel } from '../../core/database/storage/data-model';
import { CraftworksObject } from './craftworks-object';

export class WorkshopStatusData extends DataModel {

  objects: CraftworksObject[];

  popularity: number;

  predictedPopularity: number;

  start: number;

  lock: boolean;

  updated: number;

  lastUpdatedBy: string;

  constructor() {
    super();
  }
}
