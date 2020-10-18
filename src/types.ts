import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface FlowhookQuery extends DataQuery {
  queryText?: string;
  flowhook: string;
}

export const defaultQuery: Partial<FlowhookQuery> = {
  flowhook: 'none',
};

export interface FlowhookDataSourceOptions extends DataSourceJsonData {
  flowhook?: string;
  brokerUrl?: string;
  brokerUsername?: string;
  brokerPassword?: string;
}

export interface FlowhookSecureJsonData {
  username?: string;
  password?: string;
  
}
