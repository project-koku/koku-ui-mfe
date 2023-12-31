/* eslint-disable no-console */
import IntlProvider from '@redhat-cloud-services/frontend-components-translations/Provider';
import { getLocale } from 'components/i18n';
import React from 'react';
import { Provider } from 'react-redux';
import { OptimizationsLink } from 'routes/optimizations/optimizationsLink';
import { mfeStore } from 'store';

// eslint-disable-next-line no-restricted-imports
import messages from '../../locales/data.json';

export interface OptimizationsBadgeOwnProps {
  groupBy?: string;
  groupByValue?: string;
  linkPath?: string;
  linkState?: any;
}

type OptimizationsBadgeProps = OptimizationsBadgeOwnProps;

const MfeOptimizationsBadge: React.FC<OptimizationsBadgeProps> = ({
  groupBy,
  groupByValue,
  linkPath,
  linkState,
}: OptimizationsBadgeOwnProps) => {
  const locale = getLocale();

  return (
    <IntlProvider defaultLocale="en" locale={locale} messages={messages[locale]} onError={console.log}>
      <Provider store={mfeStore as any}>
        <OptimizationsLink groupBy={groupBy} groupByValue={groupByValue} linkState={linkState} linkPath={linkPath} />
      </Provider>
    </IntlProvider>
  );
};

export default MfeOptimizationsBadge;
