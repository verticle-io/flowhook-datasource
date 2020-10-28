import { DataSourcePlugin } from '@grafana/data';
import { DataSource } from './DataSource';
import { ConfigEditor } from './ConfigEditor';
import { QueryEditor } from './QueryEditor';

export const plugin = new DataSourcePlugin(DataSource).setConfigEditor(ConfigEditor).setQueryEditor(QueryEditor);
