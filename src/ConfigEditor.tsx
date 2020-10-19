import React, { ChangeEvent, PureComponent } from 'react';
import { LegacyForms } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { FlowhookDataSourceOptions } from './types';

const { SecretFormField, FormField } = LegacyForms;

interface Props extends DataSourcePluginOptionsEditorProps<FlowhookDataSourceOptions> {}

interface State {}

export class ConfigEditor extends PureComponent<Props, State> {
  onFlowhookChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      flowhook: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };
  onBrokerUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      brokerUrl: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      brokerUsername: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onResetUsername = () => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      secureJsonFields: {
        ...options.secureJsonFields,
        username: false,
      },
      secureJsonData: {
        ...options.secureJsonData,
        username: '',
      },
    });
  };

  // Secure field (only sent to the backend)
  onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      brokerPassword: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onResetPassword = () => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      secureJsonFields: {
        ...options.secureJsonFields,
        password: false,
      },
      secureJsonData: {
        ...options.secureJsonData,
        password: '',
      },
    });
  };

  render() {
    const { options } = this.props;
    const { jsonData, secureJsonFields } = options;

    return (
      <div className="gf-form-group">
        <div className="gf-form">
          <FormField
            label="Flowhook"
            labelWidth={6}
            inputWidth={20}
            onChange={this.onFlowhookChange}
            value={jsonData.flowhook || ''}
            placeholder="json field returned to frontend"
          />
        </div>
        <div className="gf-form">
          <FormField
            label="BrokerURL"
            labelWidth={6}
            inputWidth={20}
            onChange={this.onBrokerUrlChange}
            value={jsonData.brokerUrl || 'wss://flowhook.herokuapp.com/ws'}
            placeholder="wss://flowhook.herokuapp.com/ws"
          />
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <FormField
              value={jsonData.brokerUsername || 'guest'}
              label="Username"
              placeholder="broker user"
              labelWidth={6}
              inputWidth={20}
              onReset={this.onResetUsername}
              onChange={this.onUsernameChange}
            />
          </div>
          <div className="gf-form">
            <SecretFormField
              isConfigured={(secureJsonFields && secureJsonFields.password) as boolean}
              value={jsonData.brokerPassword || 'guest'}
              label="Password"
              placeholder="broker pass"
              labelWidth={6}
              inputWidth={20}
              onReset={this.onResetPassword}
              onChange={this.onPasswordChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
