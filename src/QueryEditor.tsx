import { LegacyForms } from '@grafana/ui';

const { FormField } = LegacyForms;

import defaults from 'lodash/defaults';

import React, { ChangeEvent, PureComponent } from 'react';

import { QueryEditorProps } from '@grafana/data';
import { DataSource } from './DataSource';
import { defaultQuery, FlowhookDataSourceOptions, FlowhookQuery } from './types';

type Props = QueryEditorProps<DataSource, FlowhookQuery, FlowhookDataSourceOptions>;

export class QueryEditor extends PureComponent<Props> {
  onQueryTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, queryText: event.target.value });
  };

  onConstantChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query });
    // executes the query
    onRunQuery();
  };

  render() {
    const query = defaults(this.props.query, defaultQuery);
    const { queryText } = query;

    return (
      <div className="gf-form">
        <div className="gf-form">
          <FormField
            labelWidth={8}
            value={queryText || ''}
            onChange={this.onQueryTextChange}
            label="Query Text"
            tooltip="Not used yet"
          />
        </div>
      </div>
    );
  }
}
