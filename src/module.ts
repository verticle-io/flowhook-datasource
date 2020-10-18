import { DataSourcePlugin } from '@grafana/data';
import { DataSource } from './DataSource';
import { ConfigEditor } from './ConfigEditor';
import { QueryEditor } from './QueryEditor';
//import { MyQuery, FlowhookDataSourceOptions } from './types';

export const plugin = new DataSourcePlugin(DataSource).setConfigEditor(ConfigEditor).setQueryEditor(QueryEditor);
